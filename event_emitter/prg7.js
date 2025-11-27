// Create an event "divide" that receives two numbers.
// If second number is 0 → emit "error" event.
// Otherwise return the result.

const eventemitter=require('events')
const event=new eventemitter()
event.on('err',()=>{
    console.log('error')
})
function divide(a,b,cb)
{
    if(b==0)
    {
        event.emit('err')
        return
    }
    cb(a/b);
    // event.on('result',(r)=>{
    //     console.log(r);
    // })
    // event.emit('result',(a/b))//using another event to show result

}
event.on('divide',divide)
event.emit('divide',6,2,(r)=>{
    console.log(r)
});
