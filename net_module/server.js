const net=require('net')
const server=net.createServer((socket)=>{
     console.log("Client connected");
    socket.on('data',(data)=>{
        console.log("recieved data",data.toString())
        socket.write("Server says: " + data.toString());
    })
    socket.on('end',()=>{
        console.log("client disconnected")
    })
})
server.listen(3000,()=>{
    console.log("server listening on port 3000")
})