<template>
  <div class="A">
    <h1> 我是a组件</h1>
    <button @click="emitB">派发一个事件</button>

  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
// 派发事件使用defineEmits
const emit = defineEmits(['on-click'])
let flag = false
const emitB = () => {
  flag = !flag
  // 点击的时候就派发出去
  emit('on-click', flag)
}
</script>
<style lang='less' scoped>
.A {
  width: 200px;
  height: 200px;
  background-color: red;
}
</style>