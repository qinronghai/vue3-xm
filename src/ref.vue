<template>
  <div class="a">
    ref: {{ Man }}
    <hr>
    <button @click="change">修改</button>
    <hr>
    shallowRef: {{ Man2 }}
    <hr>
    customRef: {{obj}}
    <hr>
    <!--  ref 是可以获取dom -->
    <div ref="dom">我是dom</div>
  </div>
</template>

<script setup lang='ts'>
import { ref, isRef, shallowRef, triggerRef, customRef } from 'vue'
// ref shallowRef
// ref 深层次 shallowRef浅层次的响应:视图不会发生变化，但是属性的值变了
// ref和 shallowRef是不能一块写的 不然会影响shallowRef 造成视图的更新
const Man = ref({ name: "小海" });
const Man2 = shallowRef({ name: "小海2" });

const change = () => {
  // Man.value.name = "大海";
  // console.log(isRef(Man));
  // console.log(isRef(Man2));
  // Man2.value.name = "大海2"; // shallowRef浅层次
  /* Man2.value = {
    name: "大海2"
  } // 这是shallowRef视图相应的，只到value */


  // 在ref底层更新的时候会调用triggerRef
  // Man2.value.name = "我被影响了！";
  // shallowRef 也可以通过triggerRef强制更新视图
  // 同时ref底层也会去调用这个triggerRef，所以不要同时使用ref和 shallowRef
  // triggerRef(Man2);
  // Man.value.name = "同时影响了";\


  obj.value = 'customRef 修改啦'
  console.log(obj);

  console.log(dom.value?.innerText);


}
/* customRef: 自定义Ref */
function MyRef<T>(value: T) {
  return customRef((track, trigger) => {
    return {
      get() {
        track();
        return value;
      },
      set(newValue) {
        value = newValue
        trigger()
      }
    }
  })
}
const obj = MyRef<string>('customRef 小海');

// ref 获取dom
const dom = ref<HTMLDivElement>() // 变量名要和ref后面的名字一样
console.log(dom.value?.innerText);
</script>
<style  scoped>
.a {
}
</style>