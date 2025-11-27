// Create event "ping" with 2 listeners.
// Emit it once.
// Then remove all listeners

const em=require('events')
const e= new em()
function listner1()
{
    console.log("hello listner 1")
}
function listner2()
{
    console.log("hello listner 2")
}
e.on('ping',listner1)
e.on('ping',listner2)
e.emit('ping')
e.removeAllListeners('ping')
e.emit('ping')
