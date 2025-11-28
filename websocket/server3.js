const http=require('http')
const express=require('express')
const app=express()
const {Server}=require('socket.io')
const server=http.createServer(app)
const io=new Server(server)
app.use(express.static(__dirname))
io.on('connection',(socket)=>{
let text=''
let len=0
socket.on('data',(data)=>{
    text=data;
    console.log(`user typed: ${text.slice(-1)}`)
    len=text.length
    socket.emit('count',`${len}`)
})
})
server.listen(3000,()=>{
console.log("server running on port no 3000")
})