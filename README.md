# JSX和虚拟DOM
## jsx
`const title = <h1 className="title">Hello, world!</h1>;`
这段代码并不是合法的js代码，它是一种被称为jsx的语法扩展，通过它我们就可以很方便的在js代码中书写html片段。
本质上，jsx是语法糖，上面这段代码会被babel转换成如下代码
```
const title = React.createElement(
    'h1',
    { className: 'title' },
    'Hello, world!'
);
```

使用babel插件将jsx转换成js的babel插件。
```
npm i @babel/cli @babel/core @babel/preset-react -D
```

```
{
    "presets": [
        "@babel/preset-react"
    ]
}
```
在定义React组件或者书写React相关代码，不管代码中有没有用到React这个对象，都必须将其import进来，因为jsx转换成abstract dom tree的时候，需要 React.createElement.

## React.createElement和虚拟DOM
jsx片段会被转译成用React.createElement方法包裹的代码。
所以第一步，我们来实现这个React.createElement方法
从jsx转译结果来看，createElement方法的参数是这样：
```
createElement( tag, attrs, child1, child2, child3 );
```
第一个参数是DOM节点的标签名，它的值可能是div，h1，span等等
第二个参数是一个对象，里面包含了所有的属性，可能包含了className，id等等
从第三个参数开始，就是它的子节点

我们对createElement的实现非常简单，只需要返回一个对象来保存它的信息就行了。
```
function createElement( tag, attrs, ...children ) {
    return {
        tag,
        attrs,
        children
    }
}
```

将上文定义的createElement方法放到对象React中
```
const React = {
    createElement
}

const element = (
    <div>
        hello<span>world!</span>
    </div>
);
console.log( element );
```

## ReactDOM.render
```
ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('root')
);
```
经过转换，这段代码变成了这样
```
ReactDOM.render(
    React.createElement( 'h1', null, 'Hello, world!' ),
    document.getElementById('root')
);
```
所以render的第一个参数实际上接受的是createElement返回的对象，也就是虚拟DOM
而第二个参数则是挂载的目标DOM

总而言之，render方法的作用就是将虚拟DOM渲染成真实的DOM，下面是它的实现：
```
function render( vnode, container ) {
    
    // 当vnode为字符串时，渲染结果是一段文本
    if ( typeof vnode === 'string' ) {
        const textNode = document.createTextNode( vnode );
        return container.appendChild( textNode );
    }

    const dom = document.createElement( vnode.tag );

    if ( vnode.attrs ) {
        Object.keys( vnode.attrs ).forEach( key => {
            const value = vnode.attrs[ key ];
             setAttribute( dom, key, value );    // 设置属性
        } );
    }

    vnode.children.forEach( child => render( child, dom ) );    // 递归渲染子节点

    return container.appendChild( dom );    // 将渲染结果挂载到真正的DOM上
}
```
设置属性需要考虑一些特殊情况，我们单独将其拿出来作为一个方法setAttribute
```
function setAttribute( dom, name, value ) {
    // 如果属性名是className，则改回class
    if ( name === 'className' ) name = 'class';

    // 如果属性名是onXXX，则是一个事件监听方法
    if ( /on\w+/.test( name ) ) {
        name = name.toLowerCase();
        dom[ name ] = value || '';//例如document.body.onclick = function() { console.log( 'click' ); };
    // 如果属性名是style，则更新style对象
    } else if ( name === 'style' ) {
        if ( !value || typeof value === 'string' ) {
            dom.style.cssText = value || '';
        } else if ( value && typeof value === 'object' ) {
            for ( let name in value ) {
                // 可以通过style={ width: 20 }这种形式来设置样式，可以省略掉单位px
                dom.style[ name ] = typeof value[ name ] === 'number' ? value[ name ] + 'px' : value[ name ];
            }
        }
    // 普通属性则直接更新属性
    } else {
        if ( name in dom ) {
            dom[ name ] = value || '';
        }
        if ( value ) {
            dom.setAttribute( name, value );
        } else {
            dom.removeAttribute( name );
        }
    }
}
```
这里其实还有个小问题：当多次调用render函数时，不会清除原来的内容。所以我们将其附加到ReactDOM对象上时，先清除一下挂载目标DOM的内容：
```
const ReactDOM = {
    render: ( vnode, container ) => {
        container.innerHTML = '';
        return render( vnode, container );
    }
}
```

## 渲染和更新
到这里我们已经实现了React最为基础的功能了。
```
<div id="root"></div>

function tick() {
    const element = (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
      );
    ReactDOM.render(
        element,
        document.getElementById( 'root' )
    );
}

setInterval( tick, 1000 );
```

# 组件和生命周期
## 组件
React定义组件的方式可以分为两种：函数和类，函数定义可以看做是类定义的一种简单形式。

## createElement的变化
上面对React.createElement的实现暂时只用来渲染原生DOM元素，而对于组件，createElement得到的参数略有不同：
如果JSX片段中的某个元素是组件，那么createElement的第一个参数tag将会是一个方法，而不是字符串。

区分组件和原生DOM的工作，是babel插件帮我们做的

例如在处理`<Welcome name="Sara" />`时，createElement方法的第一个参数tag，实际上就是我们定义Welcome的方法：
```
function Welcome( props ) {
    return <h1>Hello, {props.name}</h1>;
}
```
不需要对createElement做修改，只需要知道如果渲染的是组件，tag的值将是一个函数

## 组件基类React.Component
通过类的方式定义组件，需要继承React.Component：
```
class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}
```
所以就需要先来实现React.Component这个类：
## Component
React.Component包含了一些预先定义好的变量和方法，我们来一步一步地实现它：
先定义一个Component类：`class Component {}`

### state & props
通过继承React.Component定义的组件有自己的私有状态state，可以通过this.state获取到。同时也能通过this.props来获取传入的数据。
所以在构造函数中，我们需要初始化state和props
```
// React.Component
class Component {
    constructor( props = {} ) {
        this.state = {};
        this.props = props;
    }
}
```

### setState
组件内部的state和渲染结果相关，当state改变时通常会触发渲染，为了让React知道我们改变了state，我们只能通过setState方法去修改数据。我们可以通过Object.assign来做一个简单的实现。
在每次更新state后，我们需要调用renderComponent方法来重新渲染组件，renderComponent方法的实现后下面会讲到。
```
import { renderComponent } from '../react-dom/render'
class Component {
    constructor( props = {} ) {
        // ...
    }

    setState( stateChange ) {
        // 将修改合并到state
        Object.assign( this.state, stateChange );
        renderComponent( this );
    }
}
```
你可能听说过React的setState是异步的，同时它有很多优化手段，这里我们暂时不去管它。

## render
需要在之前的render部分的代码里加一段用来渲染组件的代码：
```
function _render( vnode ) {

    // ...

    if ( typeof vnode.tag === 'function' ) {

        const component = createComponent( vnode.tag, vnode.attrs );

        setComponentProps( component, vnode.attrs );

        return component.base;
    }
    
    // ...
}
```

## 组件渲染和生命周期
在上面的方法中用到了createComponent和setComponentProps两个方法，组件的生命周期方法也会在这里面实现。

生命周期方法是一些在特殊时机执行的函数，例如componentDidMount方法会在组件挂载后执行

createComponent方法用来创建组件实例，并且将函数定义组件扩展为类定义组件进行处理，以免其他地方需要区分不同定义方式。

```
// 创建组件
function createComponent( component, props ) {
    let inst;
    // 如果是类定义组件，则直接返回实例
    if ( component.prototype && component.prototype.render ) {
        inst = new component( props );
    } else {
        // 如果是函数定义组件，则将其扩展为类定义组件
        inst = new Component( props );
        inst.constructor = component;
        inst.render = function() {
            return this.constructor( props );
        }
    }

    return inst;
}
```

setComponentProps方法用来更新props，在其中可以实现componentWillMount，componentWillReceiveProps两个生命周期方法
```
// set props
function setComponentProps( component, props ) {

    if ( !component.base ) {
        if ( component.componentWillMount ) component.componentWillMount();
    } else if ( component.componentWillReceiveProps ) {
        component.componentWillReceiveProps( props );
    }

    component.props = props;

    renderComponent( component );

}
```

renderComponent方法用来渲染组件，setState方法中会直接调用这个方法进行重新渲染，在这个方法里可以实现componentWillUpdate，componentDidUpdate，componentDidMount几个生命周期方法。
```
export function renderComponent( component ) {

    let base;

    const renderer = component.render();

    if ( component.base && component.componentWillUpdate ) {
        component.componentWillUpdate();
    }

    base = _render( renderer );

    if ( component.base ) {
        if ( component.componentDidUpdate ) component.componentDidUpdate();
    } else if ( component.componentDidMount ) {
        component.componentDidMount();
    }

    if ( component.base && component.base.parentNode ) {
        component.base.parentNode.replaceChild( base, component.base );
    }

    component.base = base;
    base._component = component;

}
```

# diff算法
## 对比策略
在前面实现了一个render方法，它能将虚拟DOM渲染成真正的DOM，现在就需要改进它，让它不要再傻乎乎地重新渲染整个DOM树，而是找出真正变化的部分。

这部分很多类React框架实现方式都不太一样，有的框架会选择保存上次渲染的虚拟DOM，然后对比虚拟DOM前后的变化，得到一系列更新的数据，然后再将这些更新应用到真正的DOM上。

但也有一些框架会选择直接对比虚拟DOM和真实DOM，这样就不需要额外保存上一次渲染的虚拟DOM，并且能够一边对比一边更新，这也是我们选择的方式。

不管是DOM还是虚拟DOM，它们的结构都是一棵树，完全对比两棵树变化的算法时间复杂度是`O(n^3)`，但是考虑到我们很少会跨层级移动DOM，所以我们只需要对比同一层级的变化。

在这里diff算法有两个原则：
- 对比当前真实的DOM和虚拟DOM，在对比过程中直接更新真实DOM
- 只对比同一层级的变化


## 实现
实现一个diff方法，它的作用是对比真实DOM和虚拟DOM，最后返回更新后的DOM
```
/**
 * @param {HTMLElement} dom 真实DOM
 * @param {vnode} vnode 虚拟DOM
 * @returns {HTMLElement} 更新后的DOM
 */
function diff( dom, vnode ) {
    // ...
}
```

虚拟DOM的结构可以分为三种，分别表示文本、原生DOM节点以及组件。
```
// 原生DOM节点的vnode
{
    tag: 'div',
    attrs: {
        className: 'container'
    },
    children: []
}

// 文本节点的vnode
"hello,world"

// 组件的vnode
{
    tag: ComponentConstrucotr,
    attrs: {
        className: 'container'
    },
    children: []
}
```

