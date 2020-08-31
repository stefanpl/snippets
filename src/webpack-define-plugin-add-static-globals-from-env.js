const findWebpackPlugin = (plugins, pluginName) => {
  plugins.find((plugin) => plugin.constructor.name === pluginName);
}

const addStaticGloabls = (webpackConfig, globals) => {
  const plugin = findWebpackPlugin(webpackConfig.plugins, "DefinePlugin");
  const globalsStringified = Object.entries(globals).reduce(
    (res, [key, value]) => ({
      ...res,
      [key]: JSON.stringify(value),
    }),
    {}
  );
  plugin.definitions = {
    ...plugin.definitions,
    ...globalsStringified,
  };
  return webpackConfig;
}

// Use it like:
addStaticGloabls(cfg, {
  SOME_AT_RUNTIME: process.env.SOME_AT_BUILDTIME
})
