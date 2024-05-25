const express = require('express');
const router = express.Router();
const Person = require('../models/person');
const person = require('../models/person');

router.post('/',async (req,res)=>{
    try{
        const data = req.body;
        const newPerson = new Person(data);
        const response = await newPerson.save();
        res.status(200).json(response);
    }catch(e){
        console.log(e);
        res.status(500).json({
            error: e
        });
    }
});

router.put('/:id',async(req,res)=>{
    try{
        const id = req.params.id;
        const data = req.body;
        const response = await Person.findByIdAndUpdate(id,data,{
            new:true,
            runValidators:true
        });
        if(!response){
            res.status(404).json({
                status:"sorry id not found"
            })
        }
        res.status(200).json(response)
    }catch(e){
        res.status(400).json({
            err: "something went wrong"
        });
    }

});

router.delete('/:id',async(req,res)=>{
    try{
        const id = req.params.id;
        
        const response = await person.findByIdAndDelete(id);

        if(!response){
            res.status(404).json({
                status:"sorry id not found"
            })
        }

        res.status(200).json({
            status: "successfully deleted"
        });

    }
    catch(e){
        res.status.json({
            status: "error deleting your request"
        });
    }
})


router.get('/',async(req,res)=>{
    try{
        const dataToSend = await  Person.find();
        console.log('person get method hitted');
        res.status(200).json(dataToSend);
    }catch(e){
        console.log(e);
        res.status(500).json({
            error: e
        });
    }
});


module.exports = router;