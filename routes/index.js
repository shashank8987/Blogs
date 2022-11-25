const express=require("express");
const router=express.Router();
const Blog=require("../models/todo")

router.get("/",async(req,res)=>{
    const allBlogs=await Blog.find();
    res.render("index", {blog:allBlogs})
})



module.exports=router;