/* eslint-disable */
const path = require('path');
const webpack = require('webpack');
const config = require('./webpack.base');

// Set source map type
config.devtool = 'source-map';

// Set output
config.output = {
  path: path.resolve('./build/assets/'),
  publicPath: '/assets/',
  filename: 'bundle.js'
};

// Add JavaScript loaders
config.module.loaders.push({
  test: /\.js$/,
  exclude: /node_modules/,
  loader: 'babel'
});

// Add uglify plugin
config.plugins.push(
  new webpack.optimize.UglifyJsPlugin({
    minimize: true
  })
);

module.exports = config;
