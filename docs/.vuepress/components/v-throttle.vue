<template lang="pug">
.v-xxx
  h3 立即触发:{{num}}
  input(v-model="num")
  h3 节流后:{{num2}}
  input(v-model="num2" v-throttle)
</template>
<script>
export default {
  name: 'v-debounce',
  data () {
    return {
      num: '',
      num2: ''
    }
  }
}
</script>