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

## 对比文本节点
首先考虑最简单的文本节点，如果当前的DOM就是文本节点，则直接更新内容，否则就新建一个文本节点，并移除掉原来的DOM。
```
// diff text node
if ( typeof vnode === 'string' ) {

    // 如果当前的DOM就是文本节点，则直接更新内容
    if ( dom && dom.nodeType === 3 ) {    // nodeType: https://developer.mozilla.org/zh-CN/docs/Web/API/Node/nodeType
        if ( dom.textContent !== vnode ) {
            dom.textContent = vnode;
        }
    // 如果DOM不是文本节点，则新建一个文本节点DOM，并移除掉原来的
    } else {
        out = document.createTextNode( vnode );
        if ( dom && dom.parentNode ) {
            dom.parentNode.replaceChild( out, dom );
        }
    }

    return out;
}
```
文本节点十分简单，它没有属性，也没有子元素，所以这一步结束后就可以直接返回结果了。

## 对比非文本DOM节点
如果vnode表示的是一个非文本的DOM节点，那就要分两种情况了：
情况一：如果真实DOM不存在，表示此节点是新增的，或者新旧两个节点的类型不一样，那么就新建一个DOM元素，并将原来的子节点（如果有的话）移动到新建的DOM节点下。
```
if ( !dom || dom.nodeName.toLowerCase() !== vnode.tag.toLowerCase() ) {
    out = document.createElement( vnode.tag );

    if ( dom ) {
        [ ...dom.childNodes ].map( out.appendChild );    // 将原来的子节点移到新节点下

        if ( dom.parentNode ) {
            dom.parentNode.replaceChild( out, dom );    // 移除掉原来的DOM对象
        }
    }
}
```
情况二：如果真实DOM存在，并且和虚拟DOM是同一类型的，那我们暂时不需要做别的，只需要等待后面对比属性和对比子节点。

## 对比属性
实际上diff算法不仅仅是找出节点类型的变化，它还要找出来节点的属性以及事件监听的变化。我们将对比属性单独拿出来作为一个方法：
```
function diffAttributes( dom, vnode ) {

    const old = {};    // 当前DOM的属性
    const attrs = vnode.attrs;     // 虚拟DOM的属性

    for ( let i = 0 ; i < dom.attributes.length; i++ ) {
        const attr = dom.attributes[ i ];
        old[ attr.name ] = attr.value;
    }

    // 如果原来的属性不在新的属性当中，则将其移除掉（属性值设为undefined）
    for ( let name in old ) {

        if ( !( name in attrs ) ) {
            setAttribute( dom, name, undefined );
        }

    }

    // 更新新的属性值
    for ( let name in attrs ) {

        if ( old[ name ] !== attrs[ name ] ) {
            setAttribute( dom, name, attrs[ name ] );
        }

    }

}
```

## 对比子节点
节点本身对比完成了，接下来就是对比它的子节点。
这里会面临一个问题，前面我们实现的不同diff方法，都是明确知道哪一个真实DOM和虚拟DOM对比，但是子节点是一个数组，它们可能改变了顺序，或者数量有所变化，我们很难确定要和虚拟DOM对比的是哪一个。
为了简化逻辑，我们可以让用户提供一些线索：给节点设一个key值，重新渲染时对比key值相同的节点。
```
// diff方法
if ( vnode.children && vnode.children.length > 0 || ( out.childNodes && out.childNodes.length > 0 ) ) {
    diffChildren( out, vnode.children );
}

function diffChildren( dom, vchildren ) {

    const domChildren = dom.childNodes;
    const children = [];

    const keyed = {};

    // 将有key的节点和没有key的节点分开
    if ( domChildren.length > 0 ) {
        for ( let i = 0; i < domChildren.length; i++ ) {
            const child = domChildren[ i ];
            const key = child.key;
            if ( key ) {
                keyed[ key ] = child;
            } else {
                children.push( child );
            }
        }
    }

    if ( vchildren && vchildren.length > 0 ) {

        let min = 0;
        let childrenLen = children.length;

        for ( let i = 0; i < vchildren.length; i++ ) {

            const vchild = vchildren[ i ];
            const key = vchild.key;
            let child;

            // 如果有key，找到对应key值的节点
            if ( key ) {

                if ( keyed[ key ] ) {
                    child = keyed[ key ];
                    keyed[ key ] = undefined;
                }

            // 如果没有key，则优先找类型相同的节点
            } else if ( min < childrenLen ) {

                for ( let j = min; j < childrenLen; j++ ) {

                    let c = children[ j ];

                    if ( c && isSameNodeType( c, vchild ) ) {

                        child = c;
                        children[ j ] = undefined;

                        if ( j === childrenLen - 1 ) childrenLen--;
                        if ( j === min ) min++;
                        break;

                    }

                }

            }

            // 对比
            child = diff( child, vchild );

            // 更新DOM
            const f = domChildren[ i ];
            if ( child && child !== dom && child !== f ) {
                // 如果更新前的对应位置为空，说明此节点是新增的
                if ( !f ) {
                    dom.appendChild(child);
                // 如果更新后的节点和更新前对应位置的下一个节点一样，说明当前位置的节点被移除了
                } else if ( child === f.nextSibling ) {
                    removeNode( f );
               // 将更新后的节点移动到正确的位置
                } else {
                    // 注意insertBefore的用法，第一个参数是要插入的节点，第二个参数是已存在的节点
                    dom.insertBefore( child, f );
                }
            }

        }
    }

}
```

## 对比组件
如果vnode是一个组件，我们也单独拿出来作为一个方法:
```
function diffComponent( dom, vnode ) {

    let c = dom && dom._component;
    let oldDom = dom;

    // 如果组件类型没有变化，则重新set props
    if ( c && c.constructor === vnode.tag ) {
        setComponentProps( c, vnode.attrs );
        dom = c.base;
    // 如果组件类型变化，则移除掉原来组件，并渲染新的组件
    } else {

        if ( c ) {
            unmountComponent( c );
            oldDom = null;
        }

        c = createComponent( vnode.tag, vnode.attrs );

        setComponentProps( c, vnode.attrs );
        dom = c.base;

        if ( oldDom && dom !== oldDom ) {
            oldDom._component = null;
            removeNode( oldDom );
        }

    }

    return dom;

}
```
需要修改renderComponent方法的两个地方。
```
function renderComponent( component ) {
    
    // ...

    // base = base = _render( renderer );          // 将_render改成diff
    base = diff( component.base, renderer );

    // ...
   
   // 去掉这部分
   // if ( component.base && component.base.parentNode ) {
   //     component.base.parentNode.replaceChild( base, component.base );
   // }

    // ...
}
```
React实现远比这个要复杂，特别是在React 16之后还引入了Fiber架构，但是主要的思想是一致的。

# 异步的setState
实现diff算法可以说性能有了很大的提升，但是在别的地方仍然后很多改进的空间：每次调用setState后会立即调用renderComponent重新渲染组件，但现实情况是，我们可能会在极短的时间内多次调用setState。

React的解决方案是：
- 异步更新state，将短时间内的多个setState合并成一个
- 为了解决异步更新导致的问题，增加另一种形式的setState：接受一个函数作为参数，在函数中可以得到前一个状态并返回下一个状态

## 合并setState
之前对setState的实现：
```
setState( stateChange ) {
    Object.assign( this.state, stateChange );
    renderComponent( this );
}
```
这种实现，每次调用setState都会更新state并马上渲染一次。

### setState队列
为了合并setState，我们需要一个队列来保存每次setState的数据，然后在一段时间后，清空这个队列并渲染组件。

队列是一种数据结构，它的特点是“先进先出”，可以通过js数组的push和shift方法模拟
然后需要定义一个”入队“的方法，用来将更新添加进队列。
```
const queue = [];
function enqueueSetState( stateChange, component ) {
    queue.push( {
        stateChange,
        component
    } );
}
然后修改组件的setState方法，不再直接更新state和渲染组件，而是添加进更新队列。

setState( stateChange ) {
    enqueueSetState( stateChange, this );
}
```

### 清空队列
定义一个flush方法，它的作用就是清空队列
```
function flush() {
    let item;
    // 遍历
    while( item = setStateQueue.shift() ) {

        const { stateChange, component } = item;

        // 如果没有prevState，则将当前的state作为初始的prevState
        if ( !component.prevState ) {
            component.prevState = Object.assign( {}, component.state );
        }

        // 如果stateChange是一个方法，也就是setState的第二种形式
        if ( typeof stateChange === 'function' ) {
            Object.assign( component.state, stateChange( component.prevState, component.props ) );
        } else {
            // 如果stateChange是一个对象，则直接合并到setState中
            Object.assign( component.state, stateChange );
        }

        component.prevState = component.state;

    }
}
```
这只是实现了state的更新，还没有渲染组件。渲染组件不能在遍历队列时进行，因为同一个组件可能会多次添加到队列中，需要另一个队列保存所有组件，不同之处是，这个队列内不会有重复的组件。

在enqueueSetState时，就可以做这件事
```
const queue = [];
const renderQueue = [];
function enqueueSetState( stateChange, component ) {
    queue.push( {
        stateChange,
        component
    } );
    // 如果renderQueue里没有当前组件，则添加到队列中
    if ( !renderQueue.some( item => item === component ) ) {
        renderQueue.push( component );
    }
}
```
在flush方法中，还需要遍历renderQueue，来渲染每一个组件
```
function flush() {
    let item, component;
    while( item = queue.shift() ) {
        // ...
    }
    // 渲染每一个组件
    while( component = renderQueue.shift() ) {
        renderComponent( component );
    }

}
```

### 延迟执行
现在还有一件最重要的事情：什么时候执行flush方法。
需要合并一段时间内所有的setState，也就是在一段时间后才执行flush方法来清空队列，关键是这个“一段时间“怎么决定。

一个比较好的做法是利用js的事件队列机制。

先来看这样一段代码：
```
setTimeout( () => {
    console.log( 2 );
}, 0 );
Promise.resolve().then( () => console.log( 1 ) );
console.log( 3 );
```
可以打开浏览器的调试工具运行一下，它们打印的结果是：
```
3
1
2
```

利用事件队列(Event Loop)，让flush在所有同步任务后执行
```
function enqueueSetState( stateChange, component ) {
    // 如果queue的长度是0，也就是在上次flush执行之后第一次往队列里添加
    if ( queue.length === 0 ) {
        defer( flush );
    }
    queue.push( {
        stateChange,
        component
    } );
    if ( !renderQueue.some( item => item === component ) ) {
        renderQueue.push( component );
    }
}
```
定义defer方法
```
function defer( fn ) {
    return Promise.resolve().then( fn );
}
```
这样在一次“事件循环“中，最多只会执行一次flush了，在这个“事件循环”中，所有的setState都会被合并，并只渲染一次组件。

### 别的延迟执行方法
除了用`Promise.resolve().then( fn )`，也可以用上文中提到的`setTimeout( fn, 0 )`，setTimeout的时间也可以是别的值，例如16毫秒。

16毫秒的间隔在一秒内大概可以执行60次，也就是60帧，人眼每秒只能捕获60幅画面

另外也可以用requestAnimationFrame或者requestIdleCallback
```
function defer( fn ) {
    return requestAnimationFrame( fn );
}
```