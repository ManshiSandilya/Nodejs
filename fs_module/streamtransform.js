const fs=require('fs')
const { Transform } = require("stream");
const read=fs.createReadStream('backup.txt',{encoding:'utf8'})
const write=fs.createWriteStream('text.txt')
class upperCase extends Transform
{
    _transform(chunk,encoding,callback)
    {
        const upper=chunk.toString().toUpperCase()
        this.push(upper)
        callback()
    }
}
const upper=new upperCase()
read.pipe(upper).pipe(write)
