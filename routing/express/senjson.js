// Q. Create GET route /profile returning JSON of a user.
const express=require('express')
const fs=require('fs')
const path = require('path')
const app=express()
app.get('/profile',(req,res)=>{
    const filePath = path.join(__dirname, '..', '..', 'fs_module', 'student.json');
    fs.readFile(filePath,(err,data)=>{
        if(err)
        {
            res.send("error")
        }
        else{
            res.json(JSON.parse(data));
        }
    })
})
app.listen(3000,()=>{
    console.log("server listening on port number 3000")
})