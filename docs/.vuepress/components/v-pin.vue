<template lang="pug">
.v-xxx
  div(v-pin="200") 顶部200px
  div(v-pin:left="300") 左边300px
</template>
<script>
export default {
  name: 'v-pin'
}
</script>