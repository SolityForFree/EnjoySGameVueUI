const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath : '/EnjoySGameVueUI/dist',
  pwa: {
    workboxOptions: {
        skipWaiting: true
    },
}
})
