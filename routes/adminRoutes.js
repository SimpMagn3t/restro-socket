const express=require("express");
const router=express.Router();
const food=require("../models/foodItemModels")
const menu=require("../models/menuModel")
const {addItem,getItem}=require("../controller/adminController")
router.post("/add",addItem);
router.get("/",getItem)
module.exports=router