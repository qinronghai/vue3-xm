<template>
  <div class="B">
    <h1> 我是b组件</h1>
    <h2>{{Flag}}</h2>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import Bus from "../../Bus";
let Flag = ref(false)
Bus.on('on-click', (flag: boolean) => {
  Flag.value = flag
})


</script>
<style lang='less' scoped>
.B {
  width: 200px;
  height: 200px;
  background-color: rgb(151, 135, 135);
}
</style>