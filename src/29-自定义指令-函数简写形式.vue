<template>
  <div class="app">
    <div>
      <input v-model="value" type="text">
      <A v-move="{background:value}"></A>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive, Directive, DirectiveBinding } from 'vue'
import A from './components/CustomOrder/A.vue'
let value = ref<string>('')

type Dir = {
  background: string
}
const vMove: Directive = (el: HTMLElement, bingding: DirectiveBinding<Dir>) => {
  el.style.background = bingding.value.background
}

</script>
<style lang='less' scoped>
.app {
}
</style>