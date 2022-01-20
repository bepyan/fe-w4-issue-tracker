const webpack = require('webpack');
const { merge } = require('webpack-merge');
const Dotenv = require('dotenv-webpack');
const common = require('./webpack.common.js');

const HTML_TEMPLATE = 'public/index.html';

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    port: 3000,
    compress: true,
    historyApiFallback: true,
    hot: true,
    open: true,
  },
  plugins: [
    new Dotenv({ path: '.env.development' }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
      DEBUG: true,
    }),
  ],
});
