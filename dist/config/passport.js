"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.estaAutenticado = void 0;

var _passport = _interopRequireDefault(require("passport"));

var _passportLocal = _interopRequireDefault(require("passport-local"));

var _User = _interopRequireDefault(require("../models/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var LocalStrategy = _passportLocal["default"].Strategy;

_passport["default"].serializeUser(function (usuario, done) {
  done(null, usuario._id);
});

_passport["default"].deserializeUser(function (id, done) {
  _User["default"].findById(id, function (err, usuario) {
    done(err, usuario);
  });
});

_passport["default"].use(new LocalStrategy({
  usernameField: 'email'
}, function (email, password, done) {
  _User["default"].findOne({
    email: email
  }, function (err, usuario) {
    if (!usuario) {
      return done(null, false, {
        message: "Este email ".concat(email, " no esta registrado")
      });
    } else {
      usuario.compararPassword(password, function (err, isEqual) {
        if (isEqual) {
          return done(null, usuario);
        } else {
          return done(null, false, {
            message: 'La contraseña no es valida'
          });
        }
      });
    }
  });
}));

var estaAutenticado = function estaAutenticado(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.status(401).send('Tienes que hacer login para acceder a este recurso');
  }
};

exports.estaAutenticado = estaAutenticado;
//# sourceMappingURL=passport.js.map