// Create event "uppercase" that prints given string in uppercase.
// Emit it inside a loop for 5 strings.
let str=["manu","harshit","vishal","shruti","anshu"]
const em=require('events')
const e=new em()
e.on('uppercase',(s)=>{
    console.log(s.toUpperCase())
})
for(i=0;i<5;i++)
{
    e.emit('uppercase',(str[i]))
}