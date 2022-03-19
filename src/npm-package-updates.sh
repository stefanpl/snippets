# @see
# https://www.npmjs.com/package/npm-check-updates

# do a dry run, not performing major updates:
npx npm-check-updates --target minor

# add the -u flag to adjust package.json
npx npm-check-updates --target minor -u
