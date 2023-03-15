const path = require('path');
require('dotenv').config();
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: path.join(__dirname, 'client/src', 'index.jsx'),
  output: {
    path: path.resolve(__dirname, 'client/dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Atelier',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        AUTH_SECRET: JSON.stringify(process.env.AUTH_SECRET),
      },
    }),
  ],
};
