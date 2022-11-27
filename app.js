const express = require("express");
const mongoose=require("mongoose");

const app=express();
const port=process.env.PORT || 3000

mongoose.connect("mongodb://localhost/Blogs_Here", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");


app.use("/",require("./routes/index"))
app.use("/",require("./routes/blog"))

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})