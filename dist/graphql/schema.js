"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _graphqlTools = require("graphql-tools");

var _resolver = require("./resolver");

var typeDefs = "\ntype Query {\n    hello: String\n    greet(name:String!):String\n    users:[User]\n}\ntype User{\n    _id:ID\n    userName:String\n    description:String\n    sex:String\n    email:String\n    password:String\n    profile:String\n}\ninput UserInput{\n    userName:String\n    description:String\n    sex:String\n    email:String\n    password:String\n    profile:String\n}\ntype Mutation{\n    createUser(input:UserInput): User\n}\n";

var _default = (0, _graphqlTools.makeExecutableSchema)({
  typeDefs: typeDefs,
  resolvers: _resolver.resolvers
});

exports["default"] = _default;
//# sourceMappingURL=schema.js.map