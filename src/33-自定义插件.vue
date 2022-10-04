<template>
  <div class="app">
    {{$filters.format('渣男')}}
    <hr>
    {{$env}}
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive, getCurrentInstance } from 'vue'
const instance = getCurrentInstance()
instance?.proxy?.$_loading.show()
setTimeout(() => {
  instance?.proxy?.$_loading.hide()

}, 5000);
</script>
<style lang='less' scoped>
.app {
}
</style>