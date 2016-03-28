var configs = require('./webpack.config')

configs.entry = {}

module.exports = function (config) {
  config.set({
    browsers: [ 'Chrome' ],
    singleRun: true,
    frameworks: [ 'mocha', 'chai' ],
    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      './test.js',
    ],
    plugins: [
      'karma-chrome-launcher',
      'karma-chai',
      'karma-mocha',
      'karma-sourcemap-loader',
      'karma-webpack',
    ],
    port: 8080,
    preprocessors: {
      './test.js': ['webpack', 'sourcemap'],
    },
    reporters: [ 'dots' ],
    webpack: configs,
    webpackServer: {
      noInfo: true,
    },
  })
}
