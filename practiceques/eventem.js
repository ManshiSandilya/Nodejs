// 3. EventEmitter Notification System

// Create an EventEmitter instance.

// Emit a "notify" event on route /send.

// Log “Notification Sent” when event fires.


const EventEmitter=require('events')
const e=new EventEmitter()
const express=require('express')
const app=express()
e.on("notify",()=>{
    console.log("Notification sent")
})
app.get("/send",(req,res)=>{
    e.emit("notify")
    res.send("notified the user")
})
app.listen(3000,()=>{
    console.log("server listening on port number 3000");
})