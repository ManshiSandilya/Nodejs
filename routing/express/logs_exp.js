const express=require('express')
const app=express()
function middleware(req,res,next)
{
    console.log(`${req.url} , ${req.method} , ${new Date().toLocaleTimeString()}`)
}
app.use(middleware)
app.get('/',(req,res)=>{
    res.send("hello user")
})
app.get('/post',(req,res)=>{
    res.send("hello post user")
})
app.listen(3000,()=>{
    console.log("server is listening on port no 3000")
})