import { createApp } from "vue";
// 引入element-UI
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import App from "./App.vue";
// 引入mitt
import mitt from "mitt";

import "./style.css";
// 引入css reset 全局生效
// import "./assets/css/reset.less";
// 引入全局组件
import Card from "./components/Card/index.vue";

// 引入Loading 插件
import Loading from "./components/Loading";
import { MyUse } from "./myUse";

// 初始化mitt函数
const Mit = mitt();

// TypeScript注册
// 由于必须要拓展ComponentCustomProperties类型才能获得类型提示
declare module "vue" {
  export interface ComponentCustomProperties {
    $Bus: typeof Mit;
  }
}
export const app = createApp(App);
// 注册插件
// app.use(Loading);
// 使用自己实现的MyUse
MyUse(Loading);
// 挂载全局
app.config.globalProperties.$Bus = Mit;
// filter
type Filter = {
  format: <T>(str: T) => string;
};
// 声明文件
declare module "@vue/runtime-core" {
  export interface ComponentCustomProperties {
    $filters: Filter;
    $env: string;
    $_loading: {
      show: () => void;
      hide: () => void;
    };
  }
}
app.config.globalProperties.$filters = {
  format<T>(str: T): string {
    return `真-${str}`;
  },
};
// 全局变量
app.config.globalProperties.$env = "dev";
app.use(ElementPlus);
app.component("Card", Card);
app.mount("#app");
