#!/bin/bash
set -e

# This will run a postgres instance at the default port (5432),
#  saving data to /tmp/data
docker run --name one-off-postgres\
  -p 5432:5432 \
  -e POSTGRES_PASSWORD=hunter12 \
  -e POSTGRES_USER=orm-user \
  -e POSTGRES_DB=orm-db \
  -v /tmp/data/one-off-postgres:/var/lib/postgresql/data -d postgres

# Connect to the postgres instance created above.
docker run \
  -it --rm \
  --link one-off-postgres:postgres \
  postgres \
  psql \
  -h postgres \
  -U orm-user \
  orm-db
