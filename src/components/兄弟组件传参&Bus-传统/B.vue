<template>
  <div class="B">
    <h1> 我是b组件</h1>
    <h2>{{Flag}}</h2>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
// 利用props接收值
// 1.第一种写法
/* const props = defineProps({
  Flag: boolean // boolean 大写
}); */

// 2.第二种写法
/* const props = defineProps<{
  Flag: boolean
}>() */

// 3.第三种写法
type Props = {
  Flag: boolean
}
const props = defineProps<Props>()


</script>
<style lang='less' scoped>
.B {
  width: 200px;
  height: 200px;
  background-color: rgb(151, 135, 135);
}
</style>