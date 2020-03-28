#!/bin/bash

if [ -z "$BASH_SOURCE[0]" ]; then
  export SCRIPT_DIRECTORY=`dirname "$(readlink -f "$0")"`
else
  export SCRIPT_DIRECTORY="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
fi

# now SCRIPT_DIRECTORY contains the absolute path to the folder containing the file with this snippet.
# It does not matter weather the file gets sourced directly or inside another script.