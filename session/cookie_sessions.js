const express=require("express")
const app=express()
const session=require('cookie-session')
const user={
    name:"manu",
    age:25
}
app.use(session({
    name: "session",
    keys: ["mySecretKey"],
    maxAge: 24 * 60 * 60 * 1000
  }))
app.get("/login",(req,res)=>{
    req.session.user=user
    res.send("session started (user logged in)")
})
app.get("/profile",(req,res)=>{
    if(!req.session.user)
    {
        return res.send("Please login first")
    }
    const user=req.session.user
    res.send(`Name:${user.name}<br>
        Age:${user.age}
        `)
})
app.get("/logout",(req,res)=>{
    req.session= null
        res.send("user logged out session destroyed")
})
app.listen(3000,()=>console.log("server listening on port number 3000"))