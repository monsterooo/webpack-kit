let webpack = require('webpack');
let baseConfig = require('./webpack.config.base.js');
let config = Object.create(baseConfig);

// 生产环境
config.entry = './src/app/Main.js'; // 生产环境只保留文件入口
config.plugins = config.plugins.concat(
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
  }),
  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      warnings: false
    }
  })
);

module.exports = config;
