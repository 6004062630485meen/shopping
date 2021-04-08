
const express = require('express')
const app = express()

const product = require('./db')

app.get('/product', (req, res) => {
  res.json(product)
})

app.post('/product', (req, res) => {
    books.push(req.body)
    res.status(201).json(req.body)
  })

app.listen(3000, () => {
  console.log('Start server at port 3000.')
})