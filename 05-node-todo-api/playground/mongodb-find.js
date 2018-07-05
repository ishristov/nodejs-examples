const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/todoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.')
  }
  console.log('Connected to MongoDB server.')
  const db = client.db('todoApp')

  db.collection('todos').find({
    _id: new ObjectID('5b3c85d5cb3126288139a535')
  }).toArray().then((docs) => {
    console.log('Todos')
    console.log(JSON.stringify(docs, undefined, 2))
  }, (err) => {
    console.log('Unable to fetch todos', err)
  })

  db.collection('todos').find().count().then((count) => {
    console.log(`Todos count: ${count}`)
  }, (err) => {
    console.log('Unable to fetch todos', err)
  })

  db.collection('users').find({name: 'Ivaylo'}).count().then((count) => {
    console.log(`Ivaylo users count: ${count}`)
  }, (err) => {
    console.log('Unable to fetch users', err)
  })

  client.close()
})