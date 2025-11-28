const fs= require('fs')
const zlib=require('zlib')
const http=require('http')
const server=http.createServer((req,res)=>{
    if(req.url==='/download')
    {
        const read=fs.createReadStream('text.txt')
        const gzip=zlib.createGzip()
        read.on('error',()=>{
            res.status(500).send("Internal error")
        })
        read.pipe(gzip).pipe(res)
    }
})
server.listen(3000,()=>{
    console.log("server listening on port no 3000")
})