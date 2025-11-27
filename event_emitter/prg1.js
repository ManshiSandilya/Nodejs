// Emit an event named "greet"
//  with a message "Hello Manu" when the program runs.

const eventemitter=require('events')
const event =new eventemitter();
event.on('greet',({name,ip})=>{
    console.log(`Good morning ${name} your ip is ${ip}`)
})
event.emit('greet',{"name":"manshi","ip":"10.10.10.1"})



