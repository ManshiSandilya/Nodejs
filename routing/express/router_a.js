// Q. Create a separate router file with routes:

// /user/login

// /user/register
// and mount it in main app 
const express=require('express')
const router=express.Router()
router.get('/login',(req,res)=>{
    res.send("login here")
})
router.get("/regiter",(req,res)=>{
    res.send("register here")
})
module.exports=router