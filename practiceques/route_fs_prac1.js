// 1. File Reader Using fs Module

// Create a GET route /readfile.

// Read data.txt using fs.readFile().

// Return file content as response.

const fs=require('fs')
const http= require('http')
const server=http.createServer((req,res)=>{
    if(req.url==='/readfile' && req.method==='GET')
    {
        fs.readFile('Profile1.txt','utf8',(err,data)=>{
            if(err)
            {
                res.writeHead(400,{"content-type":"text/html"})
                res.write('<h1>ERROR<h1>')
                res.end()
            }
            else{
                res.writeHead(200,{"content-type":"text/html"})
                res.end(`data from file :${data}`)
            }
        })
    }
})
server.listen(3000,()=>{
    console.log("server listening on port number 3000")
})