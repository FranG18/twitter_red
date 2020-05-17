"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

require("./HomeExplore.css");

var _MainNavbar = _interopRequireDefault(require("../MainNavbar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var HomeExplore = function HomeExplore() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "home_container"
  }, /*#__PURE__*/_react["default"].createElement(_MainNavbar["default"], {
    itemSelect: "Explorar"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "home_content_box"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "home_search_extra"
  }));
};

var _default = HomeExplore;
exports["default"] = _default;
//# sourceMappingURL=HomeExplore.js.map