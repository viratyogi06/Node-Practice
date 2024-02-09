// creating server in node

// import necessary libraries
const http =  require('http')
const fs = require('fs')


// create server
const server = http.createServer((req,res)=>{
//    default route
    res.end(
        fs.readFileSync('index.html')
    )
})

const PORT = 3000


// make server listen to a port
server.listen(PORT,()=>{
    console.log("server is listening now")
})