const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/user/:id', function (req, res) {
  // as a parameter
  // const q = req.params
  // console.log(q)

  // as a query
  const q = req.query
  console.log(q)

  res.json({'userid' : q.id})
})

app.get('/cat', function (req, res) {
  res.json({'sound' : 'cat cat'})
})

app.listen(3000)