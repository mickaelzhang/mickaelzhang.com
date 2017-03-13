const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    // the entry point of our app
    './main.js'
  ],
  output: {
    // the output bundle
    filename: 'bundle.js',
    path: resolve(__dirname, 'web/dist'),
    // necessary for HMR to know where to load the hot update chunks
    publicPath: '/dist/'
  },
  context: resolve(__dirname, 'app'),
  devtool: 'inline-source-map',
  devServer: {
    // enable HMR on the server
    hot: true,
    // match the output path
    contentBase: resolve(__dirname, 'web'),
    // match the output `publicPath`
    publicPath: '/dist/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'react-hot-loader',
          'babel-loader',
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
        ],
      },
    ],
  }
};