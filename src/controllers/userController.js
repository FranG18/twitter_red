import passport from 'passport';
import User from '../models/User';
import regeneratorRuntime from "regenerator-runtime";

export const postSignup= async(req,res,next)=>{
    
    const {name,email,password}=req.body;
    let userName='';
    while(userName===''){
        userName=`${name}${10000+Math.round(Math.random()*500000)}`
        const user=await User.findOne({userName});
        if(user) userName='';
    }
    const usuario=new User({
        name,
        userName:userName,
        email:email,
        password:password,
        followers:[],
        tweets:[],
        following:[],
        retweets:[],
        liked:[],
        userPhoto:''
    });
    User.findOne({email},(err,user)=>{
        if(err) return res.status(400).send({message:'Problema al crear al usuario'});
        
        if(user){
            return res.status(200).send({message:'Este email ya esta en uso'});
        }else{
            usuario.save((err)=>{
                if(err) next(err);
        
                req.logIn(usuario,(err)=>{
                    if(err) next(err);
        
                    res.send('Usuario creado exitosamente');
                })
            })
        }
    })
    
}

export const postLogin=(req,res,next)=>{
    passport.authenticate('local',(err,user,info)=>{
        if(err) next(err);

        if(!user){
            return res.status(400).send({message:'Email o contraseña no validos'});
        }
        req.logIn(user,(err)=>{
            if(err) next(err);

            res.send({message:'Login Exitoso'});
        })
    })(req,res,next);
}

export const logout=(req,res)=>{
    req.logout();
    res.send({message:'Logout Exitoso'});
}

export const getUserData= async(req,res)=>{
    const {_id}=req.user
    try{
        const user=await User.findById(_id).select('name userName userPhoto')
        return res.status(200).send({user})
    }catch(error){
        return res.status(400).send({error})
    }

}