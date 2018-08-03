// This fixes the following error:
// "Module not found: Error: Can't resolve 'fs'"
mix.webpackConfig(webpack => {
  return {
      target: 'node'
  };
});
