const express=require('express');
const { model } = require('mongoose');
const Register=require('../models/register_model');
// const{ route }=require('')
const router=express.Router();
const{check,validationResult}=require('express-validator');
const bcryptjs=require('bcryptjs');
const jwt=require('jsonwebtoken');


router.post('/register',[
    check('username','username not inserted!!').not().isEmpty(),
    check('password','password not inserted!!').not().isEmpty()
],function(req,res){
    const validationErr=validationResult(req);
//    console.log(req.body)
   // res.send(validationErr.array());
   if(validationErr.isEmpty()) 
   {
        const username=req.body.username;
        const password=req.body.password;
        const email=req.body.email;
        bcryptjs.hash(password,10,function(err,hash_password){
            const data=new Register({username:username,password:hash_password,email:email})
            data.save().then(function(result){
                res.status(201).json({message:"Registered!!"})
            }).catch(function(err1){
                res.status(500).json({message : err1})
            })

        })
        
   }
   else{
       res.status(400).json(validationErr.array())
   }
})


router.post('/user/login',function(req,res){
    const email=req.body.email;
    const password=req.body.password;

    Register.findOne({email:email})
    .then(function(customerData){
        if(customerData===null){
            //user not found
            return res.status(403).json({message:"invalid details!!"})
        }
        //found user
        bcryptjs.compare(password,customerData.password,function(err,result){
            if(result===false){
                return res.status(403).json({message:"invalid details!!"})
            }
            const token=jwt.sign({userId:customerData._id},'secretkey')
            res.status(200).json({
                token:token,
                message:"auth sucess!!",usertype:customerData.userType
            })
        })
    })
    .catch(function(e){
        res.status(500).json({error:e});
    })
})

module.exports=router;