<template>
  <div class="app">
    <h1>transition生命周期</h1>
    <button @click="flag = !flag">switch</button>

    <transition @before-enter="EnterFrom" @enter="EnterActive" @after-enter="EnterTo" @enter-cancelled="EnterCancel"
      @before-leave="LeaveFrom" @leave="LeaveActive" @after-leave="LeaveTo" @leave-cancelled="LeaveCancel">
      <div v-if="flag" class="box"></div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
// 引入animate.css
import 'animate.css'
// 引入gsap
import gsap from 'gsap'
import { ElementNode } from '@vue/compiler-core'
const flag = ref<boolean>(true)
const EnterFrom = (el: Element) => {
  gsap.set(el, {
    width: 0,
    height: 0
  })
}
const EnterActive = (el: Element, done: gsap.Callback) => {
  // console.log('过渡曲线')
  // setTimeout(() => {
  //   done()
  // }, 3000)
  gsap.to(el, {
    width: 200,
    height: 200,
    onComplete: done
  })
}
const EnterTo = (el: Element) => {
  console.log('过渡完成')
}
const EnterCancel = (el: Element) => {
  console.log('过渡效果被打断了，就会执行EnterCancel')
}
const LeaveFrom = (el: Element) => {
  console.log('离开之前')
}
const LeaveActive = (el: Element, done: gsap.Callback) => {
  /* console.log('离开过渡曲线')
  setTimeout(() => {
    done()
  }, 3000) */
  gsap.to(el, {
    width: 0,
    height: 0,
    onComplete: done
  })
}
const LeaveTo = (el: Element) => {
  console.log('离开过渡完成')
}
const LeaveCancel = (el: Element) => {
  console.log('离开过渡效果被打断了，就会执行LeaveCancel')
}
</script>
<style lang="less" scoped>
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
