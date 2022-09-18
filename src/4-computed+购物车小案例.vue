<template>
  <div class="app">
    <table border style="width:500px">
      <thead>
        <tr>
          <th>名称</th>
          <th>数量</th>
          <th>单价</th>
          <th>操作</th>
        </tr>
      </thead>

      <tbody>
        <tr :key="index" v-for="(item,index) in data">
          <td align="center">{{item.name}}</td>
          <td align="center"><button @click="addAndSub(item,false)">-</button> {{item.num}} <button
              @click="addAndSub(item,true)">+</button></td>
          <td align="center">{{item.num*item.price}}</td>
          <td align="center"><button @click="del(index)">删除</button></td>
        </tr>
      </tbody>

      <tfoot>
        <td></td>
        <td></td>
        <td></td>
        <td align="center">总价：{{$total}}</td>
      </tfoot>

    </table>
  </div>
</template>

<script setup lang='ts'>
// 认识computed
import { ref, reactive, computed } from 'vue'
let firstName = ref('')
let lastName = ref('')

// 第一种写法
/* const name = computed(() => {
  return firstName.value + "----" + lastName.value
}) */

// 第二种写法
/* const name = computed({
  get() {
    return firstName.value + lastName.value
  },
  set() {
    firstName.value + lastName.value
  }
}) */

// 购物车案列

type Shop = {
  name: string,
  num: number,
  price: number
}

let $total = ref(0)

const data = reactive<Shop[]>([{
  name: "小海的裤子",
  num: 1,
  price: 100
}, {
  name: "小海的衣服",
  num: 1,
  price: 200
}, {
  name: "小海的丝袜",
  num: 1,
  price: 300
}])


const addAndSub = (item: Shop, type: boolean): void => {
  if (item.num > 1 && !type) {
    item.num--
  }
  if (item.num < 99 && type) {
    item.num++
  }
  // total()
}

// 删除
const del = (index: number) => {
  data.splice(index, 1)
  // total()
}

// 计算总价
/* const total = () => {
  $total.value = data.reduce((prev, next) => {
    return prev + (next.num * next.price)
  }, 0)
} */
// 初始化总价
// total()

// 利用computed计算总价
$total = computed<number>(() => {
  return data.reduce((prev, next) => {
    return prev + (next.num * next.price)
  }, 0)
})
</script>
<style  scoped>
.app {
}
</style>