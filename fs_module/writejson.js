const fs=require("fs");
const users=[{name:"manu",age:22},{name:"vishal",age:23}]
let exuser=[]
fs.readFile('student.json','utf-8',(err,data)=>{
    if(err)
    {
        console.log("err",err)
    }
    else{
        exuser=JSON.parse(data)
    }
    for(const users of exuser){
        console.log(users.name)
    }
exuser=[...exuser,...users]
fs.writeFile('student.json',JSON.stringify(exuser,null,2)+"\n",(err)=>{
    if(err)
    {
        console.log("err",err)
    }
    else{
        console.log("added to file")
    }
})
})