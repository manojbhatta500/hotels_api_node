const mongoose = require('mongoose');

const mealTypeSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    price:{
        type:Number,
        required: true
    },
    taste:{
        type:String,
        enum:['sweet','spicey','sour'],
        required:true
    },
    isdrink:{
        type:Boolean,
        default: false
    },
    ingrident:{
        type:[String],
        default:[]
    },
    num_sales:{
        type:Number,
        default: 0
    }
});


const menuItem = mongoose.model('menuItem',mealTypeSchema);


module.exports = menuItem;