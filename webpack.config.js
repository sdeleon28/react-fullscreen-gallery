/* eslint-disable */
var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var debug = process.env.NODE_ENV !== 'production';

var COPY_PLUGINS = [
  new CopyWebpackPlugin([{ from: './examples/index.html' }]),
  new CopyWebpackPlugin([{ from: './deploy_key.enc' }]),
];

var DEBUG_PLUGINS = [
  new webpack.HotModuleReplacementPlugin(),
  ...COPY_PLUGINS,
];

var PRODUCTION_PLUGINS = [
  ...COPY_PLUGINS,
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
];

var ENTRY_FILE = './examples/src/js/index.js';

module.exports = {
  context: __dirname,
  devtool: debug ? '#eval-source-map' : null,
  entry: debug ? ['webpack-hot-middleware/client', ENTRY_FILE] : ENTRY_FILE,
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['react-hot', 'babel-loader'],
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|eot|woff|woff2|ttf|mp4)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
      },
    ],
  },
  output: {
    path: path.join(__dirname, '/examples/dist'),
    publicPath: '/react-fullscreen-gallery/',
    filename: 'index.js',
  },
  devServer: {
    contentBase: path.join(__dirname, '/examples/dist'),
  },
  plugins: debug ? DEBUG_PLUGINS : PRODUCTION_PLUGINS,
};
