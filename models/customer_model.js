const mongoose = require('mongoose')

const Customer = mongoose.model('Customer', {
    firstName: {
        type: String
        },

    lastName: {
            type: String
            },
            
    username: {
    type: String
    },

    password: {
        type: String
        },

    dob: {
        type: String
        },

    address: {
    type: String
    },

    phone: {
        type: String
        },

    email: {
            type: String
            },
   })

module.exports = Customer