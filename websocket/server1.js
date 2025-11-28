const http=require('http')
const express=require('express')
const app=express()
const {Server}=require('socket.io')
const server=http.createServer(app)
const io=new Server(server)
app.use(express.static(__dirname))
io.on('connection',(socket)=>{
    socket.emit("msgserver", "Server says: Hello Client!");
    socket.on('msg',(data)=>{
        console.log("client said",data)
        socket.emit('msgserver',`server recieved:${data}`)
    })
    socket.on('disconnect',()=>{
        console.log("a client disconnected",socket.id)
    })
})
server.listen(3000,()=>{
    console.log("server listening at port no 3000")
})