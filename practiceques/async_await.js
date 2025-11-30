// Async/Await File Loader
// Create async function that reads a file using fs.promises.
// Return content through /load.
// Handle errors using try–catch.

const { readFile } = require('fs')
const http=require('http')
const fs=require('fs').promises
const express=require('express')
const app=express()
async function fileread (){
    try{
    data= await fs.readFile('notes.txt','utf8')
    return data
    }
    catch(err)
    {
        console.log("error")
        return NULL
    }
}
app.get('/load',async (req,res)=>{
    const data =  await fileread();
        if (!data) {
        res.status(500).send("Failed to load file");
    }
    else{
    res.send(data);}
})
app.listen(3000,()=>{
    console.log("server listening on 3000")
})
