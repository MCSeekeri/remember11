<template>
  <ClientOnly>
    <Waline
      :key="path"
      :serverURL="serverURL"
      :path="path"
      :dark="dark"
      :turnstileKey="turnstileKey"
      :imageUploader="false"
      :emoji="false"
    />
  </ClientOnly>
</template>
<script setup>
import { Waline } from "@waline/client/component";
import { useRoute } from "vitepress";
import { computed } from "vue";

import "@waline/client/style";

const serverURL = "https://r11.comments.mcseekeri.com";
const dark = "html.dark";
const turnstileKey = "0x4AAAAAAAgSnJC0FwcTFI6c";
const route = useRoute();

const path = computed(() => route.path.replace(/\/$/, "") || "/");
</script>

<style scoped>
[data-waline] {
  --waline-bg-color: var(--vp-c-bg);
  --waline-theme-color: var(--vp-c-brand);
  --waline-active-color: var(--vp-c-brand);
}
</style>
