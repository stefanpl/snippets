#!/bin/bash

desiredWidth=1600
fileExtension=jpg
targetFolder=_scaled
desiredQuality=75


find . -maxdepth 1 -mindepth 1 -iname "*.${fileExtension}" -type f -exec \
  convert "{}" -quality ${desiredQuality} -resize ${desiredWidth} ${targetFolder}/"{}" \;