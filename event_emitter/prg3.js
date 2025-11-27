// EventEmitter to handle file writing success

// Question:
// Write data to info.txt.
// When file writing is complete, emit event "fileSaved".
// Listener should print "File saved successfully!".
const eventemitter=require('events')
const fs= require('fs')
const event=new eventemitter()
event.on('fileSaved',()=>{
    console.log("file Saved sucessfully")
})
fs.writeFile("info.txt","hello world",(err)=>{
    if(err)
    {
        console.log(err)
        return
    }
    else{
        event.emit("fileSaved")    
    }
})