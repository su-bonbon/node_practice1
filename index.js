const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/sound/:name', function (req, res) {
  const { name } = req.params

  if(name == "dog") {
    res.json({'sound' : 'dog dog'})
  } else if(name == "cat") {
    res.json({'sound' : 'cat cat'})
  } else if(name == "pig") {
    res.json({'sound' : 'pig pig'})
  } else {
    res.json({'sound' : 'no no'})
  }
})

app.listen(3000)