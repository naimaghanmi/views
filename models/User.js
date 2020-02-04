const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
 phone:{
        type:String,
        required:true,
    },
    address:{
        type:String
    },
   job:{
       type:String
   },
   tarif:{
       type:Number
   }

});
module.exports=mongoose.model('User',userSchema);