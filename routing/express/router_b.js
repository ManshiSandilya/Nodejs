const express=require('express')
const app=express()
const router=require('./router_a')
app.use('/user',router)
app.listen(3000,()=>{
    console.log("server listening on port number 3000")

})