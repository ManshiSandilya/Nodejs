// Create "tick" event that prints current time.
// Trigger "tick" every 2 sec using setInterval.
// Stop after 10 sec.

const em= require('events')
const e= new em()
e.on('tick',()=>{
    console.log(new Date().toTimeString())
})
let count =0;
const timer= setInterval(()=>{
    if(count>=5)
    {
        clearInterval(timer)
        console.log("cleared after 10sec")
    }
    else{
    e.emit('tick')
    count++;
    }
},2000)