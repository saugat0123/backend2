const mongoose = require('mongoose')

const User = mongoose.model('User', {
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
            }
    // userType: {
    //     type: String,
    //     required : true,
    //     enum:['Admin','Customer'],
    //     default:'Customer'
    //     }
   })

module.exports = User