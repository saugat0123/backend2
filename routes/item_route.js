const express = require('express')
const { authCustomer } = require('../middleware/auth')
const router = express.Router()
const Item = require('../models/item_model')
const auth = require('../middleware/auth')

router.post('/item/insert' , function(req,res){
    const itemName = req.body.itemName
    const itemImage = req.body.itemImage
    const itemType = req.body.itemType
    const itemPrice = req.body.itemPrice
    const itemRating = req.body.itemRating

    const itemData  = new Item({
        itemName:itemName,
        itemImage: itemImage,
        itemType:itemType,
        itemPrice: itemPrice,
        itemRating: itemRating
    });
    itemData.save()
    .then(function(result){
        res.status(201).json({message : "Item Added!!"})
    })

    .catch(function(e){
        res.status(500).json({error : e})
    })

})

module.exports = router