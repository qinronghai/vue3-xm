<template>
  <div class="app">
    <A @on-click="getFlag"></A>
    <B :Flag="Flag"></B>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import A from './components/兄弟组件传参&Bus-传统/A.vue'
import B from './components/兄弟组件传参&Bus-传统/B.vue'
let Flag = ref(false)
const getFlag = (params: boolean) => {
  // 把A组件传过来的值赋给Flag
  Flag.value = params
}
</script>
<style lang='less' scoped>
.app {
}
</style>