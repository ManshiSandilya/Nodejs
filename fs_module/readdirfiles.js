const { dirname } = require('path')
async function read(dirpath)
{
    try{
const files= await fs.readdir(dirpath,'utf-8')
console.log(files)}
catch(err)
{
    console.log("err",err)
}
}

read('/workspaces/Nodejs/event_emitter')