#!/bin/bash
set -e

# only print the match
"some string" | egrep -o "st.*g" # will return only 'string'

# only print filenames:
grep -ir "searching this" /search/in/here
