const path = require('path');

module.exports = {

  entry: './client/src/index.jsx',

  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'main.js',
  },

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
          'file-loader'
        ],
      },
    ],
  },

};
