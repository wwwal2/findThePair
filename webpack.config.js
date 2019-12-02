const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.[contenthash].js',
    hashDigestLength: 5,
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
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
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
              reloadAll: true,
            },
          },
          // 'postcss-loader',
          'css-loader',
          'sass-loader',
        ],
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
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      { from: 'src/img', to: 'img' },
    ]),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true,
      },
      templateParameters: {
        hash: true,
      },
    }),
    new UglifyJsPlugin({
      test: /\.js(\?.*)?$/i,
      exclude: /node_modules/,
      sourceMap: true,
      cache: true,
      parallel: true,
      uglifyOptions: {
        output: {
          comments: false,
        },
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.[contenthash].css',
      sourceMap: true,
      ignoreOrder: false,
    }),
    new OptimizeCssAssetsPlugin({
      cssProcessorOptions: {
        map: {
          inline: true,
        },
      },
    }),
  ],
  watch: true,
};
