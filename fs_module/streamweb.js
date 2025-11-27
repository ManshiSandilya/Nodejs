const fs= require('fs')
const express=require('express')
const app=express()
app.get('/users',(req,res)=>{
    const read= fs.createReadStream('text.txt')
    read.on('error',()=>{
        res.status(500).send("err reading the file")
        return
    })
    read.pipe(res)
})
app.listen(3000,()=>{
    console.log("sever listening on port 3000")
})
