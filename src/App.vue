<template>
  <div class="app">
    <h2>认识组件和Vue3生命周期</h2>
    <!-- 在vue3中直接使用就可以了 -->
    <A v-if="flag"></A>
    <button @click="change">创建/销毁</button>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
// 引入组件
import A from './components/A.vue'
/* 1. 什么是组件？
      每个以.vue结尾命名的文件都是一个组件  */

const flag = ref<Boolean>(true)
const change = () => {
  flag.value = !flag.value
}
</script>
<style scoped>
.app {
}
</style>