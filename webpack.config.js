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
  resolve: {
    extensions: ['.js'],
    alias: {
      '@components': resolve(__dirname, 'app/components/'),
      '@scenes':     resolve(__dirname, 'app/scenes/'),
      '@containers': resolve(__dirname, 'app/containers/'),
      '@shared':     resolve(__dirname, 'app/shared/')
    }
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
        test: /(\.css|\.sass|\.scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ],
      },
      {
        test   : /\.(jpg|jpeg|png|svg|otf|ttf|eot|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader : 'file-loader'
      },
    ],
  },
  plugins: [
    new webpack.NamedModulesPlugin()
  ],
};