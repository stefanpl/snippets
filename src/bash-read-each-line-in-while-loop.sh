#!/bin/bash

# Basic syntax:
# while read -r line; do command "$line"; done

# Example: 
find . -type f | while read -r file; do echo "we have a file called ${file} here"; done

# WARNING: 
# The above while loop is executed in a subshell.
# Any attempts to modify variable from outside will fail.
# A workaround is using command substitution:

# We save a multi-line output inside a variable
soManyLinesOfOutput=`grep "[a-z]+$" somefile`

# We 'feed' the multi-line output inside the variable to read -r
while read -r line; do
  # As we are using command substitution, we could manipulate variables defined outside the loop!
  echo "One line of output: ${line}" 
done <<< "$soManyLinesOfOutput"

# An alternative to storing the values inside a variable first would be 
done <<< "`grep \"[a-z]+$\" somefile`"
