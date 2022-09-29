<template>
  <div class="provide">
    <h1>儿子级别</h1>
    <div class="box">

    </div>
    <hr>
    <provideBVue></provideBVue>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive, provide, readonly, inject } from 'vue'
// 引入ref 的类型
import type { Ref } from 'vue'
const color = inject<Ref<string>>('color')

</script>
<style lang='less' scoped>
.provide {
  .box {
    width: 50px;
    height: 50px;
    background: v-bind(color);
    border: 1px solid #ccc;
  }
}
</style>