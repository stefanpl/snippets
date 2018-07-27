# Why are we signing cookies?

## General info

Signing a cookie prevents the user from tampering with the cookie value without us knowing.
A cookie is signed by adding to the cookie contents a hash which is calculated using (at least):
- the original cookie contents
- an unknown (to the user) secret value which is stored on the server

If the user now tries to send the cookie back with altered contents, the server can instantly see that it has been modified: it calculates the expected hash by taking the cookie contents and the secret value. If the resulting hash does not match the hash sent with the cookie, the cookie value has been maliciously altered.

## What if the cookie (only) contains the session ID?

A session ID stored in a cookie is – until the session expires – a full equivalent to a username and password. After logging in, an authenticated user only sends his session cookie to the server with his request, so an attacker who gains control over somebody else's session ID can make requests on their behalf.

For example, if session IDs were just incrementing numbers, stored in plain inside the session cookie, I could just alter this number (increase it by one), send back the cookie and gain access to a session which has been created by another user. To prevent this, a number of measures must be taken:
- the session ID is generated randomly
- the session cookie is signed. Thereby, even if an attacker can figure out our (maybe not so random after all) session ID algorithm, he cannot send a cookie with a differend session ID. To do so, he would need to know the secret value used to generate the signing hash.
- additional measures, such as binding a session to a user's browser, might help to increase security but will be pointless unless the aforementioned points are implemented correctly.


```javascript
console.log('Some message goes here.');
```