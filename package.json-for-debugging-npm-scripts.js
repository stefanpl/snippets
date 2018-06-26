// To debug the script, _adding `node $NODE_DEBUG_OPTION`_ before the module which is to be executed (webpack.js) is crucial.
// Do not put it infront of the NODE_ENV declarations though!

// This file assumes you are using laravel-mix

// Put this into your project's package.json
"scripts": {
  "dev": "NODE_ENV=development node $NODE_DEBUG_OPTION node_modules/webpack/bin/webpack.js --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js",
  "watch": "NODE_ENV=development node $NODE_DEBUG_OPTION node_modules/webpack/bin/webpack.js --watch --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js",
  "production": "NODE_ENV=production node_modules/webpack/bin/webpack.js --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js",
  "test": "echo \"Error: no test specified\" && exit 1"
},