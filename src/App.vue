<template>
  <div class="app">
    <!-- Teleport传送组件可以可以把一个模板传送到指定的dom元素下 -->
    <Teleport :disabled="false" to="body">
      <A></A>
    </Teleport>

  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import A from "./components/Teleport/index.vue";
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
  position: relative;
  height: 50vh;
  background-color: yellow;
}
</style>