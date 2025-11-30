//  Basic HTTP Server With Routing

// Create a server using http module.

// / should send “Home Page”.

// /info should send JSON data.

const http=require('http')
const server=http.createServer((req,res)=>{
    if(req.url==='/home'){
        res.writeHead(200,{"content-type":"text/html"})
        res.end("hello from home")
    }
    if(req.url==='/info')
    {
        res.writeHead(200,{"content-type":"application/json"})
        res.end(JSON.stringify([{"name":"manu",
            "age":22
        }]))
    }
})
server.listen(3000,()=>{
console.log("server listening on port 3000")
})
