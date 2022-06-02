// Serve HTML CSS & JS Responsive 🎧 Website and Files in Express JS

const express = require("express");
const path = require("path");
const app = express();

// console.log(path.join(__dirname, "../public"));
const staticPath = path.join(__dirname, "../public");


//BuiltIn MiddleWare
app.use(express.static(staticPath));



app.get("/", (req,res) =>{
    res.send("Hello Main Home");
});

app.get("/about", (req,res) =>{
    res.send("Hello About");
});


app.listen(8000, ()=>{
    console.log("listening the port 8000");
})
