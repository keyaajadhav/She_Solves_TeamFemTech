const mongoose=required('mongoose');
const ItemSchema=new mongoose.Schema({
    name:String,
    category:String,
    quantity:Number,
    expiry_date:Date,
    threshold_limit:Number
})
module.exports=mongoose.model("Item",ItemSchema);