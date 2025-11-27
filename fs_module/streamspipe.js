const fs= require('fs')
const read=fs.createReadStream('vedio.mp4')
const write=fs.createWriteStream('vedio2.mp4')
read.pipe(write)
