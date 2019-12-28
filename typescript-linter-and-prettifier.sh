#!/bin/bash
set -e

np i -D prettier eslint-config-prettier eslint-plugin-prettier @typescript-eslint/eslint-plugin eslint eslint-config-airbnb-typescript eslint-loader eslint-plugin-import
wget https://raw.githubusercontent.com/stefanpl/typescript-template/master/.eslintrc.js
wget https://raw.githubusercontent.com/stefanpl/typescript-template/master/prettier.config.js

# also, this needs to be a rule under modules in the webpack config:

#      {
#        test: /\.(tsx?|js)?$/,
#        exclude: /node_modules/,
#        loader: 'eslint-loader',
#        options: {
#          // eslint options (if necessary)
#          fix: true,
#        },
#      },
