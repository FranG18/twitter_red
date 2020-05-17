"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Tweet = _interopRequireDefault(require("../models/Tweet"));

var _User = _interopRequireDefault(require("../models/User"));

var _regeneratorRuntime = _interopRequireWildcard(require("regenerator-runtime"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var controller = {
  test: function test(req, res) {
    return res.status(200).send({
      message: 'Prueba API'
    });
  },
  isAuthenticated: function isAuthenticated(req, res) {
    if (req.isAuthenticated()) {
      return res.status(200).send({
        authenticated: true
      });
    } else {
      return res.status(200).send({
        authenticated: false
      });
    }
  },
  createTweet: function () {
    var _createTweet = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime["default"].mark(function _callee(req, res) {
      var _req$body, text, parent, _id, newTweet, data, user, tweetParent;

      return _regeneratorRuntime["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _req$body = req.body, text = _req$body.text, parent = _req$body.parent;
              _id = req.user._id;
              newTweet = new _Tweet["default"]({
                userId: _id,
                text: text,
                parent: parent ? parent : null,
                likes: [],
                retweets: [],
                childrens: []
              });
              _context.prev = 3;
              _context.next = 6;
              return newTweet.save();

            case 6:
              data = _context.sent;
              _context.next = 9;
              return _User["default"].findById(_id);

            case 9:
              user = _context.sent;
              _context.next = 12;
              return user.update({
                tweets: [].concat(_toConsumableArray(user.tweets), [data._id])
              });

            case 12:
              if (!parent) {
                _context.next = 18;
                break;
              }

              _context.next = 15;
              return _Tweet["default"].findById(parent);

            case 15:
              tweetParent = _context.sent;
              _context.next = 18;
              return tweetParent.update({
                childrens: [].concat(_toConsumableArray(tweetParent.childrens), [data._id])
              });

            case 18:
              return _context.abrupt("return", res.status(200).send({
                message: 'TweetCreado'
              }));

            case 21:
              _context.prev = 21;
              _context.t0 = _context["catch"](3);
              return _context.abrupt("return", res.status(400).send({
                error: _context.t0
              }));

            case 24:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[3, 21]]);
    }));

    function createTweet(_x, _x2) {
      return _createTweet.apply(this, arguments);
    }

    return createTweet;
  }(),
  deleteTweet: function () {
    var _deleteTweet = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime["default"].mark(function _callee2(req, res) {
      var tweetId, _id, tweet, user, parentTweet;

      return _regeneratorRuntime["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              tweetId = req.body.tweetId;
              _id = req.user._id;
              _context2.prev = 2;
              _context2.next = 5;
              return _Tweet["default"].findById(tweetId);

            case 5:
              tweet = _context2.sent;
              _context2.next = 8;
              return _User["default"].findById(_id);

            case 8:
              user = _context2.sent;
              user.tweets.splice(user.tweets.indexOf(tweetId), 1);
              _context2.next = 12;
              return user.save();

            case 12:
              if (!tweet.parent) {
                _context2.next = 19;
                break;
              }

              _context2.next = 15;
              return _Tweet["default"].findById(tweet.parent);

            case 15:
              parentTweet = _context2.sent;
              parentTweet.childrens.splice(parentTweet.childrens.indexOf(tweetId), 1);
              _context2.next = 19;
              return parentTweet.save();

            case 19:
              _context2.next = 21;
              return _Tweet["default"].findByIdAndDelete(tweetId);

            case 21:
              return _context2.abrupt("return", res.status(200).send({
                message: 'Tweet Eliminado'
              }));

            case 24:
              _context2.prev = 24;
              _context2.t0 = _context2["catch"](2);
              return _context2.abrupt("return", res.status(400).send({
                error: _context2.t0
              }));

            case 27:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[2, 24]]);
    }));

    function deleteTweet(_x3, _x4) {
      return _deleteTweet.apply(this, arguments);
    }

    return deleteTweet;
  }(),
  likeTweet: function () {
    var _likeTweet = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime["default"].mark(function _callee3(req, res) {
      var tweetId, _id, user, tweet;

      return _regeneratorRuntime["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              tweetId = req.body.tweetId;
              _id = req.user._id;
              _context3.prev = 2;
              _context3.next = 5;
              return _User["default"].findById(_id);

            case 5:
              user = _context3.sent;
              _context3.next = 8;
              return _Tweet["default"].findById(tweetId);

            case 8:
              tweet = _context3.sent;
              _context3.next = 11;
              return user.update({
                liked: [].concat(_toConsumableArray(user.liked), [tweetId])
              });

            case 11:
              _context3.next = 13;
              return tweet.update({
                likes: [].concat(_toConsumableArray(tweet.likes), [_id])
              });

            case 13:
              return _context3.abrupt("return", res.status(200).send({
                message: 'Like Guardado'
              }));

            case 16:
              _context3.prev = 16;
              _context3.t0 = _context3["catch"](2);
              return _context3.abrupt("return", res.status(400).send({
                error: _context3.t0
              }));

            case 19:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[2, 16]]);
    }));

    function likeTweet(_x5, _x6) {
      return _likeTweet.apply(this, arguments);
    }

    return likeTweet;
  }(),
  unlikeTweet: function () {
    var _unlikeTweet = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime["default"].mark(function _callee4(req, res) {
      var tweetId, _id, user, tweet;

      return _regeneratorRuntime["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              tweetId = req.body.tweetId;
              _id = req.user._id;
              _context4.prev = 2;
              _context4.next = 5;
              return _User["default"].findById(_id);

            case 5:
              user = _context4.sent;
              _context4.next = 8;
              return _Tweet["default"].findById(tweetId);

            case 8:
              tweet = _context4.sent;
              user.liked.splice(user.liked.indexOf(tweetId), 1);
              tweet.likes.splice(tweet.likes.indexOf(_id), 1);
              _context4.next = 13;
              return user.save();

            case 13:
              _context4.next = 15;
              return tweet.save();

            case 15:
              return _context4.abrupt("return", res.status(200).send({
                message: 'Like Cambiado'
              }));

            case 18:
              _context4.prev = 18;
              _context4.t0 = _context4["catch"](2);
              return _context4.abrupt("return", res.status(400).send({
                error: _context4.t0
              }));

            case 21:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[2, 18]]);
    }));

    function unlikeTweet(_x7, _x8) {
      return _unlikeTweet.apply(this, arguments);
    }

    return unlikeTweet;
  }(),
  retweetTweet: function () {
    var _retweetTweet = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime["default"].mark(function _callee5(req, res) {
      var tweetId, _id, user, tweet;

      return _regeneratorRuntime["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              tweetId = req.body.tweetId;
              _id = req.user._id;
              _context5.prev = 2;
              _context5.next = 5;
              return _User["default"].findById(_id);

            case 5:
              user = _context5.sent;
              _context5.next = 8;
              return _Tweet["default"].findById(tweetId);

            case 8:
              tweet = _context5.sent;
              _context5.next = 11;
              return user.update({
                retweets: [].concat(_toConsumableArray(user.retweets), [tweetId])
              });

            case 11:
              _context5.next = 13;
              return tweet.update({
                retweets: [].concat(_toConsumableArray(tweet.retweets), [_id])
              });

            case 13:
              return _context5.abrupt("return", res.status(200).send({
                message: 'Reetweet Guardado'
              }));

            case 16:
              _context5.prev = 16;
              _context5.t0 = _context5["catch"](2);
              return _context5.abrupt("return", res.status(400).send({
                error: _context5.t0
              }));

            case 19:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[2, 16]]);
    }));

    function retweetTweet(_x9, _x10) {
      return _retweetTweet.apply(this, arguments);
    }

    return retweetTweet;
  }(),
  unretweetTweet: function () {
    var _unretweetTweet = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime["default"].mark(function _callee6(req, res) {
      var tweetId, _id, user, tweet;

      return _regeneratorRuntime["default"].wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              tweetId = req.body.tweetId;
              _id = req.user._id;
              _context6.prev = 2;
              _context6.next = 5;
              return _User["default"].findById(_id);

            case 5:
              user = _context6.sent;
              _context6.next = 8;
              return _Tweet["default"].findById(tweetId);

            case 8:
              tweet = _context6.sent;
              user.retweets.splice(user.retweets.indexOf(tweetId), 1);
              tweet.retweets.splice(tweet.retweets.indexOf(_id), 1);
              _context6.next = 13;
              return user.save();

            case 13:
              _context6.next = 15;
              return tweet.save();

            case 15:
              return _context6.abrupt("return", res.status(200).send({
                message: 'Reetweet Cambiado'
              }));

            case 18:
              _context6.prev = 18;
              _context6.t0 = _context6["catch"](2);
              return _context6.abrupt("return", res.status(400).send({
                error: _context6.t0
              }));

            case 21:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[2, 18]]);
    }));

    function unretweetTweet(_x11, _x12) {
      return _unretweetTweet.apply(this, arguments);
    }

    return unretweetTweet;
  }(),
  getTweet: function () {
    var _getTweet = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime["default"].mark(function _callee7(req, res) {
      var _id;

      return _regeneratorRuntime["default"].wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _id = req.query._id;
              _context7.prev = 1;
              _context7.t0 = res.status(200);
              _context7.next = 5;
              return _Tweet["default"].findById(_id);

            case 5:
              _context7.t1 = _context7.sent;
              _context7.t2 = {
                tweet: _context7.t1
              };
              return _context7.abrupt("return", _context7.t0.send.call(_context7.t0, _context7.t2));

            case 10:
              _context7.prev = 10;
              _context7.t3 = _context7["catch"](1);
              return _context7.abrupt("return", res.status(400).send({
                error: _context7.t3
              }));

            case 13:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, null, [[1, 10]]);
    }));

    function getTweet(_x13, _x14) {
      return _getTweet.apply(this, arguments);
    }

    return getTweet;
  }(),
  getAllTweets: function () {
    var _getAllTweets = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime["default"].mark(function _callee8(req, res) {
      return _regeneratorRuntime["default"].wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.prev = 0;
              _context8.t0 = res.status(200);
              _context8.next = 4;
              return _Tweet["default"].find({});

            case 4:
              _context8.t1 = _context8.sent;
              _context8.t2 = {
                tweets: _context8.t1
              };
              return _context8.abrupt("return", _context8.t0.send.call(_context8.t0, _context8.t2));

            case 9:
              _context8.prev = 9;
              _context8.t3 = _context8["catch"](0);
              return _context8.abrupt("return", res.status(400).send({
                error: _context8.t3
              }));

            case 12:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, null, [[0, 9]]);
    }));

    function getAllTweets(_x15, _x16) {
      return _getAllTweets.apply(this, arguments);
    }

    return getAllTweets;
  }(),
  getTweets: function () {
    var _getTweets = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime["default"].mark(function _callee9(req, res) {
      var _id;

      return _regeneratorRuntime["default"].wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              _id = req.query._id;
              _context9.prev = 1;
              _context9.t0 = res.status(200);
              _context9.next = 5;
              return _Tweet["default"].find({
                userId: _id
              });

            case 5:
              _context9.t1 = _context9.sent;
              _context9.t2 = {
                tweets: _context9.t1
              };
              return _context9.abrupt("return", _context9.t0.send.call(_context9.t0, _context9.t2));

            case 10:
              _context9.prev = 10;
              _context9.t3 = _context9["catch"](1);
              return _context9.abrupt("return", res.status(400).send({
                error: _context9.t3
              }));

            case 13:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9, null, [[1, 10]]);
    }));

    function getTweets(_x17, _x18) {
      return _getTweets.apply(this, arguments);
    }

    return getTweets;
  }()
};
var _default = controller;
exports["default"] = _default;
//# sourceMappingURL=controller.js.map