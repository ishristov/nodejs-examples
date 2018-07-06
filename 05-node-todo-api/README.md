# Node Todo API

The API uses [Express](http://expressjs.com/) for the Node.js server, [MongoDB](https://www.mongodb.com/) for the database, [MongoDB official driver for Node.js](https://github.com/mongodb/node-mongodb-native) and [mongoose](http://mongoosejs.com/) for the object modeling.

The test suite includes [Mocha](https://mochajs.org/) for a test framework with [expect](https://github.com/mjackson/expect) for assertions and [supertest](https://github.com/visionmedia/supertest) for testing the Express server.

## Live demo

The API is deployed on Heroku [here](https://fast-hamlet-63347.herokuapp.com/) with the MongoDB demo instance hosted on [https://mlab.com/](https://mlab.com/).

todo...
commands...

## Dev

We have 3 environments described in `server/config/config.js`. The prod env uses the mlab MongoDB instance and the dev/test uses a local `todoApp`/`todoAppTest` db.

### Local development

The local development requires that the user have MongoDB locally. For starting the local MongoDB run
```
~/mongo/bin/mongod --dbpath ~/mongo-data/
```

This assumes that the MongoDB executables are in the main user folder inside of `mongo/` and the data is in a sibling folder called `mongo-data/`. These folders can be different as long as the MongoDB is running on `localhost:27017`.

Then simply running `npm start` should run the server.

And by using Postman, we can add and list todos on `http://localhost:3000/todos`.

The tests can be ran with `npm test` (the API server should be stopped).

### Heroku deployment

The heroku app is created with `heroku create`.

This returned a `heroku repo`, i.e. `https://git.heroku.com/fast-hamlet-63347.git` which was then added as a `heroku-todos` git remote repo with
```
git remote add heroku-todos https://git.heroku.com/fast-hamlet-63347.git
```

To deploy the API to Heroku, we should add and commit all changes with `git` and just run `npm run publish` from the `node-todo-api` folder. Even though the parent `nodejs-examples` is a single repo with multiple examples/projects, `npm run publish` from here will only push the `node-todo-api` to Heroku.

