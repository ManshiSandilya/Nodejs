//  Express POST Handler Using body-parser

// Configure body-parser.

// Create POST /details to accept name + age.

// Return a JSON response: { message: "Data received", data: ... }
const express=require('express')
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname))
app.post("/details",(req,res)=>{
    const data=req.body
    res.status(200).json({message:"data received",data})
})
app.listen(3000,()=>{
    console.log("sever listening on port 3000")
})