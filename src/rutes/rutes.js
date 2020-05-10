import express from 'express';
import multipart from 'connect-multiparty';
import Controller from '../controllers/controller';
import {postSignup,postLogin,logout} from '../controllers/userController';
import {estaAutenticado} from '../config/passport';

const router=express.Router();
const multipartMiddleware=multipart({uploadDir:'./uploads'});

router.get('/test',Controller.test);
router.get('/authenticated',Controller.isAuthenticated);
router.post('/signup',postSignup);
router.post('/login',postLogin);
router.get('/logout',estaAutenticado,logout);

export default router;