# jsx
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


