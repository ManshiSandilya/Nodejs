// // Read & write file using fs

// // Store & retrieve data using JSON

// // Read large file using Stream

// // Compress & Decompress file using Zlib

// // Implement same using Promise & async/await
const fs=require('fs')
const zlib=require('zlib')
const gzip=zlib.createGzip()
fs.readFile('hello.txt','utf8',(error,data)=>{
    if(error)
    {
        console.log("error reading the file")
    }
    else{
        console.log("file content",data)
    }
})
fs.writeFile('hello.txt',"hello how are you",(err)=>{
    if(err)
    {
        console.log("error writing to file")
    }
})
let data={
    name:"manu",
    age:24
}
fs.writeFile("student.json",JSON.stringify(data),(err)=>{
    if(err){
    console.log("error writing to file",err)}
    else{
        console.log("written succesfully json to file")
    }
})
fs.readFile("student.json",'utf8',(err,data)=>{
    if(err)
    {
        console.log("err reading the json file")
    }
    else{
    console.log("data",JSON.parse(data))
    }
})
const read=fs.createReadStream('hello.txt','utf-8')
const write=fs.createWriteStream('hello2.txt')
read.pipe(gzip).pipe(write)

// ///using async and await
// const fs = require('fs').promises;
// const fsStream = require('fs'); 
// const zlib = require('zlib');
// const { pipeline } = require('stream/promises');

// async function read() {
//   try {
//     const data = await fs.readFile('hello.txt', 'utf-8');
//     console.log("File content:", data);
//   } catch (error) {
//     console.log("Error reading the file:", error);
//   }
// }

// async function write() {
//   try {
//     await fs.writeFile('hello.txt', 'Hello, how are you?');
//     console.log("Data written successfully");
//   } catch (error) {
//     console.log("Error writing to the file:", error);
//   }
// }

// async function writeJson() {
//     let data={
//     name:"manu",
//     age:24
// }
//   try {
//     await fs.writeFile('student.json',JSON.stringify(data));
//     console.log("Data written successfully");
//   } catch (error) {
//     console.log("Error writing to the file:", error);
//   }
// }

// async function readJson() {
//   try {
//     const data = await fs.readFile('student.json', 'utf-8');
//     console.log("File content:", JSON.parse(data));
//   } catch (error) {
//     console.log("Error reading the file:", error);
//   }
// }

// async function streamCompress() {
//   try {
//     await pipeline(
//       fsStream.createReadStream('hello.txt', 'utf-8'),
//       zlib.createGzip(),
//       fsStream.createWriteStream('hello2.txt.gz')
//     );
//     console.log("File compressed successfully");
//   } catch (err) {
//     console.log("Error during compression:", err);
//   }
// }

// read();
// write();
// readJson();
// writeJson();
// streamCompress();