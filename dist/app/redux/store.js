"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _reducers = _interopRequireDefault(require("./reducers"));

var _reduxLogger = _interopRequireDefault(require("redux-logger"));

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//Midlewares
var store = (0, _redux.createStore)(_reducers["default"], (0, _redux.applyMiddleware)(_reduxLogger["default"], _reduxThunk["default"]));
var _default = store;
exports["default"] = _default;
//# sourceMappingURL=store.js.map