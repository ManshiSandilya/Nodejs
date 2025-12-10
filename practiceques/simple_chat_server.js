const http=require('http')
const express=require('express')
const app=express()
const server=http.createServer(app)
const {Server}=require('socket.io')
const io=new Server(server)
app.use(express.static(__dirname))
io.on("connection",(socket)=>{
    socket.on("msg",(data)=>{
        socket.broadcast.emit("data",`Client Says ${data}`)
    })
    socket.on("disconnect",()=>{
        socket.broadcast.emit("data",`client disconnected`);
    })
})
server.listen(3000,()=>{
    console.log("Server is listening on port no 3000")
})