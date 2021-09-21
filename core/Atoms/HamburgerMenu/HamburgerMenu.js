"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HamburgerMenu = void 0;

var _react = _interopRequireDefault(require("react"));

require("./HamburgerMenu.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const HamburgerMenu = () => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "hamburger-menu__wrapper"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "hamburger-menu__line"
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "hamburger-menu__line"
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "hamburger-menu__line"
  }));
};

exports.HamburgerMenu = HamburgerMenu;