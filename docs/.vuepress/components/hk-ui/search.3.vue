<template lang="pug">
.hk-ui
  h2 超多示例
  hk-search(:searchList="searchList" @submit="submit" :more="more")
  p.code 输入内容：{{form}}
</template>
<script>
export default {
  name: 'hk-ui-search.3',
  data () {
    return {
      form: {},
      more: true,
      searchList: [
        {
          label: '设备搜索：',
          tag: 'el-input',
          key: 'keyword',
          col: 8,
          attrs: {
            placeholder: '请输入设备名称/地址'
          }
        },
        {
          tag: 'el-select',
          key: 'type',
          col: 8,
          props: {
            clearable: true,
            filterable: true
          },
          children: {
            tag: 'el-option',
            options: [
              { label: '选项一', value: '1' },
              { label: '选项二', value: '2' },
              { label: '选项三', value: '3', disabled: true }
            ]
          },
          on: {
            change: (val) => {
              console.log(val)
            },
            'visible-change': (val) => {
              console.log(val)
            }
          }
        },
        {
          label: '设备搜索2：',
          tag: 'el-input',
          key: 'keyword2',
          col: 8,
          attrs: {
            placeholder: '请输入设备名称/地址'
          }
        },
        {
          label: '时间选择:',
          tag: 'hk-date-picker',
          col: 12,
          key: 'time',
          props: {
            type: 'datetimerange',
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
