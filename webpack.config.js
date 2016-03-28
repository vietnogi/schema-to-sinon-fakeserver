var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './index.js',
  module: {
    loaders: [{
      test: /\.js?$/,
      loader: 'babel',
      exclude: /node_modules/,
      query: { presets: [ 'es2015', 'react', 'stage-0' ] },
    }],
  },
  resolve: {
    root: './node_modules/',
    modulesDirectories: ['node_modules'],
    extensions: [
      '',
      '.js',
      '.json',
    ],
  },
  plugins: [new HtmlWebpackPlugin({
    template: './index.html',
    inject: 'body',
  })],
}
