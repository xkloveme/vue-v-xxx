---
title: v-ellipsis
---

<div style="width:100%;height:100px;"></div>
<Block >

<h1 v-copy="`v-ellipsis`" title="点击复制指令">v-ellipsis</h1>
<h2>使用基本说明</h2>

</Block>
 </br>

<Block>

## 省略指令

<v-ellipsis/>
</br>
<Example>

```vue
<template lang="pug">
.v-xxx
  div(v-ellipsis) {{des}}
  div(v-ellipsis:3)
    p {{des2}}
</template>
<script>
export default {
  name: 'v-ellipsis',
  data() {
    return {
      des:
        '单行省略单行省略单行省略单行省略单行省略单行省略单行省略单行省略单行省略单行省略单行省略单行省略单行省略单行省略单行省略单行省略',
      des2:
        '多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略'
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
`v-ellipsis` 在表格中经常使用,`v-ellipsis`默认单行省略
:::

## API

| Name |  Type  |   Description    |      Required      |
| :--: | :----: | :--------------: | :----------------: |
| arg  | number | 第几行添加省略号 | :heavy_minus_sign: |

</div>
