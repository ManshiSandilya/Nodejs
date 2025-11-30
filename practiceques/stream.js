
// 4. Stream-Based File Copier

// Use Readable + Writable streams.

// Copy input.txt to output.txt.

// Show progress in console.

const { error } = require('console')
const fs=require('fs')
const read=fs.createReadStream('input.txt')
const write=fs.createWriteStream('output.txt')
read.on('data',(chunks)=>{
    console.log("read bytes",chunks.length)
})
read.on('end',()=>{
    console.log("completed reading the file")
})
read.on('error',(err)=>{
    console.log("Read stream err",err)
})
write.on('error',(err)=>{
    console.log("write Stream err",err)
})
read.pipe(write)
