const express = require("express");
const mongoose=require("mongoose");
const app=express();

const port=process.env.PORT || 3000
mongoose.connect("mongodb://localhost/Blogs_Here", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})