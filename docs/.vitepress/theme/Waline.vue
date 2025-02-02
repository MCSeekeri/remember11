<template>
  <ClientOnly>
    <Waline :serverURL="serverURL" :path="path" :dark="dark" :turnstileKey="turnstileKey" />
  </ClientOnly>
</template>
<script setup>
import { Waline } from '@waline/client/component';
import { useRoute } from 'vitepress'

import '@waline/client/style';

const serverURL = "https://r11.comments.mcseekeri.com";
const dark = 'html.dark';
const turnstileKey = "0x4AAAAAAAgSnJC0FwcTFI6c";
const { path } = useRoute()
</script>

<style>
 html.dark {
   --waline-bg-color: #1b1b1f !important;
   --waline-active-color: #a8b1ff !important;
   --waline-theme-color: #a8b1ff !important;
  }
</style>
