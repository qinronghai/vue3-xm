<template>
  <div class="app">
    <h1>transition结合animate.css</h1>
    <button @click="flag=!flag">switch</button>
    <transition :duration="{enter:50,leave:500}" enter-active-class="animate__animated animate__backInDown"
      leave-active-class="animate__animated animate__fadeOut">
      <div v-if="flag" class="box"></div>
    </transition>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
// 引入animate.css
import 'animate.css';
const flag = ref<boolean>(true)
</script>
<style lang='less' scoped>
.app {
  .box {
    width: 200px;
    height: 200px;
    background-color: red;
  }

  // 从隐藏到显示
  .fade-enter-from {
    // 进入之前
    width: 0;
    height: 0;
    transform: rotate(360deg);
  }

  .fade-enter-active {
    // 过渡曲线
    transition: all 1.5s ease;
  }

  .fade-enter-to {
    // 过渡完成
    width: 200px;
    height: 200px;
  }

  // 从显示到隐藏
  .fade-leave-from {
    width: 200px;
    height: 200px;
    transform: rotate(360deg);
  }

  .fade-leave-active {
    transition: all 5s ease;
  }

  .fade-leave-to {
    width: 0;
    height: 0;
  }
}
</style>