<!--
 * @describe: v-copy
 * @Author: superDragon
 * @Date: 2019-09-25 10:30:34
 * @LastEditors: superDragon
 * @LastEditTime: 2019-09-26 10:31:36
 -->
<template lang="pug">
.v-xxx
  input(:value="value")
  Button(@click="handleClick") 点击复制
</template>
<script>
export default {
  name: 'hk-ui-editor',
  data () {
    return {
      value: '这是个默认值'
    }
  },
  methods: {
    handleClick (html = '你复制了我') {
      this.value = html
      this.$message(html)
    }
  }
}
</script>
