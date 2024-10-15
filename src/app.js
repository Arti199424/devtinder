const express = require('express');

const app = express();


app.use("/user",(req,res)=>{
    res.send({firstname:"Arti",lastname:"Yadav"});
});







app.listen(7777 , ()=>{
    console.log("server is successfully listening on port 7777...")
});