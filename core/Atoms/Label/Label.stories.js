"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Primary = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Label = require("./Label");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Atoms/Label',
  component: _Label.Label,
  argTypes: {
    backgroundColor: {
      control: 'color'
    }
  }
};
exports.default = _default;

const Template = args => /*#__PURE__*/_react.default.createElement(_Label.Label, args);

const Primary = Template.bind({});
exports.Primary = Primary;
Primary.args = {
  primary: true,
  bg_color: 'blue',
  text: 'ビジネス・学習'
};