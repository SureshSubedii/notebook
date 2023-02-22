const mongoose=require('mongoose');
const envi=require('dotenv').config();
const mongoURI=process.env.URL;
const connectToMongo=()=>{
    mongoose.connect(mongoURI,()=>{
        console.log(' Sucessfully Connected to mongo')
    })
}
module.exports=connectToMongo;
