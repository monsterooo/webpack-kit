let webpack = require('webpack');
let baseConfig = require('./webpack.config.base.js');
let config = Object.create(baseConfig);

// 为开发环境优化
config.plugins = config.plugins.concat(
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development')
  })
);

module.exports = config;
