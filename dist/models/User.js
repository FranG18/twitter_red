"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _bcryptNodejs = _interopRequireDefault(require("bcrypt-nodejs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema;
var userSchema = new Schema({
  name: String,
  userName: String,
  email: String,
  password: String,
  followers: Array,
  following: Array,
  tweets: Array,
  retweets: Array,
  liked: Array,
  userPhoto: String
}, {
  timestamps: true
});
userSchema.pre('save', function (next) {
  var usuario = this;

  if (!usuario.isModified('password')) {
    return next();
  }

  _bcryptNodejs["default"].genSalt(10, function (err, salt) {
    if (err) next(err);

    _bcryptNodejs["default"].hash(usuario.password, salt, null, function (err, hash) {
      if (err) next(err);
      usuario.password = hash;
      next();
    });
  });
});

userSchema.methods.compararPassword = function (password, cb) {
  _bcryptNodejs["default"].compare(password, this.password, function (err, isTrue) {
    if (err) return cb(err);
    cb(null, isTrue);
  });
};

var model = _mongoose["default"].model('User', userSchema);

var _default = model;
exports["default"] = _default;
//# sourceMappingURL=User.js.map