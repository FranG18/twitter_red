import mongoose from 'mongoose'

const Schema=mongoose.Schema

const tweetSchema=new Schema({
    userId:String,
    text:String,
    likes:Array,
    retweets:Array,
    parent:String,
    childrens:Array
},{
    timestamps:true
})

const model=mongoose.model('Tweet',tweetSchema)

export default model

