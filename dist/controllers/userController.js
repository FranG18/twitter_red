"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserData = exports.logout = exports.postLogin = exports.postSignup = void 0;

var _passport = _interopRequireDefault(require("passport"));

var _User = _interopRequireDefault(require("../models/User"));

var _regeneratorRuntime = _interopRequireDefault(require("regenerator-runtime"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var postSignup = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime["default"].mark(function _callee(req, res, next) {
    var _req$body, name, email, password, userName, user, usuario;

    return _regeneratorRuntime["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, email = _req$body.email, password = _req$body.password;
            userName = '';

          case 2:
            if (!(userName === '')) {
              _context.next = 10;
              break;
            }

            userName = "".concat(name).concat(10000 + Math.round(Math.random() * 500000));
            _context.next = 6;
            return _User["default"].findOne({
              userName: userName
            });

          case 6:
            user = _context.sent;
            if (user) userName = '';
            _context.next = 2;
            break;

          case 10:
            usuario = new _User["default"]({
              name: name,
              userName: userName,
              email: email,
              password: password,
              followers: [],
              tweets: [],
              following: [],
              retweets: [],
              liked: [],
              userPhoto: ''
            });

            _User["default"].findOne({
              email: email
            }, function (err, user) {
              if (err) return res.status(400).send({
                message: 'Problema al crear al usuario'
              });

              if (user) {
                return res.status(200).send({
                  message: 'Este email ya esta en uso'
                });
              } else {
                usuario.save(function (err) {
                  if (err) next(err);
                  req.logIn(usuario, function (err) {
                    if (err) next(err);
                    res.send('Usuario creado exitosamente');
                  });
                });
              }
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function postSignup(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.postSignup = postSignup;

var postLogin = function postLogin(req, res, next) {
  _passport["default"].authenticate('local', function (err, user, info) {
    if (err) next(err);

    if (!user) {
      return res.status(400).send({
        message: 'Email o contraseña no validos'
      });
    }

    req.logIn(user, function (err) {
      if (err) next(err);
      res.send({
        message: 'Login Exitoso'
      });
    });
  })(req, res, next);
};

exports.postLogin = postLogin;

var logout = function logout(req, res) {
  req.logout();
  res.send({
    message: 'Logout Exitoso'
  });
};

exports.logout = logout;

var getUserData = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime["default"].mark(function _callee2(req, res) {
    var _id, user;

    return _regeneratorRuntime["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _id = req.user._id;
            _context2.prev = 1;
            _context2.next = 4;
            return _User["default"].findById(_id).select('name userName userPhoto');

          case 4:
            user = _context2.sent;
            return _context2.abrupt("return", res.status(200).send({
              user: user
            }));

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            return _context2.abrupt("return", res.status(400).send({
              error: _context2.t0
            }));

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 8]]);
  }));

  return function getUserData(_x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getUserData = getUserData;
//# sourceMappingURL=userController.js.map