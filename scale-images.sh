#!/bin/zsh

desiredWidth=1600
fileExtension=jpg
targetFolder=scaled
desiredQuality=75
skipEmpty=true

imagesToBeScaled=`find . -iname "*.${fileExtension}" -not -path "./${targetFolder}/*" -type f`

while read -r imagePath; do
  scaledPath="./${targetFolder}/${imagePath}"
  if [ -f "${scaledPath}" ] && [ ${skipEmpty} = "true" ]; then
    echo ${scaledPath} exists! >> /dev/null
  else
    mkdir -p `dirname "${scaledPath}"`
    convert "${imagePath}" -quality ${desiredQuality} -resize ${desiredWidth} "${scaledPath}"
  fi
done <<< "$imagesToBeScaled"

logSuccess 'Done scaling!'
