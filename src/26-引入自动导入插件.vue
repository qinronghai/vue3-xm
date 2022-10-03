<template>
  <div class="app">
    <button @click="change">change flag</button>
    <div>{{flag}}</div>
  </div>
</template>

<script setup lang='ts'>
let flag = ref(1)
const change = () => {
  flag.value = flag.value + 1
}
</script>
<style lang='less' scoped>
.app {
}
</style>