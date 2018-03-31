#!/bin/bash

# Basic syntax:
# while read -r line; do command "$line"; done

# Example: 
find . -type f | while read -r file; do echo "we have a file called ${file} here"; done

# WARNING: 
# The while loop is executed in a subshell.
# Any attempts to modify variable from outside will fail.
# A workaround is using command substitution:

command="ls"
while read filename; do
  # perform computations on $i
  command+=" ${filename}"
done < <(find . -maxdepth 1 -type f)

echo "the command is ${command}"