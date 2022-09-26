<template>
  <div class="content">
    <Suspense>
      <template #default>
        <A></A>
      </template>

      <template #fallback>
        <div>
          loading...
        </div>
      </template>
    </Suspense>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive, defineAsyncComponent } from 'vue'
const A = defineAsyncComponent(() => import('../../components/A/index.vue'))
</script>
<style lang='less' scoped>
.content {
}
</style>