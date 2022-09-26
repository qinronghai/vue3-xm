<template>
  <div class="content">
    <div class="tab">
      <div @click="switchCom(item)" class="tab-item" :key="item.name" v-for="item in data">{{item.name}}</div>
    </div>
    <component :is="current.comName"></component>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, markRaw } from "vue";
import A from "./A.vue";
import B from "./B.vue";
import C from "./C.vue";

type Tabs = {
  name: string;
  comName: any;
};

type Com = Pick<Tabs, "comName">
// proxy
const data = reactive<Tabs[]>([
  {
    name: "我是A组件",
    // 关于markRaw的用法
    // markRaw包裹的对象会添加一个“__v_skip”的属性为true，然后vue3会根据这个属性跳过proxy代理
    comName: markRaw(A),
  },
  {
    name: "我是B组件",
    comName: markRaw(B),
  },
  {
    name: "我是C组件",
    comName: markRaw(C),
  },
]);

let current = reactive<Com>({
  comName: data[0].comName
})

const switchCom = (item: Tabs) => {
  console.log('object', item.comName);
  current.comName = item.comName
}

</script>
<style lang="less" scoped>
.content {
  flex: 1;
  padding: 10px;
  margin: 10px;
  border: 1px solid #ccc;

  .tab {
    display: flex;

    .tab-item {
      padding: 10px;
      border: 1px solid #ccc;
    }
  }
}
</style>
