<template>
  <div class="A">
    <slot></slot>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'

</script>
<style lang='less' scoped>
.A {
  // 1. 在这里修改父级插槽内的样式是不行的
  :slotted(.a) {
    // color: red;
  }
}
</style>