# How to forward an x server connection via ssh to macos

Why?

Have a graphical application running on a server, forwarding the UI to your local mac machine.

## xquartz

xquartz is required on the client to display stuff:
`brew install --cask xquartz`

run xquartz, open the settings, make sure "Authenticate Connections" is enabled in the security tab.

## server config

Those values should be set in `/etc/ssh/sshd_config`:

```shell
X11Forwarding yes
X11DisplayOffset 10
X11UseLocalhost no
```

## client config

This config should be used to connect:

```shell
ForwardX11 yes
ForwardAgent yes
XAuthLocation /opt/X11/bin/xauth
```
