<template>
  <div class="app">
    {{$filters.format('渣男')}}
    <hr>
    {{$env}}
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'

</script>
<style lang='less' scoped>
.app {
}
</style>