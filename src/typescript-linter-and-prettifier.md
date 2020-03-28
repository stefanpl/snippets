## First, include the required packages:

```sh
np i -D prettier eslint-config-prettier eslint-plugin-prettier @typescript-eslint/eslint-plugin eslint eslint-config-airbnb-typescript eslint-loader eslint-plugin-import
wget https://raw.githubusercontent.com/stefanpl/typescript-template/master/.eslintrc.js && wget https://raw.githubusercontent.com/stefanpl/typescript-template/master/prettier.config.js
```

## This goes into the webpack config:

```JavaScript
export {
  rules: [
     {
       test: /\.(tsx?|js)?$/,
       exclude: /node_modules/,
       loader: 'eslint-loader',
       options: {
         // eslint options (if necessary)
         fix: true,
       },
     },
  ],
};
```

## Now you can add this to your package.json: 
```JSON
"lint": "npx eslint \"src/**/*[jt]s\"",
```

## … or fix via the command line:
```sh
npx eslint --fix "src/**/*[jt]s" 
```
