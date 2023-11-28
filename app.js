const express = require('express')
const ejs = require('ejs');
const app = express()
const port = 3000


app.set('view engine', 'ejs')
app.set('views', './views')
//routing
app.get('/', (req, res) => {
    res.render('index')  // ./views/index.ejs
})

app.get('/profile', (req, res) => {
    res.render('profile')
  })

app.get('/test', (req, res) => {
    res.send('<h1>test</h1>')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})