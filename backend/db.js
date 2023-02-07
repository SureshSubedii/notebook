const mongoose=require('mongoose');
const mongoURI='mongodb+srv://Suresh_11:sx8QPFwYoNEX5BSg@cluster0.ivodyjl.mongodb.net/notebook';
const connectToMongo=()=>{
    mongoose.connect(mongoURI,()=>{
        console.log(' Sucessfully Connected to mongo')
    })
}
module.exports=connectToMongo;
