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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/two/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/two/index.js":
/*!**************************!*\
  !*** ./src/two/index.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./react */ "./src/two/react/index.js");
/* harmony import */ var _react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./react-dom */ "./src/two/react-dom/index.js");
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

/***/ "./src/two/react-dom/dom.js":
/*!**********************************!*\
  !*** ./src/two/react-dom/dom.js ***!
  \**********************************/
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

/***/ "./src/two/react-dom/index.js":
/*!************************************!*\
  !*** ./src/two/react-dom/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ "./src/two/react-dom/render.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  render: _render__WEBPACK_IMPORTED_MODULE_0__["render"],
  renderComponent: _render__WEBPACK_IMPORTED_MODULE_0__["renderComponent"]
});

/***/ }),

/***/ "./src/two/react-dom/render.js":
/*!*************************************!*\
  !*** ./src/two/react-dom/render.js ***!
  \*************************************/
/*! exports provided: renderComponent, render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderComponent", function() { return renderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var _react_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../react/component */ "./src/two/react/component.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/two/react-dom/dom.js");



function createComponent(component, props) {
  var inst;

  if (component.prototype && component.prototype.render) {
    inst = new component(props);
  } else {
    inst = new _react_component__WEBPACK_IMPORTED_MODULE_0__["default"](props);
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

  base = _render(renderer);

  if (component.base) {
    if (component.componentDidUpdate) component.componentDidUpdate();
  } else if (component.componentDidMount) {
    component.componentDidMount();
  }

  if (component.base && component.base.parentNode) {
    component.base.parentNode.replaceChild(base, component.base);
  }

  component.base = base;
  base._component = component;
}

function _render(vnode) {
  if (vnode === undefined || vnode === null || typeof vnode === 'boolean') vnode = '';
  if (typeof vnode === 'number') vnode = String(vnode);

  if (typeof vnode === 'string') {
    var textNode = document.createTextNode(vnode);
    return textNode;
  }

  if (typeof vnode.tag === 'function') {
    var component = createComponent(vnode.tag, vnode.attrs);
    setComponentProps(component, vnode.attrs);
    return component.base;
  }

  var dom = document.createElement(vnode.tag);

  if (vnode.attrs) {
    Object.keys(vnode.attrs).forEach(function (key) {
      var value = vnode.attrs[key];
      Object(_dom__WEBPACK_IMPORTED_MODULE_1__["setAttribute"])(dom, key, value);
    });
  }

  if (vnode.children) {
    vnode.children.forEach(function (child) {
      return render(child, dom);
    });
  }

  return dom;
}

function render(vnode, container) {
  return container.appendChild(_render(vnode));
}

/***/ }),

/***/ "./src/two/react/component.js":
/*!************************************!*\
  !*** ./src/two/react/component.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _react_dom_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../react-dom/render */ "./src/two/react-dom/render.js");
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
      Object(_react_dom_render__WEBPACK_IMPORTED_MODULE_0__["renderComponent"])(this);
    }
  }]);

  return Component;
}();

/* harmony default export */ __webpack_exports__["default"] = (Component);

/***/ }),

/***/ "./src/two/react/create-element.js":
/*!*****************************************!*\
  !*** ./src/two/react/create-element.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component.js */ "./src/two/react/component.js");


function createElement(tag, attrs) {
  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  return {
    tag: tag,
    attrs: attrs,
    children: children
  };
}

/* harmony default export */ __webpack_exports__["default"] = (createElement);

/***/ }),

/***/ "./src/two/react/index.js":
/*!********************************!*\
  !*** ./src/two/react/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component.js */ "./src/two/react/component.js");
/* harmony import */ var _create_element_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-element.js */ "./src/two/react/create-element.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  Component: _component_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  createElement: _create_element_js__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3R3by9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHdvL3JlYWN0LWRvbS9kb20uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3R3by9yZWFjdC1kb20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3R3by9yZWFjdC1kb20vcmVuZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy90d28vcmVhY3QvY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy90d28vcmVhY3QvY3JlYXRlLWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3R3by9yZWFjdC9pbmRleC5qcyJdLCJuYW1lcyI6WyJDb3VudGVyIiwicHJvcHMiLCJzdGF0ZSIsIm51bSIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsIm9uQ2xpY2siLCJSZWFjdCIsIkNvbXBvbmVudCIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNldEF0dHJpYnV0ZSIsImRvbSIsIm5hbWUiLCJ2YWx1ZSIsInRlc3QiLCJ0b0xvd2VyQ2FzZSIsIm5vZGUiLCJzdHlsZSIsImNzc1RleHQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJyZW5kZXJDb21wb25lbnQiLCJjcmVhdGVDb21wb25lbnQiLCJjb21wb25lbnQiLCJpbnN0IiwicHJvdG90eXBlIiwiY29uc3RydWN0b3IiLCJ1bm1vdW50Q29tcG9uZW50IiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJyZW1vdmVOb2RlIiwiYmFzZSIsInNldENvbXBvbmVudFByb3BzIiwiY29tcG9uZW50V2lsbE1vdW50IiwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsInJlbmRlcmVyIiwiY29tcG9uZW50V2lsbFVwZGF0ZSIsIl9yZW5kZXIiLCJjb21wb25lbnREaWRVcGRhdGUiLCJjb21wb25lbnREaWRNb3VudCIsInBhcmVudE5vZGUiLCJyZXBsYWNlQ2hpbGQiLCJfY29tcG9uZW50Iiwidm5vZGUiLCJ1bmRlZmluZWQiLCJTdHJpbmciLCJ0ZXh0Tm9kZSIsImNyZWF0ZVRleHROb2RlIiwidGFnIiwiYXR0cnMiLCJjcmVhdGVFbGVtZW50IiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJjaGlsZHJlbiIsImNoaWxkIiwiY29udGFpbmVyIiwiYXBwZW5kQ2hpbGQiLCJpc1JlYWN0Q29tcG9uZW50Iiwic3RhdGVDaGFuZ2UiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTs7SUFFTUEsTzs7Ozs7QUFDRixtQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLGlGQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLFNBQUcsRUFBRTtBQURJLEtBQWIsQ0FGZSxDQUtmOztBQUxlO0FBTWxCOzs7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QTs7QUFFQSxTQUFTMkMsYUFBVCxDQUF1QkYsR0FBdkIsRUFBNEJDLEtBQTVCLEVBQWdEO0FBQUEsb0NBQVZNLFFBQVU7QUFBVkEsWUFBVTtBQUFBOztBQUU1QyxTQUFPO0FBQ0hQLE9BQUcsRUFBSEEsR0FERztBQUVIQyxTQUFLLEVBQUxBLEtBRkc7QUFHSE0sWUFBUSxFQUFSQTtBQUhHLEdBQVA7QUFLSDs7QUFFY0wsNEVBQWYsRTs7Ozs7Ozs7Ozs7O0FDWEE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVlO0FBQ1gzQyxXQUFTLEVBQVRBLHFEQURXO0FBRVgyQyxlQUFhLEVBQWJBLDBEQUFhQTtBQUZGLENBQWYsRSIsImZpbGUiOiJ0d28uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy90d28vaW5kZXguanNcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAnLi9yZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICcuL3JlYWN0LWRvbSdcblxuY2xhc3MgQ291bnRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbnVtOiAwXG4gICAgICAgIH1cbiAgICAgICAgLy9kZWJ1Z2dlcjtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVXBkYXRlKCkge1xuICAgICAgICAvL2RlYnVnZ2VyO1xuICAgICAgICBjb25zb2xlLmxvZygndXBkYXRlJyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICAvL2RlYnVnZ2VyO1xuICAgICAgICBjb25zb2xlLmxvZygnbW91bnQnKTtcbiAgICB9XG5cbiAgICBvbkNsaWNrKCkge1xuICAgICAgICAvL2RlYnVnZ2VyO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbnVtOiB0aGlzLnN0YXRlLm51bSArIDEgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICAvL2RlYnVnZ2VyO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiB0aGlzLm9uQ2xpY2soKX0+XG4gICAgICAgICAgICAgICAgPGgxPm51bWJlcjoge3RoaXMuc3RhdGUubnVtfTwvaDE+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbj5hZGQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cbi8vZGVidWdnZXI7XG5SZWFjdERPTS5yZW5kZXIoXG4gICAgPENvdW50ZXIgLz4sXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuKTsiLCJleHBvcnQgZnVuY3Rpb24gc2V0QXR0cmlidXRlKGRvbSwgbmFtZSwgdmFsdWUpIHtcbiAgICAvLyDlpoLmnpzlsZ7mgKflkI3mmK9jbGFzc++8jOWImeaUueWbnmNsYXNzTmFtZVxuICAgIGlmIChuYW1lID09PSAnY2xhc3NOYW1lJykgbmFtZSA9ICdjbGFzcyc7XG5cbiAgICAvLyDlpoLmnpzlsZ7mgKflkI3mmK9vblhYWO+8jOWImeaYr+S4gOS4quaXtumXtOebkeWQrOaWueazlVxuICAgIGlmICgvb25cXHcrLy50ZXN0KG5hbWUpKSB7XG4gICAgICAgIG5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGRvbVtuYW1lXSA9IHZhbHVlIHx8ICcnO1xuICAgICAgICAvLyDlpoLmnpzlsZ7mgKflkI3mmK9zdHlsZe+8jOWImeabtOaWsHN0eWxl5a+56LGhXG4gICAgfSBlbHNlIGlmIChuYW1lID09PSAnc3R5bGUnKSB7XG4gICAgICAgIGlmICghdmFsdWUgfHwgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgbm9kZS5zdHlsZS5jc3NUZXh0ID0gdmFsdWUgfHwgJyc7XG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgZm9yIChsZXQgbmFtZSBpbiB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIC8vIOWPr+S7pemAmui/h3N0eWxlPXsgd2lkdGg6IDIwIH3ov5nnp43lvaLlvI/mnaXorr7nva7moLflvI/vvIzlj6/ku6XnnIHnlaXmjonljZXkvY1weFxuICAgICAgICAgICAgICAgIGRvbS5zdHlsZVtuYW1lXSA9IHR5cGVvZiB2YWx1ZVtuYW1lXSA9PT0gJ251bWJlcicgPyB2YWx1ZVtuYW1lXSArICdweCcgOiB2YWx1ZVtuYW1lXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyDmma7pgJrlsZ7mgKfliJnnm7TmjqXmm7TmlrDlsZ7mgKdcbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAobmFtZSBpbiBkb20pIHtcbiAgICAgICAgICAgIGRvbVtuYW1lXSA9IHZhbHVlIHx8ICcnO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgZG9tLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkb20ucmVtb3ZlQXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgeyByZW5kZXIsIHJlbmRlckNvbXBvbmVudCB9IGZyb20gJy4vcmVuZGVyJ1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIHJlbmRlcixcbiAgICByZW5kZXJDb21wb25lbnRcbn0iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL3JlYWN0L2NvbXBvbmVudCdcbmltcG9ydCB7IHNldEF0dHJpYnV0ZSB9IGZyb20gJy4vZG9tJ1xuXG5mdW5jdGlvbiBjcmVhdGVDb21wb25lbnQoY29tcG9uZW50LCBwcm9wcykge1xuXG4gICAgbGV0IGluc3Q7XG5cbiAgICBpZiAoY29tcG9uZW50LnByb3RvdHlwZSAmJiBjb21wb25lbnQucHJvdG90eXBlLnJlbmRlcikge1xuICAgICAgICBpbnN0ID0gbmV3IGNvbXBvbmVudChwcm9wcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaW5zdCA9IG5ldyBDb21wb25lbnQocHJvcHMpO1xuICAgICAgICBpbnN0LmNvbnN0cnVjdG9yID0gY29tcG9uZW50O1xuICAgICAgICBpbnN0LnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yKHByb3BzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpbnN0O1xufVxuXG5cbmZ1bmN0aW9uIHVubW91bnRDb21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgaWYgKGNvbXBvbmVudC5jb21wb25lbnRXaWxsVW5tb3VudCkgY29tcG9uZW50LmNvbXBvbmVudFdpbGxVbm1vdW50KCk7XG4gICAgcmVtb3ZlTm9kZShjb21wb25lbnQuYmFzZSk7XG59XG5cbmZ1bmN0aW9uIHNldENvbXBvbmVudFByb3BzKGNvbXBvbmVudCwgcHJvcHMpIHtcblxuICAgIGlmICghY29tcG9uZW50LmJhc2UpIHtcbiAgICAgICAgaWYgKGNvbXBvbmVudC5jb21wb25lbnRXaWxsTW91bnQpIGNvbXBvbmVudC5jb21wb25lbnRXaWxsTW91bnQoKTtcbiAgICB9IGVsc2UgaWYgKGNvbXBvbmVudC5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKSB7XG4gICAgICAgIGNvbXBvbmVudC5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHByb3BzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnQucHJvcHMgPSBwcm9wcztcblxuICAgIHJlbmRlckNvbXBvbmVudChjb21wb25lbnQpO1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJDb21wb25lbnQoY29tcG9uZW50KSB7XG5cbiAgICBsZXQgYmFzZTtcblxuICAgIGNvbnN0IHJlbmRlcmVyID0gY29tcG9uZW50LnJlbmRlcigpO1xuXG4gICAgaWYgKGNvbXBvbmVudC5iYXNlICYmIGNvbXBvbmVudC5jb21wb25lbnRXaWxsVXBkYXRlKSB7XG4gICAgICAgIGNvbXBvbmVudC5jb21wb25lbnRXaWxsVXBkYXRlKCk7XG4gICAgfVxuXG4gICAgYmFzZSA9IF9yZW5kZXIocmVuZGVyZXIpO1xuXG4gICAgaWYgKGNvbXBvbmVudC5iYXNlKSB7XG4gICAgICAgIGlmIChjb21wb25lbnQuY29tcG9uZW50RGlkVXBkYXRlKSBjb21wb25lbnQuY29tcG9uZW50RGlkVXBkYXRlKCk7XG4gICAgfSBlbHNlIGlmIChjb21wb25lbnQuY29tcG9uZW50RGlkTW91bnQpIHtcbiAgICAgICAgY29tcG9uZW50LmNvbXBvbmVudERpZE1vdW50KCk7XG4gICAgfVxuXG4gICAgaWYgKGNvbXBvbmVudC5iYXNlICYmIGNvbXBvbmVudC5iYXNlLnBhcmVudE5vZGUpIHtcbiAgICAgICAgY29tcG9uZW50LmJhc2UucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoYmFzZSwgY29tcG9uZW50LmJhc2UpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudC5iYXNlID0gYmFzZTtcbiAgICBiYXNlLl9jb21wb25lbnQgPSBjb21wb25lbnQ7XG5cbn1cblxuZnVuY3Rpb24gX3JlbmRlcih2bm9kZSkge1xuXG4gICAgaWYgKHZub2RlID09PSB1bmRlZmluZWQgfHwgdm5vZGUgPT09IG51bGwgfHwgdHlwZW9mIHZub2RlID09PSAnYm9vbGVhbicpIHZub2RlID0gJyc7XG5cbiAgICBpZiAodHlwZW9mIHZub2RlID09PSAnbnVtYmVyJykgdm5vZGUgPSBTdHJpbmcodm5vZGUpO1xuXG4gICAgaWYgKHR5cGVvZiB2bm9kZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgbGV0IHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodm5vZGUpO1xuICAgICAgICByZXR1cm4gdGV4dE5vZGU7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB2bm9kZS50YWcgPT09ICdmdW5jdGlvbicpIHtcblxuICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjcmVhdGVDb21wb25lbnQodm5vZGUudGFnLCB2bm9kZS5hdHRycyk7XG5cbiAgICAgICAgc2V0Q29tcG9uZW50UHJvcHMoY29tcG9uZW50LCB2bm9kZS5hdHRycyk7XG5cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudC5iYXNlO1xuICAgIH1cblxuICAgIGNvbnN0IGRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodm5vZGUudGFnKTtcblxuICAgIGlmICh2bm9kZS5hdHRycykge1xuICAgICAgICBPYmplY3Qua2V5cyh2bm9kZS5hdHRycykuZm9yRWFjaChrZXkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHZub2RlLmF0dHJzW2tleV07XG5cbiAgICAgICAgICAgIHNldEF0dHJpYnV0ZShkb20sIGtleSwgdmFsdWUpO1xuXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICh2bm9kZS5jaGlsZHJlbikge1xuICAgICAgICB2bm9kZS5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHJlbmRlcihjaGlsZCwgZG9tKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRvbTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcih2bm9kZSwgY29udGFpbmVyKSB7XG4gICAgcmV0dXJuIGNvbnRhaW5lci5hcHBlbmRDaGlsZChfcmVuZGVyKHZub2RlKSk7XG59IiwiaW1wb3J0IHsgcmVuZGVyQ29tcG9uZW50IH0gZnJvbSAnLi4vcmVhY3QtZG9tL3JlbmRlcidcblxuY2xhc3MgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyA9IHt9KSB7XG4gICAgICAgIHRoaXMuaXNSZWFjdENvbXBvbmVudCA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHt9O1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgfVxuXG4gICAgc2V0U3RhdGUoc3RhdGVDaGFuZ2UpIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLnN0YXRlLCBzdGF0ZUNoYW5nZSk7XG4gICAgICAgIHJlbmRlckNvbXBvbmVudCh0aGlzKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudDsiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50LmpzJ1xuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KHRhZywgYXR0cnMsIC4uLmNoaWxkcmVuKSB7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0YWcsXG4gICAgICAgIGF0dHJzLFxuICAgICAgICBjaGlsZHJlblxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRWxlbWVudDsiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50LmpzJ1xuaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnLi9jcmVhdGUtZWxlbWVudC5qcydcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIENvbXBvbmVudCxcbiAgICBjcmVhdGVFbGVtZW50XG59Il0sInNvdXJjZVJvb3QiOiIifQ==