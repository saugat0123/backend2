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

app.listen(90);
