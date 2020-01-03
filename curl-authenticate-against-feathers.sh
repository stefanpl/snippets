#!/bin/bash
set -e

curl \
-H "Content-Type: application/json" \
--dump-header /dev/stdout \
-d '{"email": "someone@example.com", "password": "supersecret", "strategy": "local"}' \
http://localhost:3030/authentication

# then, set the access token
token=obtain-from-the-authentication-request

curl \
-H "Content-Type: application/json" \
-H "Authorization: Bearer ${token}" \
--dump-header /dev/stdout \
http://localhost:3030/authenticated-endpoint
