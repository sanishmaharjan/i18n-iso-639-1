const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

let webpackConfig = {
  entry: {
    index: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, `./build`),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2016', 'stage-2'],
            plugins: ['add-module-exports', 'transform-runtime'],
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new CleanWebpackPlugin(['./build']),
  ],
};

module.exports = webpackConfig;
