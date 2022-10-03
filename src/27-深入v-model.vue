<template>
  <div class="app">
    <h1>我是App.vue父组件</h1>
    <div>isShow:{{isShow}}</div>
    <div>text:{{text}}</div>
    <button @click="isShow=!isShow">开关</button>
    <hr>
    <!-- v-model= 普通的v-model -->
    <!-- v-model:多v-model的用法 -->
    <!-- 自定义修饰符 -->
    <VModelVue v-model:textVal.isBt="text" v-model="isShow"></VModelVue>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import VModelVue from "./components/Vmodel/Vmode.vue";
const isShow = ref(true)
const text = ref<string>('小海')
</script>
<style lang='less' scoped>
.app {
}
</style>