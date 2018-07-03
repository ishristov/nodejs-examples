# Simple Express Example

A basic Node.js example that uses [Express](http://expressjs.com/) for running the website with [hbs](https://github.com/wycats/handlebars.js) as a viewing engine.

The app can be run locally but it is also deployed on Heroku for testing purposes and playing with Heroku deployment.

## Running locally
```
npm start
```

This will start a server running on [http://localhost:3000](http://localhost:3000).

## Heroku

The deployed app is currently running on [Heroku](https://tragically-crown-83002.herokuapp.com/).

Since this app is managed as a subfolder in the main [nodejs-examples](https://github.com/ishristov/nodejs-examples) repo and Heroku's default config does not allow to automatically deploy a subfolder from git repository as a standalone project (it expects that each Heroku deployed project is a separate git repo) some tweaks had to be made so it can be easily deployed while still being in a subfolder.

So after running the `heroku create` command in this folder it returns a random name app and a link to the Heroku repository, e.g. `tragically-crown-83002` and `https://git.heroku.com/tragically-crown-83002.git`.
This link have to be added as a heroku remote repo for the project with:
```
git remote add heroku-nws https://git.heroku.com/tragically-crown-83002.git
```
The last step is to add a `publish` command in the `package.json` which looks like
```
"scripts": {
    ...,
    "publish": "cd ../ && git subtree push --prefix 03-node-web-server heroku-nws master || true"
  }
```

This way, we can have the project as a subfolder in a larger git repo (which can also contain other subfolders which are also independently deployed as a separate Heroku apps) but we can deploy the app in this folder with just `npm run publish`. What it does is getting only the `03-node-web-server` folder from the whole git project and pushing it to the `heroku-nws` repo it its `master` brach (which we've set to be the Heroku repo).