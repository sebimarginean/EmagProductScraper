const express = require('express')
const app = express()
const port = 3000
const functions = require('./functions')
const exec = require('./execute');
const Sequelize = require('sequelize')

exec()

//DB connection
var sequelize = new Sequelize('emag', 'root', 'password1', {
  host: 'localhost',
  dialect: 'mysql',
})

var User = sequelize.define('user', {
  value: Sequelize.FLOAT,
  date: Sequelize.DATE
})

app.use(express.static('public'))

app.get('/:pret', async (request, response) => {
  let price = request.params.pret
  sequelize.sync()
  User.create({
    value: price,
    date: functions('+2')
  })
  await response.json(User.value)
})

app.listen(port)