const express=require('express')
const app =express()
const { body, validationResult } = require('express-validator');
app.use(express.json());
app.post('/',[
    body("name").notEmpty().withMessage("name is required"),
    body("email").isEmail().withMessage("enter valid email"),
    body("password").isLength({min:6})
],(req,res)=>{
    const errors=validationResult(req)
    if(!errors.isEmpty())
    {
        res.status(400).json({errors:errors.array()})
    }
    else{
        res.send("data recieved")
    }
})
app.listen(3000,()=>{
    console.log("server listening at port no 3000")
})