const mongoose=require('mongoose');
const foodSchema=mongoose.Schema({
    name:{
        type:String
    },
    image:{
        type:String
    },
    price:{
        type:Number
    },
    quantity:{
        type:Number,
    }
})
const food=mongoose.model('food',foodSchema);
module.exports=food;