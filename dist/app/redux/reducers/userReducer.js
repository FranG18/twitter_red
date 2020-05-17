"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _userActions = require("../actions/userActions");

var initialState = {
  data: false,
  name: '',
  userName: ''
};

function user() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _userActions.SETUSER:
      return {
        data: true,
        name: action.payload.name,
        userName: action.payload.userName
      };

    default:
      return state;
  }
}

var _default = user;
exports["default"] = _default;
//# sourceMappingURL=userReducer.js.map