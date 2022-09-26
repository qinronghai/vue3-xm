<template>
  <div class="app">
    <Dialog>
      <!-- 具名插槽 -->
      <template v-slot:header>
        <div>
          我被插入了上面，太刺激了！
        </div>
      </template>
      <!-- 匿名插槽 -->
      <!-- 传值也可以简写 #default="{data}"-->
      <template v-slot="{data}">
        <div>
          {{data}}
        </div>
      </template>
      <!-- 具名插槽 简写 -->
      <template #footer>
        <div>
          我被插入了上面，太刺激了！
        </div>
      </template>

      <!-- 动态插槽 -->
      <template #[name]>
        <div>我是动态插槽，被插到footer中去了</div>
      </template>

    </Dialog>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import Dialog from './components/Dialog/index.vue'

// 动态插槽，只要动态的改name的值就行。
let name = ref('footer')
</script>
<style lang='less' >
// 初始化样式
html,
body,
#app {
  overflow: hidden;
  height: 100%;
}

.app {
}
</style>