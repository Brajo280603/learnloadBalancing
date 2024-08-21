const express = require('express')

const app1 = express()
const app2 = express()
const app3 = express()
const app4 = express()
const app5 = express()
const app6 = express()
const app7 = express()
const app8 = express()
const app9 = express()
const app10 = express()


let requestNumber = 0;
const handler = serverNum => (req,res) =>{
    requestNumber++;
    console.log(`#${requestNumber} server ${serverNum}`, req.method,req.url,req.body)
    res.send(`Hello from server ${serverNum}`)
}

app1.get('*',handler(1))
app2.get('*',handler(2))
app3.get('*',handler(3))
app4.get('*',handler(4))
app5.get('*',handler(5))
app6.get('*',handler(6))
app7.get('*',handler(7))
app8.get('*',handler(8))
app9.get('*',handler(9))
app10.get('*',handler(10))



app1.listen(3000)
app2.listen(3001)
app3.listen(3002)
app4.listen(3003)
app5.listen(3004)
app6.listen(3005)
app7.listen(3006)
app8.listen(3007)
app9.listen(3008)
app10.listen(3009)
