var webpack = require('webpack');

module.exports = {
  entry: './src/app.ts',
  output: {
    filename: './build/app.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.ts']
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  }
}
