var path = require("path");
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackExcludeAssetsPlugin = require('html-webpack-exclude-assets-plugin');
var cssModule = 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]';

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8088/',
    'webpack/hot/dev-server',
    './src/app/Main.js'
  ],
  output: {
    path: path.resolve(__dirname, 'bin'),
    filename: "[name].[hash:5].js",
  },
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modudles/,
        loaders: ['babel-loader']
      },
      {
        test: /\.css$/,
        exclude: /fontawesome|node_modules/,  // 这里要排除第三库目录，避免css名字被格式化
        loader: ExtractTextPlugin.extract('style', cssModule + '!postcss')
      },
      {
        test: /font-awesome\.css$/, // 对于第三方库的支持加载
        exclude: /node_modules/,
        loader: 'style!css'
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract('style', cssModule + '!postcss', 'less')
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract(
          'style',
          cssModule + '!postcss!sass'
        )
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url?limit=30000'
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff&name=[name]-[hash].[ext]"
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff&name=[name]-[hash].[ext]"
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/octet-stream&name=[name]-[hash].[ext]"
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file?&name=./src/app/resources/fontawesome/[name]-[hash].[ext]"
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=image/svg+xml&name=[name]-[hash].[ext]"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new webpack.optimize.DedupePlugin(),
    // 释放app为单独的css文件
    new ExtractTextPlugin('[name].[hash:5].css', {
      allChunks: false
    })
  ]
};
