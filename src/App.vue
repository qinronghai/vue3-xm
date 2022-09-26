<template>
  <div class="app">

    <layout></layout>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import layout from './layout/index.vue'

</script>
<style lang='less' >
// 初始化样式
html,
body,
#app {
  overflow: hidden;
  height: 100%;
}

.app {
}
</style>