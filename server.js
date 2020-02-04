const express=require("express");
const app= express();
const mongoose=require('mongoose')
//connect db
const connect=require('./config/connectDB')
//import routes
const Route=require('./routes/users');
//middleware
app.use(express.json());

connect()
app.use('/users',Route)

const port = process.env.PORT || 5000
app.listen(port, err => err ? console.log("cannot connect to database") : console.log(`server is running on port ${port}`))