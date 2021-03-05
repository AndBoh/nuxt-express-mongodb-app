const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production';
  
  return {
    entry: path.resolve(__dirname, 'src', 'init-mongo.js'),
    devtool: false,
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'init-mongo.js',
    },
    plugins: [
      new Dotenv({
        path: isProd ? '.env' : '.env.example',
      })
    ],
  }
};