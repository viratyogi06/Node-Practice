// creating server in node

const http =  require('http')
const fs = require('fs')

const server = http.createServer((req,res)=>{
    res.end(
        fs.readFileSync('index.html')
    )
})

const PORT = 3000

server.listen(PORT,()=>{
    console.log("server is listening")
})