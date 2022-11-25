const express=require("express");
const router=express.Router();
const Blog=require("../models/todo");

router.post("/add/blogs",(req,res)=>{
    const blog=req.body.blog
    const author=req.body.author
    const newBlog=new Blog({
        blog:blog,
        author:author
                })
    newBlog
        .save()
        .then(()=>{
                console.log("Blog added successfully");
                res.redirect("/");
            })
        .catch((err)=>{
                console.log(err);
            })
})