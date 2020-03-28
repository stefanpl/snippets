#!/bin/bash

# Find files and grep their content
files=`find . -name "*star_wars*.txt"`
grepExpression="the_droids_you_are_looking_for"

while read -r line; do
  grepResult=`grep "${grepExpression}" "${line}"`
  if [ ! -z "$grepResult" ]; then
    echo "File ${line} contains:"
    echo "${grepResult}"
  fi 
done <<< "$files"

