# React Bare Minimum

A bare minimum setup to work with react and node. Compiling and bundling, nothing else.

* It compiles ES6 code containing JSX syntax
* It bundles your code to a single JavaScript file

## How to use it

Just download the files and run:

* `npm i`
* `npm run build` (`yarn build`) for building the project once
* `npm run watch` (`yarn watch`) to automatically browserify as you save changes
* `npm start` (`nodemon server.js`) with a custom nodemon config to watch for changes to public\ to restart node after browserify updates the bundle


When the build finishes check out the `public` folder. There is an `index.html` file and a bundled `app.js`.

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

## Credit

[Github/krasimir](https://github.com/krasimir/react-bare-minimum/blob/master/package.json)