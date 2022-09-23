<template>
  <div class="layout">
    <Menu></Menu>
    <div class="layout-right">
      <Header></Header>
      <Content></Content>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import Menu from './Menu/index.vue'
import Content from './Content/index.vue'
import Header from './Header/index.vue'
</script>
<style lang='less' scoped>
.layout {
  display: flex;
  overflow: hidden;
  height: 100vh;

  &-right {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
}
</style>