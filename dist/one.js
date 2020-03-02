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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/one/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/one/index.js":
/*!**************************!*\
  !*** ./src/one/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var React = {
  createElement: createElement
};
var ReactDOM = {
  render: function render(vnode, container) {
    container.innerHTML = '';
    return _render(vnode, container);
  }
};

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

function _render(vnode, container) {
  if (typeof vnode === 'string') {
    var textNode = document.createTextNode(vnode);
    return container.appendChild(textNode);
  }

  var dom = document.createElement(vnode.tag);

  if (vnode.attrs) {
    Object.keys(vnode.attrs).forEach(function (key) {
      var value = vnode.attrs[key];
      setAttribute(dom, key, value);
    });
  }

  vnode.children.forEach(function (child) {
    return _render(child, dom);
  });
  return container.appendChild(dom);
}

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

function tick() {
  var element = React.createElement("div", null, React.createElement("h1", null, "Hello, world!"), React.createElement("h2", null, "It is ", new Date().toLocaleTimeString(), "."));
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL29uZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJSZWFjdERPTSIsInJlbmRlciIsInZub2RlIiwiY29udGFpbmVyIiwiaW5uZXJIVE1MIiwidGFnIiwiYXR0cnMiLCJjaGlsZHJlbiIsInRleHROb2RlIiwiZG9jdW1lbnQiLCJjcmVhdGVUZXh0Tm9kZSIsImFwcGVuZENoaWxkIiwiZG9tIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJ2YWx1ZSIsInNldEF0dHJpYnV0ZSIsImNoaWxkIiwibmFtZSIsInRlc3QiLCJ0b0xvd2VyQ2FzZSIsInN0eWxlIiwiY3NzVGV4dCIsInJlbW92ZUF0dHJpYnV0ZSIsInRpY2siLCJlbGVtZW50IiwiRGF0ZSIsInRvTG9jYWxlVGltZVN0cmluZyIsImdldEVsZW1lbnRCeUlkIiwic2V0SW50ZXJ2YWwiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFD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QUFDSCxHQVZNLE1BVUE7QUFDSCxRQUFJQSxJQUFJLElBQUlSLEdBQVosRUFBaUI7QUFDYkEsU0FBRyxDQUFDUSxJQUFELENBQUgsR0FBWUgsS0FBSyxJQUFJLEVBQXJCO0FBQ0g7O0FBQ0QsUUFBSUEsS0FBSixFQUFXO0FBQ1BMLFNBQUcsQ0FBQ00sWUFBSixDQUFpQkUsSUFBakIsRUFBdUJILEtBQXZCO0FBQ0gsS0FGRCxNQUVPO0FBQ0hMLFNBQUcsQ0FBQ2EsZUFBSixDQUFvQkwsSUFBcEIsRUFBMEJILEtBQTFCO0FBQ0g7QUFDSjtBQUNKOztBQUVELFNBQVNTLElBQVQsR0FBZ0I7QUFDWixNQUFNQyxPQUFPLEdBQ1QsaUNBQ0ksZ0RBREosRUFFSSwwQ0FBVyxJQUFJQyxJQUFKLEdBQVdDLGtCQUFYLEVBQVgsTUFGSixDQURKO0FBTUE3QixVQUFRLENBQUNDLE1BQVQsQ0FDSTBCLE9BREosRUFFSWxCLFFBQVEsQ0FBQ3FCLGNBQVQsQ0FBd0IsTUFBeEIsQ0FGSjtBQUlIOztBQUVEQyxXQUFXLENBQUNMLElBQUQsRUFBTyxJQUFQLENBQVgsQyIsImZpbGUiOiJvbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9vbmUvaW5kZXguanNcIik7XG4iLCJjb25zdCBSZWFjdCA9IHtcbiAgICBjcmVhdGVFbGVtZW50XG59XG5cbmNvbnN0IFJlYWN0RE9NID0ge1xuICAgIHJlbmRlcjogKHZub2RlLCBjb250YWluZXIpID0+IHtcbiAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICByZXR1cm4gcmVuZGVyKHZub2RlLCBjb250YWluZXIpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0YWcsIGF0dHJzLCAuLi5jaGlsZHJlbikge1xuICAgIHJldHVybiB7XG4gICAgICAgIHRhZyxcbiAgICAgICAgYXR0cnMsXG4gICAgICAgIGNoaWxkcmVuXG4gICAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXIodm5vZGUsIGNvbnRhaW5lcikge1xuXG4gICAgaWYgKHR5cGVvZiB2bm9kZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgbGV0IHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodm5vZGUpO1xuICAgICAgICByZXR1cm4gY29udGFpbmVyLmFwcGVuZENoaWxkKHRleHROb2RlKTtcbiAgICB9XG5cbiAgICBjb25zdCBkb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHZub2RlLnRhZyk7XG5cbiAgICBpZiAodm5vZGUuYXR0cnMpIHtcbiAgICAgICAgT2JqZWN0LmtleXModm5vZGUuYXR0cnMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdm5vZGUuYXR0cnNba2V5XTtcbiAgICAgICAgICAgIHNldEF0dHJpYnV0ZShkb20sIGtleSwgdmFsdWUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB2bm9kZS5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHJlbmRlcihjaGlsZCwgZG9tKSk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyLmFwcGVuZENoaWxkKGRvbSk7XG59XG5cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZShkb20sIG5hbWUsIHZhbHVlKSB7XG4gICAgLy8g5aaC5p6c5bGe5oCn5ZCN5pivY2xhc3PvvIzliJnmlLnlm55jbGFzc05hbWVcbiAgICBpZiAobmFtZSA9PT0gJ2NsYXNzTmFtZScpIG5hbWUgPSAnY2xhc3MnO1xuXG4gICAgLy8g5aaC5p6c5bGe5oCn5ZCN5pivb25YWFjvvIzliJnmmK/kuIDkuKrml7bpl7Tnm5HlkKzmlrnms5VcbiAgICBpZiAoL29uXFx3Ky8udGVzdChuYW1lKSkge1xuICAgICAgICBuYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBkb21bbmFtZV0gPSB2YWx1ZSB8fCAnJztcbiAgICAgICAgLy8g5aaC5p6c5bGe5oCn5ZCN5pivc3R5bGXvvIzliJnmm7TmlrBzdHlsZeWvueixoVxuICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gJ3N0eWxlJykge1xuICAgICAgICBpZiAoIXZhbHVlIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGRvbS5zdHlsZS5jc3NUZXh0ID0gdmFsdWUgfHwgJyc7XG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgZm9yIChsZXQgbmFtZSBpbiB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIC8vIOWPr+S7pemAmui/h3N0eWxlPXsgd2lkdGg6IDIwIH3ov5nnp43lvaLlvI/mnaXorr7nva7moLflvI/vvIzlj6/ku6XnnIHnlaXmjonljZXkvY1weFxuICAgICAgICAgICAgICAgIGRvbS5zdHlsZVtuYW1lXSA9IHR5cGVvZiB2YWx1ZVtuYW1lXSA9PT0gJ251bWJlcicgPyB2YWx1ZVtuYW1lXSArICdweCcgOiB2YWx1ZVtuYW1lXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyDmma7pgJrlsZ7mgKfliJnnm7TmjqXmm7TmlrDlsZ7mgKdcbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAobmFtZSBpbiBkb20pIHtcbiAgICAgICAgICAgIGRvbVtuYW1lXSA9IHZhbHVlIHx8ICcnO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgZG9tLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkb20ucmVtb3ZlQXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gdGljaygpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxPkhlbGxvLCB3b3JsZCE8L2gxPlxuICAgICAgICAgICAgPGgyPkl0IGlzIHtuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygpfS48L2gyPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xuICAgIFJlYWN0RE9NLnJlbmRlcihcbiAgICAgICAgZWxlbWVudCxcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuICAgICk7XG59XG5cbnNldEludGVydmFsKHRpY2ssIDEwMDApOyJdLCJzb3VyY2VSb290IjoiIn0=