<template>
  <div class="app">
    <el-button type="primary" @click="flag=!flag">切换组件</el-button>
    <!-- 把组件放到keep-alive中就会自动的缓存我们刚才输入的值 -->
    <!-- include属性：只想缓存的组件名称 -->
    <!-- exclude: 不缓存的组件 -->
    <!-- max='10': 缓存组件最大数为10，是一个算法，会把最不常用的，旧的组件都剔除掉，只剩下十个。 -->
    <keep-alive>
      <A v-if="flag"></A>
      <B v-else></B>
    </keep-alive>
    <!-- keep alive  -->
    <!-- 应用场景：在B组件的输入框中写了一些值，然后切换到别的组件，如A之后再切换回B组件，发现刚刚输入的值不见了，这对于用户体验很不好。 -->
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive, onMounted, onUnmounted, onActivated, onDeactivated } from 'vue'
import A from "./components/KeepAlive/A.vue";
import B from "./components/KeepAlive/B.vue";

const flag = ref<boolean>(false)


</script>
<style lang='less' scoped>
.app {
}
</style>