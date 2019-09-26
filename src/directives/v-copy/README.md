<!--
 * @describe: 使用案例
 * @Author: superDragon
 * @Date: 2019-09-22 20:11:28
 * @LastEditors: superDragon
 * @LastEditTime: 2019-09-22 20:20:29
 -->

<template>
<button v-copy="copyText">copy</button>
<button v-copy="copy">copy</button>
</template>

<script>
export default {
  data() {
    return {
      copyText: '要 Copy 的内容',
    };
  },
};
</script>
