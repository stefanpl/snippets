#!/bin/bash
set -e

if [ "$x" = "valid" ]; then
  echo "x has the value 'valid'"
fi

if [ "${STATUS}" != 200 ] && [ "${STRING}" != "${VALUE}" ]; then
# String equality should be done with a single '='!
if [ "${STATUS}" != 200 ] || [ "${STRING}" = "${VALUE}" ]; then

argumentEqualsString() {
  [[ "${1}" == "someString" ]]
  return
}
