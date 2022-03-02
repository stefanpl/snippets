#!/bin/bash
set -eo pipefail

# This compresses a folder 'sampleData' into a gzipped tar archive,
#  using the parallel pigz program.
#
# This should be reasonably effective in terms of compression,
#  and will be very fast on multi-core machines.
#
# The -k flag is responsible for keeping the original file.

tar --use-compress-program="pigz -k" -cf sampleData.tar.gz sampleData
