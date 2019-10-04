<template lang="pug">
.v-xxx
  div(v-ellipsis) {{des}}
  div(v-ellipsis:3)
    p {{des2}}
</template>
<script>
export default {
  name: 'v-ellipsis',
  data () {
    return {
      des: '单行省略单行省略单行省略单行省略单行省略单行省略单行省略单行省略单行省略单行省略单行省略单行省略单行省略单行省略单行省略单行省略',
      des2: '多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略多行省略'
    }
  }
}
</script>