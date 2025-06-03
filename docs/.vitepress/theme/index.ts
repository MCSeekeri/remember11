import Layout from "./Layout.vue";
import type { Theme } from "vitepress";
// 自定义css，用于增加背景
// import "./custom.css";

import "./grayscale.css";

export default {
  Layout,
  enhanceApp({ app, router, siteData }) {
    // ...
  },
} satisfies Theme;
