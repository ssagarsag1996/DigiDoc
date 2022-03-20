////const { defineConfig } = require('@vue/cli-service')
////module.exports = defineConfig({
////  transpileDependencies: true
////})

module.exports = {
    outputDir: './wwwroot/dist',
    lintOnSave: false,
    productionSourceMap: false,
    filenameHashing: false,
    css: {
        extract: {
            filename: '[name].css'
        }
    },
    configureWebpack: {
        optimization: {
            splitChunks: false
        },
        output: {
            filename: '[name].js'
        },
        resolve: {
            alias: {
                'Vue': 'vue/dist/vue.esm-bundler.js'
            }
        }
    },
}