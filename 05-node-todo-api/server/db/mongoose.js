const mongoose = require('mongoose')

mongoose.Promise = global.Promise

const db = {
  local: 'mongodb://localhost:27017/todoApp',
  prod: 'mongodb://test:test1234@ds161520.mlab.com:61520/todo-app'
}
mongoose.connect(process.env.PORT ? db.prod : db.local)

module.exports = {mongoose}