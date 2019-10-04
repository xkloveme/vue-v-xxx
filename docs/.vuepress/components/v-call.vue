<template lang="pug">
.v-xxx
  div(v-call="(+86)1008611") 点击拨打☎️
  div(v-call:sms="1008611") 点击发短信💬
</template>
<script>
export default {
  name: 'v-call'
}
</script>