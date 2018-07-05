const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/todoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.')
  }
  console.log('Connected to MongoDB server.')
  const db = client.db('todoApp')

  // Set a particular todo to completed: true
  db.collection('todos').findOneAndUpdate({
    _id: new ObjectID('5b3ca49f03e2f8023bd8fc6d')
  }, {
    $set: {
      completed: true
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result)
  })

  // Increment age with 1
  db.collection('users').findOneAndUpdate({
    _id: new ObjectID('5b3ca65003e2f8023bd8fdbc')
  }, {
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result)
  })

  client.close()
})