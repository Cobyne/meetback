const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const config = require('./env')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const webpack = require('webpack')

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const ForkTsCheckerNotifierWebpackPlugin = require('fork-ts-checker-notifier-webpack-plugin')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval',
  optimization: {
    minimize: false,
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
            return `npm.${packageName.replace('@', '')}`
          },
        },
      },
    },
  },
  watch: true,
  devServer: {
    port: 1234,
    hot: true,
    quiet: false,
    historyApiFallback: true,
    contentBase: [
      path.resolve(config.build.DIR_NAME, config.build.OUTPUT),
      path.resolve(config.build.DIR_NAME, `config/stageConfig/${process.env.STAGE_CONFIG || 'alpha'}`),
    ],
    overlay: {
      warnings: false,
      errors: false,
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'false',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    },
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new ForkTsCheckerWebpackPlugin({ eslint: true, tsconfig: '../tsconfig.json' }),
    new ForkTsCheckerNotifierWebpackPlugin({ title: 'TypeScript', excludeWarnings: false }),
    new ReactRefreshWebpackPlugin({
      forceEnable: true,
    }),
  ],
})
