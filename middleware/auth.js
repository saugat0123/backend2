const jwt = require('jsonwebtoken')
const Customer = require('../models/customer_model')
const Admin = require('../models/user_model')



// verify Customer guard
module.exports.authCustomer = function(req,res,next){
    try{
        const token = req.headers.authorization.split(" ")[1]
        const data = jwt.verify(token,'secret_key')

        Customer.findOne({_id : data.customerId})
        .then(function(cusInfo){
            req.customerInfo = cusInfo  // cusInfo --> all data of user 
            next()
        })
        .catch(function(e){
            res.status(403).json({error: e})
            
        })
    }
    catch(e){
        res.status(401).json({err: e})
    }
    
}


//verify Admin guard
// module.exports.authAdmin = function(req,res,next){
//     try{
//         const token = req.headers.authorization.split(" ")[1]
//         const data = jwt.verify(token,'secret_key')

//         Admin.findOne({_id : data.adminId})
//         .then(function(AdminInfo){
//             req.adminInfo = AdminInfo  // result --> all data of admin 
//             next()
//         })
//         .catch(function(e){
//             res.status(403).json({error: e})
//         })
//     }
//     catch(e){
//         res.status(401).json({err: e})
//     }
    
// }

// second guard
// module.exports.verifyAdmin = function(req,res,next){
//     try{}
//     catch(e){
//         res.status(401).json({err: e})
//     }
// }