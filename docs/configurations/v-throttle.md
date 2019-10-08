---
title: v-throttle
---

<div style="width:100%;height:100px;"></div>
<Block >

<h1 v-copy="`v-throttle`" title="点击复制指令">v-throttle</h1>
<h2>使用基本说明</h2>

</Block>
 </br>

<Block>

## 节流指令

<v-throttle/>
</br>
<Example>

```html
<template lang="pug">
.v-xxx
  h3 立即触发:{{num}}
  input(v-model="num")
  h3 节流后:{{num2}}
  input(v-throttle:2000="num2")
</template>
<script>
  export default {
    name: 'v-throttle',
    data() {
      return {
        num: '立即改变',
        num2: '节流值'
      }
    }
  }
</script>
```

</Example>

</Block>

<div>

### 说明

::: info
`v-throttle` 支持传入节流时间`v-throttle:2000` 默认 2s
:::

## API

| Name |  Type  | Description |      Required      |
| :--: | :----: | :---------: | :----------------: |
| arg  | number |  节流时间   | :heavy_minus_sign: |

</div>
