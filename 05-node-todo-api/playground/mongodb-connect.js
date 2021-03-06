const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/todoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.')
  }
  console.log('Connected to MongoDB server.')
  const db = client.db('todoApp')

  db.collection('todos').insertOne({
    text: 'Something to do',
    completed: false
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert todo', err)
    }

    console.log(JSON.stringify(result.ops, undefined, 2))
  })

  db.collection('users').insertOne({
    name: 'Ivaylo',
    age: 90,
    location: 'Sofia'
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert user', err)
    }

    console.log(result.ops[0]._id.getTimestamp())
  })

  client.close()
})