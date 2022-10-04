<template>
  <div v-if="isShow" class="index">
    Loading
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
const isShow = ref<boolean>(false)
const show = () => isShow.value = true
const hide = () => isShow.value = false

defineExpose({
  show,
  hide,
  isShow
})
</script>
<style lang='less' scoped>
.index {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: #fff;
  font-size: 30px;
  background: #000;
  opacity: .8;
}
</style>