/*
 * @describe: 配置vuepress
 * @Author: superDragon
 * @Date: 2019-09-25 10:30:34
 * @LastEditors: superDragon
 * @LastEditTime: 2019-09-28 20:11:52
 */
const baseMap = {
  dev: '/',
  test: '/vue-v-xxx/',
  prod: '/vue-v-xxx/'
}
let component = [
  'hk-button'
]
let started = [
  'v-copy'
]
module.exports = {
  base: baseMap[process.env.ENV],
  theme: 'vuepress-theme-api',
  title: 'vue-v-xxx',
  description: '一个基于vue的v-xxx扩展库',
  head: [['link', { rel: 'icon', href: '/images/favicon.ico' }]],
  locales: {
    '/': {
      lang: 'en-US',
      title: 'vue-v-xxx',
      text: 'english',
      description: '📦 🎨 A v-xxx extended library for Vue.',
    },
    '/zh/': {
      lang: 'zh-hans',
      title: 'vue-v-xxx',
      text: '中文',
      description: '📦 🎨 一个基于vue的v-xxx扩展库。',
    },
  },
  themeConfig: {
    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
      },
      '/zh/': {
        selectText: '选择语言',
        label: '简体中文',
      },
    },
    sidebarGroupOrder: [
      'getting-started', // 分组名称，即文件夹名称
      'configurations'
    ],
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
