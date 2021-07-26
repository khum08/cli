const path = require('path');
module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'boundle.js',
    libraryTarget: 'umd',
    library: 'libraryName',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  mode: 'development'
}