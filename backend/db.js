const mongoose=require('mongoose');
const envi=require('dotenv').config();
const mongoURI=process.env.REACT_APP_URL;
const connectToMongo=()=>{
    mongoose.connect(mongoURI,()=>{
        console.log(' Sucessfully Connected to mongo')
    })
}
module.exports=connectToMongo;
