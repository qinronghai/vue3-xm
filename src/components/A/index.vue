<template>
  <div class="A
   ">
    <div v-for="item in list">{{item}}</div>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import { axios } from './server';

// 在setup语法糖里面可以直接使用await
const list = await axios('./data.json')
console.log(list);
</script>
<style lang='less' scoped>
.A {
}
</style>