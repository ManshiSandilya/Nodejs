const fs= require('fs')
// fs.stat('student.txt',(err,stat)=>{
//     err?console.log("err",err):console.log("read stats")
//     if(stat.size<50)
// {
//     fs.unlink('student.txt',(err)=>{
//         err?console.log("err",err):console.log("deleted")
//     })
// }
// })
                      // Asynchronus//
try{
    const stat=fs.statSync('copy.txt')
    if(stat.size<50)
    {
        fs.unlinkSync('copy.txt')
    }
}
catch(err)
{
    console.log("err",err)
}
//// Synchronus//