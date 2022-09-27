<template>
  <div class="Dialog">
    <div class="Dialog-txt">我是弹窗</div>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'

</script>
<style lang='less' scoped>
.Dialog {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 150px;
  height: 200px;
  margin-top: -100px;
  margin-left: -75px;
  background-color: black;
}
</style>