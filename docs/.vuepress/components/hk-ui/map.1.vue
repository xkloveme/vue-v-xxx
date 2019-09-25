<template lang="pug">
.hk-ui
  .code 选中内容： {{data}}
  hk-button(@click="showInput=!showInput") 切换显示输入框
  hk-button(@click="disabled=!disabled" v-if="!disabled"  type="danger") 禁用选择定位点
  hk-button(@click="disabled=!disabled" v-else  type="success") 解禁选择定位点
  hk-map(:latitude="latitude" :disabled="disabled" :longitude="longitude" height="300px" :showInput="showInput" @select="select")
</template>
<script>
export default {
  name: 'hk-ui-map.1',
  data () {
    return {
      data: '',
      latitude: null,
      longitude: null,
      disabled: false,
      showInput: true
    }
  },
  methods: {
    select (data) {
      this.data = data
    }
  }
}
</script>