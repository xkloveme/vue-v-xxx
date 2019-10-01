---
title: v-copy
---

<div style="width:100%;height:100px;"></div>
<Block >

<h1 v-copy="v-copy" title="点击复制指令">v-copy</h1>
<h2>使用基本说明</h2>

</Block>
 </br>

<Block>
## 复制指令

::: tips
在很多情况下，我们需要复制操作
:::

<v-copy/>
</br>

<Example>

```html
<template lang="pug">
.v-xxx
  Button(@click="handleClick" v-copy="value") 点击复制
  div
    textarea(placeholder="Paste here" style="margin-top:40px;width:100%;height:100%;")
</template>
<script>
  export default {
    name: 'v-copy',
    data() {
      return {
        value: ''
      }
    },
    methods: {
      handleClick(html = '你复制了我,去粘贴吧') {
        this.value = html
      }
    }
  }
</script>
```

</Example>

</Block>

<div>

## API

::: info
`v-copy` 支持传入字符串和变量
:::

### Parameters

| Name  |  Type  | Description |      Required      |
| :---: | :----: | :---------: | :----------------: |
| value | String | 要复制的值  | :heavy_check_mark: |

</div>
