<template lang="pug">
.hk-ui
  h2 daterange示例
  hk-search(:searchList="searchList" @submit="submit")
  p.code 输入内容：{{form}}
</template>
<script>
export default {
  name: 'hk-ui-search.2',
  data () {
    return {
      form: {},
      searchList: [
        {
          label: '时间选择:',
          tag: 'hk-date-picker',
          key: 'time',
          props: {
            type: 'datetimerange',
            placeholder: '请选择时间'
          }
        },
        {
          tag: 'hk-date-picker',
          key: 'time1',
          props: {
            type: 'daterange',
            placeholder: '请选择时间'
          }
        }
      ]
    }
  },
  methods: {
    submit (data) {
      this.form = data
      console.log(data, 77)
    }
  }
}
</script>
