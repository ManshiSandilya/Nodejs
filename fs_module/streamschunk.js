const fs=require('fs')
const read=fs.createReadStream('student.txt','utf-8')
let line="",count=0
read.on('data',(data)=>{
    line+=data.trim()
    count++;  
})
read.on('end',()=>{
console.log("recieved chunks"+count)
})
