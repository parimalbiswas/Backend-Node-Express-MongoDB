// Express JS Routing & our First Challenge in Express JS 
 
 const express = require("express");

 const app = express();
 const port = 3000;

 app.get("/",(req,res)=>{
     res.send("Home page");
 });

 app.get("/about",(req,res)=>{
    res.send("About page");
});

app.get("/contact",(req,res)=>{
    res.send("contact page");
});

app.listen(port, ()=>{
    console.log("listening the port 3000");
})







 app.listen(port,()=>{
     console.log(`listing to port number ${port}`);
 })

  
