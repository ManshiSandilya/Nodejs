// 5. File Compressor With zlib

// Create /compress route.

// Compress notes.txt → notes.gz.

const fs=require('fs')
const read=fs.createReadStream('notes.txt')
const write=fs.createWriteStream('notes.gz.')
const zlib=require('zlib')
const glib=zlib.createGzip()
const express=require('express')
const app=express()
app.get('/compress',(req,res)=>{
    read.pipe(glib).pipe(write)
    res.send("File comprrssed")
})
app.listen(3000,()=>{
    console.log("server listening on port number 3000")
})