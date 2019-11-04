---
title: v-drag
---

<div style="width:100%;height:100px;"></div>
<Block >

<h1 v-copy="`v-drag`" title="点击复制指令">v-drag</h1>
<h2>使用基本说明</h2>

</Block>
 </br>

<Block>

## 拖拽指令

<v-drag/>
</br>
<Example>

```vue
<template lang="pug">
.v-xxx.container
  div.div1(v-drag)
</template>
<script>
export default {
  name: 'v-drag'
}
</script>
<style>
.container {
  width: 100%;
  height: 500px;
  position: relative;
  border: 1px solid black;
  overflow: auto;
}
.div1 {
  height: 50px;
  width: 50px;
  border: 1px solid red;
  right: 0;
  bottom: 0;
}
</style>
```

</Example>

</Block>

<div>

### 说明

::: info
`v-drag` 需要在父元素添加`position: relative;`
:::

## API

| Name | Type | Description | Required |
| :--: | :--: | :---------: | :------: |


</div>
