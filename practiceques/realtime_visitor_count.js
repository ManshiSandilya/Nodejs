const http=require('http')
const express=require('express')
const app=express()
const server=http.createServer(app)
const {Server}=require('socket.io')
const io=new Server(server)
app.use(express.static(__dirname))
let count=0;
io.on("connection",(socket)=>{
count=count+1;
io.emit("data",count)
socket.on("disconnect",()=>{
    count=count-1;
    io.emit("data",count)
})
})
server.listen(3000,()=>{
    console.log("Server listening on port no 3000")
})