const mongoose = require('mongoose')

const Customer = mongoose.model('Customer', {
    firstName: {
        type: String,
        required : true
        },

    lastName: {
            type: String,
            required : true
            },

    password: {
        type: String,
        required : true
        },

    address: {
    type: String
    },

    phone: {
        type: String
        },

    email: {
            type: String,
            required : true,
            unique : true
            },
   })

module.exports = Customer