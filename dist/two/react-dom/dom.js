"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setAttribute = setAttribute;

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