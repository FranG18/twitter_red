"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postTweet = exports.getUserData = exports.logout = exports.login = exports.isAuthenticated = exports.getUsers = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _regeneratorRuntime = _interopRequireWildcard(require("regenerator-runtime"));

var _querystring = _interopRequireDefault(require("querystring"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var apiGraphUrl = 'http://localhost:3000/graphql';
var apiUrl = 'http://localhost:3000/api/';
var queries = {
  getUsers: "query{\n        users{\n          _id\n          userName\n          profile\n          email\n        }\n      }",
  getUsersEmails: "{\n        users{\n        _id\n        email\n        }\n    }"
};

var getUsers = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime["default"].mark(function _callee() {
    var _yield$axios$post, data;

    return _regeneratorRuntime["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _axios["default"].post(apiGraphUrl, {
              query: queries.getUsers
            });

          case 3:
            _yield$axios$post = _context.sent;
            data = _yield$axios$post.data;
            return _context.abrupt("return", data);

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            return _context.abrupt("return", []);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));

  return function getUsers() {
    return _ref.apply(this, arguments);
  };
}();

exports.getUsers = getUsers;

var isAuthenticated = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime["default"].mark(function _callee2() {
    var _yield$axios$get, data;

    return _regeneratorRuntime["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _axios["default"].get("".concat(apiUrl, "authenticated"));

          case 3:
            _yield$axios$get = _context2.sent;
            data = _yield$axios$get.data;
            return _context2.abrupt("return", data.authenticated);

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 8]]);
  }));

  return function isAuthenticated() {
    return _ref2.apply(this, arguments);
  };
}();

exports.isAuthenticated = isAuthenticated;

var login = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime["default"].mark(function _callee3(email, password) {
    var data, response;
    return _regeneratorRuntime["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            data = {
              email: email,
              password: password
            };
            _context3.prev = 1;
            _context3.next = 4;
            return (0, _axios["default"])({
              method: 'POST',
              url: "".concat(apiUrl, "login"),
              headers: {
                'content-type': 'application/x-www-form-urlencoded'
              },
              data: _querystring["default"].stringify(data)
            });

          case 4:
            response = _context3.sent;
            return _context3.abrupt("return", response);

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](1);
            console.log(_context3.t0);

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 8]]);
  }));

  return function login(_x, _x2) {
    return _ref3.apply(this, arguments);
  };
}();

exports.login = login;

var logout = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime["default"].mark(function _callee4() {
    var response;
    return _regeneratorRuntime["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _axios["default"].get("".concat(apiUrl, "logout"));

          case 3:
            response = _context4.sent;
            return _context4.abrupt("return", response);

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0);

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 7]]);
  }));

  return function logout() {
    return _ref4.apply(this, arguments);
  };
}();

exports.logout = logout;

var getUserData = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime["default"].mark(function _callee5() {
    var response;
    return _regeneratorRuntime["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _axios["default"].get("".concat(apiUrl, "user"));

          case 3:
            response = _context5.sent;
            return _context5.abrupt("return", response);

          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5["catch"](0);
            console.log(_context5.t0);

          case 10:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 7]]);
  }));

  return function getUserData() {
    return _ref5.apply(this, arguments);
  };
}();

exports.getUserData = getUserData;

var postTweet = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime["default"].mark(function _callee6(tweetText) {
    var response;
    return _regeneratorRuntime["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return (0, _axios["default"])({
              method: 'POST',
              url: "".concat(apiUrl, "createtweet"),
              headers: {
                'content-type': 'application/x-www-form-urlencoded'
              },
              data: _querystring["default"].stringify({
                text: tweetText
              })
            });

          case 3:
            response = _context6.sent;
            return _context6.abrupt("return", response);

          case 7:
            _context6.prev = 7;
            _context6.t0 = _context6["catch"](0);
            console.log(_context6.t0);

          case 10:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 7]]);
  }));

  return function postTweet(_x3) {
    return _ref6.apply(this, arguments);
  };
}();

exports.postTweet = postTweet;
//# sourceMappingURL=apiServices.js.map