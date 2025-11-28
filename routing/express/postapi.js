// Create a POST API that accepts JSON data and returns it back.
const express=require('express')
const app=express()
app.use(express.json())
app.post("/api",(req,res)=>{
    res.json({
        msg:'data recived',
        data:req.body
    })
})
app.listen(3000,()=>{
    console.log("server listening on port number 3000")
})