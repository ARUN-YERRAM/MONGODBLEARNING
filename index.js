const express = require("express");

const mongoose = require("mongoose");
const app= express();

// mongoose.connect("mongodb://localhost:27017/NYAAYSAHAAYAK", {useNewUrlParser: true, useUnifiedTopology: true},(err)=>{
//     if(!err){
//         console.log("MongoDB connected");
//     } else{
//         console.log(err);
//     }
// });


mongoose.connect("mongodb://localhost:27017/NYAAYSAHAAYAK", { useNewUrlParser: true })
    .then(() => {
    // Your code here
    })
    .catch((error) => {
    console.error(error);
    });


app.listen(3000,()=> {
    console.log("Server is running on port 3000");
})
