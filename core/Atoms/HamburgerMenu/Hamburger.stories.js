"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Primary = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _HamburgerMenu = require("./HamburgerMenu");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Atoms/HamburgerMenu',
  component: 'HamburgerMenu'
};
exports.default = _default;

const Template = () => /*#__PURE__*/_react.default.createElement(_HamburgerMenu.HamburgerMenu, null);

const Primary = Template.bind({});
exports.Primary = Primary;