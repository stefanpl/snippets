#!/bin/bash

# get the last 100k lines from the log
tail -n 100000 storage/requests.log \
| grep published_at \
# filter out the timestamps
| perl -p -e 's/.*published_at\":([0-9]+),.*/$1/g' \
# print each timestamp, followed by the readable date
| while read -r line; do printf "$line"": " ; date -d @"$line" ; done