const express = require('express')
const bodyParser = require("body-parser")
const morganBody = require("morgan-body")

const app = express()
const port = 3000

app.use(bodyParser.json());
morganBody(app, {logAllReqHeader:true, maxBodyLength:5000});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/api/zalo', (req, res) => {
  console.log(`Request: ${req}`)
  res.send('Hello zalo!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})