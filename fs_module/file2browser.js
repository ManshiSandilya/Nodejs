const fs=require('fs')
const express=require('express')
const app= express()
app.get('/data',(req,res)=>{
    fs.readFile('student.json','utf-8',(err,data)=>{
        if(err){
            res.statusCode(404).send("err sending data")
        }
        else{
            res.json(JSON.parse(data))
        }
    })
})
app.listen(3000,()=>{
    console.log("server listening on port no 3000")
})