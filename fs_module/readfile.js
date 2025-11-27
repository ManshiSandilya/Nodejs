// Create a file student.txt and write "Hello Student".
// Then read and print the contents.
const fs=require('fs').promises
/*fs.readFile('student.txt','utf-8',(err,data)=>{
    if(err)
    {
        console.log("error reading the file",err)
    }
    else{
        console.log(data)
    }
})*/


//***********************************normal****************************************//

/*try{
const data=fs.readFileSync('student.txt','utf-8')
console.log(data)
}
catch(err)
{
    console.log("err reading the file")
}*/

//***********************************Sync****************************************//

/*async function read()
{
try{
    const data=await fs.readFile('student.txt','utf8')
    console.log(data)
    }
    catch(err)
    {
    console.log("err",err)
    }
        
}
read()*/
//********************************await & async****************************//

/*fs.promises.readFile('student.txt','utf8')
.then((data)=>console.log(data))
.catch((err)=>console.log(err))*/

//******************************Promises ******************************//
