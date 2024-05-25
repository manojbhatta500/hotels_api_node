const express = require('express');
const router = express.Router();
const menuItem = require('../models/menuitem');


router.post('/',async(req,res)=>{
    console.log('menu item post method running');
    try{
        const data = req.body;
        const saveData = new menuItem(data);
        const response = await saveData.save();
        res.status(200).json(response);
        console.log('menu item post method successfully runned');
    }catch(e){
        console.log('menu item catch method is running');
        res.status(500).json({
            error:e
        });
    }
});

router.get('/',async(req,res)=>{
    console.log('menu item get method running');
    try{
        const response = await menuItem.find();
        res.status(200).json(response);
        console.log('menu item get method successfully runned');
    }catch(e){
        console.log('menu item catch method is running');
        res.status(500).json({
            error:e
        });
    }
});

router.delete('/:id',async(req,res)=>{
    console.log('menu router method running');
    try{

        const id  = req.params.id;
        const response = await menuItem.findByIdAndDelete(id);

        if(!response){
            res.status(200).json({
                status: 'Id not found'
            });
        }

        res.status(200).json({
            status: 'successfully deleted menu'
        });





    }catch(e){

        res.status(200).json({
            status: 'something went wrong'
        })

    }
})


module.exports = router;



