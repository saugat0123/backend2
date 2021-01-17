const express = require('express')
const Customer = require('../models/customer_model')
const router = express.Router()

router.post("/insert", (req, res) => {
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const username = req.body.username
    const password = req.body.password
    const dob = req.body.dob
    const address = req.body.address
    const phone = req.body.phone
    const email = req.body.email
    console.log(req.body)
    const data = new Customer({
        firstName: firstName,
        lastName: lastName,
        username: username,
        password: password,
        dob: dob,
        address: address,
        phone: phone,
        email: email
        })
        data.save()
    });

module.exports = router