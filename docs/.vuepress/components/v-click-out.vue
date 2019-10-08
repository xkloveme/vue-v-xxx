<template lang="pug">
.v-xxx
  div(style="border:1px solid red;width:200px;height:200px;" @click="handleClick" v-click-out="handleClickOut") {{name}}
</template>
<script>
export default {
  name: 'v-click-out',
  data () {
    return {
      name: '内部'
    }
  },
  methods: {
    handleClick (e) {
      this.name = '您点击了内部'
    },
    handleClickOut (e, el) {
      el && (this.name = '您点击了外部')
    }
  }
}
</script>