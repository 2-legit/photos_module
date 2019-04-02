const path = require('path');

module.exports = {

  entry: './test/client.test.js',

  output: {
    path: path.resolve(__dirname, 'test/compiled'),
    filename: 'client.test.js'
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: '/node_modules',
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      }
    ]
  }

}