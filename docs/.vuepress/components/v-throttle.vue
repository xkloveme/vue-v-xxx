<template lang="pug">
.v-xxx
  h1 未加防抖
  h2 点击次数:{{num}}
  Button(@click="addNum") (点我)
  h1 加入防抖
  h2 点击次数:{{num2}}
  Button(v-throttle="addNum2") (点我)
</template>
<script>
export default {
  name: 'v-throttle',
  data () {
    return {
      num: 0,
      num2: 0,
    }
  },
  methods: {
    addNum () {
      this.num++
    },
    addNum2 () {
      this.num2++
    }
  }
}
</script>