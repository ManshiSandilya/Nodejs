const express=require('express')
const app=express()
const routers=require('./exprouter.js')
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));
app.use("/users",routers)
app.listen(3000,()=>{
    console.log("server running on port number 3000")
})