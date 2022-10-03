<template>
  <div class="app">
    <renderDom title="title" @on-click="getNum"></renderDom>
    <div>{{Num}}</div>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import renderDom from "./App";
let Num = ref<number>(0)
const getNum = (num: number) => { console.log(num); Num.value = num }
</script>
<style lang='less' scoped>
.app {
}
</style>