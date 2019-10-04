---
title: v-call
---

<div style="width:100%;height:100px;"></div>
<Block >

<h1 v-copy="`v-call`" title="点击复制指令">v-call</h1>
<h2>使用基本说明</h2>

</Block>
 </br>

<Block>

## 固定指令

<v-call/>
</br>
<Example>

```html
<template lang="pug">
.v-xxx
  div(v-pin="200") 顶部200px
  div(v-pin:left="300") 左边300px
</template>
<script>
  export default {
    name: 'v-pin'
  }
</script>
```

</Example>

</Block>

<div>

### 说明

::: info
`v-pin` 支持传入定位位置和定位值`v-pin:left || top` 默认 left
:::

## API

| Name  |       Type       | Description |      Required      |
| :---: | :--------------: | :---------: | :----------------: |
|  arg  |      String      | `left||top` | :heavy_minus_sign: |
| value | `String||number` |      0      | :heavy_minus_sign: |

</div>
