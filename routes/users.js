const User =require('../models/User')
const express=require('express')
const router=express.Router()

router.get('/get',(req,res)=>{
   User.find()
   .then(users=>res.send(users))
   .catch(err=>console.log(err))})
router.post("/add",(req,res)=>{
   const {name,email,phone,address,job,tarif} = req.body
    const newUser= new User({
        name,
        email,
        phone,
       address,
        job,
        tarif
       
    })
newUser.save()
    .then(users=>res.send(users))
    .catch(err=>console.log(err))
});
router.delete('/delete/:id',(req,res)=>
{ const {id}=req.params
    User.findOneAndDelete({_id:id})
    .then(users=>res.send(users))
    .catch(err=>console.log(err))
})
router.put('/edit/:id',(req,res)=>
{  const {id}=req.params
console.log('id', id)
    const {name,email,phone,address,job,tarif} =req.body
  User.findOneAndUpdate({_id:id},{$set:{name,email,phone,address,job,tarif} })
    .then(users=>res.send(users))
    .catch(err=>console.log(err))
})

module.exports=router;