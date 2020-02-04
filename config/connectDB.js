const mongoose=require('mongoose')
const config=require('config')
const connectDB =()=>{

    mongoose.connect(config.get('MONGOURI'))
   .then(()=>console.log("mongoose connected !!!!!!"))
   .catch(err=>console.log('error to connect db'))
   
   }
   
   module.exports=connectDB