const { defineConfig } = require('@vue/cli-service')
const { resolve } = require('path')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',
  lintOnSave: true,
  chainWebpack: (config) => {
    config.resolve.alias.set('@', resolve(__dirname, 'src'))
  }
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: '',
  //       pathRewrite: {
  //         '^/api': ''
  //       },
  //       changeOrigin: true
  //     }
  //   }
  // }
})
