import express from "express";
let app = express();
let port =3000;

let bowl = ["apple", "orange", "pears"];

app.get("/", (req, res)=>{
    res.render("ex1.ejs", {fruits:bowl})
})


app.listen(port, ()=>{
    console.log(`server running on port ${port}.`)
})