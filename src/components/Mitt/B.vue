<template>
  <div class="B">
    <h1>I am B</h1>
    <div>{{Str}}</div>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import { getCurrentInstance } from 'vue';
let Str = ref('');



const instance = getCurrentInstance()
// 监听一个事件
instance?.proxy?.$Bus.on('on-click', (str: string) => {
  Str.value = str
  console.log(str);
})
// 监听所有事件
// *号代表监听所有事件
/* instance?.proxy?.$Bus.on('*', (type: any, str: string) => {
  // Str.value = str
  // type 是事件的名称
  // str 是传过来的参数
  console.log(type, str, '============>B');
}) */

const Bus = (str: any) => {
  console.log(str, '======>B');
}

// off(取消指定的mitt事件，取消的函数)
instance?.proxy?.$Bus.on('on-click2', Bus)
// 取消所有的mitt事件
instance?.proxy?.$Bus.all.clear()
</script>
<style lang='less' scoped>
.B {
  width: 200px;
  height: 200px;
  background-color: red;
}
</style>