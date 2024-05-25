const mongoose = require('mongoose');



const personSchema = mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    age:{
        type:Number
    },
    work:{
        type:String,
        enum:['chef','waiter','manager'],
        required:true
    },
    phone:{
        type: Number,
        required: true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    salary:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    }
});


const person = mongoose.model('person',personSchema);


module.exports = person;