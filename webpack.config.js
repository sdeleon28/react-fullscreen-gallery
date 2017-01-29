const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const debug = process.env.NODE_ENV !== 'production';


const PLUGINS = [
  new CopyWebpackPlugin([{ from: './examples/index.html' }]),
  new CopyWebpackPlugin([{ from: './deploy_key.enc' }]),
];

module.exports = {
  context: __dirname,
  devtool: debug ? '#eval-source-map' : null,
  entry: './examples/src/js/index.js',
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
        },
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
  plugins: debug ? PLUGINS : [
    ...PLUGINS,
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
