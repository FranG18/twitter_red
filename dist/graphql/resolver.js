"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolvers = void 0;

var _User = _interopRequireDefault(require("../models/User"));

var _regeneratorRuntime = _interopRequireDefault(require("regenerator-runtime"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var resolvers = {
  Query: {
    hello: function hello() {
      return 'Hello Word with graphqlssss';
    },
    greet: function greet(root, _ref) {
      var name = _ref.name;
      return "Hola ".concat(name);
    },
    users: function () {
      var _users = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime["default"].mark(function _callee(_, args, con) {
        var _users2;

        return _regeneratorRuntime["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log(con);
                _context.prev = 1;
                _context.next = 4;
                return _User["default"].find({});

              case 4:
                _users2 = _context.sent;
                return _context.abrupt("return", _users2);

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](1);
                console.log(_context.t0);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 8]]);
      }));

      function users(_x, _x2, _x3) {
        return _users.apply(this, arguments);
      }

      return users;
    }()
  },
  Mutation: {
    createUser: function () {
      var _createUser = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime["default"].mark(function _callee2(_, _ref2) {
        var input, user;
        return _regeneratorRuntime["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                input = _ref2.input;
                _context2.next = 3;
                return _User["default"].create(input);

              case 3:
                user = _context2.sent;
                return _context2.abrupt("return", user);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function createUser(_x4, _x5) {
        return _createUser.apply(this, arguments);
      }

      return createUser;
    }()
  }
};
exports.resolvers = resolvers;
//# sourceMappingURL=resolver.js.map