// Create an event "order" that receives an object:

// { id: 101, product: "Laptop", price: 50000 }


// Listener should print all fields.
// Emit the event with a different order object.
const em= require('events')
const e= new em()
e.on('order',({id,product,price})=>{
    console.log(`id:${id} product:${product} price:${price}`)
})
e.emit('order',{ id: 101, product: "Laptop", price: 50000 })
e.emit('order',{ id: 102, product: "Tablet", price: 60000 })