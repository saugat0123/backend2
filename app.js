const mongoose=require('mongoose');
const express=require('express');
const bodyParser=require('body-parser');
const cors = require('cors');
const db=require('./database/db');
const user_route=require('./routes/user');
const item_route=require('./routes/item');
const bookingRoute=require('./routes/bookingRoute');

const app=express();
app.use(cors());
app.use(express.static(__dirname+'/images'))
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(user_route);
app.use(item_route);
app.use(bookingRoute);

app.listen(3001);
