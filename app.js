<<<<<<< HEAD
const mongoose=require('mongoose');
const express=require('express');
const bodyParser=require('body-parser');
const cors = require('cors');
const db=require('./database/db');
const register_route=require('./routes/register_route');
const proteinRoute=require('./routes/proteinRoute');
const bookingRoute=require('./routes/bookingRoute');

const app=express();
app.use(cors());
app.use(express.static(__dirname+'/images'))
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(register_route);
app.use(proteinRoute);
app.use(bookingRoute);

app.listen(3001);
=======
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
>>>>>>> d16c98b2dc9dedf147084b2fba388b8bfeee4bb7
