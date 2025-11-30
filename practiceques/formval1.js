// Validate Form Data Using express-validator
// Create POST /register.
// Validate:
// email is valid
// password min 6 chars
// Send validation errors if any.


const express=require('express')
const app=express()
const{body,validationResult}=require('express-validator')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname))
app.post("/submit",[
    body('name').notEmpty().withMessage("enter valid name"),
    body('email').isEmail().withMessage("enter valid email"),
    body('password').isLength({min:6}).withMessage("enter valid pass min 6 in length")
],(req,res)=>{
    const error=validationResult(req)
    if(!error.isEmpty())
    {
        res.status(400).json({errors:error.array()})
    }
    else{
        res.status(200).json({
            message: "Validation successful",
            data: req.body
        });

    }
})
app.listen(3000,()=>{
    console.log("server running on port number 3000")
})
