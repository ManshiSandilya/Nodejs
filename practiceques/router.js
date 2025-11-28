const express=require('express')
const router=express.Router()
const path=require('path')
const user=[
    {name:"manu",age:22},
    {name:"vishal",age:23},
    {name:"shruti",age:24}
]
router.get ('/form',(req,res)=>{
    res.sendFile(path.join(__dirname,"form.html"))
})
router.get('/details',(req,res)=>
{
    const dynamiclist = user.map(u => `<li>name ${u.name} and age ${u.age}</li>`).join('');
    const html=`
    <ul>
    ${dynamiclist}
    </ul>
     <a href="/user/form">Home</a>
    `
    res.send(html)
})
module.exports=router
