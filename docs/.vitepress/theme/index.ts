import Layout from "./Layout.vue";
import type { Theme } from "vitepress";
import "./custom.css";

export default {
  Layout,
  enhanceApp({ app, router, siteData }) {
    // ...
  },
} satisfies Theme;
