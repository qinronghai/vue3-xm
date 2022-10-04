<template>
  <div class="A"></div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import { useAttrs } from 'vue'
// 使用官方的库，自定义hook去实现接收父组件传过来的值
const attr = useAttrs()
console.log(attr);
</script>
<style lang='less' scoped>
.A {
}
</style>