// const { defineConfig } = require('@vue/cli-service');
const path = require('path');
 
function resolve(dir) {
  return path.join(__dirname, dir)
}
 
module.exports = {
  lintOnSave: false,
  publicPath: "./",
  assetsDir: "public",
  outputDir: 'dist',
  productionSourceMap: false,
  devServer: {
    open: true,
    host: 'localhost',
    port: 3001
  },
  chainWebpack: config => {
    config.module
    .rule('js')
    .include.add(resolve('packages')).end()
    .use('babel').loader('babel-loader').tap(options=>{return options});
  },
  css: { extract: false },
}