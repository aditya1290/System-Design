const express = require("express");
const { rateLimter } = require("./rateLimiter");
const bodyparser = require("body-parser");
const requestIp = require("request-ip");

const app = express();

app.use(express.json()); 
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())


app.get("/hello",(req,res)=>{
    const {email} = req.body;
    console.log(req.body);
    if(rateLimter(email))    res.status(200).json({msg : "All Good"});
    else                     res.status(429).json({msg : "TOO MANY REQUESTS"});
});

app.listen(3000,()=>{
    console.log("Listening on port 3000");
})