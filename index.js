const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/user/:id', function (req, res) {
  const q = req.params
  console.log(q)



  res.json({'sound' : 'dog dog'})
})

app.get('/cat', function (req, res) {
  res.json({'sound' : 'cat cat'})
})

app.listen(3000)