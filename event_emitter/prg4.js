// Create a "userAdded" event.
// When a user object {name:"Kriti", age:22} is added to an array, emit the event.
// Listener should print "New user added: Kriti".
const eventemitter= require('events')
const event= new eventemitter()
let users=[]
event.on("userAdded",(user)=>{
    console.log("New user added ",(user.name))
})
const add=(user)=>{
    users.push(user)
    event.emit("userAdded",user)
    }
add({"name":"manu","age":22});