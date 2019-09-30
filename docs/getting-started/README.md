---
title: 开发指南
---

## `npm` 安装

推荐使用 `npm` 的方式安装，它能更好地和 `webpack` 打包工具配合使用。

```bash
# install vue-v-xxx
 npm install vue-v-xxx --save
# or
 yarn add vue-v-xxx --save
```

## `CDN`

目前可以通过 unpkg.com/vue-v-xxx 获取到最新版本的资源，在页面上引入 js 和 css 文件即可开始使用。

```html
<!-- 引入样式 -->
<link rel="stylesheet" href="https://unpkg.com/vue-v-xxx/lib/vue-v-xxx.css" />
<!-- 引入组件库 -->
<script src="https://unpkg.com/vue-v-xxx"></script>
```

::: success
我们建议使用 `CDN` 引入 `vue-v-xxx` 的用户在链接地址上锁定版本，以免将来升级时受到非兼容性更新的影响。锁定版本的方法请查看 [https://unpkg.com](https://unpkg.com)。

::: tips
unpkg.com/:package@:version/:file
:::

## 示例

通过 CDN 可以快速使用 vue-v-xxx 写出一个示例，您可以复制下面代码或[在线预览](https://codesandbox.io/s/vue-v-xxx-bndj4)。

<iframe src="https://codesandbox.io/embed/static-bndj4?fontsize=14" title="vue-v-xxx" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

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

::: tips
如果是通过 npm 安装，并希望配合 webpack 使用，请阅读下一节：[快速上手](start.html)。
:::
