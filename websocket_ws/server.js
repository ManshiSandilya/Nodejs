const http=require('http')
const WebSocket=require('ws')
const server=new WebSocket.Server({port:3000})
server.on('connection',(socket)=>{
    console.log("client connected")
    socket.on('message',(data)=>{
        socket.send(`recieved data by server ${data}`)
    })
    socket.on('close', () => {
        console.log("Client disconnected");
    });
})