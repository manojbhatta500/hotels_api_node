
const mongoose = require('mongoose');


const mongoUrl= "mongodb://127.0.0.1:27017/";


mongoose.connect(mongoUrl,{});

const db = mongoose.connection;


db.on('connected',()=>{
    console.log('database is connected');
});

db.on('err',(err)=>{
    console.log('database failed to connect.'+ err);
})



module.exports = db;
