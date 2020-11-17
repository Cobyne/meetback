const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

const webpack = require('webpack')
const config = require('./env')

const babelConf = require('../babel.config')

const resolve = name => `${config.build.DIR_NAME}${config.build.SOURCE}${name}`

const babelLoader = {
  loader: 'babel-loader',
  options: babelConf,
}

module.exports = {
  context: path.resolve(config.build.DIR_NAME, config.build.SOURCE),
  entry: {
    app: process.env.NODE_ENV === 'production' ? [config.build.MAIN] : ['react-hot-loader/patch', config.build.MAIN],
  },
  output: {
    filename: process.env.NODE_ENV === 'production' ? '[name].[contenthash].js' : '[name].[hash].js',
    path: path.resolve(config.build.DIR_NAME, config.build.OUTPUT),
    publicPath: config.build.PUBLIC_PATH,
  },
  resolve: {
    symlinks: false,
    extensions: ['.ts', '.tsx', '.js', '.json', 'mjs'],
    alias: {
      assets: resolve('/assets'),
      features: resolve('/features'),
      utils: resolve('/utils'),
      components: resolve('/components'),
      constants: resolve('/constants'),
      locale: resolve('/locale'),
      hooks: resolve('/hooks'),
      'react-dom': process.env.NODE_ENV !== 'production' ? '@hot-loader/react-dom' : 'react-dom',
    },
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: resolve(config.build.HTML_MAIN),
    }),
    new webpack.IgnorePlugin({
      resourceRegExp: /^\.\/locale$/,
      contextRegExp: /moment$/,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new FaviconsWebpackPlugin('assets/favicon.png'),
  ],
  module: {
    rules: [
      {
        test: /\.ts(x)?$/,
        exclude: /node_modules/,
        use: [babelLoader, { loader: 'ts-loader', options: { transpileOnly: true } }],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          { loader: 'css-loader' },
        ],
      },
      {
        test: /.(ico|jpg|jpeg|png|woff(2)?|eot|ttf|otf|svg|gif)(\?[a-z0-9=\.]+)?$/,
        include: path.resolve(__dirname, '../src/assets'),
        loader: 'url-loader',
        options: {
          limit: 100000,
        },
      },
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      },
    ],
  },
}
