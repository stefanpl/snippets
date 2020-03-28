#!/bin/bash

host=127.0.0.1
port=8983
core=myCore


output=`curl --silent -L http://${host}:${port}/solr/admin/cores?action=RELOAD\&core=${core}`
echo ${output} | grep -e status.*0 > /dev/null \
  || printf "Reloading the core failed. Curl output: \n ${output}"
