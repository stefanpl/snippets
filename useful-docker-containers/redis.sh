#!/bin/bash
set -e

docker run --name one-off-redis \
  -p 6379:6379 \
  -d redis
  