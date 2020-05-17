"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

var _path = _interopRequireDefault(require("path"));

var _rutes = _interopRequireDefault(require("./rutes/rutes"));

var _expressGraphql = _interopRequireDefault(require("express-graphql"));

var _schema = _interopRequireDefault(require("./graphql/schema"));

var _expressSession = _interopRequireDefault(require("express-session"));

var _passport = _interopRequireDefault(require("passport"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var MongoStore = require('connect-mongo')(_expressSession["default"]);

var MONGO_URL = 'mongodb://localhost:27017/TwitterRed';
var app = (0, _express["default"])();
app.use('/graphql', (0, _expressGraphql["default"])({
  graphiql: true,
  schema: _schema["default"],
  context: {
    message: 'Mensaje desde el context'
  }
}));
app.use((0, _expressSession["default"])({
  secret: 'secret',
  resave: true,
  saveUninitialized: true,
  store: new MongoStore({
    url: MONGO_URL,
    autoReconnect: true
  })
}));
app.use(_passport["default"].initialize());
app.use(_passport["default"].session());
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use((0, _morgan["default"])('dev'));
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});
app.use(_express["default"]["static"](_path["default"].join(__dirname, 'public')));
app.use('/api', _rutes["default"]);
app.get('*', function (req, res) {
  return res.sendFile(_path["default"].resolve('src', 'public', 'index.html'));
});
var _default = app;
exports["default"] = _default;
//# sourceMappingURL=app.js.map