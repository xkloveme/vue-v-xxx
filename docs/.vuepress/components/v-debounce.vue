<template lang="pug">
.v-xxx
  h2 点击次数:{{num}}
  Button(v-debounce @click="addNum") 点我
</template>
<script>
export default {
  name: 'v-debounce',
  data () {
    return {
      num: 0
    }
  },
  methods: {
    addNum () {
      this.num++
    }
  }
}
</script>