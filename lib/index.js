'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (tagName, props) {
  for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  var _ref;

  children = (_ref = []).concat.apply(_ref, _toConsumableArray(children));

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

  if (children) {
    children.forEach(function (child) {
      appendChild(element, child);
    });
  }
  return element;
};

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function appendChild(p, child) {
  if (typeof child === 'string') {
    p.innerText = child;
  } else {
    p.appendChild(child);
  }
}