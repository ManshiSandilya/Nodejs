// Create a Node.js program that reads and writes data to a JSON file using the fs module.
// Display the output on a simple front-end HTML page.


// const fs= require('fs')
// const express=require('express')
// const path = require('path')
// const app=express()
// app.use(express.urlencoded({extended: true})); 
// app.use(express.json());
// app.post('/save',(req,res)=>{
//     fs.writeFile('example.json',JSON.stringify(req.body.trim()),(err)=>{
//         if(err){
//         res.status(400).send("error writing to file")
//         }
//     })
// })
// app.get('/user',(req,res)=>{
//     fs.readFile('student.json','utf-8',(err,data)=>{
//         if(err)
//         {
//             res.status(400).send("Error reading the file")
//         }
//         else{
//             res.json(JSON.parse(data))
//         }
//     })
// })
// app.get('/',(req,res)=>{
//     res.send(path.join(__dirname,"form.html"))
// })
// app.listen(3000,()=>{
//     console.log("server listening on port no 3000")
// })

// 2.

// Build a CLI tool using Node.js REPL features that processes user input and sends results to a front-end UI via a local server.

// 3.

// Develop a Node.js script using Streams to serve a large video or image file to a browser without loading it fully in memory.


// const fs= require('fs')
// const express=require('express')
// const app = express()
// app.get("/streamvedio",(req,res)=>{
//     const read=fs.createReadStream('vedio.mp4')
//     read.pipe(res)
// })
// app.listen(3000,()=>{
//     console.log("server listening on port number 3000")
// })


// 4.

// Implement a module-based structure in Node.js (local modules + core modules) 
// and use it to serve dynamic text on a web page.

const app=express()
const routers=require('./router')
app.use('/user',routers)
app.listen(3000,()=>{
    console.log("server listening on port number 3000")
})

// 5.

// Create a program that compresses and decompresses data using zlib and show the file size difference on a front-end page.
const fs= require('fs')
const express=require('express')
const

// 6.

// Build an EventEmitter-based Node.js application where custom events trigger updates on a browser page.

// 7.

// Develop an async/await–based API in Node.js that fetches mock data and displays it on a front-end table.

// 8.

// Create a Node.js application that uses Promises to fetch user details from a JSON file and render them on an HTML page.

// 9.

// Build an npm-powered project that includes one third-party module and use it to enhance data displayed on the front-end.

// 10.

// Create a system that streams logs of user activities to the browser console in real time.

// 11.

// Build a basic HTTP server in Node.js that serves multiple HTML pages (home, about, contact).

// 12.

// Create a custom router using the HTTP module and serve different JSON or HTML responses based on URL paths.

// 13.

// Develop an application that uses Request and Response objects to process a front-end login form.

// 14.

// Create a system that sends different HTTP status codes based on user actions on a webpage (e.g., 200 for success, 404 for wrong URL).

// 15.

// Implement GET and POST request handling using the HTTP module and display the submitted data on the browser.

// 16.

// Build an Express.js application that renders HTML pages with dynamic data injected from the server.

// 17.

// Create a small Express-based API that returns JSON responses and consumes them with JavaScript fetch() on the front-end.

// 18.

// Develop a multi-route Express.js application using express.Router and link the routes to front-end buttons.

// 19.

// Create a middleware-based Express app that logs all front-end requests and displays them on a browser page.