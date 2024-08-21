const express = require('express')
const app = express()
const servers = [
    'http://localhost:3000',
    'http://localhost:3001',
    'http://localhost:3002',
    'http://localhost:3003',
    'http://localhost:3004',
    'http://localhost:3005',
    'http://localhost:3006',
    'http://localhost:3007',
    'http://localhost:3008',
    'http://localhost:3009',
]

let current = 0;


let request = 0;
const handler = async(req,res)=>{
    const {method, url, headers, body} = req

    const server = servers[current]

    current === servers.length-1? current = 0 : current++

    try{
        const response = await fetch(server,{
            method:method,
            body:body,
            headers:headers
        })
        let resp = await response.text()
        request++
        res.send(resp)
        console.log(`#${request} ${resp}`)
    }catch(err){
        res.status(500).send('Server Error!')
    }
}

app.use((req,res)=>{handler(req,res)})

app.listen(8080)