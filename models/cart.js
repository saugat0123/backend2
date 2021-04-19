const mongoose = require('mongoose');
const Product=require('./item');
const date = new Date().toLocaleDateString("en-US").split("/").toString()
const RowOfCart=new mongoose.Schema({
    productId:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'Product'
  },
  seller:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Register'
  },
  productName:{
    type:String,
      required:true
  },
  productPrice:{
    type:String,
    required:true
  },
  productImage:{
  type:String,
  required:true
  
  },
  
  quantity:{
    type:Number,
    required:true,
    default:1
  },
  total:{
    type:String,
    required:true
  }
  })
  
  const cartSchema= new mongoose.Schema
  ({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Register'
    },
    
    product:[RowOfCart]
  
  },{ timestamps: true });
  
  module.exports = mongoose.model('Cart',cartSchema)