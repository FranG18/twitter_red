"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

require("./Navbar.css");

var _Twitter_Logo_WhiteOnImage = _interopRequireDefault(require("../../assets/Twitter_Logo_WhiteOnImage.svg"));

var _toolsAndUtensils = _interopRequireDefault(require("../../assets/tools-and-utensils.svg"));

var _mark = _interopRequireDefault(require("../../assets/mark.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Navbar = function Navbar() {
  var history = (0, _reactRouterDom.useHistory)();

  var handleClick = function handleClick(event) {
    history.push('/login');
  };

  return /*#__PURE__*/_react["default"].createElement("nav", {
    className: "navbar_container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "navbar_container_flexbox"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "navbar_search"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: _Twitter_Logo_WhiteOnImage["default"],
    className: "navbar_icon",
    alt: ""
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "navbar_search_box"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: _toolsAndUtensils["default"],
    className: "navbar_search_icon"
  }), /*#__PURE__*/_react["default"].createElement("input", {
    placeholder: "Buscar en TwitterRed",
    className: "navbar_search_text"
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "navbar_buttons"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    onClick: function onClick(event) {
      handleClick(event);
    },
    className: "navbar_button_login"
  }, "Iniciar sesi\xF3n"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "navbar_button_registrer"
  }, "Registrate"))), /*#__PURE__*/_react["default"].createElement("img", {
    src: _mark["default"],
    className: "navbar_info_icon"
  }));
};

var _default = Navbar;
exports["default"] = _default;
//# sourceMappingURL=Navbar.js.map