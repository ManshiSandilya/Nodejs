const http=require('http')
const express=require('express')
const app=express()
const {Server}=require('socket.io')
const server=http.createServer(app)
const io=new Server(server)
let count=0;
app.use(express.static(__dirname))
io.on('connection',(socket)=>{
    count=count+1;
    io.emit('count',`Users online:${count}`)
    socket.on('disconnect',()=>{
        count=count-1;
        io.emit('count',`Users online:${count}`)
    })
})
server.listen(3000,()=>{
    console.log("server is listening on port number 3000")
})