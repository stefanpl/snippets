#!/bin/bash
set -e

# Spin off a redis container on the default port:
docker run --name one-off-redis \
  -p 6379:6379 \
  -d redis

# Connect to the redis container:
docker run \
  -it --rm \
  --link one-off-redis:redishost \
  redis \
  redis-cli \
    -h redishost
