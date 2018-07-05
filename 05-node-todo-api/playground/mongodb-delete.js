const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/todoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.')
  }
  console.log('Connected to MongoDB server.')
  const db = client.db('todoApp')

  // deleteMany
  db.collection('todos').deleteMany({text: 'Each lunch'}).then((result) => {
    console.log(result.result)
  })

  // deleteOne
  db.collection('todos').deleteOne({text: 'Each lunch'}).then((result) => {
    console.log(result.result)
  })

  // findOneAndDelete
  db.collection('todos').findOneAndDelete({completed: false}).then((result) => {
    console.log(result)
  })

  db.collection('users').findOneAndDelete({_id: new ObjectID('5b3c91e07d14732acb304597')}).then((result) => {
    console.log(result)
  })

  client.close()
})