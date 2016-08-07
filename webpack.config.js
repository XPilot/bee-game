/*eslint-disable */

var config = process.env.NODE_ENV === 'production' ?
    require('./webpack/webpack.prod')
    :
    require('./webpack/webpack.dev');

module.exports = config;
