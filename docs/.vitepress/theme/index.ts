import Layout from './Layout.vue'
import type { Theme } from 'vitepress'

export default {
  Layout,
  enhanceApp({ app, router, siteData }) {
    // ...
  }
} satisfies Theme