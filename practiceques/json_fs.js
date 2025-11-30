// Load user.json using fs module.

// Add a new field "updated": true.

// Save back to user.json.

const fs=require('fs')
fs.readFile('user.json','utf8',(err,data)=>{
    if(err)
    {
        console.log("error reading the file")
    }
    else{
    let users = JSON.parse(data);
    users = users.map(u => ({ ...u, updated: true }));
        fs.writeFile('user.json',JSON.stringify(users,null,2),(err)=>{
            if(err){
            console.log("error adding to file")
            }
        })
    }
})
