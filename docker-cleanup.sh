#!/bin/bash
set -e
docker volume rm $(docker volume ls -qf dangling=true)
docker system prune -a -f
