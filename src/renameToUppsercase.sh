#!/bin/bash
set -eo pipefail

# To rename something to uppercase, the rename excepts a \u modifier.
# This will uppercase the first letter of a match:
rename 's/^([a-z])/\u$1/'
