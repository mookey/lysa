var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

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
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract(
            "style",
            "css?sourceMap!sass?sourceMap")
         },
         {
           test: /.js$/,
           loaders: ['babel']
         }
      ]
    },
    plugins: [
      new ExtractTextPlugin('[name].css')
    ]
  }
];
