const webpack = require('webpack');
const path = require('path');

const DIST_DIR = path.resolve(__dirname, 'client/dist');
const SRC_DIR = path.resolve(__dirname, 'client/');

const config = {
  resolve: { extensions: ['.webpack.js', '.web.js', '.js', '.json', '.jsx'] },
  entry: ['webpack-hot-middleware/client?reload=true', `${SRC_DIR}/components/App.jsx`],
  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
    publicPath: '/client/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'env'],
        },
      },
    ],
  },
};

module.exports = config;
