<template lang="pug">
.hk-ui
  el-row(type="flex" class="button-row")
    hk-button( icon="el-icon-search") 默认按钮
    hk-button( type="primary" tips="主要按钮" icon="el-icon-edit") 主要按钮
    hk-button( type="success" icon="el-icon-check") 成功按钮
    hk-button( type="info" icon="el-icon-message") 信息按钮
    hk-button( type="warning" icon="el-icon-star-off") 警告按钮
    hk-button( type="danger" icon="el-icon-delete") 危险按钮

  el-row(type="flex"  class="button-row")
    hk-button 默认按钮
    hk-button( type="primary" tips="主要按钮") 主要按钮
    hk-button( type="success") 成功按钮
    hk-button( type="info") 信息按钮
    hk-button( type="warning") 警告按钮
    hk-button( type="danger") 危险按钮

  el-row(type="flex"  class="button-row" )
    hk-button( plain tips="朴素按钮") 朴素按钮
    hk-button( type="primary" tips="主要按钮" plain) 主要按钮
    hk-button( type="success" plain) 成功按钮
    hk-button( type="info" plain) 信息按钮
    hk-button( type="warning" plain) 警告按钮
    hk-button( type="danger" plain) 危险按钮

  el-row(type="flex"  class="button-row")
    hk-button( round tips="圆角按钮") 圆角按钮
    hk-button( type="primary" tips="主要按钮" round) 主要按钮
    hk-button( type="success" round) 成功按钮
    hk-button( type="info" round) 信息按钮
    hk-button( type="warning" round) 警告按钮
    hk-button( type="danger" round) 危险按钮

  el-row(type="flex" class="button-row")
    hk-button( icon="el-icon-search" plain  tips="圆角按钮" circle)
    hk-button( type="primary"  tips="主要按钮" icon="el-icon-edit" circle)
    hk-button( type="success" icon="el-icon-check" circle)
    hk-button( type="info" icon="el-icon-message" circle)
    hk-button( type="warning" icon="el-icon-star-off" circle)
    hk-button( type="danger" icon="el-icon-delete" circle)

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
  name: 'hk-ui-button'
}
</script>