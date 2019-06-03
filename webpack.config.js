const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {

  entry: './client/src/index.jsx',

  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'main.js',
  },

  plugins: [
    new CompressionPlugin({
      test: /\.(js|jsx)$/
    })
  ],

  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: '/node_modules',
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

};
