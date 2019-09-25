<template lang="pug">
.hk-ui
  el-row(type="flex"  class="button-row")
    hk-button(disabled) 默认按钮
    hk-button( type="primary" disabled) 主要按钮
    hk-button( type="success" disabled) 成功按钮
    hk-button( type="info" disabled) 信息按钮
    hk-button( type="warning" disabled) 警告按钮
    hk-button( type="danger" disabled) 危险按钮

  el-row(type="flex" disabled class="button-row" )
    hk-button( plain disabled) 朴素按钮
    hk-button( type="primary" disabled plain) 主要按钮
    hk-button( type="success" disabled plain) 成功按钮
    hk-button( type="info" disabled plain) 信息按钮
    hk-button( type="warning" disabled plain) 警告按钮
    hk-button( type="danger" disabled plain) 危险按钮

  el-row(type="flex"  class="button-row")
    hk-button( disabled :loading="true" round) 圆角按钮
    hk-button( type="primary" :loading="true" disabled round) 主要按钮
    hk-button( type="success" :loading="true" disabled round) 成功按钮
    hk-button( type="info" :loading="true" disabled round) 信息按钮
    hk-button( type="warning" :loading="true" disabled round) 警告按钮
    hk-button( type="danger" :loading="true" disabled round) 危险按钮

  el-row(type="flex" class="button-row")
    hk-button( icon="el-icon-search"  disabled circle)
    hk-button( type="primary" icon="el-icon-edit" disabled circle)
    hk-button( type="success" icon="el-icon-check" disabled circle)
    hk-button( type="info" icon="el-icon-message" disabled circle)
    hk-button( type="warning" icon="el-icon-star-off" disabled circle)
    hk-button( type="danger" icon="el-icon-delete" disabled circle)

</template>
<style lang="scss" scoped>
.hk-ui {
  .button-row {
    margin: 10px;
  }
}
</style>

<script>
export default {
  name: 'hk-ui-button.1'
}
</script>