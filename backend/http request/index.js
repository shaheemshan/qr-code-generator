import express from "express";

const app = express();

app.get("/", (req, res) =>{
    res.send("<h1>Oxdu tech school Ramanattukara</h1>");
});

app.get("/about", (req, res) =>{
    res.send("<h1>this is about page</h1>");
});

app.get("/service", (req, res) =>{
    res.send("<h1>this is service page</h1>");
});

app.get("/contact", (req, res) =>{
    res.send("<h1>contact us for more</h1>");
});

app.listen("3000", ()=>{
    console.log(`server started!`);
});
