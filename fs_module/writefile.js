const { normalize } = require('path');

const fs=require('fs')
/*fs.writeFile('student.txt','hello world',(err)=>{
    if(err)
    {
        console.log("err writing in the file")
    }
    else{
        console.log("wriiten content in the file")
    }
})*/

//***********************************normal**************************************************************

/*try{
fs.writeFileSync('student.txt','hello manshi')
{
    console.log("written sucessfully")
}}
catch(err){
    console.log('error writing in the file',err)
}*/

//************************************************Sync*******************************************


/*async function write()
{
    await fs.writeFile('student.txt','lets code',(err)=>{
        err?console.log("err writing in th file"):console.log("written successfully")
    })
}
    write()*/

//*******************************************async/await*****************************************



    fs.promises.writeFile('student.txt','Let solve')
    .then(()=>console.log("written sucessfully"))
    .catch((err)=>console.log("err writing in the file",err))

    
//*********************************************promises************************************

