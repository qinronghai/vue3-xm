<template>
  <div class="A">
    <h1>I am A</h1>
    <button @click="emit">emit</button>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
// 获取当前组件的实例
import { getCurrentInstance } from 'vue';

const instance = getCurrentInstance()

const emit = () => {
  instance?.proxy?.$Bus.emit('on-click', 'mitt')
}
</script>
<style lang='less' scoped>
.A {
  width: 200px;
  height: 200px;
  background-color: yellowgreen;
}
</style>