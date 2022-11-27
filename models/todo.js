const mongoose=require("mongoose");

const TodoSchema=new mongoose.Schema({
    blog:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    }
})

module.exports= new mongoose.model("TODO",TodoSchema);