const { json } = require('express')
const express = require('express')
const { verifyUser } = require('../middleware/auth')
const router = express.Router()
const Cart = require('../models/cart')
const Item = require('../models/item')
const date = new Date().toLocaleDateString("en-US").split("/").toString()

router.post('/add/cart/:pid', function (req, res) {
    console.log(req.user)
    const userId = req.body.id
    const ProductId = req.params.pid

    const data = new Cart({ UserId: userId, ProductId: ProductId })
    data.save().then(function (r) {
        console.log("Booking ma chiryo")
        res.status(200).json({
            message: "Added to cart!!",
            status: true
        })
    })
    .catch((err) => {
        console.log(err)

    })

})










router.get('/booking/show', verifyUser, function (req, res) {
    const id = req.userInfo._id

    Cart.find({ UserId: id }).populate('UserId').populate('ProductId').then(function (data) {
        console.log(data)
        let total = 0
        data.map((item) => {

            let qty = item.Qty
            let price = item.ProductId.pprice;
            total += price * qty




        })
        res.status(200).json({ data: data, total: total })
    }).catch()
})


router.delete('/delete/:id', function (req, res) {
    Cart.findByIdAndDelete({ _id: req.params.id }).then(function (result) {
        console.log("de;lads")
    })
})



module.exports = router;