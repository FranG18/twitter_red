import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';

const Schema=mongoose.Schema;

const userSchema=new Schema({
    name:String,
    userName:String,
    email:String,
    password:String,
    followers:Array,
    following:Array,
    tweets:Array,
    retweets:Array,
    liked:Array,
    userPhoto:String
},{
    timestamps:true
}
);

userSchema.pre('save',function(next){
    const usuario=this;
    if(!usuario.isModified('password')){
        return next();
    }

    bcrypt.genSalt(10,(err,salt)=>{
        if(err) next(err);

        bcrypt.hash(usuario.password,salt,null,(err,hash)=>{
            if(err) next(err);

            usuario.password=hash;
            next();
        });    
    })
});

userSchema.methods.compararPassword=function(password,cb){
    bcrypt.compare(password,this.password,(err,isTrue)=>{
        if(err) return cb(err);

        cb(null,isTrue);
    }
    
    );
}

const model=mongoose.model('User',userSchema);

export default model;