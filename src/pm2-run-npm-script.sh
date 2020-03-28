#!/bin/bash
set -e

pm2 start npm --no-automation --name {app name} -- run {script name}
