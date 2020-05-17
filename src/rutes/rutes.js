import express from 'express';
import multipart from 'connect-multiparty';
import controller from '../controllers/controller';
import {postSignup,postLogin,logout,getUserData} from '../controllers/userController';
import {estaAutenticado} from '../config/passport';

const router=express.Router();
const multipartMiddleware=multipart({uploadDir:'./uploads'});

/* GET Method*/ 

router.get('/test',controller.test)
router.get('/authenticated',controller.isAuthenticated)
router.get('/tweet',controller.getTweet),
router.get('/alltweets',controller.getAllTweets)
router.get('/tweets',controller.getTweets)
router.get('/user',estaAutenticado,getUserData)
router.get('/logout',estaAutenticado,logout);

/*POST Method*/

router.post('/signup',postSignup)
router.post('/login',postLogin)
router.post('/createtweet',estaAutenticado,controller.createTweet)

/*PUT Method*/

router.put('/liked',estaAutenticado,controller.likeTweet)
router.put('/retweet',estaAutenticado,controller.retweetTweet)
router.put('/unliked',estaAutenticado,controller.unlikeTweet)
router.put('/unretweet',estaAutenticado,controller.unretweetTweet)

/*DELETE Method*/

router.delete('/deletetweet',estaAutenticado,controller.deleteTweet)


export default router;