// Create "log" event that appends messages to logs.txt using fs.appendFile.
// Emit "log" 3 times.
const em= require('events')
const fs = require('fs')
const e= new em()
e.on('log',(msg)=>{
    fs.appendFile('info.txt',msg,(err)=>{
        if(err)
        {
            console.log(err)
            return
        }
        else{
            console.log("appended successfully")
        }
    })
})
e.emit('log','hello manshi\n')
e.emit('log',"have a good day\n")
e.emit('log',"bye bye\n")