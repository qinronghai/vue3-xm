<template>
  <div class="app">
    watch侦听器
    <input type="text" v-model="msg.name" />
    <input type="text" v-model="msg.name2" />
    <br>
    <h2>深层次监听</h2>
    <input type="text" v-model="msg" />
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive, watch } from 'vue'
let message = ref<string>('')
let message2 = ref<string>('')

// -常规侦听一个源
// watch(message, (newVal, oldVal) => {
//   console.log('新的' + newVal, '旧的' + oldVal);
// })

// -侦听多个源
/* watch([message, message2], (newVal, oldVal) => {
  // console.log('新的' + newVal, '旧的' + oldVal);
  console.log('新的', newVal);
  console.log('旧的', oldVal);
}) */

// -深层监听 使用ref和深度监听
/* let msg = ref({
  nac: {
    bar: {
      name: "xiaohai"
    }
  }
})
watch(msg, (newVal, oldVal) => {
  console.log('新的', newVal);
  console.log('旧的', oldVal);
}, {
  // 深度监听
  deep: true,
  // 默认第一次执行一次watch监听
  immediate: true
}) */

// -使用reactive 可以不用deep
/* let msg = reactive({
  nac: {
    bar: {
      name: "xiaohai"
    }
  }
})
watch(msg, (newVal, oldVal) => {
  console.log('新的', newVal);
  console.log('旧的', oldVal);
}) */

// -监听单一的属性而不是全部的属性
let msg = reactive({
  name: '小海1',
  name2: '小海2'
})
// 第一个参数变成一个函数，返回你只想要监听的值
watch(() => msg.name, (newVal, oldVal) => {
  console.log('新的', newVal);
  console.log('旧的', oldVal);
})

</script>
<style  scoped>
.app {
}
</style>