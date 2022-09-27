<template>
  <div class="A">
    <h1>我是A组件</h1>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive, onMounted, onActivated, onDeactivated, onUnmounted } from 'vue'
onMounted(() => {
  console.log('初始化');
})

// 使用keep-alive会增加两个常用的生命周期
onActivated(() => {
  console.log('keep-alive初始化');

})

onDeactivated(() => {
  console.log('keep-alive卸载');

})
// --------------------------------
// 使用keep-alive 之后不会走onunmouted 卸载操作
onUnmounted(() => {
  console.log('卸载');
})
</script>
<style lang='less' scoped>
.A {
}
</style>