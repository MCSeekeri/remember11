<template>
  <ClientOnly>
    <Waline :serverURL="serverURL" :path="path" :dark="dark" :turnstileKey="turnstileKey" />
  </ClientOnly>
</template>
<script setup>
import { Waline } from "@waline/client/component";
import { computed, onMounted } from "vue";

import "@waline/client/waline.css";

const serverURL = "https://r11.comments.mcseekeri.com";
const dark = 'html[class="dark"]';
const turnstileKey = "0x4AAAAAAAgSnJC0FwcTFI6c";
onMounted(() => {
  let path = computed(() => window.location.path);
});
</script>
