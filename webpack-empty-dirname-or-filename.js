// https://github.com/webpack/webpack/issues/1599

// In case __dirname or __filename returns '/', the following must be set on the webpack config:

module.exports = {
  // …
  node: {
    __filename: true,
    __dirname: true
  },
  target: 'node',
  // …
}