import User from '../models/User'

const controller={
    test:(req,res)=>res.status(200).send({message:'Prueba API'}),
    isAuthenticated:(req,res)=>{
        if(req.isAuthenticated()){
            return res.status(200).send({authenticated:true})
        }else{
            return res.status(200).send({authenticated:false})
        }
    }
}

module.exports=controller;