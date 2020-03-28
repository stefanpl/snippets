When talking to the wordpress api, consider:

- the node package 'wpapi' will not work with woocommerce!
  Try https://woocommerce.github.io/woocommerce-rest-api-docs or use basic axios requests!
- the node package 'wpapi' will only work when webpack contains: 
  ```javascript
  plugins: [
    new webpack.DefinePlugin({ "global.GENTLY": false }),
    …
  ]
  ```
  Otherwise, there is an error saying that 'require is not defined'

- The plugin 'jwt-authentication-for-wp-rest-api' can be used to authenticate via jwt.
  Important: apache might filter out the Authorization header. To prevent this, add:
  `SetEnvIf Authorization .+ HTTP_AUTHORIZATION=$0` to your .htaccess

- To be able to modify acf fields, the plugin https://github.com/airesvsg/acf-to-rest-api is required.
  Follow the instructions, adding filters to functions.php to enable accessing fields via the api.
  