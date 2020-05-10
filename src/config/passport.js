import passport from 'passport';
import local from 'passport-local';
import User from '../models/User';

const LocalStrategy=local.Strategy;


passport.serializeUser((usuario,done)=>{
    done(null,usuario._id);
});

passport.deserializeUser((id,done)=>{
    User.findById(id,(err,usuario)=>{
        done(err,usuario);
    })
});


passport.use(new LocalStrategy(
    {usernameField:'email'},
    (email,password,done)=>{
        User.findOne({email},(err,usuario)=>{
            if(!usuario){
                return done(null,false,{message:`Este email ${email} no esta registrado`})
            }else{
                usuario.compararPassword(password,(err,isEqual)=>{
                    if(isEqual){
                        return done(null,usuario);
                    }else{
                        return done(null,false,{message:'La contraseña no es valida'})
                    }
                })
            }
        })
    }
));

export const estaAutenticado=(req,res,next)=>{
    if(req.isAuthenticated()){
        return next();
    }else{
        res.status(401).send('Tienes que hacer login para acceder a este recurso');
    }
}