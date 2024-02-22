const food=require("../models/foodItemModels")
const order =require("../models/menuModel")
const asyncHandler=require("express-async-handler");
//@add item function
//@post request
const addItem=asyncHandler(async(req,res)=>{
    try {
        const newItem=await food.create(req.body)
        res.status(200).json(newItem)
    } catch (error) {
        res.status(500).json({Message:error.Message})
    }
});
const getItem=asyncHandler(async(req,res)=>{
    const orders=await order.find({})
    res.status(200).json(orders)
});
module.exports={addItem,getItem}