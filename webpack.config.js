const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: path.join(__dirname, 'client', 'index.js'),
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    inline: true,
    port: 3000,
  },
  output: {
    path: path.join(__dirname, 'dist', 'js'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
        },
      },
    ],
  },
};
