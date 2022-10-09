<template>
  <div class="app">
    <A>
      <div class="a">私人定制div</div>
    </A>
    <div class="ddd">动态Css</div>
    <div :class="[$style.ccc,$style.border]">module</div>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import A from './components/CssNewFeater/A.vue'
const style = ref('red');
setTimeout(() => {
  style.value = "#ccc"
}, 3000);

</script>
<style lang='less' scoped>
.app {
  // 2. 全局的样式
  // :global(div) {
  //   color: blue;
  // }

  // 3. 动态样式
  /* .ddd {
    color: v-bind(style);
  } */
}
</style>

// 4. module的用法
<style module>
/* 自定义名称 module='zs'  上面模板上的也要变化 $style.ccc 变成 zs.ccc */
 .ccc {
   color: aqua;
 }

 .border {
   border: 1px solid #ccc;
 }
</style>