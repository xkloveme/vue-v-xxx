---
title: 快速上手
---

# 快速上手

- 本节介绍在 `vue` 中快速使用 `vue-v-xxx`

## 使用之前

::: info 准备
高楼大厦并非平地起，高效的开发，离不开基础工程的搭建。在开始使用 `vue-v-xxx` 之前，有必要先了解以下基础知识，我们也假设您已经写过 Vue，并掌握了下面的内容。
如有疑问，请您先对如下知识进行学习

- [Vue.js](https://cn.vuejs.org/v2/guide/index.html)
- [Vue CLI](https://cli.vuejs.org/zh/)
  :::

## 推荐工程

我们也为您准备好了基础工程，以此为基础开发，可以为您省去大量配置和调试环境的时间。

推荐工程：[vue-v-xxx-project](https://github.com/xkloveme/vue-v-xxx-project.git)

如果您使用了我们推荐的工程，可以略过下面的内容直接进入开发阶段，我们也推荐使用这套工程来构建您的项目

## 引入 vue-v-xxx

一般在 webpack 入口页面 main.js 中如下配置：

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

::: success

引入成功后就可以,在页面愉快的使用了.

:::
