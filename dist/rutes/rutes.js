"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _connectMultiparty = _interopRequireDefault(require("connect-multiparty"));

var _controller = _interopRequireDefault(require("../controllers/controller"));

var _userController = require("../controllers/userController");

var _passport = require("../config/passport");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

var multipartMiddleware = (0, _connectMultiparty["default"])({
  uploadDir: './uploads'
});
/* GET Method*/

router.get('/test', _controller["default"].test);
router.get('/authenticated', _controller["default"].isAuthenticated);
router.get('/tweet', _controller["default"].getTweet), router.get('/alltweets', _controller["default"].getAllTweets);
router.get('/tweets', _controller["default"].getTweets);
router.get('/user', _passport.estaAutenticado, _userController.getUserData);
router.get('/logout', _passport.estaAutenticado, _userController.logout);
/*POST Method*/

router.post('/signup', _userController.postSignup);
router.post('/login', _userController.postLogin);
router.post('/createtweet', _passport.estaAutenticado, _controller["default"].createTweet);
/*PUT Method*/

router.put('/liked', _passport.estaAutenticado, _controller["default"].likeTweet);
router.put('/retweet', _passport.estaAutenticado, _controller["default"].retweetTweet);
router.put('/unliked', _passport.estaAutenticado, _controller["default"].unlikeTweet);
router.put('/unretweet', _passport.estaAutenticado, _controller["default"].unretweetTweet);
/*DELETE Method*/

router["delete"]('/deletetweet', _passport.estaAutenticado, _controller["default"].deleteTweet);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=rutes.js.map