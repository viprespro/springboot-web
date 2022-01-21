const { merge } = require('webpack-merge')
const base = require('./webpack.config')

module.exports = merge(base, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  module: {
    rules: [],
  },
  plugins: [],
  devServer: {
    contentBase: 'dist',
    historyApiFallback: true,
    compress: true,
    port: 8000,
    open: true,
    publicPath: '/',
    proxy: {
      '/api': {
        target: '127.0.0.1:8000',
        changeOrigin: true,
      },
    },
  },
})
