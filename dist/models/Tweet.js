"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema;
var tweetSchema = new Schema({
  userId: String,
  text: String,
  likes: Array,
  retweets: Array,
  parent: String,
  childrens: Array
}, {
  timestamps: true
});

var model = _mongoose["default"].model('Tweet', tweetSchema);

var _default = model;
exports["default"] = _default;
//# sourceMappingURL=Tweet.js.map