const path = require('path');
// const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  // module: {
  //   rules: [
  //     {
  //       test: /\.css$/i,
  //       use: ['style-loader', 'css-loader'],
  //     },
  //   ]
  // },

  output: {
    publicPath: '/',
  },
  target: 'web',
  // Set the mode to development or production
  mode: 'development',
  // Control how source maps are generated
  devtool: 'inline-source-map',
  // Spin up a server for quick development
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, '/dist'),
    open: true,
    compress: true,
    port: 8888,
  },
  plugins: [
    // Only update what has changed on hot reload
    // new webpack.HotModuleReplacementPlugin(),
  ],
});