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

## 拨打指令

<v-call/>
</br>
<Example>

```html
<template lang="pug">
.v-xxx
  div(v-call="tel") 点击拨打☎️
  div(v-call:sms="10086") 点击发短信💬
</template>
<script>
  export default {
    name: 'v-call',
    data() {
      return {
        tel: '10086'
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
`v-call` 支持电话和短信`v-call:sms || tel` 默认 tel
:::

## API

| Name  |       Type       | Description |      Required      |
| :---: | :--------------: | :---------: | :----------------: |
|  arg  |      String      | `sms||tel`  | :heavy_minus_sign: |
| value | `String||number` |      0      | :heavy_check_mark: |

</div>
