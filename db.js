
const mongoose = require('mongoose');
require('dotenv').config();
// for local setup 
// const mongoUrl= "mongodb://127.0.0.1:27017/";

// mongodb atlas setup
console.log('render data base connection not wroking checkpoint 1');


const mongoUrl= process.env.MONGOURL;

console.log('render data base connection not wroking checkpoint 2');


mongoose.connect(mongoUrl,{});

console.log('render data base connection not wroking checkpoint 3');


const db = mongoose.connection;
console.log('render data base connection not wroking checkpoint 4');



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



console.log('render data base connection not wroking checkpoint 5');


module.exports = db;
