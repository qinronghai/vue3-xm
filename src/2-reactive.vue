<template>
  <div class="app">
    <!-- <form>
      <input v-model="form.name" type="text">
      <br>

      <input v-model="form.age" type="text">
      <br>
      <button @click.prevent="submit">提交表单</button>
    </form> -->


    <!-- <ul>
      <li v-for="item in list2.arr">{{item}}</li>
    </ul>
    <button @click.prevent="add2">添加</button> -->


    <!-- <button @click="show">查看</button> -->

    <div>reactive {{obj}}</div>
    <div>shallowReactive {{obj2}}</div>
    <button @click="edit">修改</button>


  </div>
</template>

<script setup lang='ts'>
import { ref, reactive, readonly, shallowReactive } from 'vue'
// ref reactive 都是把一个对象变成响应式对象
// ref 支持所有的类型 reactive只支持引用类型 Array Object Map Set
// ref 取值 赋值 都需要 加.value  reactive是不需要.value
// reactive 由于是用proxy实现的 不能直接赋值 否则破坏响应式对象的
// 解决方案 数组 1. 可以使用push 加解构
// -指定类型
/* type M = {
  name: string;
  age: number;
}
let form = reactive<M>({
  name: "小海",
  age: 22
}) // reactive 不支持非对象类型的 */

// -对象
/* let form = reactive({
  name: "小海",
  age: 22
}) // reactive 不支持非对象类型的 

const submit = () => {
  console.log(form);
}
*/


// -数组
let list = reactive<string[]>([]) // reactive 不支持非对象类型的
// 第一种方法：可以使用push 加解构
const add = () => {
  setTimeout(() => {
    let res = ["EDG", "ABC", "JDG"]
    list.push(...res)
  }, 2000);
}

// 第二种方法 添加一个对象把数组作为一个属性去解决
let list2 = reactive<{
  arr: string[]
}>({
  arr: []
})
const add2 = () => {
  setTimeout(() => {
    let res = ["EDG", "ABC", "JDG"]
    list2.arr = res
  }, 2000);
}

// readonly
let obj = reactive({ name: "小海" })

const read = readonly(obj)

// read.name = '大海' read是只读的
const show = () => {
  console.log(read);
}

// shallowReactive
// shallowReactive 和 shallowRef 是同一问题，shallowReactive也会被reactive影响
const obj2: any = shallowReactive({
  foo: {
    bar: {
      num: 1
    }
  }
})
const edit = () => {
  /* obj2.foo.bar.num = 456;
  console.log(obj2); // 数据已经是变了，但是视图不会更新，只到第二个属性 */

  /* obj2.foo = { name: "小海" }
  console.log(obj2); */ // 视图的更新只会到第二层foo这里

  // shallowReactive也会被 reactive 影响
  obj.name = '我要改了'
  obj2.foo.bar.num = '我被影响了'
  console.log(obj2);
}

</script>
<style  scoped>
.app {
}
</style>