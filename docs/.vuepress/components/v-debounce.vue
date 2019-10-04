<template lang="pug">
.v-xxx
  h3 立即触发:{{num}}
  input(v-model="num")
  h3 节流后:{{num2}}
  input(v-debounce:2000="num2")
</template>
<script>
export default {
  name: 'v-debounce',
  data () {
    return {
      num: '立即改变',
      num2: '节流值'
    }
  }
}
</script>