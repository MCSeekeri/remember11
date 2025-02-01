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
  </Layout>
</template>
