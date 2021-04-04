const { json } = require('express');
const express = require('express');
const router = express.Router();
const Item = require('../models/item');
const auth = require('../middleware/auth');
const upload = require('../middleware/upload');

//insert paxi ko :,auth.verifyUser,auth.verifyAdmin
router.post('/add/item', upload.single('pimage'), function (req, res) {
    if (req.file == undefined) {
        return res.status(400).json({
            message: "Only jpg,jpeg,png,gif files are allowed"
        })
    }
    else {
        const itemName = req.body.itemName
        const itemType = req.body.itemType
        const itemPrice = req.body.itemPrice
        const itemRating = req.body.itemRating
        const itemImage = req.file.filename;

        const itemData = new Item({
            itemName: itemName,
            itemType: itemType,
            itemPrice: itemPrice,
            itemRating: itemRating,
            itemImage: itemImage
        });
        itemData.save()
            .then(function (result) {
                res.status(201).json({ message: "Item added!!" })
            })
            .catch(function (e) {
                res.status(500), json({ abc: e })
            })
    }
})

router.put("/update/item", auth.verifyUser, auth.verifyAdmin, function (req, res) {
    const ntitle = req.body.ptitle;
    const ndesc = req.body.pdesc;
    const nprice = req.body.pprice;
    const id = req.body.Id;


    Item.updateOne({ _id: id }, { ptitle: ntitle, pdesc: ndesc, pprice: nprice })
        .then(function (result) {
            res.status(200).json({ message: "Updated" })
        })
        .catch(function (e) {
            res.status(500).json({ error: e })
        })

})

//for delete
router.delete('/delete/item/:id', function (req, res) {
    const id = req.params.id
    Item.deleteOne({ _id: id })
        .then(function (result) {
            res.status(200).json({ status: success })
        })
        .catch(function (e) {
            res.status(200).json({ error: e })
        })
})

router.get("/item/all", function (req, res) {
    Item.find()
        .then(function (data) {
            res.status(200).json(data)
        })
        .catch(function (er) {
            res.status(500).json({ error: e })
        })
})

router.get("/item/:id", function (req, res) {
    const id = req.params.id;
    Item.findOne({ _id: id })
        .then(function (data) {
            res.status(200).json(data);
        })
        .catch(function (er) {
            res.status(500).json({ error: er })
        })
})

module.exports = router;