<template>
  <div class="app">
    <div v-move class="box">
      <div class="header">
      </div>
      <div>内容</div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive, Directive, DirectiveBinding } from 'vue'
const vMove: Directive<any, void> = (el: HTMLElement, bingding: DirectiveBinding) => {
  // 获取header元素
  let moveElement = el.firstElementChild as HTMLDivElement

  // 鼠标按下的函数
  const mouseDown = (e: MouseEvent) => {
    // 记录按下的位置，减去offsetLeft的值
    let X = e.clientX - el.offsetLeft
    let Y = e.clientY - el.offsetTop
    // 鼠标移动后要执行的函数
    const mouseMove = (e: MouseEvent) => {
      console.log(e);
      el.style.left = e.clientX - X + 'px'
      el.style.top = e.clientY - Y + 'px'
    }
    // 鼠标按下之后去移动拖拽header元素
    document.addEventListener('mousemove', mouseMove)
    // -添加鼠标左键点击松开
    document.addEventListener('mouseup', () => {
      // 清除鼠标移动
      document.removeEventListener('mousemove', mouseMove)
    })

  }
  // -为header元素添加鼠标事件
  moveElement.addEventListener('mousedown', mouseDown)



}
</script>
<style lang='less' scoped>
.app {
  .box {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 200px;
    height: 200px;
    border: 3px solid #000;
    transform: translate(-50%, -50%);

    .header {
      height: 20px;
      background-color: #000;
    }
  }
}
</style>