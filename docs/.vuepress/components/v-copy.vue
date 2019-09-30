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
