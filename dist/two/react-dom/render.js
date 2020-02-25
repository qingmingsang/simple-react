"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderComponent = renderComponent;
exports.render = render;

var _component = _interopRequireDefault(require("../react/component"));

var _dom = require("./dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function createComponent(component, props) {
  var inst;

  if (component.prototype && component.prototype.render) {
    inst = new component(props);
  } else {
    inst = new _component["default"](props);
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
      (0, _dom.setAttribute)(dom, key, value);
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