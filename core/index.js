"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TestComponent = TestComponent;
exports.Test2 = Test2;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TestComponent() {
  return /*#__PURE__*/_react.default.createElement("div", null, "Hello from npm package");
}

function Test2() {
  return /*#__PURE__*/_react.default.createElement("div", null, "Hello test2 from npm package");
}