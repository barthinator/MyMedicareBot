const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


const webpack = require('webpack');

const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  SRC: path.resolve(__dirname, 'public'),
  JS: path.resolve(__dirname, 'src'),
};

module.exports = {

  entry: {
    index: './src/index.js'
  },
  output:{
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.SRC, 'index.html'),
    }),
    new ExtractTextPlugin('style.bundle.css')
  ],

  module: {
    rules: [

      //babel loader
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },

      //style-loader
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          use: 'css-loader',
        }),
      },

      //file loader
      {
        test: /\.(png|jpg|jpeg|gif|svg|otf|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  devServer: {
    port: 8080,
    proxy: {
        '/string': {
            target: 'http://localhost:3000',
            secure: false,
        },
        '/url': {
            target: 'http://localhost:3000',
            secure: false,
        }
    },
    historyApiFallback: true
}

};
