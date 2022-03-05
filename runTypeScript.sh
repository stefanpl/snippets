#!/bin/bash
set -eo pipefail

scriptDir="$(cd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null 2>&1 && pwd)"

script=$1

if [ -z "${script}" ]; then
    echo "No script given. Exiting." >/dev/stderr
    exit 1
fi

node --loader ts-node/esm --experimental-specifier-resolution=node ${script} 2>&1 |
    grep -v "ExperimentalWarning: --experimental-loader" |
    grep -v "Use \`node --trace-warnings ...\`"
