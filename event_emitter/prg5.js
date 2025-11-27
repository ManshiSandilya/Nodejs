// Question: In an Express app, create an event "requestLog" that 
// logs: URL method timestamp Trigger the event inside a middleware for every request. 
const eventemitter=require('events')
const event =new eventemitter()
const express = require('express');
const app= express()
event.on("requestLog",(url,method,time)=>{
    console.log(`logs: url:${url} method:${method} time:${time}`)
})
function middleware(req,res,next)
{
    event.emit("requestLog",req.url,req.method,new Date().toLocaleTimeString())
    next();
}
app.use(middleware);
app.get('/home',(req,res)=>{
    res.end("hello from home")
})
app.get('/contact',(req,res)=>{
    res.end("hello contact us")
})
app.post('/user',()=>{
    res.end('hello user')
})
app.listen(3000,()=>{
    console.log("server is listening")
})
