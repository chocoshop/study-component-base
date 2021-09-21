"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Label = void 0;

var _react = _interopRequireDefault(require("react"));

require("./Label.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Label = _ref => {
  let {
    bg_color,
    text
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "label label-".concat(bg_color)
  }, text);
};

exports.Label = Label;