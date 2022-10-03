<template>
  <div class="app">
    <div>
      <button @click="flag=!flag">切换</button>
      <!-- 使用自定义指令 -->
      <!-- aaa 是参数 -->
      <!-- xiaohai 是自定义修饰符 -->
      <A v-if="flag" v-move:aaa.xiaohai="{background:'red'}"></A>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive, Directive, DirectiveBinding } from 'vue'
import A from './components/CustomOrder/A.vue'
let flag = ref<boolean>(true)
type Dir = {
  background: string
}
// 必须以vNameOfDirective的形式来命名本地自定义指令，以使得他们可以直接在模板中使用
const vMove: Directive = {
  // 自定义组件的生命周期
  created() {
    // 元素初始化的时候
    console.log('========>created');
  },
  beforeMount() {
    // 指令绑定到元素后调用 只调用一次
    console.log('========>beforeMount');
  },
  /* mounted(...args: Array<any>) {
    // 元素插入父级dom调用
    console.log('========>mounted');
    console.log(args);
  }, */

  mounted(el: HTMLElement, dir: DirectiveBinding<Dir>) {
    // 元素插入父级dom调用
    console.log('========>mounted');
    console.log(dir.value.background);
    // 修改元素的背景色
    el.style.background = dir.value.background
  },
  beforeUpdate() {
    // 元素被更新之前调用
    console.log('========>beforeUpdate');
  },
  updated() {

    console.log('========>updated');
  },
  beforeUnmount() {
    console.log('========>beforeUnmount');
  },
  unmounted() {
    console.log('========>unmounted');
  },

}
</script>
<style lang='less' scoped>
.app {
}
</style>