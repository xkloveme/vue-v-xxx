<template lang="pug">
.hk-ui
  el-row(type="flex" class="button-row")
    hk-button( icon="el-icon-search") 默认按钮
    hk-button( type="primary" size="medium" icon="el-icon-edit") 主要按钮
    hk-button( type="success" size="small" icon="el-icon-check") 成功按钮
    hk-button( type="info" size="mini" icon="el-icon-message") 信息按钮

  el-row(type="flex"  class="button-row")
    hk-button 默认按钮
    hk-button( type="primary" size="medium" ) 主要按钮
    hk-button( type="success" size="small") 成功按钮
    hk-button( type="info" size="mini") 信息按钮

  el-row(type="flex"  class="button-row" )
    hk-button( plain) 朴素按钮
    hk-button( type="primary" size="medium" plain) 主要按钮
    hk-button( type="success" size="small" plain) 成功按钮
    hk-button( type="info" size="mini" plain) 信息按钮

  el-row(type="flex"  class="button-row")
    hk-button( round) 圆角按钮
    hk-button( type="primary" size="medium" round) 主要按钮
    hk-button( type="success" size="small" round) 成功按钮
    hk-button( type="info"  size="mini" round) 信息按钮

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
  name: 'hk-ui-button.2'
}
</script>