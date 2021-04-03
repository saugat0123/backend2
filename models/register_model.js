const mongoose=require('mongoose');
const Register=mongoose.model('Register',{
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    userType:{
        type:String,
        enum:['Admin','Customer'],
        default:'Customer'
    }
})
module.exports=Register;