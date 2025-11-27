const fs=require('fs')
fs.mkdir('logs',{recursive:true},(err)=>{
    if(err)
    {
        console.log("err",err)
    }
    else{
        fs.writeFile('logs/log1.txt',new Date().toLocaleTimeString(),(err)=>{
            if(err)
            {
            console.log("err",err)
            }
            else{
                console.log("created file with text")
            }
        })
    }
})   //callback hell


async function dir()
{
    try{
        await fs.mkdir('logs',{recursive:true})
        await fs.writeFile('logs/log.txt',"hello")
    }
    catch(err)
    {
        console.log("err",err)
    }
    
}
dir()
