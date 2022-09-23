<template>
  <div class="layout">
    <!-- 父组件给子组件传值title -->
    <!-- 传递复杂类型 需要使用v-bind 简写为冒号 : -->
    <!-- 通过ref拿到子组件的实例 -->
    <Menu ref="menu" @on-click="getList" @on-click2="getList2" title="我想穿一条裤子" :data="list"></Menu>
    <div class="layout-right">
      <Header></Header>
      <Content></Content>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import Menu from './Menu/index.vue'
import Content from './Content/index.vue'
import Header from './Header/index.vue'
// 传递复杂类型 需要使用v-bind
const list = reactive<number[]>([1, 2, 3])

// 父组件接收子组件传递过来的参数
const getList = (list: number) => {
  console.log(list, "我是子组件传过来的list");
  // 打印子组件传递过来的实例
  console.log(menu.value);
}
const getList2 = (list: number, flag: boolean) => {
  console.log(list, "我是子组件传过来的list");
  console.log(flag, "我是子组件传过来的第二个参数false");
}

// 通过ref拿到子组件的实例
const menu = ref(null)
</script>
<style lang='less' scoped>
.layout {
  display: flex;
  overflow: hidden;
  height: 100vh;

  &-right {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
}
</style>