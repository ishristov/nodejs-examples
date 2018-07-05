# Node Todo API

The API uses Express, MongoDB, [MongoDB official driver](https://github.com/mongodb/node-mongodb-native) for Node.js and mongoose.

## Local deployment

The local deployment requires that the user have installed MongoDB locally. For starting the local MongoDB run
```
~/mongo/bin/mongod --dbpath ~/mongo-data/
```

This assumes that the MongoDB executables are in the main user folder inside of `mongo/` and the data is in a sibling folder called `mongo-data`.

Then simply running `npm run start` should run the API.

And then by using Postman, we can add and list todos on `http://localhost:3000/todos`.

## Heroku deployment

The heroku app is created with `heroku create`. The returned `heroku repo`, e.g. `https://git.heroku.com/fast-hamlet-63347.git` was then added as a `heroku-todos` git remote repo with
```
git remote add heroku-todos https://git.heroku.com/fast-hamlet-63347.git

To configure MongoDB for the heroku app we should add the mongolab plugin with:
```
heroku addons:create mongolab:sandbox
```

