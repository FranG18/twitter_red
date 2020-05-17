"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

require("./Home.css");

var _apiServices = require("../../services/apiServices");

var _reactRouterDom = require("react-router-dom");

var _ChargePage = _interopRequireDefault(require("../ChargePage"));

var _MainNavbar = _interopRequireDefault(require("../MainNavbar"));

var _profileUser = _interopRequireDefault(require("../../assets/profile-user.svg"));

var _add_photo_logo = _interopRequireDefault(require("../../assets/logos/add_photo_logo.svg"));

var _emoticon_logo = _interopRequireDefault(require("../../assets/logos/emoticon_logo.svg"));

var _inquest_logo = _interopRequireDefault(require("../../assets/logos/inquest_logo.svg"));

var _gif_logo = _interopRequireDefault(require("../../assets/logos/gif_logo.svg"));

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

var Home = function Home(props) {
  /*States*/
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];
  /*History*/


  var history = (0, _reactRouterDom.useHistory)();
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

                if (!response) {
                  history.replace('/login');
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
        return _ref.apply(this, arguments);
      };
    }();

    action();
  }, []);

  if (props.location.state && props.location.state.direct) {
    return /*#__PURE__*/_react["default"].createElement(HomePage, null);
  } else {
    return /*#__PURE__*/_react["default"].createElement("div", null, show ? /*#__PURE__*/_react["default"].createElement(HomePage, null) : /*#__PURE__*/_react["default"].createElement(_ChargePage["default"], null));
  }
};

var HomePage = function HomePage() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "home_container"
  }, /*#__PURE__*/_react["default"].createElement(_MainNavbar["default"], {
    itemSelect: "Inicio"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "home_content_box"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "home_content_start"
  }, /*#__PURE__*/_react["default"].createElement("strong", null, "Inicio")), /*#__PURE__*/_react["default"].createElement(TweetInput, null), /*#__PURE__*/_react["default"].createElement(TweetListBox, null)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "home_search_extra"
  }));
};

var TweetInput = function TweetInput() {
  var _useState3 = (0, _react.useState)('tweet_input'),
      _useState4 = _slicedToArray(_useState3, 2),
      inputClass = _useState4[0],
      setInputClass = _useState4[1];

  var _useState5 = (0, _react.useState)('tweet_input_button_button'),
      _useState6 = _slicedToArray(_useState5, 2),
      buttonClass = _useState6[0],
      setButtonClass = _useState6[1];

  var inputRef = (0, _react.useRef)();

  var handleFocus = function handleFocus(event) {
    setInputClass('tweet_input input_focus');
  };

  var handleBlur = function handleBlur(event) {
    setInputClass('tweet_input');
  };

  var handleClick = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(event) {
      var text, response;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              text = inputRef.current.value;

              if (!text) {
                _context2.next = 12;
                break;
              }

              _context2.prev = 2;
              _context2.next = 5;
              return (0, _apiServices.postTweet)(text);

            case 5:
              response = _context2.sent;

              if (response.status === 200) {
                console.log('Tweet Creado');
                inputRef.current.value = '';
              }

              _context2.next = 12;
              break;

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](2);
              console.log(_context2.t0);

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[2, 9]]);
    }));

    return function handleClick(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleChange = function handleChange(event) {
    if (event.target.value) {
      setButtonClass('tweet_input_button_button active');
    } else {
      setButtonClass('tweet_input_button_button');
    }
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "tweet_input_container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "tweet_input_profile"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: _profileUser["default"]
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "tweet_input_input"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    ref: inputRef,
    onChange: function onChange(event) {
      handleChange(event);
    },
    onBlur: function onBlur(event) {
      handleBlur(event);
    },
    onFocus: function onFocus(event) {
      handleFocus(event);
    },
    className: inputClass,
    placeholder: "\xBFQu\xE9 est\xE1 pasando?",
    type: "text"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "tweet_input_extras"
  }, /*#__PURE__*/_react["default"].createElement(TweetExtras, {
    src: _add_photo_logo["default"]
  }), /*#__PURE__*/_react["default"].createElement(TweetExtras, {
    src: _gif_logo["default"]
  }), /*#__PURE__*/_react["default"].createElement(TweetExtras, {
    src: _inquest_logo["default"]
  }), /*#__PURE__*/_react["default"].createElement(TweetExtras, {
    src: _emoticon_logo["default"]
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "tweet_input_button",
    onClick: function onClick(event) {
      handleClick(event);
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: buttonClass
  }, "Twittear")));
};

var TweetExtras = function TweetExtras(_ref3) {
  var src = _ref3.src;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "tweet_extra_container"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    className: "tweet_extra_icon",
    src: src
  }));
};

var TweetListBox = function TweetListBox() {
  return /*#__PURE__*/_react["default"].createElement("div", null);
};

var _default = Home;
exports["default"] = _default;
//# sourceMappingURL=Home.js.map