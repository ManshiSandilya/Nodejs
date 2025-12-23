const express=require('express');
const pool = require('./db');
const app=express()
app.use(express.json())
app.use(express.static(__dirname))
app.post('/users',async(req ,res)=>{
    const{name,email,age}=req.body;
    const users=await pool.query(
        "INSERT INTO users(name,email,age) VALUES ($1,$2,$3) RETURNING *",
        [name,email,age]
    );
    res.json(users.rows[0])
    })
app.get('/users',async(req,res)=>{
    const users=await pool.query(
        "SELECT * FROM users "
    )
    res.json(users.rows)
})
app.put('/users/:id',async(req,res)=>{
    const {id}=req.params;
    const {age}=req.body;
    await pool.query(
        "UPDATE users SET age=$1 WHERE id=$2",[age,id]
    )
    res.send("updated")
})
app.delete('/users/:id',async(req,res)=>{
    const {id}=req.params;
    await pool.query(
        "DELETE FROM users WHERE id=$1",[id]
    )
    res.send("Deleted")
})
app.listen(5000,()=>{
    console.log("Sever running on port 5000")
})