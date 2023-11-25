const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/dog', function (req, res) {
  res.send({'sound' : 'dog dog'})
})

app.get('/cat', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)