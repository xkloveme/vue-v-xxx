---
home: true
heroImage: /images/logo.png
actionText: 快速上手 →
actionLink: /getting-started
features:
  - title: 技术栈
    details: 基于 Vue，拓展的 v-xxx 库
  - title: 目的
    details: 通过此插件，扩展使用 v-xxx
  - title: 愿景
    details: 让开发更简单，Easy Code, Colorful Life
    footer: MIT Licensed | Copyright © 2019-present
---

## 安装

```bash
# install vue-v-xxx
 npm install vue-v-xxx --save
# or
 yarn add vue-v-xxx --save
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

<Section>

## 为 便捷 vue 开发 而生

基于 Vue，拓展的 v-xxx 库，

让开发更简单，Easy Code, Colorful Life，

开箱即用，你需要做的只是安装它，然后写吧。

<Button type="light" to="/getting-started/">开始出发</Button>

</Section>
