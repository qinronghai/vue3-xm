<template>
  <div class="app">
    <h1>爷爷级别App.vue</h1>
    <label for="">
      <input v-model="colorVal" type="radio" name="color" value="red">
      红色
    </label>
    <label for="">
      <input v-model="colorVal" type="radio" name="color" value="pink">
      粉色
    </label>
    <label for="">
      <input v-model="colorVal" type="radio" name="color" value="yellow">
      黄色
    </label>
    <div class="box">

    </div>
    <hr>
    <provideAVue></provideAVue>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive, provide } from 'vue'
import provideAVue from './components/provideAndInject/provideA.vue'
const colorVal = ref<string>('red')
provide('color', colorVal)
</script>
<style lang='less' scoped>
.app {
  .box {
    width: 50px;
    height: 50px;
    background: v-bind(colorVal);
    border: 1px solid #ccc;
  }
}
</style>