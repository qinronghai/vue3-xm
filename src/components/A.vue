<template>
  <div class="app">
    <h3>我是组件，好家伙</h3>
    <div ref="div">{{str}}</div>
    <button @click="change">修改Str</button>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, onRenderTracked, onRenderTriggered } from 'vue'
// beforeCreate created setup语法糖模式是没有这两个生命周期的，是使用setup去代替
// onBeforeMount 读不到 dom    onMounted可以读取dom
// onBeforeUpdate 获取的是更新之前的dom   onUpdate是更新之后的
console.log('setup');
const str = ref<string>('小海')
const div = ref<HTMLDivElement>()
const change = () => {
  str.value = '我被改了'
}


// -创建
// 1. 创建之前会调用
onBeforeMount(() => {
  console.log('创建之前=====>', div.value);
})
// 2. 创建完成会调用onMounted()
onMounted(() => {
  console.log('创建完成=====>', div.value);
})


// -更新
// 1. 更新之前
onBeforeUpdate(() => {
  console.log('更新组件之前=====>', div.value?.innerText);

})
// 2. 更新完成
onUpdated(() => {
  console.log('更新组件完成=====>', div.value?.innerText);

})


// -销毁
// 1. 销毁之前
onBeforeUnmount(() => {
  console.log('销毁之前=====>');

})
// 2. 销毁完成之后
onUnmounted(() => {
  console.log('销毁完成=====>');

})
// 使用v-if隐藏和显示dom会触发销毁钩子


// -可以通过这两个钩子去做一些调试
onRenderTracked((e) => {
  console.log(e);
})
onRenderTriggered((e) => {
  console.log(e);
})
</script>
<style scoped>
.app {
}
</style>