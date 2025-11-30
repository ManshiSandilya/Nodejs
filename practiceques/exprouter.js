// Express Router-Based API Structure

// Create userRouter for /users.

// Add GET /users/all.

// Add POST /users/create.
let users=[{name:"manu"},{name:"vishal"}]
const express=require('express')
const router=express.Router()
router.get("/all",(req,res)=>{
res.json({message:"registred",users})
})
router.post("/create",(req,res)=>{
const data=req.body
users=[...users,data]
res.json({message:"updated registred users are",users})
})
module.exports=router;
