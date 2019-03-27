const chalk = require('chalk')
const px2rem = require('postcss-px2rem')
const autoprefixer = require('autoprefixer')

// vue.config.js
console.log(`${chalk.bgBlue.black(' INFO ')} 正在打包`, chalk.greenBright.underline(process.env.NODE_ENV), '环境...\n')
console.log(`${chalk.bgBlue.black(' INFO ')} publicPath：`, process.env.publicPath, '\n')

module.exports = {
  // 选项...
  publicPath: process.env.publicPath, // 始终使用 publicPath 而不要直接修改 webpack 的 output.publicPath
  outputDir: 'dist', // 注意目标目录在构建之前会被清除 (构建时传入 --no-clean 可关闭该行为
  assetsDir: '',
  filenameHashing: true, // default true
  pages: {
    index: {
      entry: 'src/main.js',
      filename: 'index.html',
      title: 'Hugh Study Room',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          px2rem({
            remUnit: 50 // 基准大小 baseSize，设计375像素，remjs基于750的100px,所以这里应该是50
          }),
          autoprefixer
        ]
      }
    }
  },
  crossorigin: 'anonymous',
  devServer: {},
  configureWebpack: { // webpack配置选项
    plugins: [
    ]
  }
}
