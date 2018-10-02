Basically, check [this excellent serverfault answer](https://serverfault.com/questions/214512/redirect-change-urls-or-redirect-http-to-https-in-apache-everything-you-ever). It will answer (almost) all of your questions.

Please bear in mind that the __order of rules__ is important! Consider this block, taken from laravel's htaccess:

```
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.php [L]
```

It means that any URI not matching an actual file will be redirected to the frontend controller (index.php). If you try to add any rule which operates on a 'virtual' (not pointing to a file directly) route *after* this block, __it will never be applied__: The `[L]` flag will prevent any subsequent rules from being parsed.