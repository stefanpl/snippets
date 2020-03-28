mix.webpackConfig(webpack => {
  return {
    plugins: [
      // The 'live' variable will be available inside scripts, even if they run in the browser
      //  and have no access to process.env
      new webpack.DefinePlugin({
        'live': Mix.inProduction(),
      }),
    ]
  };
});