/*eslint-disable */
const path = require('path');
const webpack = require('webpack');
const config = require('./webpack.base');

config.devtool = '#source-map';

// Entry
config.entry.unshift('webpack/hot/only-dev-server'); // hmr
config.entry.unshift('webpack-dev-server/client');   // server

// Output
config.output = {
  path: path.resolve('./build'),
  publicPath: '/',
  filename: 'bundle.js'
};

// Dev server CFG
config.devServer = {
  publicPath: '/',
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  port: process.env.PORT || '8080',
  host: '0.0.0.0',
  hot: true,
  historyApiFallback: true,
  contentBase: path.resolve(__dirname, '../build')
};

config.plugins.push(new webpack.HotModuleReplacementPlugin());
config.plugins.push(new webpack.NoErrorsPlugin());

// Add JavaScript loaders
config.module.loaders.push({
  test: /\.js$/,
  exclude: /node_modules/,
  loader: 'babel'
});

module.exports = config;
