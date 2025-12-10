const http=require('http')
const express=require('express')
const app=express()
const server=http.createServer(app)
const {Server}=require('socket.io')
const io=new Server(server)
app.use(express.static(__dirname))
io.on("connection",(socket)=>{
socket.on("typing",()=>{
socket.broadcast.emit("data","Someone is typing...")
})
socket.on("msg",(msg)=>{
   socket.broadcast.emit("data",`msg recived ${msg}`)
})
})
server.listen(3000,()=>{
    console.log("server listening on port number 3000")
})
