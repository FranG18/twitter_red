"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Twitter_Logo_WhiteOnImage = _interopRequireDefault(require("../assets/Twitter_Logo_WhiteOnImage.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ChargePage = function ChargePage() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      background: '802007',
      width: '100%',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement("img", {
    style: {
      width: '100px',
      height: '100px'
    },
    src: _Twitter_Logo_WhiteOnImage["default"]
  }));
};

var _default = ChargePage;
exports["default"] = _default;
//# sourceMappingURL=ChargePage.js.map