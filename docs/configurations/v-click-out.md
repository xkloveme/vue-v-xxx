---
title: v-click-out
---

<div style="width:100%;height:100px;"></div>
<Block >

<h1 v-copy="`v-click-out`" title="点击复制指令">v-click-out</h1>
<h2>使用基本说明</h2>

</Block>
 </br>

<Block>

## 外部点击指令

<v-click-out/>
</br>
<Example>

```html
<template lang="pug">
.v-xxx
  div(style="border:1px solid red;width:200px;height:200px;" @click="handleClick" v-click-out="handleClickOut") {{name}}
</template>
<script>
  export default {
    name: 'v-click-out',
    data() {
      return {
        name: '内部'
      }
    },
    methods: {
      handleClick() {
        this.name = '您点击了内部'
      },
      handleClickOut() {
        this.name = '您点击了外部'
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
`v-click-out` 点击外部 dom 触发
:::

## API

| Name  |    Type    | Description |      Required      |
| :---: | :--------: | :---------: | :----------------: |
| value | `function` |    方法     | :heavy_check_mark: |

</div>
