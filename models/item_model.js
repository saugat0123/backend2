const mongoose = require('mongoose')

const Item = mongoose.model('Item',{
    itemName: {
        type: String,
        required: true
    },
    itemImage: {
        type: String,
    },
    itemType:{
        type: String
    },
    itemPrice:{
        type: Number,
        required: true
    },
    itemRating:{
        type: Number
    }
})

module.exports = Item