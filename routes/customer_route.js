const express = require('express');
const { check, validationResult } = require('express-validator');
const Customer = require('../models/customer_model')
const router = express.Router()
const bcryptjs = require('bcryptjs')

router.post('/insert/customer',[
    check('firstName','Username is required').not().isEmpty(),
    check('lastName','Last Name is required').not().isEmpty(),
    check('username','Username is required').not().isEmpty(),
    check('password','Password is required').not().isEmpty(),
    check('email','Email is required').not().isEmpty()
], 
function(req,res) {
    const validationError = validationResult(req)
    res.send(validationError.array())

    // validation
    if(validationError.isEmpty()){ 
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const username = req.body.username
    const password = req.body.password
    bcryptjs.hash(password, 10, function(e, hash_password){
        const data = new Customer({
            firstName: firstName,
            lastName: lastName,
            username: username,
            password: hash_password,
            address: address,
            phone: phone,
            email: email
            })
            data.save()
    })
    const address = req.body.address
    const phone = req.body.phone
    const email = req.body.email
    console.log(req.body)
    
    }
    else{
        res.send(validationError.array())
    }
    });

module.exports = router