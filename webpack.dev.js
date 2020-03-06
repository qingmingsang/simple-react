const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    one: './src/one/index.js',
    two: './src/two/index.js',
    three: './src/three/index.js',
    four: './src/four/index.js',
    T: './src/T/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env', '@babel/preset-react'] }
      },
    ]
  },
  resolve: { extensions: ['.js', '.jsx', '.tsx', '.ts'] },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    })
  ]
};