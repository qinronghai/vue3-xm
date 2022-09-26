<template>
  <div class="Dialog">
    <!-- 具名插槽 -->
    <header class="header">
      <slot name="header"></slot>
    </header>
    <!-- 匿名插槽 -->
    <main class="main">
      <div v-for="item in data">
        <slot :data="item"></slot>

      </div>
    </main>
    <!-- 具名插槽 简写 -->

    <footer class="footer">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'

type names = {
  name: string,
  age: number
}

const data = reactive<names[]>([{
  name: "小满被插入了1",
  age: 201
}, {
  name: "小满被插入了2",
  age: 202
}, {
  name: "小满被插入了3",
  age: 203
}, {
  name: "小满被插入了4",
  age: 204
}])
</script>
<style lang='less' scoped>
.Dialog {
  .header {
    height: 200px;
    color: #fff;
    background-color: red;
  }

  .main {
    height: 200px;
    color: #fff;
    background-color: green;
  }

  .footer {
    height: 200px;
    color: #fff;
    background-color: blue;
  }
}
</style>