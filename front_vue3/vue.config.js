const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: "statics",
  productionSourceMap: process.env.NODE_ENV !== 'production' ? false : true,
  /* webpack-dev-server 相关配置 */
  devServer:
  {
    /* 使用代理 */
    proxy:
    {
      '/api':
      {
        target: 'http://localhost:8443',  // 目标代理服务器地址
        changeOrigin: true,                          // 允许跨域
        pathRewrite: { "^/api": '' }
      },
    },
    port: 8080
  },
  pwa:
  {
    iconPaths:
    {
      favicon32: 'favicon.ico',
      favicon16: 'favicon.ico',
      appleTouchIcon: 'favicon.ico',
      maskIcon: 'favicon.ico',
      msTileImage: 'favicon.ico'
    }
  }
})
