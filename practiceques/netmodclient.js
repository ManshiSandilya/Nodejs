const net=require('net')
const socket=net.createConnection({port:3000},()=>{
      socket.write("hello server")
})
socket.on("data",(data)=>{
    console.log(`server sent ${data.toString().trim()}`)
})

socket.on("end",()=>{
    console.log("disconnected from server")
})