---
title: v-copy
---

<!--
 * @describe: v-copy
 * @Author: superDragon
 * @Date: 2019-09-25 12:00:17
 * @LastEditors: superDragon
 * @LastEditTime: 2019-09-29 23:07:02
 -->
 <div style="width:100%;height:100px;"></div>
<Block>
<h1>使用基本说明</h1>

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
``` vue
<template lang="pug">
.v-xxx
  Button(@click="handleClick" v-copy="value") 点击复制
  div
    textarea(placeholder="Paste here" style="margin-top:40px;width:100%;height:100%;")
</template>
<script>
export default {
  name: 'v-copy',
  data () {
    return {
      value: ''
    }
  },
  methods: {
    handleClick (html = '你复制了我,去粘贴吧') {
      this.value = html
    }
  }
}
</script>

```
</Example>

</Block>
```
