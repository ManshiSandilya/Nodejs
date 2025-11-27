// Create an event "login" with three listeners:

// print “Login detected”

// print user IP

// print login time

// Emit "login" with {user:'Manu',ip:'127.0.0.1'}.

const eventemitter= require('events')
const event= new eventemitter()
event.on('login',()=>{
    console.log("login detected")
})
event.on('login',({user,ip})=>{
    console.log(`good morning ${user} your ip is ${ip}`)
})
event.on('login',()=>{
    console.log("your login time is",(new Date().toLocaleTimeString()))
})
event.emit('login',{"user":"manshi","ip":"10.10.10.1"})