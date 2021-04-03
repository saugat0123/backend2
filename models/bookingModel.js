const mongoose = require('mongoose');
const Product=require('./proteinModel');
const date = new Date().toLocaleDateString("en-US").split("/").toString()
const Booking = mongoose.model('Booking',{
 
UserId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Register',
    require:true
},
Qty:{
    type:Number,
    default:1
},
ProductId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Proteins'
},
Date:{
    type:String,
    default:date
}



 
});
 
module.exports =Booking