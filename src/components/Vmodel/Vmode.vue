<template>
  <div v-if="modelValue" class="A">
    <div class="close"><button @click="close">关闭</button></div>
    <div>
      {{modelValue}}
      <h2>我是v-model子组件dialog</h2>
      内容：<input :value="textVal" @input="change" type="text">
    </div>

  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
const emit = defineEmits(['update:modelValue', 'update:textVal'])
const close = () => {
  emit('update:modelValue', false)
}
const change = (e: Event) => {
  // 获取当前元素 断言成input元素才能去读这个value
  const target = e.target as HTMLInputElement
  emit("update:textVal", props?.textValModifiers?.isBt ? target.value + '变态' : target.value)

}
const props = defineProps<{
  modelValue: boolean,
  textVal: string
  // 接收自定义事件 事件名+Modifiers
  textValModifiers?: {
    isBt: boolean
  }
}>()
</script>
<style lang='less' scoped>
.A {
  position: relative;
  width: 50vw;
  padding: 10px;
  border: 2px solid #ccc;

  .close {
    position: absolute;
    right: 0;
  }
}
</style>