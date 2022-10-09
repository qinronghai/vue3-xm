<template>
  <div class="app">
    <Btn @on-click="getBtn" text="小海的帽子"></Btn>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
// 函数式编程
import { h } from "vue";

type Props = {
  text: string
}

const Btn = (props: Props, ctx: any) => {
  return h('div', {
    class: ['flex', 'red'],
    onClick: () => {
      ctx.emit('on-click', '我是按钮')
    }
  },
    props.text
  )
}

const getBtn = (str: string) => {
  console.log(str);
}

</script>
<style lang='less' scoped>
.app {
}
</style>