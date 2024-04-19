const mongoose=require('mongoose');
const localDb='mongodb://127.0.0.1:27017/user-authentication';
const connectDB=async()=>{
    try{
        await mongoose.connect(localDb);
        console.log('connected to db');
    }catch(err){
        console.log(err.message);
        process.exit(1);
    }
}
module.exports=connectDB