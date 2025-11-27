// Create an event "notify".
// Attach 3 listeners to it.
// Print the total number of listeners using:
const em=require('events')
const e=new em()
function listner3()
{
    console.log("helo listner 3")
    e.off('notify',listner3)
}
e.on('notify',()=>{
    console.log("heloo listner 1")
})
e.on('notify',()=>{
    console.log("heloo listner 2")
})
e.on('notify',listner3)
e.emit('notify')
console.log(e.listenerCount('notify'))
e.emit('notify')
console.log(e.listenerCount('notify'))
