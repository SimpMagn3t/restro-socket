const mongoose=require('mongoose');
const { ObjectId } = require('mongodb');
const food =require('../models/foodItemModels')
const orderSchema = mongoose.Schema({
    tableNumber: String, 
    foodItems: [
      {

      }
    ],
    status: {
      type: String,
      enum: ['pending', 'preparing', 'ready'], 
      default:"pending"
    },
},
{
    timestamps:true
})
  
const order=mongoose.model('order',orderSchema);
module.exports=order;
