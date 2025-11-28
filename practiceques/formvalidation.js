const express=require('express')
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const {body ,validationResult}=require('express-validator')
app.use(express.static(__dirname))
app.post('/submit',[
    body('name').notEmpty().withMessage("enter valid name"),
    body('email').isEmail().withMessage("enter valid email"),
    body('password').isLength({min:8}).withMessage("pass should be min 8 char"),
],(req,res)=>{
    const error=validationResult(req)
    if(!error.isEmpty())
    {
        res.status(400).json({ errors: error.array() })
    }
    else
    {
        res.json({
            validation:"sucessfull",
            data:req.body
        })
    }
})
app.listen(3000,()=>{
    console.log("server listening on port 3000")
})
