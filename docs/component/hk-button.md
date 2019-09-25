# hk-button 按钮组件

## button 样式

<template>
  <hk-ui-button/>
</template>

```html
<template lang="pug">
.hk-ui
  el-row(type="flex" class="button-row")
    hk-button( icon="el-icon-search") 默认按钮
    hk-button( type="primary" icon="el-icon-edit") 主要按钮
    hk-button( type="success" icon="el-icon-check") 成功按钮
    hk-button( type="info" icon="el-icon-message") 信息按钮
    hk-button( type="warning" icon="el-icon-star-off") 警告按钮
    hk-button( type="danger" icon="el-icon-delete") 危险按钮

  el-row(type="flex"  class="button-row")
    hk-button 默认按钮
    hk-button( type="primary") 主要按钮
    hk-button( type="success") 成功按钮
    hk-button( type="info") 信息按钮
    hk-button( type="warning") 警告按钮
    hk-button( type="danger") 危险按钮

  el-row(type="flex"  class="button-row" )
    hk-button( plain ) 朴素按钮
    hk-button( type="primary" plain) 主要按钮
    hk-button( type="success" plain) 成功按钮
    hk-button( type="info" plain) 信息按钮
    hk-button( type="warning" plain) 警告按钮
    hk-button( type="danger" plain) 危险按钮

  el-row(type="flex"  class="button-row")
    hk-button( round) 圆角按钮
    hk-button( type="primary" round) 主要按钮
    hk-button( type="success" round) 成功按钮
    hk-button( type="info" round) 信息按钮
    hk-button( type="warning" round) 警告按钮
    hk-button( type="danger" round) 危险按钮

  el-row(type="flex" class="button-row")
    hk-button( icon="el-icon-search" circle)
    hk-button( type="primary" icon="el-icon-edit" circle)
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
```

## 不可用按钮

<template>
  <hk-ui-button.1/>
</template>

```html
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
```

## 不同 size 按钮

<template>
  <hk-ui-button.2 />
</template>

```html
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
```

## API

| 参数        | 说明           | 类型    | 可选值                                             | 默认值 |
| ----------- | -------------- | ------- | -------------------------------------------------- | ------ |
| size        | 尺寸           | string  | medium / small / mini                              | —      |
| type        | 类型           | string  | primary / success / warning / danger / info / text | —      |
| tips        | 提示消息       | string  | -                                                  | —      |
| plain       | 是否朴素按钮   | boolean | —                                                  | false  |
| round       | 是否圆角按钮   | boolean | —                                                  | false  |
| circle      | 是否圆形按钮   | boolean | —                                                  | false  |
| loading     | 是否加载中状态 | boolean | —                                                  | false  |
| disabled    | 是否禁用状态   | boolean | —                                                  | false  |
| icon        | 图标类名       | string  | —                                                  | —      |
| autofocus   | 是否默认聚焦   | boolean | —                                                  | false  |
| native-type | 原生 type 属性 | string  | button / submit / reset                            | button |
