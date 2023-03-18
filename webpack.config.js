const path = require('path');
require('dotenv').config();
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: path.join(SRC_DIR, 'index.jsx'),
  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
  },
  mode: 'development',
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
      template: './template.html',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        AUTH_SECRET: JSON.stringify(process.env.AUTH_SECRET),
      },
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@components': path.resolve(
        __dirname,
        './client/src/components/',
      ),
      '@actions': path.resolve(
        __dirname,
        './client/src/actions/',
      ),
      '@assets': path.resolve(
        __dirname,
        './client/src/assets/',
      ),
      '@lib': path.resolve(
        __dirname,
        './client/src/lib/',
      ),
      '@reducers': path.resolve(
        __dirname,
        './client/src/reducers/',
      ),
      '@fonts': path.resolve(
        __dirname,
        './client/src/public/fonts/',
      ),
      '@icons': path.resolve(
        __dirname,
        './client/src/public/icons/',
      ),
      '@images': path.resolve(
        __dirname,
        './client/src/public/images/',
      ),
    },
  },
};
