
const mongoose = require('mongoose');
require('dotenv').config();
// for local setup 
// const mongoUrl= "mongodb://127.0.0.1:27017/";

// mongodb atlas setup

const mongoUrl= process.env.MONGOURL;


mongoose.connect(mongoUrl,{});

const db = mongoose.connection;


db.on('connected',()=>{
    console.log('database is connected');
});

db.on('err',(err)=>{
    console.log('database failed to connect.'+ err);
})



module.exports = db;
