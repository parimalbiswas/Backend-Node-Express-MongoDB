// First Program using Express JS 

const express = require("express");

const app = express();

app.get("/", (req,res) =>{
    res.send("Hello Main Home");
});

app.get("/about", (req,res) =>{
    res.send("Hello About");
});


app.listen(8000, ()=>{
    console.log("listening the port 8000");
})


