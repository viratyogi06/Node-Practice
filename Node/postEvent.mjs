import http from 'http'

const server = http.createServer((req,res)=>{
    if(req.method === 'POST'){
        let body = ''

        // listens to the data event everytime and adds to the body
        req.on('data',(chunk)=>{
            
            body+=chunk
        })

        // listens to the end event, that triggers when all data events are received  
        req.on('end',()=>{
            console.log('Data Recieved - ', body)
        })

        res.end('Request Successful')
    }else{
        res.end('Invalid Request')
    }
})

server.listen(3000,()=>{
    console.log('server is listening')
})