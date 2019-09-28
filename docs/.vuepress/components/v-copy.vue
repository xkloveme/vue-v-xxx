<!--
 * @describe: v-copy
 * @Author: superDragon
 * @Date: 2019-09-25 10:30:34
 * @LastEditors: superDragon
 * @LastEditTime: 2019-09-28 19:21:08
 -->
<template lang="pug">
.v-xxx
  input(:value="value")
  Button(@click="handleClick" v-copy="value") 点击复制
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
    handleClick (html = '你复制了我,去粘贴吧') {
      this.value = html
    }
  }
}
</script>
