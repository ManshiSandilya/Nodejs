// Develop a basic HTTP Server that:

// Handles GET & POST

// Implements routing

// Uses status code & headers

// Returns JSON response for API
const fs=require('fs')
const http=require('http')
const server=http.createServer((req,res)=>{
   let body = "";
    if(req.url==='/reg' && req.method==='POST')
    {
      req.on("data",(data)=>{
        body=body+data.toString()
      })
      req.on("end",()=>{
        fs.writeFile("student.json",body,(err)=>{
            if(err){
                res.writeHead(500,{"content-type":"text/html"})
                res.end("Error ocuured in submission")}
            else{
                 res.writeHead(200,{"content-type":"text/html"})
                res.end("detail submited")
            }
        })
      })  
    }
    else if(req.url==='/detail' && req.method==='GET')
    {
        fs.readFile("student.json",'utf-8',(err,data)=>{
            if(err){
                res.writeHead(500,{"content-type":"text/html"})
                res.end("<h1>error fetching data<h1>")
            }
        res.writeHead(200,{"content-type":"application/json"})
        res.end(JSON.stringify({
            message:"data recived",
            data :JSON.parse(data)
        }))
        })
    }
    else{
        res.writeHead(404, {"Content-Type":"text/plain"})
        res.end("Page not found")
    }
})
server.listen(3000,()=>{
    console.log("server listening on port number 3000")
})