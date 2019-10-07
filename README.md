<p align="center">
    <a href="http://www.jixiaokang.com/vue-v-xxx">
        <img width="200" src="https://s2.ax1x.com/2019/10/04/uDQOwF.png">
    </a>
</p>

<h1  align="center">
vue-v-xxx
    <h3 align="center">📦 🎨 一个基于vue的v-xxx扩展库.</h3>
</h1>

<div align="center">
  <a><img src="https://img.shields.io/circleci/project/github/vuejs/vue/dev.svg" alt="Build Status"></a>
  <a><img src="https://img.shields.io/badge/language-vue-42b983.svg" alt="Language"></a>
  <a href="https://www.npmjs.com/package/vue-v-xxx"><img src="https://img.shields.io/badge/npmjs-vueVxxx-red.svg" alt="npmjs"></a>
  <br>
    <a href="https://996.icu"><img src="https://img.shields.io/badge/link-996.icu-red.svg" alt="996.icu"></a>
  <a href="http://www.jixiaokang.com/vue-v-xxx"><img src="https://img.shields.io/badge/VueVxxx-doc-blue.svg" alt="docs"></a>
   <a href="https://github.com/xkloveme/vue-v-xxx"><img src="https://img.shields.io/badge/github-lib-darkslategrey.svg" alt="github"></a>
</div>

## 设计初衷

```bash
为 便捷 vue 开发 而生

基于 Vue，拓展的 v-xxx 库，

让开发更简单，Easy Code, Colorful Life，

开箱即用，你需要做的只是安装它，然后写吧。
```

## 安装

```bash
# install vue-v-xxx
 npm install vue-v-xxx --save
# or
 yarn add vue-v-xxx --save
```

您也可以通过 unpkg.com/vue-v-xxx 获取到最新版本的资源，在页面上引入 js 和 css 文件即可开始使用。

```html
<!-- 引入样式 -->
<link rel="stylesheet" href="https://unpkg.com/vue-v-xxx/lib/vue-v-xxx.css" />
<!-- 引入组件库 -->
<script src="https://unpkg.com/vue-v-xxx"></script>
```

## 使用

```js
import Vue from 'vue'
import App from './App'
import Vxxx from 'vue-v-xxx'
import 'vue-v-xxx/lib/vue-v-xxx.css'
Vue.config.productionTip = false

Vue.use(Vxxx)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
```

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>vue-v-xxx</title>
    <link rel="stylesheet" href="https://unpkg.com/vue-v-xxx/lib/vue-v-xxx.css" />
  </head>
  <body>
    <div id="app">
      <h1 title="Welcome">欢迎使用 {{ value }}</h1>
      <button v-copy="value">Click me!</button>
    </div>
  </body>
  <!-- import Vue before vue-v-xxx -->
  <script src="https://unpkg.com/vue/dist/vue.js"></script>
  <!-- import JavaScript -->
  <script src="https://unpkg.com/vue-v-xxx/lib/vue-v-xxx.umd.js"></script>
  <script>
    new Vue({
      el: '#app',
      data: {
        value: 'vue-v-xxx'
      }
    })
  </script>
</html>
```

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2019-present, xkloveme
