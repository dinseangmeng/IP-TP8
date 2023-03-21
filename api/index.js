require("dotenv").config();
const express= require('express')
const app=express()
const userRoute =require('./src/route/user')
var multer = require('multer');
var upload = multer();
var cors = require('cors')
app.use(upload.array())
app.use(express.json())

app.use(cors())
app.get('/',(req,res)=>{
    res.json({
        msg:"It work"
    })
})
app.use('/api/user',userRoute)

app.listen(process.env.PORT ?? 3000,()=>{
    console.log(`Server run on http://localhost:${process.env.PORT ?? 3000}`);
})