/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/four/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/four/index.js":
/*!***************************!*\
  !*** ./src/four/index.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./react */ "./src/four/react/index.js");
/* harmony import */ var _react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./react-dom */ "./src/four/react-dom/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var App =
/*#__PURE__*/
function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this));
    _this.state = {
      num: 0
    };
    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      for (var i = 0; i < 100; i++) {
        this.setState(function (prevState) {
          console.log(prevState.num);
          return {
            num: prevState.num + 1
          };
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      console.log('update');
    }
  }, {
    key: "render",
    value: function render() {
      return _react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
        className: "App"
      }, _react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h1", null, this.state.num));
    }
  }]);

  return App;
}(_react__WEBPACK_IMPORTED_MODULE_0__["default"].Component);

_react_dom__WEBPACK_IMPORTED_MODULE_1__["default"].render(_react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(App, null), document.getElementById('root'));

/***/ }),

/***/ "./src/four/react-dom/diff.js":
/*!************************************!*\
  !*** ./src/four/react-dom/diff.js ***!
  \************************************/
/*! exports provided: diff, renderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "diff", function() { return diff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderComponent", function() { return renderComponent; });
/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../react */ "./src/four/react/index.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/four/react-dom/dom.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }



/**
 * @param {HTMLElement} dom 真实DOM
 * @param {vnode} vnode 虚拟DOM
 * @param {HTMLElement} container 容器
 * @returns {HTMLElement} 更新后的DOM
 */

function diff(dom, vnode, container) {
  var ret = diffNode(dom, vnode);

  if (container && ret.parentNode !== container) {
    container.appendChild(ret);
  }

  return ret;
}

function diffNode(dom, vnode) {
  var out = dom;
  if (vnode === undefined || vnode === null || typeof vnode === 'boolean') vnode = '';
  if (typeof vnode === 'number') vnode = String(vnode); // diff text node

  if (typeof vnode === 'string') {
    // 如果当前的DOM就是文本节点，则直接更新内容
    if (dom && dom.nodeType === 3) {
      // nodeType: https://developer.mozilla.org/zh-CN/docs/Web/API/Node/nodeType
      if (dom.textContent !== vnode) {
        dom.textContent = vnode;
      } // 如果DOM不是文本节点，则新建一个文本节点DOM，并移除掉原来的

    } else {
      out = document.createTextNode(vnode);

      if (dom && dom.parentNode) {
        dom.parentNode.replaceChild(out, dom);
      }
    }

    return out;
  }

  if (typeof vnode.tag === 'function') {
    return diffComponent(dom, vnode);
  } //


  if (!dom || !isSameNodeType(dom, vnode)) {
    out = document.createElement(vnode.tag);

    if (dom) {
      _toConsumableArray(dom.childNodes).map(out.appendChild); // 将原来的子节点移到新节点下


      if (dom.parentNode) {
        dom.parentNode.replaceChild(out, dom); // 移除掉原来的DOM对象
      }
    }
  }

  if (vnode.children && vnode.children.length > 0 || out.childNodes && out.childNodes.length > 0) {
    diffChildren(out, vnode.children);
  }

  diffAttributes(out, vnode);
  return out;
}

function diffChildren(dom, vchildren) {
  var domChildren = dom.childNodes;
  var children = [];
  var keyed = {};

  if (domChildren.length > 0) {
    for (var i = 0; i < domChildren.length; i++) {
      var child = domChildren[i];
      var key = child.key;

      if (key) {
        keyed[key] = child;
      } else {
        children.push(child);
      }
    }
  }

  if (vchildren && vchildren.length > 0) {
    var min = 0;
    var childrenLen = children.length;

    for (var _i = 0; _i < vchildren.length; _i++) {
      var vchild = vchildren[_i];
      var _key = vchild.key;

      var _child = void 0;

      if (_key) {
        if (keyed[_key]) {
          _child = keyed[_key];
          keyed[_key] = undefined;
        }
      } else if (min < childrenLen) {
        for (var j = min; j < childrenLen; j++) {
          var c = children[j];

          if (c && isSameNodeType(c, vchild)) {
            _child = c;
            children[j] = undefined;
            if (j === childrenLen - 1) childrenLen--;
            if (j === min) min++;
            break;
          }
        }
      }

      _child = diffNode(_child, vchild);
      var f = domChildren[_i];

      if (_child && _child !== dom && _child !== f) {
        if (!f) {
          dom.appendChild(_child);
        } else if (_child === f.nextSibling) {
          removeNode(f);
        } else {
          dom.insertBefore(_child, f);
        }
      }
    }
  }
}

function diffComponent(dom, vnode) {
  var c = dom && dom._component;
  var oldDom = dom; // 如果组件类型没有变化，则重新set props

  if (c && c.constructor === vnode.tag) {
    setComponentProps(c, vnode.attrs);
    dom = c.base; // 如果组件类型变化，则移除掉原来组件，并渲染新的组件
  } else {
    if (c) {
      unmountComponent(c);
      oldDom = null;
    }

    c = createComponent(vnode.tag, vnode.attrs);
    setComponentProps(c, vnode.attrs);
    dom = c.base;

    if (oldDom && dom !== oldDom) {
      oldDom._component = null;
      removeNode(oldDom);
    }
  }

  return dom;
}

function setComponentProps(component, props) {
  if (!component.base) {
    if (component.componentWillMount) component.componentWillMount();
  } else if (component.componentWillReceiveProps) {
    component.componentWillReceiveProps(props);
  }

  component.props = props;
  renderComponent(component);
}

function renderComponent(component) {
  var base;
  var renderer = component.render();

  if (component.base && component.componentWillUpdate) {
    component.componentWillUpdate();
  }

  base = diffNode(component.base, renderer);

  if (component.base) {
    if (component.componentDidUpdate) component.componentDidUpdate();
  } else if (component.componentDidMount) {
    component.componentDidMount();
  }

  component.base = base;
  base._component = component;
}

function createComponent(component, props) {
  var inst;

  if (component.prototype && component.prototype.render) {
    /* eslint-disable-next-line new-cap */
    inst = new component(props);
  } else {
    inst = new _react__WEBPACK_IMPORTED_MODULE_0__["Component"](props);
    inst.constructor = component;

    inst.render = function () {
      return this.constructor(props);
    };
  }

  return inst;
}

function unmountComponent(component) {
  if (component.componentWillUnmount) component.componentWillUnmount();
  removeNode(component.base);
}

function isSameNodeType(dom, vnode) {
  if (typeof vnode === 'string' || typeof vnode === 'number') {
    return dom.nodeType === 3;
  }

  if (typeof vnode.tag === 'string') {
    return dom.nodeName.toLowerCase() === vnode.tag.toLowerCase();
  }

  return dom && dom._component && dom._component.constructor === vnode.tag;
}

function diffAttributes(dom, vnode) {
  var old = {}; // 当前DOM的属性

  var attrs = vnode.attrs; // 虚拟DOM的属性

  for (var i = 0; i < dom.attributes.length; i++) {
    var attr = dom.attributes[i];
    old[attr.name] = attr.value;
  } // 如果原来的属性不在新的属性当中，则将其移除掉（属性值设为undefined）


  for (var name in old) {
    if (!(name in attrs)) {
      Object(_dom__WEBPACK_IMPORTED_MODULE_1__["setAttribute"])(dom, name, undefined);
    }
  } // 更新新的属性值


  for (var _name in attrs) {
    if (old[_name] !== attrs[_name]) {
      Object(_dom__WEBPACK_IMPORTED_MODULE_1__["setAttribute"])(dom, _name, attrs[_name]);
    }
  }
}

function removeNode(dom) {
  if (dom && dom.parentNode) {
    dom.parentNode.removeChild(dom);
  }
}

/***/ }),

/***/ "./src/four/react-dom/dom.js":
/*!***********************************!*\
  !*** ./src/four/react-dom/dom.js ***!
  \***********************************/
/*! exports provided: setAttribute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAttribute", function() { return setAttribute; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function setAttribute(dom, name, value) {
  // 如果属性名是class，则改回className
  if (name === 'className') name = 'class'; // 如果属性名是onXXX，则是一个时间监听方法

  if (/on\w+/.test(name)) {
    name = name.toLowerCase();
    dom[name] = value || ''; // 如果属性名是style，则更新style对象
  } else if (name === 'style') {
    if (!value || typeof value === 'string') {
      dom.style.cssText = value || '';
    } else if (value && _typeof(value) === 'object') {
      for (var _name in value) {
        // 可以通过style={ width: 20 }这种形式来设置样式，可以省略掉单位px
        dom.style[_name] = typeof value[_name] === 'number' ? value[_name] + 'px' : value[_name];
      }
    } // 普通属性则直接更新属性

  } else {
    if (name in dom) {
      dom[name] = value || '';
    }

    if (value) {
      dom.setAttribute(name, value);
    } else {
      dom.removeAttribute(name, value);
    }
  }
}

/***/ }),

/***/ "./src/four/react-dom/index.js":
/*!*************************************!*\
  !*** ./src/four/react-dom/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ "./src/four/react-dom/render.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  render: _render__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ }),

/***/ "./src/four/react-dom/render.js":
/*!**************************************!*\
  !*** ./src/four/react-dom/render.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _diff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./diff */ "./src/four/react-dom/diff.js");


function render(vnode, container, dom) {
  return Object(_diff__WEBPACK_IMPORTED_MODULE_0__["diff"])(dom, vnode, container);
}

/* harmony default export */ __webpack_exports__["default"] = (render);

/***/ }),

/***/ "./src/four/react/component.js":
/*!*************************************!*\
  !*** ./src/four/react/component.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _set_state_queue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./set-state-queue */ "./src/four/react/set-state-queue.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Component =
/*#__PURE__*/
function () {
  function Component() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Component);

    this.isReactComponent = true;
    this.state = {};
    this.props = props;
  }

  _createClass(Component, [{
    key: "setState",
    value: function setState(stateChange) {
      Object(_set_state_queue__WEBPACK_IMPORTED_MODULE_0__["enqueueSetState"])(stateChange, this);
    }
  }]);

  return Component;
}();

/* harmony default export */ __webpack_exports__["default"] = (Component);

/***/ }),

/***/ "./src/four/react/create-element.js":
/*!******************************************!*\
  !*** ./src/four/react/create-element.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function createElement(tag, attrs) {
  attrs = attrs || {};

  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  return {
    tag: tag,
    attrs: attrs,
    children: children,
    key: attrs.key || null
  };
}

/* harmony default export */ __webpack_exports__["default"] = (createElement);

/***/ }),

/***/ "./src/four/react/index.js":
/*!*********************************!*\
  !*** ./src/four/react/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component.js */ "./src/four/react/component.js");
/* harmony import */ var _create_element_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-element.js */ "./src/four/react/create-element.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  Component: _component_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  createElement: _create_element_js__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./src/four/react/set-state-queue.js":
/*!*******************************************!*\
  !*** ./src/four/react/set-state-queue.js ***!
  \*******************************************/
/*! exports provided: enqueueSetState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enqueueSetState", function() { return enqueueSetState; });
/* harmony import */ var _react_dom_diff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../react-dom/diff */ "./src/four/react-dom/diff.js");

var setStateQueue = [];
var renderQueue = [];

function defer(fn) {
  return Promise.resolve().then(fn);
}

function enqueueSetState(stateChange, component) {
  if (setStateQueue.length === 0) {
    defer(flush);
  }

  setStateQueue.push({
    stateChange: stateChange,
    component: component
  });

  if (!renderQueue.some(function (item) {
    return item === component;
  })) {
    renderQueue.push(component);
  }
}

function flush() {
  var item, component;
  /* eslint-disable-next-line no-cond-assign */

  while (item = setStateQueue.shift()) {
    var _item = item,
        stateChange = _item.stateChange,
        _component = _item.component; // 如果没有prevState，则将当前的state作为初始的prevState

    if (!_component.prevState) {
      _component.prevState = Object.assign({}, _component.state);
    } // 如果stateChange是一个方法，也就是setState的第二种形式


    if (typeof stateChange === 'function') {
      Object.assign(_component.state, stateChange(_component.prevState, _component.props));
    } else {
      // 如果stateChange是一个对象，则直接合并到setState中
      Object.assign(_component.state, stateChange);
    }

    _component.prevState = _component.state;
  }
  /* eslint-disable-next-line no-cond-assign */


  while (component = renderQueue.shift()) {
    Object(_react_dom_diff__WEBPACK_IMPORTED_MODULE_0__["renderComponent"])(component);
  }
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZvdXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZvdXIvcmVhY3QtZG9tL2RpZmYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZvdXIvcmVhY3QtZG9tL2RvbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZm91ci9yZWFjdC1kb20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZvdXIvcmVhY3QtZG9tL3JlbmRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZm91ci9yZWFjdC9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZvdXIvcmVhY3QvY3JlYXRlLWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZvdXIvcmVhY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZvdXIvcmVhY3Qvc2V0LXN0YXRlLXF1ZXVlLmpzIl0sIm5hbWVzIjpbIkFwcCIsInN0YXRlIiwibnVtIiwiaSIsInNldFN0YXRlIiwicHJldlN0YXRlIiwiY29uc29sZSIsImxvZyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZGlmZiIsImRvbSIsInZub2RlIiwiY29udGFpbmVyIiwicmV0IiwiZGlmZk5vZGUiLCJwYXJlbnROb2RlIiwiYXBwZW5kQ2hpbGQiLCJvdXQiLCJ1bmRlZmluZWQiLCJTdHJpbmciLCJub2RlVHlwZSIsInRleHRDb250ZW50IiwiY3JlYXRlVGV4dE5vZGUiLCJyZXBsYWNlQ2hpbGQiLCJ0YWciLCJkaWZmQ29tcG9uZW50IiwiaXNTYW1lTm9kZVR5cGUiLCJjcmVhdGVFbGVtZW50IiwiY2hpbGROb2RlcyIsIm1hcCIsImNoaWxkcmVuIiwibGVuZ3RoIiwiZGlmZkNoaWxkcmVuIiwiZGlmZkF0dHJpYnV0ZXMiLCJ2Y2hpbGRyZW4iLCJkb21DaGlsZHJlbiIsImtleWVkIiwiY2hpbGQiLCJrZXkiLCJwdXNoIiwibWluIiwiY2hpbGRyZW5MZW4iLCJ2Y2hpbGQiLCJqIiwiYyIsImYiLCJuZXh0U2libGluZyIsInJlbW92ZU5vZGUiLCJpbnNlcnRCZWZvcmUiLCJfY29tcG9uZW50Iiwib2xkRG9tIiwiY29uc3RydWN0b3IiLCJzZXRDb21wb25lbnRQcm9wcyIsImF0dHJzIiwiYmFzZSIsInVubW91bnRDb21wb25lbnQiLCJjcmVhdGVDb21wb25lbnQiLCJjb21wb25lbnQiLCJwcm9wcyIsImNvbXBvbmVudFdpbGxNb3VudCIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJyZW5kZXJDb21wb25lbnQiLCJyZW5kZXJlciIsImNvbXBvbmVudFdpbGxVcGRhdGUiLCJjb21wb25lbnREaWRVcGRhdGUiLCJjb21wb25lbnREaWRNb3VudCIsImluc3QiLCJwcm90b3R5cGUiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsIm5vZGVOYW1lIiwidG9Mb3dlckNhc2UiLCJvbGQiLCJhdHRyaWJ1dGVzIiwiYXR0ciIsIm5hbWUiLCJ2YWx1ZSIsInNldEF0dHJpYnV0ZSIsInJlbW92ZUNoaWxkIiwidGVzdCIsInN0eWxlIiwiY3NzVGV4dCIsInJlbW92ZUF0dHJpYnV0ZSIsImlzUmVhY3RDb21wb25lbnQiLCJzdGF0ZUNoYW5nZSIsImVucXVldWVTZXRTdGF0ZSIsInNldFN0YXRlUXVldWUiLCJyZW5kZXJRdWV1ZSIsImRlZmVyIiwiZm4iLCJQcm9taXNlIiwicmVzb2x2ZSIsInRoZW4iLCJmbHVzaCIsInNvbWUiLCJpdGVtIiwic2hpZnQiLCJPYmplY3QiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FB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Q3pELFNBQVYsR0FBc0J5RCxVQUFTLENBQUM3RCxLQUFoQztBQUVIO0FBRUQ7OztBQUNBLFNBQU82RCxTQUFTLEdBQUc2QixXQUFXLENBQUNTLEtBQVosRUFBbkIsRUFBd0M7QUFDcENsQywyRUFBZSxDQUFDSixTQUFELENBQWY7QUFDSDtBQUVKLEMiLCJmaWxlIjoiZm91ci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2ZvdXIvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAnLi9yZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICcuL3JlYWN0LWRvbSdcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG51bTogMFxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocHJldlN0YXRlLm51bSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgbnVtOiBwcmV2U3RhdGUubnVtICsgMVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3VwZGF0ZScpXG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT0nQXBwJz5cbiAgICAgICAgICAgIDxoMT57dGhpcy5zdGF0ZS5udW19PC9oMT5cbiAgICAgICAgPC9kaXY+KTtcbiAgICB9XG59XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgICA8QXBwIC8+LFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jylcbik7IiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vcmVhY3QnXG5pbXBvcnQgeyBzZXRBdHRyaWJ1dGUgfSBmcm9tICcuL2RvbSdcblxuLyoqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBkb20g55yf5a6eRE9NXG4gKiBAcGFyYW0ge3Zub2RlfSB2bm9kZSDomZrmi59ET01cbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbnRhaW5lciDlrrnlmahcbiAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0g5pu05paw5ZCO55qERE9NXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaWZmKGRvbSwgdm5vZGUsIGNvbnRhaW5lcikge1xuXG4gICAgY29uc3QgcmV0ID0gZGlmZk5vZGUoZG9tLCB2bm9kZSk7XG5cbiAgICBpZiAoY29udGFpbmVyICYmIHJldC5wYXJlbnROb2RlICE9PSBjb250YWluZXIpIHtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJldCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldDtcblxufVxuXG5mdW5jdGlvbiBkaWZmTm9kZShkb20sIHZub2RlKSB7XG5cbiAgICBsZXQgb3V0ID0gZG9tO1xuXG4gICAgaWYgKHZub2RlID09PSB1bmRlZmluZWQgfHwgdm5vZGUgPT09IG51bGwgfHwgdHlwZW9mIHZub2RlID09PSAnYm9vbGVhbicpIHZub2RlID0gJyc7XG5cbiAgICBpZiAodHlwZW9mIHZub2RlID09PSAnbnVtYmVyJykgdm5vZGUgPSBTdHJpbmcodm5vZGUpO1xuXG4gICAgLy8gZGlmZiB0ZXh0IG5vZGVcbiAgICBpZiAodHlwZW9mIHZub2RlID09PSAnc3RyaW5nJykge1xuXG4gICAgICAgIC8vIOWmguaenOW9k+WJjeeahERPTeWwseaYr+aWh+acrOiKgueCue+8jOWImeebtOaOpeabtOaWsOWGheWuuVxuICAgICAgICBpZiAoZG9tICYmIGRvbS5ub2RlVHlwZSA9PT0gMykgeyAgICAvLyBub2RlVHlwZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvemgtQ04vZG9jcy9XZWIvQVBJL05vZGUvbm9kZVR5cGVcbiAgICAgICAgICAgIGlmIChkb20udGV4dENvbnRlbnQgIT09IHZub2RlKSB7XG4gICAgICAgICAgICAgICAgZG9tLnRleHRDb250ZW50ID0gdm5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDlpoLmnpxET03kuI3mmK/mlofmnKzoioLngrnvvIzliJnmlrDlu7rkuIDkuKrmlofmnKzoioLngrlET03vvIzlubbnp7vpmaTmjonljp/mnaXnmoRcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG91dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZub2RlKTtcbiAgICAgICAgICAgIGlmIChkb20gJiYgZG9tLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgICAgICBkb20ucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQob3V0LCBkb20pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHZub2RlLnRhZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gZGlmZkNvbXBvbmVudChkb20sIHZub2RlKTtcbiAgICB9XG5cbiAgICAvL1xuICAgIGlmICghZG9tIHx8ICFpc1NhbWVOb2RlVHlwZShkb20sIHZub2RlKSkge1xuICAgICAgICBvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHZub2RlLnRhZyk7XG5cbiAgICAgICAgaWYgKGRvbSkge1xuICAgICAgICAgICAgWy4uLmRvbS5jaGlsZE5vZGVzXS5tYXAob3V0LmFwcGVuZENoaWxkKTsgICAgLy8g5bCG5Y6f5p2l55qE5a2Q6IqC54K556e75Yiw5paw6IqC54K55LiLXG5cbiAgICAgICAgICAgIGlmIChkb20ucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgICAgIGRvbS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChvdXQsIGRvbSk7ICAgIC8vIOenu+mZpOaOieWOn+adpeeahERPTeWvueixoVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZub2RlLmNoaWxkcmVuICYmIHZub2RlLmNoaWxkcmVuLmxlbmd0aCA+IDAgfHwgKG91dC5jaGlsZE5vZGVzICYmIG91dC5jaGlsZE5vZGVzLmxlbmd0aCA+IDApKSB7XG4gICAgICAgIGRpZmZDaGlsZHJlbihvdXQsIHZub2RlLmNoaWxkcmVuKTtcbiAgICB9XG5cbiAgICBkaWZmQXR0cmlidXRlcyhvdXQsIHZub2RlKTtcblxuICAgIHJldHVybiBvdXQ7XG5cbn1cblxuZnVuY3Rpb24gZGlmZkNoaWxkcmVuKGRvbSwgdmNoaWxkcmVuKSB7XG5cbiAgICBjb25zdCBkb21DaGlsZHJlbiA9IGRvbS5jaGlsZE5vZGVzO1xuICAgIGNvbnN0IGNoaWxkcmVuID0gW107XG5cbiAgICBjb25zdCBrZXllZCA9IHt9O1xuXG4gICAgaWYgKGRvbUNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkb21DaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY2hpbGQgPSBkb21DaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGNoaWxkLmtleTtcbiAgICAgICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICAgICAgICBrZXllZFtrZXldID0gY2hpbGQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNoaWxkcmVuLnB1c2goY2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZjaGlsZHJlbiAmJiB2Y2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuXG4gICAgICAgIGxldCBtaW4gPSAwO1xuICAgICAgICBsZXQgY2hpbGRyZW5MZW4gPSBjaGlsZHJlbi5sZW5ndGg7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2Y2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICAgICAgY29uc3QgdmNoaWxkID0gdmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gdmNoaWxkLmtleTtcbiAgICAgICAgICAgIGxldCBjaGlsZDtcblxuICAgICAgICAgICAgaWYgKGtleSkge1xuXG4gICAgICAgICAgICAgICAgaWYgKGtleWVkW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQgPSBrZXllZFtrZXldO1xuICAgICAgICAgICAgICAgICAgICBrZXllZFtrZXldID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBlbHNlIGlmIChtaW4gPCBjaGlsZHJlbkxlbikge1xuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IG1pbjsgaiA8IGNoaWxkcmVuTGVuOyBqKyspIHtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjID0gY2hpbGRyZW5bal07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGMgJiYgaXNTYW1lTm9kZVR5cGUoYywgdmNoaWxkKSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZCA9IGM7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbltqXSA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGogPT09IGNoaWxkcmVuTGVuIC0gMSkgY2hpbGRyZW5MZW4tLTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChqID09PSBtaW4pIG1pbisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNoaWxkID0gZGlmZk5vZGUoY2hpbGQsIHZjaGlsZCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGYgPSBkb21DaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGlmIChjaGlsZCAmJiBjaGlsZCAhPT0gZG9tICYmIGNoaWxkICE9PSBmKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFmKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvbS5hcHBlbmRDaGlsZChjaGlsZCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjaGlsZCA9PT0gZi5uZXh0U2libGluZykge1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVOb2RlKGYpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRvbS5pbnNlcnRCZWZvcmUoY2hpbGQsIGYpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfVxuXG59XG5cbmZ1bmN0aW9uIGRpZmZDb21wb25lbnQoZG9tLCB2bm9kZSkge1xuXG4gICAgbGV0IGMgPSBkb20gJiYgZG9tLl9jb21wb25lbnQ7XG4gICAgbGV0IG9sZERvbSA9IGRvbTtcblxuICAgIC8vIOWmguaenOe7hOS7tuexu+Wei+ayoeacieWPmOWMlu+8jOWImemHjeaWsHNldCBwcm9wc1xuICAgIGlmIChjICYmIGMuY29uc3RydWN0b3IgPT09IHZub2RlLnRhZykge1xuICAgICAgICBzZXRDb21wb25lbnRQcm9wcyhjLCB2bm9kZS5hdHRycyk7XG4gICAgICAgIGRvbSA9IGMuYmFzZTtcbiAgICAgICAgLy8g5aaC5p6c57uE5Lu257G75Z6L5Y+Y5YyW77yM5YiZ56e76Zmk5o6J5Y6f5p2l57uE5Lu277yM5bm25riy5p+T5paw55qE57uE5Lu2XG4gICAgfSBlbHNlIHtcblxuICAgICAgICBpZiAoYykge1xuICAgICAgICAgICAgdW5tb3VudENvbXBvbmVudChjKTtcbiAgICAgICAgICAgIG9sZERvbSA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjID0gY3JlYXRlQ29tcG9uZW50KHZub2RlLnRhZywgdm5vZGUuYXR0cnMpO1xuXG4gICAgICAgIHNldENvbXBvbmVudFByb3BzKGMsIHZub2RlLmF0dHJzKTtcbiAgICAgICAgZG9tID0gYy5iYXNlO1xuXG4gICAgICAgIGlmIChvbGREb20gJiYgZG9tICE9PSBvbGREb20pIHtcbiAgICAgICAgICAgIG9sZERvbS5fY29tcG9uZW50ID0gbnVsbDtcbiAgICAgICAgICAgIHJlbW92ZU5vZGUob2xkRG9tKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIGRvbTtcblxufVxuXG5mdW5jdGlvbiBzZXRDb21wb25lbnRQcm9wcyhjb21wb25lbnQsIHByb3BzKSB7XG5cbiAgICBpZiAoIWNvbXBvbmVudC5iYXNlKSB7XG4gICAgICAgIGlmIChjb21wb25lbnQuY29tcG9uZW50V2lsbE1vdW50KSBjb21wb25lbnQuY29tcG9uZW50V2lsbE1vdW50KCk7XG4gICAgfSBlbHNlIGlmIChjb21wb25lbnQuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcykge1xuICAgICAgICBjb21wb25lbnQuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhwcm9wcyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50LnByb3BzID0gcHJvcHM7XG5cbiAgICByZW5kZXJDb21wb25lbnQoY29tcG9uZW50KTtcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQ29tcG9uZW50KGNvbXBvbmVudCkge1xuXG4gICAgbGV0IGJhc2U7XG5cbiAgICBjb25zdCByZW5kZXJlciA9IGNvbXBvbmVudC5yZW5kZXIoKTtcblxuICAgIGlmIChjb21wb25lbnQuYmFzZSAmJiBjb21wb25lbnQuY29tcG9uZW50V2lsbFVwZGF0ZSkge1xuICAgICAgICBjb21wb25lbnQuY29tcG9uZW50V2lsbFVwZGF0ZSgpO1xuICAgIH1cblxuICAgIGJhc2UgPSBkaWZmTm9kZShjb21wb25lbnQuYmFzZSwgcmVuZGVyZXIpO1xuXG4gICAgaWYgKGNvbXBvbmVudC5iYXNlKSB7XG4gICAgICAgIGlmIChjb21wb25lbnQuY29tcG9uZW50RGlkVXBkYXRlKSBjb21wb25lbnQuY29tcG9uZW50RGlkVXBkYXRlKCk7XG4gICAgfSBlbHNlIGlmIChjb21wb25lbnQuY29tcG9uZW50RGlkTW91bnQpIHtcbiAgICAgICAgY29tcG9uZW50LmNvbXBvbmVudERpZE1vdW50KCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50LmJhc2UgPSBiYXNlO1xuICAgIGJhc2UuX2NvbXBvbmVudCA9IGNvbXBvbmVudDtcblxufVxuXG5mdW5jdGlvbiBjcmVhdGVDb21wb25lbnQoY29tcG9uZW50LCBwcm9wcykge1xuXG4gICAgbGV0IGluc3Q7XG5cbiAgICBpZiAoY29tcG9uZW50LnByb3RvdHlwZSAmJiBjb21wb25lbnQucHJvdG90eXBlLnJlbmRlcikge1xuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbmV3LWNhcCAqL1xuICAgICAgICBpbnN0ID0gbmV3IGNvbXBvbmVudChwcm9wcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaW5zdCA9IG5ldyBDb21wb25lbnQocHJvcHMpO1xuICAgICAgICBpbnN0LmNvbnN0cnVjdG9yID0gY29tcG9uZW50O1xuICAgICAgICBpbnN0LnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yKHByb3BzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpbnN0O1xuXG59XG5cbmZ1bmN0aW9uIHVubW91bnRDb21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgaWYgKGNvbXBvbmVudC5jb21wb25lbnRXaWxsVW5tb3VudCkgY29tcG9uZW50LmNvbXBvbmVudFdpbGxVbm1vdW50KCk7XG4gICAgcmVtb3ZlTm9kZShjb21wb25lbnQuYmFzZSk7XG59XG5cbmZ1bmN0aW9uIGlzU2FtZU5vZGVUeXBlKGRvbSwgdm5vZGUpIHtcbiAgICBpZiAodHlwZW9mIHZub2RlID09PSAnc3RyaW5nJyB8fCB0eXBlb2Ygdm5vZGUgPT09ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybiBkb20ubm9kZVR5cGUgPT09IDM7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB2bm9kZS50YWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBkb20ubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gdm5vZGUudGFnLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRvbSAmJiBkb20uX2NvbXBvbmVudCAmJiBkb20uX2NvbXBvbmVudC5jb25zdHJ1Y3RvciA9PT0gdm5vZGUudGFnO1xufVxuXG5mdW5jdGlvbiBkaWZmQXR0cmlidXRlcyhkb20sIHZub2RlKSB7XG5cbiAgICBjb25zdCBvbGQgPSB7fTsgICAgLy8g5b2T5YmNRE9N55qE5bGe5oCnXG4gICAgY29uc3QgYXR0cnMgPSB2bm9kZS5hdHRyczsgICAgIC8vIOiZmuaLn0RPTeeahOWxnuaAp1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkb20uYXR0cmlidXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBhdHRyID0gZG9tLmF0dHJpYnV0ZXNbaV07XG4gICAgICAgIG9sZFthdHRyLm5hbWVdID0gYXR0ci52YWx1ZTtcbiAgICB9XG5cbiAgICAvLyDlpoLmnpzljp/mnaXnmoTlsZ7mgKfkuI3lnKjmlrDnmoTlsZ7mgKflvZPkuK3vvIzliJnlsIblhbbnp7vpmaTmjonvvIjlsZ7mgKflgLzorr7kuLp1bmRlZmluZWTvvIlcbiAgICBmb3IgKGNvbnN0IG5hbWUgaW4gb2xkKSB7XG5cbiAgICAgICAgaWYgKCEobmFtZSBpbiBhdHRycykpIHtcbiAgICAgICAgICAgIHNldEF0dHJpYnV0ZShkb20sIG5hbWUsIHVuZGVmaW5lZCk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8vIOabtOaWsOaWsOeahOWxnuaAp+WAvFxuICAgIGZvciAoY29uc3QgbmFtZSBpbiBhdHRycykge1xuXG4gICAgICAgIGlmIChvbGRbbmFtZV0gIT09IGF0dHJzW25hbWVdKSB7XG4gICAgICAgICAgICBzZXRBdHRyaWJ1dGUoZG9tLCBuYW1lLCBhdHRyc1tuYW1lXSk7XG4gICAgICAgIH1cblxuICAgIH1cblxufVxuXG5mdW5jdGlvbiByZW1vdmVOb2RlKGRvbSkge1xuXG4gICAgaWYgKGRvbSAmJiBkb20ucGFyZW50Tm9kZSkge1xuICAgICAgICBkb20ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkb20pO1xuICAgIH1cblxufSIsImV4cG9ydCBmdW5jdGlvbiBzZXRBdHRyaWJ1dGUoZG9tLCBuYW1lLCB2YWx1ZSkge1xuICAgIC8vIOWmguaenOWxnuaAp+WQjeaYr2NsYXNz77yM5YiZ5pS55ZueY2xhc3NOYW1lXG4gICAgaWYgKG5hbWUgPT09ICdjbGFzc05hbWUnKSBuYW1lID0gJ2NsYXNzJztcblxuICAgIC8vIOWmguaenOWxnuaAp+WQjeaYr29uWFhY77yM5YiZ5piv5LiA5Liq5pe26Ze055uR5ZCs5pa55rOVXG4gICAgaWYgKC9vblxcdysvLnRlc3QobmFtZSkpIHtcbiAgICAgICAgbmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgZG9tW25hbWVdID0gdmFsdWUgfHwgJyc7XG4gICAgICAgIC8vIOWmguaenOWxnuaAp+WQjeaYr3N0eWxl77yM5YiZ5pu05pawc3R5bGXlr7nosaFcbiAgICB9IGVsc2UgaWYgKG5hbWUgPT09ICdzdHlsZScpIHtcbiAgICAgICAgaWYgKCF2YWx1ZSB8fCB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBkb20uc3R5bGUuY3NzVGV4dCA9IHZhbHVlIHx8ICcnO1xuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgbmFtZSBpbiB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIC8vIOWPr+S7pemAmui/h3N0eWxlPXsgd2lkdGg6IDIwIH3ov5nnp43lvaLlvI/mnaXorr7nva7moLflvI/vvIzlj6/ku6XnnIHnlaXmjonljZXkvY1weFxuICAgICAgICAgICAgICAgIGRvbS5zdHlsZVtuYW1lXSA9IHR5cGVvZiB2YWx1ZVtuYW1lXSA9PT0gJ251bWJlcicgPyB2YWx1ZVtuYW1lXSArICdweCcgOiB2YWx1ZVtuYW1lXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyDmma7pgJrlsZ7mgKfliJnnm7TmjqXmm7TmlrDlsZ7mgKdcbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAobmFtZSBpbiBkb20pIHtcbiAgICAgICAgICAgIGRvbVtuYW1lXSA9IHZhbHVlIHx8ICcnO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgZG9tLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkb20ucmVtb3ZlQXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgcmVuZGVyIGZyb20gJy4vcmVuZGVyJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcmVuZGVyXG59IiwiXG5pbXBvcnQgeyBkaWZmIH0gZnJvbSAnLi9kaWZmJ1xuXG5mdW5jdGlvbiByZW5kZXIodm5vZGUsIGNvbnRhaW5lciwgZG9tKSB7XG4gICAgcmV0dXJuIGRpZmYoZG9tLCB2bm9kZSwgY29udGFpbmVyKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyOyIsImltcG9ydCB7IGVucXVldWVTZXRTdGF0ZSB9IGZyb20gJy4vc2V0LXN0YXRlLXF1ZXVlJ1xuXG5jbGFzcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzID0ge30pIHtcbiAgICAgICAgdGhpcy5pc1JlYWN0Q29tcG9uZW50ID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge307XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICB9XG5cbiAgICBzZXRTdGF0ZShzdGF0ZUNoYW5nZSkge1xuICAgICAgICBlbnF1ZXVlU2V0U3RhdGUoc3RhdGVDaGFuZ2UsIHRoaXMpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50OyIsImZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodGFnLCBhdHRycywgLi4uY2hpbGRyZW4pIHtcblxuICAgIGF0dHJzID0gYXR0cnMgfHwge307XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0YWcsXG4gICAgICAgIGF0dHJzLFxuICAgICAgICBjaGlsZHJlbixcbiAgICAgICAga2V5OiBhdHRycy5rZXkgfHwgbnVsbFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRWxlbWVudDsiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50LmpzJ1xuaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnLi9jcmVhdGUtZWxlbWVudC5qcydcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIENvbXBvbmVudCxcbiAgICBjcmVhdGVFbGVtZW50XG59IiwiaW1wb3J0IHsgcmVuZGVyQ29tcG9uZW50IH0gZnJvbSAnLi4vcmVhY3QtZG9tL2RpZmYnXG5cbmNvbnN0IHNldFN0YXRlUXVldWUgPSBbXTtcbmNvbnN0IHJlbmRlclF1ZXVlID0gW107XG5cbmZ1bmN0aW9uIGRlZmVyKGZuKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZm4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZW5xdWV1ZVNldFN0YXRlKHN0YXRlQ2hhbmdlLCBjb21wb25lbnQpIHtcblxuICAgIGlmIChzZXRTdGF0ZVF1ZXVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBkZWZlcihmbHVzaCk7XG4gICAgfVxuICAgIHNldFN0YXRlUXVldWUucHVzaCh7XG4gICAgICAgIHN0YXRlQ2hhbmdlLFxuICAgICAgICBjb21wb25lbnRcbiAgICB9KTtcblxuICAgIGlmICghcmVuZGVyUXVldWUuc29tZShpdGVtID0+IGl0ZW0gPT09IGNvbXBvbmVudCkpIHtcbiAgICAgICAgcmVuZGVyUXVldWUucHVzaChjb21wb25lbnQpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgbGV0IGl0ZW0sIGNvbXBvbmVudDtcblxuICAgIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25kLWFzc2lnbiAqL1xuICAgIHdoaWxlIChpdGVtID0gc2V0U3RhdGVRdWV1ZS5zaGlmdCgpKSB7XG5cbiAgICAgICAgY29uc3QgeyBzdGF0ZUNoYW5nZSwgY29tcG9uZW50IH0gPSBpdGVtO1xuXG4gICAgICAgIC8vIOWmguaenOayoeaciXByZXZTdGF0Ze+8jOWImeWwhuW9k+WJjeeahHN0YXRl5L2c5Li65Yid5aeL55qEcHJldlN0YXRlXG4gICAgICAgIGlmICghY29tcG9uZW50LnByZXZTdGF0ZSkge1xuICAgICAgICAgICAgY29tcG9uZW50LnByZXZTdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIGNvbXBvbmVudC5zdGF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDlpoLmnpxzdGF0ZUNoYW5nZeaYr+S4gOS4quaWueazle+8jOS5n+WwseaYr3NldFN0YXRl55qE56ys5LqM56eN5b2i5byPXG4gICAgICAgIGlmICh0eXBlb2Ygc3RhdGVDaGFuZ2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oY29tcG9uZW50LnN0YXRlLCBzdGF0ZUNoYW5nZShjb21wb25lbnQucHJldlN0YXRlLCBjb21wb25lbnQucHJvcHMpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIOWmguaenHN0YXRlQ2hhbmdl5piv5LiA5Liq5a+56LGh77yM5YiZ55u05o6l5ZCI5bm25Yiwc2V0U3RhdGXkuK1cbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oY29tcG9uZW50LnN0YXRlLCBzdGF0ZUNoYW5nZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb21wb25lbnQucHJldlN0YXRlID0gY29tcG9uZW50LnN0YXRlO1xuXG4gICAgfVxuXG4gICAgLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbmQtYXNzaWduICovXG4gICAgd2hpbGUgKGNvbXBvbmVudCA9IHJlbmRlclF1ZXVlLnNoaWZ0KCkpIHtcbiAgICAgICAgcmVuZGVyQ29tcG9uZW50KGNvbXBvbmVudCk7XG4gICAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==