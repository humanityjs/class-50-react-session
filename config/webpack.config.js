const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: path.join(__dirname, '../src/index.js'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, '../build'),
    publicPath: '/',
    hot: true
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: path.join(__dirname, '../build'),
    filename: 'bundle.js'
  },
  plugins: [
    new CopyPlugin([
      {
        from: path.join(__dirname, '../public/index.html'),
        to: path.join(__dirname, '../build')
      }
    ]),
    new webpack.HotModuleReplacementPlugin()
  ]
};
