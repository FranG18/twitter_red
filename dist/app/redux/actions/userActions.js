"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setUser = exports.SETUSER = void 0;
//Constantes
var SETUSER = 'SETUSER';
exports.SETUSER = SETUSER;

var setUser = function setUser(user) {
  return {
    type: SETUSER,
    payload: user
  };
};

exports.setUser = setUser;
//# sourceMappingURL=userActions.js.map