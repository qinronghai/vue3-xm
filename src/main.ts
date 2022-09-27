import { createApp } from "vue";
// 引入element-UI
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import App from "./App.vue";
import "./style.css";
// 引入css reset 全局生效
import "./assets/css/reset.less";
// 引入全局组件
import Card from "./components/Card/index.vue";

createApp(App).use(ElementPlus).component("Card", Card).mount("#app");
