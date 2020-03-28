#!/bin/bash

# Meaning of the flags and options:
# -I perform a HEAD request
# -L follow redirects
# --location-trusted the provided credentials will be sent to all pages that the site redirects to
# -u provide credentials for basic authentication

curl -IL --location-trusted -u early:access dorsievers.de
