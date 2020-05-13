import express from 'express';
import multipart from 'connect-multiparty';
import controller from '../controllers/controller';
import {postSignup,postLogin,logout} from '../controllers/userController';
import {estaAutenticado} from '../config/passport';

const router=express.Router();
const multipartMiddleware=multipart({uploadDir:'./uploads'});

router.get('/test',controller.test)
router.get('/authenticated',controller.isAuthenticated)
router.post('/signup',postSignup)
router.post('/login',postLogin)
router.post('/createtweet',estaAutenticado,controller.createTweet)
router.put('/liked',estaAutenticado,controller.likeTweet)
router.put('/retweet',estaAutenticado,controller.retweetTweet)
router.put('/unliked',estaAutenticado,controller.unlikeTweet)
router.put('/unretweet',estaAutenticado,controller.unretweetTweet)
router.delete('/deletetweet',estaAutenticado,controller.deleteTweet)
router.get('/logout',estaAutenticado,logout);

export default router;