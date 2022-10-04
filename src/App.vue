<template>
  <div class="app">
    <img id="img" width="300" height="300" src="./assets/vue.svg" alt="">
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import useBase64 from './components/Hook'

useBase64({
  el: '#img'
}).then(res => {
  console.log(res.baseUrl);
})
</script>
<style lang='less' scoped>
.app {
}
</style>