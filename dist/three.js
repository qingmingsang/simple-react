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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/three/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/three/index.js":
/*!****************************!*\
  !*** ./src/three/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./react */ "./src/three/react/index.js");
/* harmony import */ var _react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./react-dom */ "./src/three/react-dom/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Counter =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Counter, _React$Component);

  function Counter(props) {
    var _this;

    _classCallCheck(this, Counter);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Counter).call(this, props));
    _this.state = {
      num: 0
    }; //debugger;

    return _this;
  }

  _createClass(Counter, [{
    key: "componentWillUpdate",
    value: function componentWillUpdate() {
      //debugger;
      console.log('update');
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      //debugger;
      console.log('mount');
    }
  }, {
    key: "onClick",
    value: function onClick() {
      //debugger;
      this.setState({
        num: this.state.num + 1
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      //debugger;
      return _react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", {
        onClick: function onClick() {
          return _this2.onClick();
        }
      }, _react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h1", null, "number: ", this.state.num), _react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("button", null, "add"));
    }
  }]);

  return Counter;
}(_react__WEBPACK_IMPORTED_MODULE_0__["default"].Component); //debugger;


_react_dom__WEBPACK_IMPORTED_MODULE_1__["default"].render(_react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(Counter, null), document.getElementById('root'));

/***/ }),

/***/ "./src/three/react-dom/diff.js":
/*!*************************************!*\
  !*** ./src/three/react-dom/diff.js ***!
  \*************************************/
/*! exports provided: diff, renderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "diff", function() { return diff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderComponent", function() { return renderComponent; });
/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../react */ "./src/three/react/index.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/three/react-dom/dom.js");
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
        keyedLen++;
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
  component.base = base;
  base._component = component;

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
    inst = new component(props);
  } else {
    inst = new Component(props);
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

/***/ "./src/three/react-dom/dom.js":
/*!************************************!*\
  !*** ./src/three/react-dom/dom.js ***!
  \************************************/
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
      node.style.cssText = value || '';
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

/***/ "./src/three/react-dom/index.js":
/*!**************************************!*\
  !*** ./src/three/react-dom/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ "./src/three/react-dom/render.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  render: _render__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ }),

/***/ "./src/three/react-dom/render.js":
/*!***************************************!*\
  !*** ./src/three/react-dom/render.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _diff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./diff */ "./src/three/react-dom/diff.js");


function _render(vnode, container) {
  if (vnode === undefined) return;

  if (vnode.isReactComponent) {
    var component = vnode;

    if (component._container) {
      if (component.componentWillUpdate) {
        component.componentWillUpdate();
      }
    } else if (component.componentWillMount) {
      component.componentWillMount();
    }

    component._container = container; // 保存父容器信息，用于更新

    vnode = component.render();
  }

  if (typeof vnode === 'string' || typeof vnode === 'number') {
    var textNode = document.createTextNode(vnode);
    return container.appendChild(textNode);
  }

  var dom = document.createElement(vnode.tag);

  if (vnode.attrs) {
    Object.keys(vnode.attrs).forEach(function (key) {
      var value = vnode.attrs[key];
      if (key === 'className') key = 'class'; // 如果是事件监听函数，则直接附加到dom上

      if (typeof value === 'function') {
        dom[key.toLowerCase()] = value;
      } else {
        dom.setAttribute(key, vnode.attrs[key]);
      }
    });
  }

  if (vnode.children) {
    vnode.children.forEach(function (child) {
      return _render(child, dom);
    });
  }

  return container.appendChild(dom);
}

function render(vnode, container, dom) {
  return Object(_diff__WEBPACK_IMPORTED_MODULE_0__["diff"])(dom, vnode, container);
}

/* harmony default export */ __webpack_exports__["default"] = (render);

/***/ }),

/***/ "./src/three/react/component.js":
/*!**************************************!*\
  !*** ./src/three/react/component.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _react_dom_diff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../react-dom/diff */ "./src/three/react-dom/diff.js");
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
      Object.assign(this.state, stateChange);
      Object(_react_dom_diff__WEBPACK_IMPORTED_MODULE_0__["renderComponent"])(this);
    }
  }]);

  return Component;
}();

/* harmony default export */ __webpack_exports__["default"] = (Component);

/***/ }),

/***/ "./src/three/react/create-element.js":
/*!*******************************************!*\
  !*** ./src/three/react/create-element.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component.js */ "./src/three/react/component.js");


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

/***/ "./src/three/react/index.js":
/*!**********************************!*\
  !*** ./src/three/react/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component.js */ "./src/three/react/component.js");
/* harmony import */ var _create_element_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-element.js */ "./src/three/react/create-element.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  Component: _component_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  createElement: _create_element_js__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RocmVlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy90aHJlZS9yZWFjdC1kb20vZGlmZi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGhyZWUvcmVhY3QtZG9tL2RvbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGhyZWUvcmVhY3QtZG9tL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy90aHJlZS9yZWFjdC1kb20vcmVuZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy90aHJlZS9yZWFjdC9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RocmVlL3JlYWN0L2NyZWF0ZS1lbGVtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy90aHJlZS9yZWFjdC9pbmRleC5qcyJdLCJuYW1lcyI6WyJDb3VudGVyIiwicHJvcHMiLCJzdGF0ZSIsIm51bSIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsIm9uQ2xpY2siLCJSZWFjdCIsIkNvbXBvbmVudCIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImRpZmYiLCJkb20iLCJ2bm9kZSIsImNvbnRhaW5lciIsInJldCIsImRpZmZOb2RlIiwicGFyZW50Tm9kZSIsImFwcGVuZENoaWxkIiwib3V0IiwidW5kZWZpbmVkIiwiU3RyaW5nIiwibm9kZVR5cGUiLCJ0ZXh0Q29udGVudCIsImNyZWF0ZVRleHROb2RlIiwicmVwbGFjZUNoaWxkIiwidGFnIiwiZGlmZkNvbXBvbmVudCIsImlzU2FtZU5vZGVUeXBlIiwiY3JlYXRlRWxlbWVudCIsImNoaWxkTm9kZXMiLCJtYXAiLCJjaGlsZHJlbiIsImxlbmd0aCIsImRpZmZDaGlsZHJlbiIsImRpZmZBdHRyaWJ1dGVzIiwidmNoaWxkcmVuIiwiZG9tQ2hpbGRyZW4iLCJrZXllZCIsImkiLCJjaGlsZCIsImtleSIsImtleWVkTGVuIiwicHVzaCIsIm1pbiIsImNoaWxkcmVuTGVuIiwidmNoaWxkIiwiaiIsImMiLCJmIiwibmV4dFNpYmxpbmciLCJyZW1vdmVOb2RlIiwiaW5zZXJ0QmVmb3JlIiwiX2NvbXBvbmVudCIsIm9sZERvbSIsImNvbnN0cnVjdG9yIiwic2V0Q29tcG9uZW50UHJvcHMiLCJhdHRycyIsImJhc2UiLCJ1bm1vdW50Q29tcG9uZW50IiwiY3JlYXRlQ29tcG9uZW50IiwiY29tcG9uZW50IiwiY29tcG9uZW50V2lsbE1vdW50IiwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsInJlbmRlckNvbXBvbmVudCIsInJlbmRlcmVyIiwiY29tcG9uZW50V2lsbFVwZGF0ZSIsImNvbXBvbmVudERpZFVwZGF0ZSIsImNvbXBvbmVudERpZE1vdW50IiwiaW5zdCIsInByb3RvdHlwZSIsImNvbXBvbmVudFdpbGxVbm1vdW50Iiwibm9kZU5hbWUiLCJ0b0xvd2VyQ2FzZSIsIm9sZCIsImF0dHJpYnV0ZXMiLCJhdHRyIiwibmFtZSIsInZhbHVlIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlQ2hpbGQiLCJ0ZXN0Iiwibm9kZSIsInN0eWxlIiwiY3NzVGV4dCIsInJlbW92ZUF0dHJpYnV0ZSIsIl9yZW5kZXIiLCJpc1JlYWN0Q29tcG9uZW50IiwiX2NvbnRhaW5lciIsInRleHROb2RlIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJzdGF0ZUNoYW5nZSIsImFzc2lnbiJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNB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QUhBLEdBREc7QUFFSCtCLFNBQUssRUFBTEEsS0FGRztBQUdIekIsWUFBUSxFQUFSQSxRQUhHO0FBSUhTLE9BQUcsRUFBRWdCLEtBQUssQ0FBQ2hCLEdBQU4sSUFBYTtBQUpmLEdBQVA7QUFNSDs7QUFFY1osNEVBQWYsRTs7Ozs7Ozs7Ozs7O0FDZkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVlO0FBQ1h2QixXQUFTLEVBQVRBLHFEQURXO0FBRVh1QixlQUFhLEVBQWJBLDBEQUFhQTtBQUZGLENBQWYsRSIsImZpbGUiOiJ0aHJlZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3RocmVlL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJy4vcmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAnLi9yZWFjdC1kb20nXG5cbmNsYXNzIENvdW50ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG51bTogMFxuICAgICAgICB9XG4gICAgICAgIC8vZGVidWdnZXI7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVwZGF0ZSgpIHtcbiAgICAgICAgLy9kZWJ1Z2dlcjtcbiAgICAgICAgY29uc29sZS5sb2coJ3VwZGF0ZScpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgLy9kZWJ1Z2dlcjtcbiAgICAgICAgY29uc29sZS5sb2coJ21vdW50Jyk7XG4gICAgfVxuXG4gICAgb25DbGljaygpIHtcbiAgICAgICAgLy9kZWJ1Z2dlcjtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG51bTogdGhpcy5zdGF0ZS5udW0gKyAxIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgLy9kZWJ1Z2dlcjtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gdGhpcy5vbkNsaWNrKCl9PlxuICAgICAgICAgICAgICAgIDxoMT5udW1iZXI6IHt0aGlzLnN0YXRlLm51bX08L2gxPlxuICAgICAgICAgICAgICAgIDxidXR0b24+YWRkPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG4vL2RlYnVnZ2VyO1xuUmVhY3RET00ucmVuZGVyKFxuICAgIDxDb3VudGVyIC8+LFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jylcbik7IiwiaW1wb3J0IHsgQ29tcG9uZXQgfSBmcm9tICcuLi9yZWFjdCdcbmltcG9ydCB7IHNldEF0dHJpYnV0ZSB9IGZyb20gJy4vZG9tJ1xuXG4vKipcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGRvbSDnnJ/lrp5ET01cbiAqIEBwYXJhbSB7dm5vZGV9IHZub2RlIOiZmuaLn0RPTVxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY29udGFpbmVyIOWuueWZqFxuICogQHJldHVybnMge0hUTUxFbGVtZW50fSDmm7TmlrDlkI7nmoRET01cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpZmYoZG9tLCB2bm9kZSwgY29udGFpbmVyKSB7XG5cbiAgICBjb25zdCByZXQgPSBkaWZmTm9kZShkb20sIHZub2RlKTtcblxuICAgIGlmIChjb250YWluZXIgJiYgcmV0LnBhcmVudE5vZGUgIT09IGNvbnRhaW5lcikge1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocmV0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV0O1xuXG59XG5cbmZ1bmN0aW9uIGRpZmZOb2RlKGRvbSwgdm5vZGUpIHtcblxuICAgIGxldCBvdXQgPSBkb207XG5cbiAgICBpZiAodm5vZGUgPT09IHVuZGVmaW5lZCB8fCB2bm9kZSA9PT0gbnVsbCB8fCB0eXBlb2Ygdm5vZGUgPT09ICdib29sZWFuJykgdm5vZGUgPSAnJztcblxuICAgIGlmICh0eXBlb2Ygdm5vZGUgPT09ICdudW1iZXInKSB2bm9kZSA9IFN0cmluZyh2bm9kZSk7XG5cbiAgICAvLyBkaWZmIHRleHQgbm9kZVxuICAgIGlmICh0eXBlb2Ygdm5vZGUgPT09ICdzdHJpbmcnKSB7XG5cbiAgICAgICAgLy8g5aaC5p6c5b2T5YmN55qERE9N5bCx5piv5paH5pys6IqC54K577yM5YiZ55u05o6l5pu05paw5YaF5a65XG4gICAgICAgIGlmIChkb20gJiYgZG9tLm5vZGVUeXBlID09PSAzKSB7ICAgIC8vIG5vZGVUeXBlOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy96aC1DTi9kb2NzL1dlYi9BUEkvTm9kZS9ub2RlVHlwZVxuICAgICAgICAgICAgaWYgKGRvbS50ZXh0Q29udGVudCAhPT0gdm5vZGUpIHtcbiAgICAgICAgICAgICAgICBkb20udGV4dENvbnRlbnQgPSB2bm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIOWmguaenERPTeS4jeaYr+aWh+acrOiKgueCue+8jOWImeaWsOW7uuS4gOS4quaWh+acrOiKgueCuURPTe+8jOW5tuenu+mZpOaOieWOn+adpeeahFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3V0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodm5vZGUpO1xuICAgICAgICAgICAgaWYgKGRvbSAmJiBkb20ucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgICAgIGRvbS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChvdXQsIGRvbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygdm5vZGUudGFnID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBkaWZmQ29tcG9uZW50KGRvbSwgdm5vZGUpO1xuICAgIH1cblxuICAgIC8vXG4gICAgaWYgKCFkb20gfHwgIWlzU2FtZU5vZGVUeXBlKGRvbSwgdm5vZGUpKSB7XG4gICAgICAgIG91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodm5vZGUudGFnKTtcblxuICAgICAgICBpZiAoZG9tKSB7XG4gICAgICAgICAgICBbLi4uZG9tLmNoaWxkTm9kZXNdLm1hcChvdXQuYXBwZW5kQ2hpbGQpOyAgICAvLyDlsIbljp/mnaXnmoTlrZDoioLngrnnp7vliLDmlrDoioLngrnkuItcblxuICAgICAgICAgICAgaWYgKGRvbS5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICAgICAgZG9tLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG91dCwgZG9tKTsgICAgLy8g56e76Zmk5o6J5Y6f5p2l55qERE9N5a+56LGhXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodm5vZGUuY2hpbGRyZW4gJiYgdm5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMCB8fCAob3V0LmNoaWxkTm9kZXMgJiYgb3V0LmNoaWxkTm9kZXMubGVuZ3RoID4gMCkpIHtcbiAgICAgICAgZGlmZkNoaWxkcmVuKG91dCwgdm5vZGUuY2hpbGRyZW4pO1xuICAgIH1cblxuICAgIGRpZmZBdHRyaWJ1dGVzKG91dCwgdm5vZGUpO1xuXG4gICAgcmV0dXJuIG91dDtcblxufVxuXG5mdW5jdGlvbiBkaWZmQ2hpbGRyZW4oZG9tLCB2Y2hpbGRyZW4pIHtcblxuICAgIGNvbnN0IGRvbUNoaWxkcmVuID0gZG9tLmNoaWxkTm9kZXM7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBbXTtcblxuICAgIGNvbnN0IGtleWVkID0ge307XG5cbiAgICBpZiAoZG9tQ2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRvbUNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZCA9IGRvbUNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gY2hpbGQua2V5O1xuICAgICAgICAgICAgaWYgKGtleSkge1xuICAgICAgICAgICAgICAgIGtleWVkTGVuKys7XG4gICAgICAgICAgICAgICAga2V5ZWRba2V5XSA9IGNoaWxkO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2Y2hpbGRyZW4gJiYgdmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcblxuICAgICAgICBsZXQgbWluID0gMDtcbiAgICAgICAgbGV0IGNoaWxkcmVuTGVuID0gY2hpbGRyZW4ubGVuZ3RoO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHZjaGlsZCA9IHZjaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IHZjaGlsZC5rZXk7XG4gICAgICAgICAgICBsZXQgY2hpbGQ7XG5cbiAgICAgICAgICAgIGlmIChrZXkpIHtcblxuICAgICAgICAgICAgICAgIGlmIChrZXllZFtrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkID0ga2V5ZWRba2V5XTtcbiAgICAgICAgICAgICAgICAgICAga2V5ZWRba2V5XSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAobWluIDwgY2hpbGRyZW5MZW4pIHtcblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSBtaW47IGogPCBjaGlsZHJlbkxlbjsgaisrKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGMgPSBjaGlsZHJlbltqXTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoYyAmJiBpc1NhbWVOb2RlVHlwZShjLCB2Y2hpbGQpKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkID0gYztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuW2pdID0gdW5kZWZpbmVkO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaiA9PT0gY2hpbGRyZW5MZW4gLSAxKSBjaGlsZHJlbkxlbi0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGogPT09IG1pbikgbWluKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2hpbGQgPSBkaWZmTm9kZShjaGlsZCwgdmNoaWxkKTtcblxuICAgICAgICAgICAgY29uc3QgZiA9IGRvbUNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgaWYgKGNoaWxkICYmIGNoaWxkICE9PSBkb20gJiYgY2hpbGQgIT09IGYpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWYpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9tLmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNoaWxkID09PSBmLm5leHRTaWJsaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZU5vZGUoZik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZG9tLmluc2VydEJlZm9yZShjaGlsZCwgZik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuZnVuY3Rpb24gZGlmZkNvbXBvbmVudChkb20sIHZub2RlKSB7XG5cbiAgICBsZXQgYyA9IGRvbSAmJiBkb20uX2NvbXBvbmVudDtcbiAgICBsZXQgb2xkRG9tID0gZG9tO1xuXG4gICAgLy8g5aaC5p6c57uE5Lu257G75Z6L5rKh5pyJ5Y+Y5YyW77yM5YiZ6YeN5pawc2V0IHByb3BzXG4gICAgaWYgKGMgJiYgYy5jb25zdHJ1Y3RvciA9PT0gdm5vZGUudGFnKSB7XG4gICAgICAgIHNldENvbXBvbmVudFByb3BzKGMsIHZub2RlLmF0dHJzKTtcbiAgICAgICAgZG9tID0gYy5iYXNlO1xuICAgICAgICAvLyDlpoLmnpznu4Tku7bnsbvlnovlj5jljJbvvIzliJnnp7vpmaTmjonljp/mnaXnu4Tku7bvvIzlubbmuLLmn5PmlrDnmoTnu4Tku7ZcbiAgICB9IGVsc2Uge1xuXG4gICAgICAgIGlmIChjKSB7XG4gICAgICAgICAgICB1bm1vdW50Q29tcG9uZW50KGMpO1xuICAgICAgICAgICAgb2xkRG9tID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGMgPSBjcmVhdGVDb21wb25lbnQodm5vZGUudGFnLCB2bm9kZS5hdHRycyk7XG5cbiAgICAgICAgc2V0Q29tcG9uZW50UHJvcHMoYywgdm5vZGUuYXR0cnMpO1xuICAgICAgICBkb20gPSBjLmJhc2U7XG5cbiAgICAgICAgaWYgKG9sZERvbSAmJiBkb20gIT09IG9sZERvbSkge1xuICAgICAgICAgICAgb2xkRG9tLl9jb21wb25lbnQgPSBudWxsO1xuICAgICAgICAgICAgcmVtb3ZlTm9kZShvbGREb20pO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICByZXR1cm4gZG9tO1xuXG59XG5cbmZ1bmN0aW9uIHNldENvbXBvbmVudFByb3BzKGNvbXBvbmVudCwgcHJvcHMpIHtcblxuICAgIGlmICghY29tcG9uZW50LmJhc2UpIHtcbiAgICAgICAgaWYgKGNvbXBvbmVudC5jb21wb25lbnRXaWxsTW91bnQpIGNvbXBvbmVudC5jb21wb25lbnRXaWxsTW91bnQoKTtcbiAgICB9IGVsc2UgaWYgKGNvbXBvbmVudC5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKSB7XG4gICAgICAgIGNvbXBvbmVudC5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHByb3BzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnQucHJvcHMgPSBwcm9wcztcblxuICAgIHJlbmRlckNvbXBvbmVudChjb21wb25lbnQpO1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJDb21wb25lbnQoY29tcG9uZW50KSB7XG5cbiAgICBsZXQgYmFzZTtcblxuICAgIGNvbnN0IHJlbmRlcmVyID0gY29tcG9uZW50LnJlbmRlcigpO1xuXG4gICAgaWYgKGNvbXBvbmVudC5iYXNlICYmIGNvbXBvbmVudC5jb21wb25lbnRXaWxsVXBkYXRlKSB7XG4gICAgICAgIGNvbXBvbmVudC5jb21wb25lbnRXaWxsVXBkYXRlKCk7XG4gICAgfVxuXG4gICAgYmFzZSA9IGRpZmZOb2RlKGNvbXBvbmVudC5iYXNlLCByZW5kZXJlcik7XG5cbiAgICBjb21wb25lbnQuYmFzZSA9IGJhc2U7XG4gICAgYmFzZS5fY29tcG9uZW50ID0gY29tcG9uZW50O1xuXG4gICAgaWYgKGNvbXBvbmVudC5iYXNlKSB7XG4gICAgICAgIGlmIChjb21wb25lbnQuY29tcG9uZW50RGlkVXBkYXRlKSBjb21wb25lbnQuY29tcG9uZW50RGlkVXBkYXRlKCk7XG4gICAgfSBlbHNlIGlmIChjb21wb25lbnQuY29tcG9uZW50RGlkTW91bnQpIHtcbiAgICAgICAgY29tcG9uZW50LmNvbXBvbmVudERpZE1vdW50KCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50LmJhc2UgPSBiYXNlO1xuICAgIGJhc2UuX2NvbXBvbmVudCA9IGNvbXBvbmVudDtcblxufVxuXG5mdW5jdGlvbiBjcmVhdGVDb21wb25lbnQoY29tcG9uZW50LCBwcm9wcykge1xuXG4gICAgbGV0IGluc3Q7XG5cbiAgICBpZiAoY29tcG9uZW50LnByb3RvdHlwZSAmJiBjb21wb25lbnQucHJvdG90eXBlLnJlbmRlcikge1xuICAgICAgICBpbnN0ID0gbmV3IGNvbXBvbmVudChwcm9wcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaW5zdCA9IG5ldyBDb21wb25lbnQocHJvcHMpO1xuICAgICAgICBpbnN0LmNvbnN0cnVjdG9yID0gY29tcG9uZW50O1xuICAgICAgICBpbnN0LnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yKHByb3BzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpbnN0O1xuXG59XG5cbmZ1bmN0aW9uIHVubW91bnRDb21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgaWYgKGNvbXBvbmVudC5jb21wb25lbnRXaWxsVW5tb3VudCkgY29tcG9uZW50LmNvbXBvbmVudFdpbGxVbm1vdW50KCk7XG4gICAgcmVtb3ZlTm9kZShjb21wb25lbnQuYmFzZSk7XG59XG5cbmZ1bmN0aW9uIGlzU2FtZU5vZGVUeXBlKGRvbSwgdm5vZGUpIHtcbiAgICBpZiAodHlwZW9mIHZub2RlID09PSAnc3RyaW5nJyB8fCB0eXBlb2Ygdm5vZGUgPT09ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybiBkb20ubm9kZVR5cGUgPT09IDM7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB2bm9kZS50YWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBkb20ubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gdm5vZGUudGFnLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRvbSAmJiBkb20uX2NvbXBvbmVudCAmJiBkb20uX2NvbXBvbmVudC5jb25zdHJ1Y3RvciA9PT0gdm5vZGUudGFnO1xufVxuXG5mdW5jdGlvbiBkaWZmQXR0cmlidXRlcyhkb20sIHZub2RlKSB7XG5cbiAgICBjb25zdCBvbGQgPSB7fTsgICAgLy8g5b2T5YmNRE9N55qE5bGe5oCnXG4gICAgY29uc3QgYXR0cnMgPSB2bm9kZS5hdHRyczsgICAgIC8vIOiZmuaLn0RPTeeahOWxnuaAp1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkb20uYXR0cmlidXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBhdHRyID0gZG9tLmF0dHJpYnV0ZXNbaV07XG4gICAgICAgIG9sZFthdHRyLm5hbWVdID0gYXR0ci52YWx1ZTtcbiAgICB9XG5cbiAgICAvLyDlpoLmnpzljp/mnaXnmoTlsZ7mgKfkuI3lnKjmlrDnmoTlsZ7mgKflvZPkuK3vvIzliJnlsIblhbbnp7vpmaTmjonvvIjlsZ7mgKflgLzorr7kuLp1bmRlZmluZWTvvIlcbiAgICBmb3IgKGxldCBuYW1lIGluIG9sZCkge1xuXG4gICAgICAgIGlmICghKG5hbWUgaW4gYXR0cnMpKSB7XG4gICAgICAgICAgICBzZXRBdHRyaWJ1dGUoZG9tLCBuYW1lLCB1bmRlZmluZWQpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvLyDmm7TmlrDmlrDnmoTlsZ7mgKflgLxcbiAgICBmb3IgKGxldCBuYW1lIGluIGF0dHJzKSB7XG5cbiAgICAgICAgaWYgKG9sZFtuYW1lXSAhPT0gYXR0cnNbbmFtZV0pIHtcbiAgICAgICAgICAgIHNldEF0dHJpYnV0ZShkb20sIG5hbWUsIGF0dHJzW25hbWVdKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG59XG5cbmZ1bmN0aW9uIHJlbW92ZU5vZGUoZG9tKSB7XG5cbiAgICBpZiAoZG9tICYmIGRvbS5wYXJlbnROb2RlKSB7XG4gICAgICAgIGRvbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRvbSk7XG4gICAgfVxuXG59IiwiZXhwb3J0IGZ1bmN0aW9uIHNldEF0dHJpYnV0ZSggZG9tLCBuYW1lLCB2YWx1ZSApIHtcbiAgICAvLyDlpoLmnpzlsZ7mgKflkI3mmK9jbGFzc++8jOWImeaUueWbnmNsYXNzTmFtZVxuICAgIGlmICggbmFtZSA9PT0gJ2NsYXNzTmFtZScgKSBuYW1lID0gJ2NsYXNzJztcblxuICAgIC8vIOWmguaenOWxnuaAp+WQjeaYr29uWFhY77yM5YiZ5piv5LiA5Liq5pe26Ze055uR5ZCs5pa55rOVXG4gICAgaWYgKCAvb25cXHcrLy50ZXN0KCBuYW1lICkgKSB7XG4gICAgICAgIG5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGRvbVsgbmFtZSBdID0gdmFsdWUgfHwgJyc7XG4gICAgLy8g5aaC5p6c5bGe5oCn5ZCN5pivc3R5bGXvvIzliJnmm7TmlrBzdHlsZeWvueixoVxuICAgIH0gZWxzZSBpZiAoIG5hbWUgPT09ICdzdHlsZScgKSB7XG4gICAgICAgIGlmICggIXZhbHVlIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgKSB7XG4gICAgICAgICAgICBub2RlLnN0eWxlLmNzc1RleHQgPSB2YWx1ZSB8fCAnJztcbiAgICAgICAgfSBlbHNlIGlmICggdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyApIHtcbiAgICAgICAgICAgIGZvciAoIGxldCBuYW1lIGluIHZhbHVlICkge1xuICAgICAgICAgICAgICAgIC8vIOWPr+S7pemAmui/h3N0eWxlPXsgd2lkdGg6IDIwIH3ov5nnp43lvaLlvI/mnaXorr7nva7moLflvI/vvIzlj6/ku6XnnIHnlaXmjonljZXkvY1weFxuICAgICAgICAgICAgICAgIGRvbS5zdHlsZVsgbmFtZSBdID0gdHlwZW9mIHZhbHVlWyBuYW1lIF0gPT09ICdudW1iZXInID8gdmFsdWVbIG5hbWUgXSArICdweCcgOiB2YWx1ZVsgbmFtZSBdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgLy8g5pmu6YCa5bGe5oCn5YiZ55u05o6l5pu05paw5bGe5oCnXG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCBuYW1lIGluIGRvbSApIHtcbiAgICAgICAgICAgIGRvbVsgbmFtZSBdID0gdmFsdWUgfHwgJyc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCB2YWx1ZSApIHtcbiAgICAgICAgICAgIGRvbS5zZXRBdHRyaWJ1dGUoIG5hbWUsIHZhbHVlICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkb20ucmVtb3ZlQXR0cmlidXRlKCBuYW1lLCB2YWx1ZSApO1xuICAgICAgICB9XG4gICAgfVxufSIsIlxuaW1wb3J0IHJlbmRlciBmcm9tICcuL3JlbmRlcidcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHJlbmRlclxufSIsImltcG9ydCB7IGRpZmYgfSBmcm9tICcuL2RpZmYnXG5cbmZ1bmN0aW9uIF9yZW5kZXIodm5vZGUsIGNvbnRhaW5lcikge1xuXG4gICAgaWYgKHZub2RlID09PSB1bmRlZmluZWQpIHJldHVybjtcblxuICAgIGlmICh2bm9kZS5pc1JlYWN0Q29tcG9uZW50KSB7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IHZub2RlO1xuXG4gICAgICAgIGlmIChjb21wb25lbnQuX2NvbnRhaW5lcikge1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudC5jb21wb25lbnRXaWxsVXBkYXRlKSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LmNvbXBvbmVudFdpbGxVcGRhdGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChjb21wb25lbnQuY29tcG9uZW50V2lsbE1vdW50KSB7XG4gICAgICAgICAgICBjb21wb25lbnQuY29tcG9uZW50V2lsbE1vdW50KCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb21wb25lbnQuX2NvbnRhaW5lciA9IGNvbnRhaW5lcjsgICAvLyDkv53lrZjniLblrrnlmajkv6Hmga/vvIznlKjkuo7mm7TmlrBcblxuICAgICAgICB2bm9kZSA9IGNvbXBvbmVudC5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHZub2RlID09PSAnc3RyaW5nJyB8fCB0eXBlb2Ygdm5vZGUgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGxldCB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZub2RlKTtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0Tm9kZSk7XG4gICAgfVxuXG4gICAgY29uc3QgZG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh2bm9kZS50YWcpO1xuXG4gICAgaWYgKHZub2RlLmF0dHJzKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHZub2RlLmF0dHJzKS5mb3JFYWNoKGtleSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdm5vZGUuYXR0cnNba2V5XTtcblxuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ2NsYXNzTmFtZScpIGtleSA9ICdjbGFzcyc7XG5cbiAgICAgICAgICAgIC8vIOWmguaenOaYr+S6i+S7tuebkeWQrOWHveaVsO+8jOWImeebtOaOpemZhOWKoOWIsGRvbeS4ilxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGRvbVtrZXkudG9Mb3dlckNhc2UoKV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZG9tLnNldEF0dHJpYnV0ZShrZXksIHZub2RlLmF0dHJzW2tleV0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICh2bm9kZS5jaGlsZHJlbikge1xuICAgICAgICB2bm9kZS5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IF9yZW5kZXIoY2hpbGQsIGRvbSkpO1xuICAgIH1cblxuICAgIHJldHVybiBjb250YWluZXIuYXBwZW5kQ2hpbGQoZG9tKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyKHZub2RlLCBjb250YWluZXIsIGRvbSkge1xuICAgIHJldHVybiBkaWZmKGRvbSwgdm5vZGUsIGNvbnRhaW5lcik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlcjsiLCJpbXBvcnQgeyByZW5kZXJDb21wb25lbnQgfSBmcm9tICcuLi9yZWFjdC1kb20vZGlmZidcblxuY2xhc3MgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyA9IHt9KSB7XG4gICAgICAgIHRoaXMuaXNSZWFjdENvbXBvbmVudCA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHt9O1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgfVxuXG4gICAgc2V0U3RhdGUoc3RhdGVDaGFuZ2UpIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLnN0YXRlLCBzdGF0ZUNoYW5nZSk7XG4gICAgICAgIHJlbmRlckNvbXBvbmVudCh0aGlzKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudDsiLCJcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnQuanMnXG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodGFnLCBhdHRycywgLi4uY2hpbGRyZW4pIHtcblxuICAgIGF0dHJzID0gYXR0cnMgfHwge307XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0YWcsXG4gICAgICAgIGF0dHJzLFxuICAgICAgICBjaGlsZHJlbixcbiAgICAgICAga2V5OiBhdHRycy5rZXkgfHwgbnVsbFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRWxlbWVudDsiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50LmpzJ1xuaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnLi9jcmVhdGUtZWxlbWVudC5qcydcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIENvbXBvbmVudCxcbiAgICBjcmVhdGVFbGVtZW50XG59Il0sInNvdXJjZVJvb3QiOiIifQ==