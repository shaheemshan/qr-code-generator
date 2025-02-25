import express from "express";
const app = express();
const port = 3000;



app.get("/", (req, res)=>{

    const today = new Date();
    let day = today.getDay();

    let type = "its a weekday";
    let adv = "so time to work hard";

    if(day === 0 | day === 6){
        type = "the weekend",
        adv = "so its time to have fun. !!!"
    }

    res.render("index.ejs", {
        a:type,
        b:adv,  
    });
});


app.listen(port, ()=>{
    console.log(`server running on port ${port}.`)
})