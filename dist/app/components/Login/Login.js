"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

require("./Login.css");

var _Twitter_Logo_WhiteOnImage = _interopRequireDefault(require("../../assets/Twitter_Logo_WhiteOnImage.svg"));

var _reactRouterDom = require("react-router-dom");

var _apiServices = require("../../services/apiServices");

var _ChargePage = _interopRequireDefault(require("../ChargePage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Login = function Login(_ref) {
  var location = _ref.location;

  /*Refs*/
  var emailRef = (0, _react.useRef)();
  var passwordRef = (0, _react.useRef)();
  /*State*/

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      error = _useState2[0],
      setError = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      show = _useState4[0],
      setShow = _useState4[1];
  /*History*/


  var history = (0, _reactRouterDom.useHistory)();
  /*Effect*/

  (0, _react.useEffect)(function () {
    if (location.state !== undefined) {
      setError(true);
    }
  }, []);
  (0, _react.useEffect)(function () {
    var action = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var response;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _apiServices.isAuthenticated)();

              case 2:
                response = _context.sent;

                if (response) {
                  history.replace('/home');
                } else {
                  setShow(true);
                }

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function action() {
        return _ref2.apply(this, arguments);
      };
    }();

    action();
  }, []);
  /*Functions*/

  var submitClick = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(event) {
      var response;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return (0, _apiServices.login)(emailRef.current.value, passwordRef.current.value);

            case 2:
              response = _context2.sent;

              if (!response) {
                setError(true);
              } else {
                history.replace('/home');
              }

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function submitClick(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  var logoutClick = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(event) {
      var response;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return (0, _apiServices.logout)();

            case 2:
              response = _context3.sent;
              console.log(response);

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function logoutClick(_x2) {
      return _ref4.apply(this, arguments);
    };
  }();

  var pruebaClick = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      var response;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return (0, _apiServices.isAuthenticated)();

            case 2:
              response = _context4.sent;
              console.log(response);

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function pruebaClick() {
      return _ref5.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/_react["default"].createElement("div", null, show && /*#__PURE__*/_react["default"].createElement("div", {
    className: "login_container"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: _Twitter_Logo_WhiteOnImage["default"],
    className: "login_logo"
  }), /*#__PURE__*/_react["default"].createElement("h1", null, "Iniciar sesi\xF3n en Twitter"), error && /*#__PURE__*/_react["default"].createElement("div", {
    className: "login_span"
  }, /*#__PURE__*/_react["default"].createElement("span", null, "Email o Contrase\xF1a no validos")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "login_correo"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "login_texto"
  }, "Correo"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "login_input_box"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    defaultValue: location.state !== undefined ? location.state.email : '',
    ref: emailRef,
    type: "email",
    className: "login_input"
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "login_contrase\xF1a"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "login_texto"
  }, "Contrase\xF1a"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "login_input_box"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    defaultValue: location.state !== undefined ? location.state.password : '',
    ref: passwordRef,
    type: "password",
    className: "login_input"
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    onClick: function onClick(event) {
      submitClick(event);
    },
    className: "login_button"
  }, "Iniciar sesi\xF3n"), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick(event) {
      logoutClick(event);
    }
  }, "Logout"), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: pruebaClick
  }, "Prueba"), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    className: "login_a",
    to: "/"
  }, "Registrate en TwitterRed")), !show && /*#__PURE__*/_react["default"].createElement(_ChargePage["default"], null));
};

var _default = Login;
exports["default"] = _default;
//# sourceMappingURL=Login.js.map