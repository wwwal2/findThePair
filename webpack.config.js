const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: 'raw-loader',
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.s[ac]ss$/i,
        // test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
        // use: [
        //   {
        //     loader: MiniCssExtractPlugin.loader,
        //     options: {
        //       hmr: process.env.NODE_ENV === 'development',
        //     },
        //   },
        //   'css-loader',
        //   'postcss-loader',
        //   'sass-loader',
        // ],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new UglifyJsPlugin({
      test: /\.js(\?.*)?$/i,
      exclude: /node_modules/,
      cache: true,
      parallel: true,
      uglifyOptions: {
        output: {
          comments: false,
        },
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css',
      ignoreOrder: false,
    }),

  ],
  watch: true,
};
