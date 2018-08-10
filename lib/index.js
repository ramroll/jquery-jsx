'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (tagName, props, children) {

  props = props || {};
  var element = document.createElement(tagName);
  var propNames = Object.getOwnPropertyNames(props);

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = propNames[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var key = _step.value;

      element.setAttribute(key, props[key]);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  if (Array.isArray(children)) {

    children.forEach(function (child) {
      appendChild(element, child);
    });
  } else {
    appendChild(element, children);
  }
  return element;
};

function appendChild(p, child) {
  if (typeof child === 'string') {
    p.innerText = child;
  } else {
    p.appendChild(child);
  }
}