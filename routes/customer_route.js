const express = require('express');
const { check, validationResult } = require('express-validator');
const Customer = require('../models/customer_model')
const router = express.Router()
const bcryptjs = require('bcryptjs')

router.post('/customer/insert',[
    check('firstName','Username is required').not().isEmpty(),
    check('lastName','Last Name is required').not().isEmpty(),
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
    const password = req.body.password
    const address = req.body.address
    const phone = req.body.phone
    const email = req.body.email

    bcryptjs.hash(password, 10, function(e, hash_password){
        const data = new Customer({
            firstName: firstName,
            lastName: lastName,
            password: hash_password,
            address: address,
            phone: phone,
            email: email
            })
            data.save()
            .then()
            .catch(function(err1){
                res.status(500).json({message : err1})
            })
    })
    
    }
    else{
        res.status(400).json(validationError.array())
    }
    });

router.get('/customer/insert',function(req,res){
    const email = req.body.email
    const password = req.body.password

    Customer.findOne({email : email})
    .then(function(customerData){ //customerData fetches entire row related to the email
        if(customerData===null){
            //no customer found
           return res.status(403).json({error_message : "Invalid credentials!"})
        }
        // customer found
        bcryptjs.compare( password, customerData.password, function(err, result){
            if(err == false){
                return res.status(403).json({error_message : "Invalid Password!"})
            }
            res.send("Correct Password")
        })

    })
    .catch()
})

module.exports = router