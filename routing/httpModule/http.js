// Create an HTTP server that returns different responses for /, /about, and /contact.
const http=require('http')
const server=http.createServer((req,res)=>{
    if(req.url=='/')
    {
        res.write("hello from Home")
        res.end()
    }
    else if(req.url=='/about')
    {   
        res.statusCode(200)
        res.setHeader('content-type','text/html')
        res.end("hello from about")
    }
    else if(req.url==='/contact')
    {
        res.writeHead(200,{"content-type":"application/json"})
        res.end("hello from contact us")
    }
    else{
        res.writeHead(404,{"content-type":"text/html"})
        res.end("error")
    }
})
server.listen(3000,()=>{
    console.log("server listening on port 3000")
})