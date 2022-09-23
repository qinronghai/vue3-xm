<template>
  <div class="Menu">菜单区域
    <div>
      {{title}}
    </div>
    <div>
      {{data}}
    </div>
    <br>
    <div>
      <button v-on:click="clickTap">派发</button>
      <button v-on:click="clickTap2">派发2</button>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
// 接收父组件传过来的值
type Props = {
  title: string,
  // 子组件的标识符要与父组件v-bind后面的标识符完全相同，才能传递过来。
  data: number[]
}
// defineProps<Props>()

//----------------------------------

// 子组件给父组件传参需要通过事件进行
/* 点击 派发按钮时 向父组件派发了一个事件，叫 on-click 然后事件中传了一个list数组  */
const list = reactive<number[]>([6, 6, 6])
const flag = ref<boolean>(false)
const emit = defineEmits(['on-click', 'on-click2'])
const clickTap = () => {
  emit('on-click', list)
}
const clickTap2 = () => {
  // 也可以传递多个参数
  emit('on-click2', list, false)
}

// 暴露实例上的东西方便子组件拿
// 这样做比较安全，父组件不能随意修改子组件的内容，你想修改什么再暴露什么就行了
defineExpose({
  list,
  flag
})

// 子组件想给父组件传递默认值
// ts才有withDefas这个东西
withDefaults(defineProps<Props>(), {
  title: '我是默认值',
  // 复杂类型通过return
  data: () => [1, 1, 1, 1]
})
</script>
<style lang='less' scoped>
.Menu {
  width: 200px;
  border-right: 1px solid #ccc;
}
</style>