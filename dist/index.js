"use strict";

var _app = _interopRequireDefault(require("./app"));

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_app["default"].set('port', process.env.PORT || 3000);

var mongo_url = 'mongodb://localhost:27017/TwitterRed';
_mongoose["default"].Promise = global.Promise;

_mongoose["default"].connect(mongo_url).then(function () {
  console.log('Conexion a la base de datos exitosa');

  _app["default"].listen(_app["default"].get('port'), function () {
    console.log("Servidor corriendo correctamente en ".concat(_app["default"].get('port')));
  });
})["catch"](function (error) {
  console.log(error);
});
//# sourceMappingURL=index.js.map