<template lang="pug">
.hk-ui
  hk-search(:searchList="searchList" @submit="submit")
  p.code 输入内容：{{form}}
</template>
<script>
export default {
  name: 'hk-ui-search',
  data () {
    return {
      selsect: '',
      form: {},
      list: [{ text: '选项1', value: 1 }, { text: '选项2', value: 2 }],
      searchList: [
        {
          tag: 'el-input',
          key: 'keyword',
          attrs: {
            placeholder: '搜索设备名称/设备ID'
          }
        }
      ]
    }
  },
  methods: {
    submit (data) {
      this.form = data
    },
    change (data) {
      this.selsect = data
    }
  }
}
</script>
