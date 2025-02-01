<script setup>
import DefaultTheme from 'vitepress/theme';
import { useData } from 'vitepress';
import Waline from './Waline.vue';

const { Layout } = DefaultTheme;
</script>

<template>
  <Layout>
    <template #doc-after>
      <Waline />
    </template>
  </Layout>
</template>
