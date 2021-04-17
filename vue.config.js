const { defineConfig } = require('@vue/cli-service')

const publicPath = process.env.VUE_PUBLIC_PATH || '/'

module.exports = defineConfig({
  publicPath,
  chainWebpack: config => {
    // Adjust scss modules for vue files
    // Transforms dashed-class-name to camelCase
    config.module
      .rule('scss')
      .oneOf('vue-modules')
      .use('css-loader')
      .tap(options => {
        options.modules = {
          ...options.modules,
          exportLocalsConvention: 'camelCase',
        }
        return options
      })
  },
})
