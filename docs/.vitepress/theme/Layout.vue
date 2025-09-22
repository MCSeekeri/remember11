<script setup lang="ts">
import DefaultTheme from "vitepress/theme";
import { useData } from "vitepress";
import Waline from "./Waline.vue";
import { nextTick, provide, onMounted, watch } from "vue";
import { useRouter } from "vitepress";

const { Layout } = DefaultTheme;

const { isDark } = useData();

const router = useRouter();

function applyGrayscaleFilter() {
  const today = new Date();
  const targetDates = [
    new Date(today.getFullYear(), 5, 4),
    new Date(today.getFullYear(), 6, 7),
    new Date(today.getFullYear(), 8, 18),
    new Date(today.getFullYear(), 11, 13),
  ];

  const isTargetDate = targetDates.some(
    (date) =>
      date.getMonth() === today.getMonth() && date.getDate() === today.getDate()
  );

  const htmlEl = document.documentElement;
  if (isTargetDate) {
    htmlEl.classList.add("grayscale-mode");
  } else {
    htmlEl.classList.remove("grayscale-mode");
  }
}

onMounted(() => {
  applyGrayscaleFilter();
  const fixAriaControls = () => {
    const hamburger = document.querySelector(".VPNavBarHamburger");
    if (hamburger && hamburger.hasAttribute("aria-controls")) {
      const controlId = hamburger.getAttribute("aria-controls");
      const targetElement = document.getElementById(controlId);
      if (!targetElement) {
        hamburger.removeAttribute("aria-controls");
      }
    }
  };
  setTimeout(fixAriaControls, 100);
});

watch(
  () => router.route.path,
  () => {
    setTimeout(applyGrayscaleFilter, 100);
    setTimeout(() => {
      const hamburger = document.querySelector(".VPNavBarHamburger");
      if (hamburger && hamburger.hasAttribute("aria-controls")) {
        const controlId = hamburger.getAttribute("aria-controls");
        const targetElement = document.getElementById(controlId);
        if (!targetElement) {
          hamburger.removeAttribute("aria-controls");
        }
      }
    }, 100);
  }
);

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

const handleClick = (event: Event) => {
  const spoiler = (event.target as HTMLElement).closest(".spoiler");
  if (spoiler) {
    spoiler.classList.toggle("revealed");
  }
};
</script>

<template>
  <div class="gtm-noscript-container">
    <noscript>
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-PGPK66PF"
        height="0"
        width="0"
        style="display: none; visibility: hidden"
      >
      </iframe>
    </noscript>
  </div>
  <Layout @click="handleClick">
    <template #doc-after>
      <div>
        <div class="danger custom-block" style="margin: 16px 0; padding: 16px">
          <p style="font-size: 16px; text-align: center">
            ❗评论区可能含有剧透内容，请通关后再查看。
          </p>
        </div>
        <Waline />
      </div>
    </template>
    <template #layout-bottom>
      <div class="footer">
        <a href="https://beian.miit.gov.cn/">鲁ICP备2021039368号</a>
        <img
          src="https://www.beian.gov.cn/img/new/gongan.png"
          alt="公安徽章"
          width="24"
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

.footer {
  display: flex;
  justify-content: center;
  color: #666;
  gap: 8px;
  font-size: 14px;
  padding: 16px;
}

.spoiler {
  background-color: var(--vp-c-text-1);
  color: var(--vp-c-text-1);
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
  border: 1px solid transparent;
  outline: none;
  filter: brightness(0.8);
}

.spoiler.revealed {
  background-color: transparent;
  color: inherit;
}

.gtm-noscript-container {
  display: block;
}

div[class*="data-v-"] {
}
</style>
