import { ref } from "vue";

let v = ref<string>("");

let flag = true;

let Arr = [1, 2, 3, 4];

type Props = {
  title: string;
};

// props
// emit
const renderDom = (props: Props, ctx: any) => {
  return (
    <div>
      <div>hello tsx</div>
      <hr />
      <input v-model={v.value} type="text" />
      <div>{v.value}</div>
      <hr />
      <div>
        <div v-show={flag}>Jingtian</div>
        <div v-show={!flag}>Xuejian</div>
      </div>
      <hr />
      {/* 不支持正常的v-if */}
      <div>{flag ? <div>景天</div> : <div>雪见</div>}</div>
      <hr />
      {/* v-for 的写法 */}
      <div>
        {Arr.map((v) => {
          return <div>${v}</div>;
        })}
      </div>
      <hr />
      {/* v-bind */}
      <div data-index={1}>v-bind</div>
      {/* on-click */}
      <button onClick={clickTap.bind(this, 2)}>点击事件</button>
      <hr />
      <div>{props.title}</div>
      <hr />
      <button onClick={emitt.bind(this, ctx)}>派发事件</button>
    </div>
  );
};

const clickTap = (v: number) => {
  console.log("我被点了", v);
};

const emitt = (ctx: any) => {
  ctx.emit("on-click", 123);
};
export default renderDom;
