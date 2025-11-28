// Create a form and submit data to /submit using POST.
// Print the data on page
const express=require('express')
const app=express()
const path=require('path')
app.use(express.static(path.join(__dirname,"..","..","public")))
app.use(express.urlencoded({extended:true}))
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname, "..", "..", "public", "index.html"))
})
app.post("/submit",(req,res)=>{
    const body=req.body
    res.send(`data recieved ${body.name},${body.email}`)
})
app.listen('3000',()=>{
    console.log("server listening on port no 3000")
})