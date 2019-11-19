<template lang="pug">
.v-xxx.v-drag
    .data {{item}}
    button.button(@click="open()") {{item.disabled?'关闭':'打开'}}
    div.div1(v-drag="item")
</template>
<script>
export default {
  name: "v-drag",
  data() {
    return {
      item: {
        disabled: true,
        width: 50,
        height: 50,
        top: 58,
        left: 150,
        data: {}
      }
    };
  },
  methods: {
    open() {
      this.item.disabled = !this.item.disabled;
    }
  }
};
</script>
<style scoped>
.v-drag {
  width: 100%;
  height: 500px;
  position: relative;
  border: 1px solid black;
  overflow: auto;
}
.div1 {
  height: 50px;
  width: 50px;
  border: 1px solid red;
  /* right: 0;
  bottom: 0; */
}
</style>
