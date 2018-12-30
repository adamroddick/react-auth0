# React with Auth0 authentication

* It compiles ES6 code containing JSX syntax with `babel`
* It bundles your code to a single JavaScript file with `browserify`
* It watches you develop and auto bundles with `watchify`
* It uses a `react` and `react-dom` frontend
* It uses a `node` and `express` backend
* It authenticates users with auth0.com
* It runs on netlify.com

## Development
* Run two terminal windows, in 1 run `npm run watch` to automatically run browserify bundler as you save changes and in terminal 2 run `npm start` (`nodemon server.js`) which uses a custom nodemon config to watch for changes to public\ to restart node after browserify updates the bundle

## Dependencies

Backend:
* `express`
* `path`
* `nodemon`

Frontend:
* `babel-core`
* `babel-preset-es2015`
* `babel-preset-react`
* `babelify`
* `browserify`
* `react`
* `react-dom`
* `watchify`