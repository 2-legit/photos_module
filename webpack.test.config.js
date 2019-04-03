const path = require('path');

module.exports = {

  entry: {
    component: './test/client.test.js',
    state: './test/state.test.js'
  },

  output: {
    path: path.resolve(__dirname, 'test/compiled'),
    filename: '[name].test.js',
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: '/node_modules',
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        },
      },
    ],
  },

};
