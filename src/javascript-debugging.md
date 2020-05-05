This is a good starting point for node debugging:
https://nodejs.org/en/docs/guides/debugging-getting-started/

Be careful when **debugging mocha**.
- Running `node --inspect path/to/mocha/bin/_mocha …` **WILL NOT WORK!**
- Use: `npx mocha --inspect` instead!

When running **inside docker**, be sure to set the ip to 0.0.0.0!
`node --inspect=0.0.0.0:9229 some.js`
Setting it to 127.0.0.1 (the default) will only allow connections from the
same machine – which for a docker container excludes the host.


To break execution before user code, use `--inspect-brk[=host:ip]`.

As for **debugging clients**:
- the vscode debugger seems **a lot more reliable** than the chrome built-in,
  especially when it comes to detecting open debugging sessions.

- Use this as a starting point for your launch config.
  Note that `outFiles` is only needed for compiled apps.
  ```
  {
    "type": "node",
    "request": "attach",
    "name": "attach to 127.0.0.1:9229",
    "port": 9229,
    "outFiles": ["/path/to/your/dist/**/*.js"],
    "address": "127.0.0.1"
  }
  ```
- You can use
  [chrome://inspect/#devices](the chrome debugger)
  to connect to an open debugging session.
