const express=require("express")
const cookies=require("cookie-parser")
const app=express()
app.use(cookies())
const user={
    name:"manu",
    age:25,
    city:"Bhagalpur",
    country:"India"
}
app.get("/login",(req,res)=>{
    res.cookie('user',JSON.stringify(user))
    res.send("cookie set")
})

app.get("/profile",(req,res)=>{
      if (!req.cookies.user) {
    return res.send("Please login first");
      }
    const user=JSON.parse(req.cookies.user)
    res.send(`
    Name: ${user.name}<br>
    Age: ${user.age}<br>
    City: ${user.city}<br>
    Country: ${user.country}
    `)})

app.get("/logout",(req,res)=>{
    res.clearCookie('user')
    res.send("user logged out")
})
app.listen(3000,()=>{
    console.log("server listening on port number 3000")
})