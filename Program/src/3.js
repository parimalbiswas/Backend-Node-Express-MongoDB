// How To Send HTML & JSON Data as a Response using Express JS

const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.write("<h1>Home page \n</h1>");
    res.write("<h1>2 2 \n</h1>");
    res.write("<h2>>3 3</h2");
    res.send();
});


app.get("/obj", (req, res) => {
    res.send([
        {
            id: 1,
            name: "parimal"
        },
        {
            id: 2,
            name: "biswas"
        }
    ]);
});

app.listen(port, () => {
    console.log("listening the port 3000");
})