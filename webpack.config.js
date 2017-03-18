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
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => ([
                require('autoprefixer'),
              ]),
            },
          },
          'sass-loader'
        ],
      },
      {
        test: /\.(png|jpg|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 100000,
          name: '[name].[ext]',
        },
      },
      {
        test: /\.(eot|ttf|woff)?(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        options: {
          limit: 50000,
          // Output below the fonts directory
          name: './fonts/[name].[ext]',
          // Tweak publicPath to fix CSS lookups to take
          // the directory into account.
          publicPath: '/dist/',
        },
      },
    ],
  },
  plugins: [
    new webpack.NamedModulesPlugin()
  ],
};