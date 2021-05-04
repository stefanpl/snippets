#!/bin/bash

# This script fetches all connections which are made to a given port on a remote machine.
# It forwards those connections to the given host/port on the local machine.
#
# You can use it, for example, to develop locally using a fixed url that is pointing to a server.
#
# The script will:
#
# -f go to background
# -N not execute any ssh commands.
# The -4 flag forces ssh to use IPV4, because it can fail when using V6

remotePortToBeFetched=8123
targetHost=127.0.0.1
targetPort=8080

sshServer=hcli

ssh -4 -R ${remotePortToBeFetched}:${targetHost}:${targetPort} ${sshServer} -f -N
