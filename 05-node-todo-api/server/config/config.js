const env = process.env.NODE_ENV || 'development'

if (env === 'development') {
  process.env.PORT = 3000
  process.env.CUSTOM_MONGODB = 'mongodb://localhost:27017/todoApp'
} else if (env === 'test') {
  process.env.PORT = 3000
  process.env.CUSTOM_MONGODB = 'mongodb://localhost:27017/todoAppTest'
} else {
  process.env.CUSTOM_MONGODB = 'mongodb://test:test1234@ds161520.mlab.com:61520/todo-app'
}