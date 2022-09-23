<template>
  <div class="tree" v-for="(item,index) in data" style="margin-left:10px">
    {{item.name}}
    <TreeItem v-if="item?.children?.length" :data="item.children"></TreeItem>

  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import { TreeList } from "../../assets/type/TreeList";
import TreeItem from "./index.vue";

type Props = {
  data?: TreeList[]
}
defineProps<Props>()

</script>
<style lang='less' scoped>
.tree {
}
</style>