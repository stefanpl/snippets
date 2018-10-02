#!/bin/bash

# This script forwards connections from a given local port to an arbitrary host/port on any ssh server.

localPortToBeForwarded=8123
remoteHost=127.0.0.1
remotePort=8080

sshServer=hcli

# -f – go to background
# -N – do not execute commands.
ssh -L ${localPortToBeForwarded}:${remoteHost}:${remotePort} ${sshServer} -f -N