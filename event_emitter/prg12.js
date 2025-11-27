// Create event "welcome" with:

// listener1 → using on()

// listener2 → using once()

// Emit "welcome" twice.
const em=require('events')
const e= new em()
e.on('welcome',()=>{
    console.log("hello user")
})
e.once('welcome',()=>{
    console.log("hello user good night")
})
e.emit('welcome')
e.emit('welcome')