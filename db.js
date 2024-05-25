
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

mongoose.connection.on('error', (err) => {
    console.log('Mongoose connection error: ' + err);
  });


db.on('disconnected', () => {
    console.log('Mongoose disconnected');
});
  
db.on('reconnected', () => {
    console.log('Mongoose reconnected');
});



module.exports = db;
