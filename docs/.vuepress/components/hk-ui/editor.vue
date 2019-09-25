<template lang="pug">
.hk-ui
  hk-button(@click="handleClick()") 设置默认值
  hk-editor(v-model="value")
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
    handleClick (html = '<h1>hk-ui是最好用的UI之一</h1>') {
      this.value = html
    }
  }
}
</script>
