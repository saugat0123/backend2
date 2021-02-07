const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const customer_route = require('./routes/customer_route')
//const admin_route = require('./routes/admin_route')
const item_route = require('./routes/item_route')
app.use(express.json())

app.use(customer_route)
//app.use(admin_route)
app.use(item_route)


app.use(bodyParser.urlencoded({ extended: false }));  
app.listen(90)