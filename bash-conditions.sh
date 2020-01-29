#!/bin/bash
set -e

if [ "$x" = "valid" ]; then
  echo "x has the value 'valid'"
fi

if [ "${STATUS}" != 200 ] && [ "${STRING}" != "${VALUE}" ]; then
