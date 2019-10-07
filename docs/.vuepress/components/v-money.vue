<template lang="pug">
.v-xxx
  h1 {{money}}
  input(v-money="money")
</template>
<script>
export default {
  name: 'v-money',
  data () {
    return {
      money: '23454341234.124831',
      money1: '223456'
    }
  }
}
</script>