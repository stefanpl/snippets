// Work around the any-promise critical dependency error
// https://github.com/kevinbeaty/any-promise/issues/27
mix.webpackConfig(webpack => {
  return {
    plugins: [
      new webpack.NormalModuleReplacementPlugin(/^any-promise$/, 'promise-monofill'),
    ],
  };
});

