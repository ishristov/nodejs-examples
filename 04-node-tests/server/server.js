const express = require('express')

var app = express()

app.get('/', (req, res) => {
  res.send('Hello')
})

app.get('/users', (req, res) => {
  res.send([
    {
      name: 'Ivaylo',
      age: 90
    },
    {
      name: 'Desimira',
      age: 80
    }
  ])
})

app.get('*', (req, res) => {
  res.status(404).send({
    error: 'Page not found',
    name: 'App v.0.1'
  })
})

app.listen(3000)

module.exports.app = app