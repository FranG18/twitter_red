"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

require("./Explore.css");

var _reactRouterDom = require("react-router-dom");

var _apiServices = require("../../services/apiServices");

var _Navbar = _interopRequireDefault(require("../Navbar"));

var _ChargePage = _interopRequireDefault(require("../ChargePage"));

var _exampleData = require("../../data/exampleData");

var _HomeExplore = _interopRequireDefault(require("../HomeExplore"));

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

var Explore = function Explore(props) {
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      auth = _useState4[0],
      setAuth = _useState4[1];
  /*Effect*/


  (0, _react.useEffect)(function () {
    var action = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
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
                  setAuth(true);
                }

                setShow(true);

              case 5:
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

  if (props.location.state && props.location.state.direct) {
    return /*#__PURE__*/_react["default"].createElement(ExplorePage, {
      auth: true
    });
  } else {
    return /*#__PURE__*/_react["default"].createElement("div", null, show ? /*#__PURE__*/_react["default"].createElement(ExplorePage, {
      auth: auth
    }) : /*#__PURE__*/_react["default"].createElement(_ChargePage["default"], null));
  }
};

var ExplorePage = function ExplorePage(_ref2) {
  var auth = _ref2.auth;
  return /*#__PURE__*/_react["default"].createElement("div", null, !auth ? /*#__PURE__*/_react["default"].createElement(ExploreDontAuth, null) : /*#__PURE__*/_react["default"].createElement(_HomeExplore["default"], null));
};

var ExploreDontAuth = function ExploreDontAuth() {
  /*Refs*/
  var emailRef = (0, _react.useRef)();
  var passwordRef = (0, _react.useRef)();
  /*History*/

  var history = (0, _reactRouterDom.useHistory)();

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
                history.push({
                  pathname: '/login',
                  state: {
                    email: emailRef.current.value,
                    password: passwordRef.current.value
                  }
                });
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

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "explore_container"
  }, /*#__PURE__*/_react["default"].createElement(_Navbar["default"], null), /*#__PURE__*/_react["default"].createElement("div", {
    className: "explore_content"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "explore_box"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "explore_box_title"
  }, /*#__PURE__*/_react["default"].createElement("h3", null, "Explorar")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "explore_main_tendences"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      color: 'white',
      fontSize: '13px',
      userSelect: 'none'
    }
  }, "COVID-19 - Hace 4 horas"), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      color: 'white',
      fontSize: '24px',
      userSelect: 'none'
    }
  }, /*#__PURE__*/_react["default"].createElement("strong", null, "Coronavirus: Rusia ya es el segundo pa\xEDs con m\xE1s casos del mundo")), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      color: 'white',
      fontSize: '13px',
      userSelect: 'none'
    }
  }, "200 mil personas estan twitteando sobre esto")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "explore_tendences_box"
  }, _exampleData.tendences.map(function (_ref4) {
    var id = _ref4.id,
        type = _ref4.type,
        title = _ref4.title,
        nTweets = _ref4.nTweets;
    return /*#__PURE__*/_react["default"].createElement(TendencesBox, {
      key: id,
      type: type,
      title: title,
      nTweets: nTweets
    });
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "explore_login_box"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "explore_login_image"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "explore_login_text"
  }, /*#__PURE__*/_react["default"].createElement("strong", null, "Mira lo que est\xE1 pasando en el mundo en este momento")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "explore_login_email"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "explore_login_title"
  }, "Correo"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "explore_input_box"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    ref: emailRef,
    type: "email",
    className: "explore_input"
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "explore_login_password"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "explore_login_title"
  }, "Contrase\xF1a"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "explore_input_box"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    ref: passwordRef,
    type: "password",
    className: "explore_input"
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    onClick: function onClick(event) {
      submitClick(event);
    },
    className: "explore_button_login"
  }, "Iniciar Sesi\xF3n"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "explore_login_o"
  }, "O"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "explore_button_registrer"
  }, "Registrarse")))));
};

var TendencesBox = function TendencesBox(_ref5) {
  var type = _ref5.type,
      title = _ref5.title,
      nTweets = _ref5.nTweets;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "tendences_box"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      color: 'whitesmoke',
      fontSize: '11px'
    }
  }, type), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      color: 'white',
      fontSize: '17px'
    }
  }, /*#__PURE__*/_react["default"].createElement("strong", null, title)), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      color: 'whitesmoke',
      fontSize: '13px'
    }
  }, nTweets === 0 ? '' : "".concat(nTweets, " Tweets")));
};

var _default = Explore;
exports["default"] = _default;
//# sourceMappingURL=Explore.js.map