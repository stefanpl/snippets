#!/bin/bash

host=127.0.0.1
port=8983
core=myCore

curl http://${host}:${port}/solr/${core}/update?commit=true --data '<delete><query>*:*</query></delete>' -H 'Content-type:text/xml; charset=utf-8'
