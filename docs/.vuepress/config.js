/*
 * @describe: 描述
 * @Author: superDragon
 * @Date: 2019-09-25 10:30:34
 * @LastEditors: superDragon
 * @LastEditTime: 2019-09-25 10:42:21
 */
const baseMap = {
  dev: '/',
  test: '/v-xxx/',
  prod: '/v-xxx/'
}
let component = [
  'hk-button'
]
module.exports = {
  base: baseMap[process.env.ENV],
  title: 'v-xxx',
  description: 'v-xxx',
  head: [['link', { rel: 'icon', href: '/images/favicon.ico' }]],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' }
    ],
    sidebar: {
      '/component/': component
    },
    lastUpdated: '最后更新',
    repo: 'https://github.com/xkloveme/vue-v-xxx',
    repoLabel: 'GitHub'
  },
  markdown: {
    anchor: { permalink: true }
  },
  extendMarkdown: md => {
    // 使用更多的 markdown-it 插件!
    md.use(require('markdown-it-checkbox')).use(require('markdown-it-kbd'))
  },
  plugins: ['@vuepress/back-to-top', '@vuepress/medium-zoom', 'demo-block'],
  serviceWorker: true
}
