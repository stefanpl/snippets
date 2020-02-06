sb

# There's more, e.g. pattern matching:
# https://www.gnu.org/savannah-checkouts/gnu/bash/manual/bash.html#Shell-Parameter-Expansion

# Shell parameter expansion
# 
# Setting a default value for a variable:
# If ${1} is empty ("") or not set (see last -z example),
#  the provided value will be used
firstParam=${1:-"not provided :("}

# This value will be assigned if ${1} is not empty
firstParam=${1:+"haz da first param!"}

# Substring expansion:
`${parameter:offset:length}`
# This will return 10 characters (at max), starting from position 4 (zero-based!)
${1:4:10}

# Returns the length of the given parameter
${#parameter}

