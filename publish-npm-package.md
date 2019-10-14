- Ensure proper package.json. Sample: https://github.com/netzstrategen/merge/blob/master/package.json
- `npm login`
- Push latest changes to master
- Add Git tag on master (matching package.json) via `git tag v<version_number>` (creates 'Release' on GitHub)
- `npm publish`
Updates can either be done by manually adjusting the files or by using the instructions here: https://docs.npmjs.com/updating-your-published-package-version-number