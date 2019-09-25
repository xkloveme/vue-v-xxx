<template lang="pug">
.hk-ui
  hk-player(
    :source="source"
    :showClear="true"
  )
</template>

<script>
export default {
  name: 'hk-play',
  data () {
    return {
      // RTMP地址 和 HLS地址
      source: ['rtmp://rtmp01open.ys7.com/openlive/d2737acdc4b7452face7513eee8a4f7b.hd', 'https://open.ys7.com/view/h5/d2737acdc4b7452face7513eee8a4f7b']
    }
  }
}
</script>
