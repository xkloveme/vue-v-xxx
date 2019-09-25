/*
 * @describe: 描述
 * @Author: superDragon
 * @Date: 2019-09-25 10:23:55
 * @LastEditors: superDragon
 * @LastEditTime: 2019-09-25 10:23:55
 */
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  // 修改 src 为 examples
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
        'assets': resolve('src/assets'),
        '~': resolve('src/components'),
        'views': resolve('src/views')
      }
    }
  },
  chainWebpack: config => {
    config
      // 添加环境变量
      .plugin('define')
      .tap(([env]) => {
        env['process.env'] = {
          ...env['process.env'],
          ENV: `"${process.env.ENV}"`
        }
        return [env]
      })
      .end()
  }
}
