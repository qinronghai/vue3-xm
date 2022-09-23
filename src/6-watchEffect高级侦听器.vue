<template>
  <div class="app">
    <h1>认识watchEffect高级侦听器</h1>
    <input v-model="message" type="text">
    <input v-model="message2" type="text">
    <br>
    <button @click="stopWatch">停止监听</button>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive, watchEffect } from 'vue'

let message = ref<string>("飞机")
let message2 = ref<string>("飞机杯子")

// 高级侦听器，接收一个回调函数，把想监听的值放入到回调函数中去
// 一进页面自动执行一次高级侦听器里面的回调函数
// 可以在侦听触发之前先执行一些东西，需要往回调函数中传入一个回调处理函数oninvalidate
// watchEffect会返回一个stop函数，调用它可以停止监听
const stop = watchEffect((oninvalidate) => {
  console.log('message===>', message.value);
  console.log('message===>', message2.value);
  // 清楚副作用
  oninvalidate(() => {
    console.log('before');
  })
})
const stopWatch = () => stop()
</script>
<style  scoped>
.app {
}
</style>