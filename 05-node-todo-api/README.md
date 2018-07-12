# Node Todo API

The API uses [Express](http://expressjs.com/) for the Node.js server, [MongoDB](https://www.mongodb.com/) for the database, [MongoDB official driver for Node.js](https://github.com/mongodb/node-mongodb-native) and [mongoose](http://mongoosejs.com/) for the object modeling.

The test suite includes [Mocha](https://mochajs.org/) for a test framework with [expect](https://jestjs.io/docs/en/expect) for assertions and [supertest](https://github.com/visionmedia/supertest) for testing the Express server.

## Live demo

The API is deployed on Heroku [here](https://fast-hamlet-63347.herokuapp.com/) with the MongoDB demo instance hosted on [https://mlab.com/](https://mlab.com/).

In order to read/write todos you have to create a new user or login with an already created user.

All available commands are listed below and can be fired with `curl`, however it's much easier to use [Postman](https://www.getpostman.com/) and import the workspace from [postman/Backup.postman_dump.json](postman/Backup.postman_dump.json). It contains a collection with all of the commands, Heroku and Local environment and environment variables.

### Create a new user
```
curl https://fast-hamlet-63347.herokuapp.com/users \
  -d '{"email":"ivaylo@example.com","password":"abc123"}' \
  -X POST \
  -i \
  -H "Content-Type: application/json"
```

### Login with an existing user
```
curl https://fast-hamlet-63347.herokuapp.com/users/login \
  -d '{"email":"ivaylo@example.com","password":"abc123"}' \
  -X POST \
  -i \
  -H "Content-Type: application/json"
```

The response should contain a `x-auth` header token which should be included in all of the following commands.

### Get current user
```
curl https://fast-hamlet-63347.herokuapp.com/users/me -i -H "x-auth: {TOKEN}"
```

**Important:** Replace `{TOKEN}` with the actual `x-auth` response header received from the create/login user.

### Logout user (deletes authentication token)
```
curl https://fast-hamlet-63347.herokuapp.com/users/me/token \
  -X DELETE \
  -i \
  -H "x-auth: {TOKEN}"
```

**Important:** After this comment, the user should login again and get the new auth token in order to edit their todos.

### Get todos (only for the authenticated user)
```
curl https://fast-hamlet-63347.herokuapp.com/todos -i -H "x-auth: {TOKEN}"
```

### Create a todo
```
curl https://fast-hamlet-63347.herokuapp.com/todos \
  -d '{"text":"First todo"}' \
  -X POST \
  -i \
  -H "Content-Type: application/json" \
  -H "x-auth: {TOKEN}"
```

This will return a todo with an `_id` property which can later be used to view/edit/delete it.

### Get a todo by id
```
curl https://fast-hamlet-63347.herokuapp.com/todos/{ID} -i -H "x-auth: {TOKEN}"
```

**Important:** Replace the `{ID}` with the `_id` returned from the create todo command.

### Update a todo by id
```
curl https://fast-hamlet-63347.herokuapp.com/todos/{ID} \
  -d '{"text":"First todo is completed", "completed": true}' \
  -X PATCH \
  -i \
  -H "Content-Type: application/json" \
  -H "x-auth: {TOKEN}"
```

### Delete a todo by id
```
curl https://fast-hamlet-63347.herokuapp.com/todos/{ID} \
  -X DELETE \
  -i \
  -H "x-auth: {TOKEN}"
```

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

Before deploying to Heroku we should set 2 environment variables with
```
heroku config:set MONGODB_URI=mongodb://test:test1234@ds161520.mlab.com:61520/todo-app
```
and
```
heroku config:set JWT_SECRET=uu2uhakj01kaoe09zjhfm37
```

If you have already configured another Heroku example from this repo and you get an error similar to `Multiple apps in get remotes`, just add `--remote heroku-todos` at the end of the commands.


To deploy the API to Heroku, we should add and commit all changes with `git` and just run `npm run publish` from the `node-todo-api` folder. Even though the parent `nodejs-examples` is a single repo with multiple examples/projects, `npm run publish` from here will only push the `node-todo-api` to Heroku.

