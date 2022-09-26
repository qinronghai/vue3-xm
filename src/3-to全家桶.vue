<template>
  <div class="app">
    {{man}}
    <hr>
    <div>
      <!-- toRef: {{like}} -->
    </div>
    <hr>
    <!-- {{name}}--{{age}}--{{like}} -->
    <div>
      <button @click="change">修改</button>
    </div>
  </div>
</template>

<script setup lang='ts'>
// to全家桶
import { toRef, toRaw, toRefs, reactive } from 'vue'

const man = reactive({
  name: "小海",
  age: 23,
  like: "JK"
})
// toRef 只能修改响应式对象的值 非响应式视图毫无变化
// const like = toRef(man, 'like')

const change = () => {
  console.log(man, toRaw(man));

}

// 手写toRefs的源码
/* const toRefs = <T extends object>(object: T) => {
  const map: any = {}
  for (const key in object) {
    map[key] = toRef(object, key)
  }
  return map
} */

// let { name, age, like } = toRefs(man)
</script>
<style  scoped>
.app {
}
</style>