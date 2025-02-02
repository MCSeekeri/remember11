<script setup>
import DefaultTheme from 'vitepress/theme';
import { useData } from 'vitepress';
import Waline from './Waline.vue';

const { Layout } = DefaultTheme;
</script>

<template>
  <Layout>
    <template #doc-after>
      <div style="text-align: center; margin-top: 20px; margin-bottom: 20px;">
        <h1 style="font-size: 24px;">评论区可能含有剧透内容，请通关后观看。</h1>
      </div>
      <Waline />
    </template>
    <template #layout-bottom>
      <div style="display: flex; align-items: center; justify-content: center;">
        <a href="https://beian.miit.gov.cn/" style="margin-right: 10px;">鲁ICP备2021039368号</a>
        <img src="https://www.beian.gov.cn/img/new/gongan.png" alt="公安徽章" style="margin-right: 10px;">
        <a href="https://www.beian.gov.cn/portal/registerSystemInfo">37160202000626</a>
      </div>
    </template>
  </Layout>
</template>
