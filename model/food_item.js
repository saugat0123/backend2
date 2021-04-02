const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema(
    {
        itemName : {
            type : String,
            required : [true,'Enter food name']
        },
        itemType : {
            type : String,
            required : [true,'Enter food type']
        },
    
        itemPrice: {
            type: String,
            required : [true,'Enter food price']
            },
        
        itemRating: {
            type: String
        },
        photo: {
            type: String,
            default: "no-photo.jpg",
          },
          createdAt: {
            type: Date,
            default: Date.now,
          },
    }
);


module.exports = mongoose.model("Item",ItemSchema);
