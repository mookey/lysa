var path = require('path');
var webpack = require('webpack');

module.exports = [
  {
    entry: [
      path.resolve(__dirname, 'public/lysa.js')
    ],
    output: {
      path: path.resolve(__dirname, 'public/dist'),
      filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
      loaders: [
        {
          test: /\.js$|\.jsx$/,
          loader: 'eslint-loader',
          exclude: /(node_modules|public\/dist)/
        }
      ]
    }
  }
];
