const express =require("express")
const dotenv = require("dotenv");
const cors = require('cors');  
const mailRoute=require("../src/routes/mail.route")


dotenv.config()
const app=express()

app.use(express.json())
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
    res.send("Welcom to My Portfolio Website")
});

app.use('/mail',mailRoute);


module.exports=app;