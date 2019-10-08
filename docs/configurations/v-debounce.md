---
title: v-debounce
---

<div style="width:100%;height:100px;"></div>
<Block>
<h1 v-copy="`v-debounce`" title="点击复制指令">v-debounce</h1>
<h1>使用基本说明</h1>

</Block>
 </br>

<Block>

## 防抖指令

<v-debounce/>
</br>
<Example>

```html
<template lang="pug">
.v-xxx
  h1 未加防抖
  h2 点击次数:{{num}}
  Button(@click="addNum") (点我)
  h1 加入防抖
  h2 点击次数:{{num2}}
  Button(v-debounce="addNum2") (点我)
</template>
<script>
  export default {
    name: 'v-debounce',
    data() {
      return {
        num: 0,
        num2: 0
      }
    },
    methods: {
      addNum() {
        this.num++
      },
      addNum2() {
        this.num2++
      }
    }
  }
</script>
```

</Example>

</Block>

### 说明

::: info
`v-debounce` 支持传入防抖时间`v-debounce:500` 默认 500ms
:::

## API

| Name |  Type  | Description |      Required      |
| :--: | :----: | :---------: | :----------------: |
| arg  | number |  防抖时间   | :heavy_minus_sign: |

</div>
