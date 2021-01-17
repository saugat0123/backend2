const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')

const db = require('./database/db')

const app = express()
const customer_route = require('./routes/customer_route')
app.use(express.json())

app.use(customer_route)



app.use(bodyParser.urlencoded({ extended: false }));  
app.listen(90)