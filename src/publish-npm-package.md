# Publish an npm package

- Ensure proper package.json: [Example](https://github.com/netzstrategen/merge/blob/master/package.json)
- `npm login`
- override main module, set up .npmignore: https://github.com/bookercodes/articles/blob/master/how-to-build-and-publish-es6-npm-modules-today-with-babel.md#overriding-the-main-module
- Push latest changes to master
- Add Git tag on master (matching package.json) via `git tag -a -m "message for the tag" v<version_number>` (creates 'Release' on GitHub)
- `npm publish`
Updates can either be done by manually adjusting the files or by using the instructions here: https://docs.npmjs.com/updating-your-published-package-version-number