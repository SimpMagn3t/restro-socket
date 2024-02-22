const express=require("express")
const router=express.Router()
const food=require("../models/foodItemModels")
const order=require("../models/menuModel")
router.get('/',async(req,res)=>{
    const menuCard= await food.find({})
    res.status(200).json(menuCard)
})
router.post('/',async(req,res)=>{
    console.log(req.body);
    const ord=new order({
        tableNumber: req.body.tableNumber,
        foodItems:req.body.cart,
    })
    try {
        const orders=await order.create(ord)
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({Message:error.Message})
    }
})
module.exports=router