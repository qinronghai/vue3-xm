<template>
  <div class="app">
    <div class="bg">
      <el-input class="ipt"></el-input>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'

</script>
<style lang='less' scoped>
.app {
  .bg {
    .ipt {
      width: 200px;

      :deep(.el-input__inner) {
        background-color: red;
      }
    }
  }
}
</style>