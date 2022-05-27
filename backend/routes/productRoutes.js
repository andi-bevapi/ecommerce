const express = require("express");
const router = express.Router();

const productModel = require("../models/productModel");
const mongoose = require("mongoose");


router.get("/", async (req,res)=>{
    try{
        const result = await productModel.find();
        res.send(result);
    }catch(error){
        console.log("error----",error);
    }
});

router.get("/:id", async(req,res,next)=>{
    try{

        const {id} = req.params;
        const result = await productModel.findById(id);
        if(result){
            res.send(result);
        }else{
            res.status(404).json({error:"not found"});
        }
    }catch(error){
        console.log("error--in get by id--",error);
        const errorMessage =  new Error(error);
        next(error);
    }

});


module.exports = router;