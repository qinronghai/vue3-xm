<template>
  <div class="app">
    <A title="小海" number="123"></A>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import A from "./components/UseHook/A.vue";
</script>
<style lang='less' scoped>
.app {
}
</style>