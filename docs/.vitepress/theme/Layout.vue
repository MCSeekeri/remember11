<script setup lang="ts">
import DefaultTheme from "vitepress/theme";
import { useData } from "vitepress";
import Waline from "./Waline.vue";
import { nextTick, provide } from "vue";

const { Layout } = DefaultTheme;

const { isDark } = useData();

const enableTransitions = () =>
  "startViewTransition" in document &&
  window.matchMedia("(prefers-reduced-motion: no-preference)").matches;

provide("toggle-appearance", async ({ clientX: x, clientY: y }: MouseEvent) => {
  if (!enableTransitions()) {
    isDark.value = !isDark.value;
    return;
  }

  const clipPath = [
    `circle(0px at ${x}px ${y}px)`,
    `circle(${Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y)
    )}px at ${x}px ${y}px)`,
  ];

  await document.startViewTransition(async () => {
    isDark.value = !isDark.value;
    await nextTick();
  }).ready;

  document.documentElement.animate(
    { clipPath: isDark.value ? clipPath.reverse() : clipPath },
    {
      duration: 300,
      easing: "ease-in",
      pseudoElement: `::view-transition-${isDark.value ? "old" : "new"}(root)`,
    }
  );
});
</script>

<template>
  <Layout>
    <template #doc-after>
      <div style="text-align: center; margin-top: 20px; margin-bottom: 20px">
        <h1 style="font-size: 24px">评论区可能含有剧透内容，请通关后观看。</h1>
      </div>
      <Waline />
    </template>
    <template #layout-bottom>
      <div style="display: flex; align-items: center; justify-content: center">
        <a href="https://beian.miit.gov.cn/" style="margin-right: 10px"
          >鲁ICP备2021039368号</a
        >
        <img
          src="https://www.beian.gov.cn/img/new/gongan.png"
          alt="公安徽章"
          style="margin-right: 10px"
        />
        <a href="https://www.beian.gov.cn/portal/registerSystemInfo"
          >37160202000626</a
        >
      </div>
    </template>
  </Layout>
</template>
<style>
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

::view-transition-old(root),
.dark::view-transition-new(root) {
  z-index: 1;
}

::view-transition-new(root),
.dark::view-transition-old(root) {
  z-index: 9999;
}

.VPSwitchAppearance {
  width: 22px !important;
}

.VPSwitchAppearance .check {
  transform: none !important;
}
</style>
