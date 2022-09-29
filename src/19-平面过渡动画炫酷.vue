<template>
  <div class="app">
    <div>
      <button @click="randomSwitch">随机切换</button>
      <transition-group move-class="mmm" class="wraps" tag="div" name="">
        <div class="items" :key="item.id" v-for="item in list">
          {{item.number}}
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
// 引入lodash库
import _ from "lodash";
let list = ref(Array.apply(null, { length: 81 } as number[]).map((_, index) => {
  return {
    id: index,
    number: (index % 9) + 1
  }
}))

const randomSwitch = () => {
  list.value = _.shuffle(list.value)
}
console.log(list.value);
</script>
<style lang='less' scoped>
.app {
  .wraps {
    display: flex;
    flex-wrap: wrap;
    width: calc(25px *10 + 9px);

    .items {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 25px;
      height: 25px;
      border: 1px solid #ccc;
    }

    .mmm {
      transition: all 1s;
    }
  }
}
</style>