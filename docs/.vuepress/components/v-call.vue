<template lang="pug">
.v-xxx
  div(v-call="tel") 点击拨打☎️
  br
  div(v-call:sms="10086") 点击发短信💬
</template>
<script>
export default {
  name: 'v-call',
  data () {
    return {
      tel: '10086'
    }
  }
}
</script>