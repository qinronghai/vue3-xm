<template>
  <div class="app">
    <h1>transition-Appear属性
    </h1>
    <button @click="flag = !flag">switch</button>
    <!-- appear属性 可以设置初始接待你过渡 -->
    <!-- 就是页面加载完成就开始动画 对应三个状态 -->
    <!-- 也就是一进页面就开始实现动画 -->
    <transition appear appear-from-class="from" appear-active-class="active" appear-to-class="to">
      <div v-if="flag" class="box"></div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
// 引入animate.css
import 'animate.css'
const flag = ref<boolean>(true)
</script>
<style lang="less" scoped>
.app {
  .box {
    width: 200px;
    height: 200px;
    background-color: red;
  }

  .from {
    width: 0;
    height: 0;
  }

  .active {
    transition: all 2s ease;
  }

  .to {
    width: 200px;
    height: 200px;
    background-color: red;
  }
}
</style>
