#!/bin/bash
set -e

# This will run a postgres instance at the default port (5432),
#  saving data to /tmp/data
docker run --name one-off-postgres\
  -p 5432:5432 \
  -e POSTGRES_PASSWORD=pgpass \
  -e POSTGRES_USER=pguser \
  -e POSTGRES_DB=defaultdb \
  -v /tmp/data/one-off-postgres:/var/lib/postgresql/data -d postgres

# Connect to the postgres instance created above.
docker run \
  -it --rm \
  --link one-off-postgres:postgreshost \
  postgres \
  psql \
  -h postgreshost \
  -U orm-user \
  orm-db
