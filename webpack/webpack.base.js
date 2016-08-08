/*eslint-disable */
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, '..'),

  entry: [
    './src/app/bootstrap.js'
  ],

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
      }
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: '../index.html',
      inject: 'body'
    })
  ],

  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: 'style!css!postcss!sass',
        exclude: [/node_modules/]
      },
      {
        test: /\.css$/,
        loader: 'style!css!postcss'
      },
      {
        test: /\.png$/,
        loader: 'file-loader'
      },
      {
        test: /\.svg$/,
        exclude: /font/,
        loader: 'svg-sprite?' + JSON.stringify({
          name: '[name]_[hash]',
        })
      }
    ]
  },

  postcss: function () {
    return [require('autoprefixer')];
  },

  resolve: {
    alias: {
      app: path.resolve(__dirname, '../src/app'),
      components: path.resolve(__dirname, '../src/app/components'),
      containers: path.resolve(__dirname, '../src/app/containers'),
      decorators: path.resolve(__dirname, '../src/app/decorators'),
      events: path.resolve(__dirname, '../src/app/events'),
      style: path.resolve(__dirname, '../src/assets/style'),
      images: path.resolve(__dirname, '../src/assets/images')
    },
    modulesDirectories: [
      'node_modules'
    ],
    extensions: ['', '.js']
  }
};
