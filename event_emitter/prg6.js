// Question:
// Create 2 listeners for event "notify".
// After first emit, remove listener2, then emit again.
// Observe that only 1 listener should run.
const eventemitter=require('events')
const event=new eventemitter()
function listner()
{
    console.log("hello user event 2")
    event.off('notify',listner)
}
event.on("notify",()=>{
    console.log("hello user")
})
event.on("notify",listner)
event.emit("notify")
event.emit("notify")