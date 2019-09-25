<template lang="pug">
.hk-ui
  hk-search(:searchList="searchList" title="选择设备：" @submit="submit")
  p.code 输入内容：{{form}}
</template>
<script>
export default {
  name: 'hk-ui-search.1',
  data () {
    return {
      form: {
        type2: ''
      },
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }],
      searchList: [
        {
          label: '设备搜索：',
          tag: 'el-input',
          key: 'keyword',
          attrs: {
            placeholder: '请输入设备名称/地址'
          }
        },
        {
          tag: 'el-select',
          key: 'type',
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
          render: (h, from) => {
            return (<el-select v-model={this.form.type2} placeholder="请选择选项2">
              {this.options.map(item => {
                return <el-option
                  key={item.value}
                  label={item.label}
                  value={item.value}>
                </el-option>
              })}
            </el-select>)
          }
        }
      ]
    }
  },
  methods: {
    submit (data) {
      this.form = { type2: this.form.type2, ...data }
      console.log(data, 77)
    }
  }
}
</script>
