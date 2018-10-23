#!/bin/bash

# This script forwards connections from a given local port to an arbitrary host/port on any ssh server.
#
# The script will:
# 
# -f go to background
# -N not execute any ssh commands.

localPortToBeForwarded=8123
remoteHost=127.0.0.1
remotePort=8080

sshServer=hcli

ssh -L ${localPortToBeForwarded}:${remoteHost}:${remotePort} ${sshServer} -f -N