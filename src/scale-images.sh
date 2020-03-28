#!/bin/zsh

desiredWidth=1600
fileExtension=jpg
targetFolder=scaled
desiredQuality=75
skipExisting=true

imagesToBeScaled=`find . -iname "*.${fileExtension}" -not -path "./${targetFolder}/*" -type f`

while read -r imagePath; do
  scaledPath="./${targetFolder}/${imagePath}"
  if [ -f "${scaledPath}" ] && [ ${skipExisting} = "true" ]; then
    echo "${scaledPath} exists. Skipping."
  else
    mkdir -p `dirname "${scaledPath}"`
    convert "${imagePath}" -quality ${desiredQuality} -resize ${desiredWidth} "${scaledPath}"
  fi
done <<< "$imagesToBeScaled"

logSuccess 'Done scaling!'
