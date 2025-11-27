// Create a module calc.js which emits "sum" and "product" events.
// Import it and register listeners from another file.
// Emit events from external file

const em= require('events')
const e=new em()
e.on('sum',(a,b)=>{
    console.log(a+b)
})
e.on('product',(a,b)=>{
    console.log(a*b)
})

module.exports=e