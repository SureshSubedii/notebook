const mongoose = require('mongoose');
const { Schema } = mongoose;
const UserSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    gender:{
        type:String
       
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    password:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model('user',UserSchema) //Here, user is the collection name in the database