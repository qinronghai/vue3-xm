<template>
  <div class="B">
    <h1>I am B</h1>
    <div>{{Str}}</div>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import { getCurrentInstance } from 'vue';
let Str = ref('');
const instance = getCurrentInstance()
instance?.proxy?.$Bus.on('on-click', (str: string) => {
  Str.value = str
  console.log(str);
})
</script>
<style lang='less' scoped>
.B {
  width: 200px;
  height: 200px;
  background-color: red;
}
</style>