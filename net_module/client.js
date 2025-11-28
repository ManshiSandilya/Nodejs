const net=require('net')
const client=net.createConnection({port:3000},()=>{
    console.log("connected to server")
    client.write("hello server")
})
client.on('data',(data)=>{
    console.log("server sent",data.toString())
})