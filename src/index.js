import "./assets/styles/_antd.less";

const render = () => {
  import("./assets/styles/main.scss").then(() => {
    require("./AppRender");
  });
};

render();