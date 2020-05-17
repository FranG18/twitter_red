"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

require("./App.css");

var _reactRedux = require("react-redux");

var _store = _interopRequireDefault(require("./redux/store"));

var _reactRouterDom = require("react-router-dom");

var _apiServices = require("./services/apiServices");

var _Explore = _interopRequireDefault(require("./components/Explore"));

var _Login = _interopRequireDefault(require("./components/Login"));

var _Home = _interopRequireDefault(require("./components/Home"));

var _regeneratorRuntime = _interopRequireDefault(require("regenerator-runtime"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var App = function App() {
  return /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
    store: _store["default"]
  }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/",
    exact: true,
    component: Render
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/explore",
    component: _Explore["default"]
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/home",
    component: _Home["default"]
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/login",
    component: _Login["default"]
  })));
};

var Render = function Render() {
  var history = (0, _reactRouterDom.useHistory)();
  (0, _react.useEffect)(function () {
    var action = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime["default"].mark(function _callee() {
        var isAuth;
        return _regeneratorRuntime["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _apiServices.isAuthenticated)();

              case 2:
                isAuth = _context.sent;
                isAuth ? history.replace('/home') : history.replace('/explore');

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function action() {
        return _ref.apply(this, arguments);
      };
    }();

    action();
  }, []);
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      background: 'white'
    }
  });
};

var _default = App;
exports["default"] = _default;
//# sourceMappingURL=App.js.map