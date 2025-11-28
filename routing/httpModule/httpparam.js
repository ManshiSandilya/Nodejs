// /Q. Create an HTTP server that reads query parameters
// Example:
// http://localhost:3000/?name=manu
// Return: Hello manu.
const http=require('http')
const url=require('url')
const server=http.createServer((req,res)=>{
    const parsedurl=url.parse(req.url,true)
    const query=parsedurl.query
    if(parsedurl.pathname==='/')
    {
        const name=query.name || "guest"
       res.end(`data received: ${name}`);
    }
})
server.listen(3000,()=>{
    console.log("server is listening on port 3000")
})

