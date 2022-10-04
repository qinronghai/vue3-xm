import type { App, VNode } from "vue";
import { createVNode, render } from "vue";
import Loading from "./index.vue";
export default {
  // 插件支持对象形式和函数形式
  install(app: App) {
    const Vnode: VNode = createVNode(Loading);
    render(Vnode, document.body);
    app.config.globalProperties.$_loading = {
      show: Vnode.component?.exposed?.show,
      hide: Vnode.component?.exposed?.hide,
    };
    // app.config.globalProperties.$_loading.show();
    console.log(app, Loading, Vnode);
  },
};
