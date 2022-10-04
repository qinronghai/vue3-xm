import { onMounted } from "vue";
type Options = {
  el: string;
};

export default function (options: Options): Promise<{ baseUrl: string }> {
  return new Promise((resolve) => {
    onMounted(() => {
      // 获取img元素
      let img: HTMLImageElement = document.querySelector(options.el) as HTMLImageElement;
      console.log(img, "============>");
      // 在图片完成加载时进行转base64
      img.onload = () => {
        resolve({
          baseUrl: base64(img),
        });
      };
    });
    const base64 = (el: HTMLImageElement) => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = el.width;
      canvas.height = el.height;
      ctx?.drawImage(el, 0, 0, canvas.width, canvas.height);
      return canvas.toDataURL("image/png");
    };
  });
}
