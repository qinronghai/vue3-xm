import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
// 引入css reset 全局生效
import "./assets/css/reset.less";
// 引入全局组件
import Card from "./components/Card/index.vue";

createApp(App).component("Card", Card).mount("#app");
