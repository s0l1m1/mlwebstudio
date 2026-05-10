<template>
  <q-layout view="hHh lpR fFf" class="mlws-layout">
    <PremiumIntro />
    <div class="mlws-noise"></div>
    <div class="mlws-ambient mlws-ambient--one"></div>
    <div class="mlws-ambient mlws-ambient--two"></div>

    <AppHeader />

    <q-page-container>
      <router-view v-slot="{ Component, route }">
        <transition name="page-transition" mode="out-in">
          <component :is="Component" :key="route.fullPath" />
        </transition>
      </router-view>
    </q-page-container>

    <AppFooter />
    <FloatingContact />
  </q-layout>
</template>

<script setup>
import AppHeader from 'src/components/site/AppHeader.vue'
import AppFooter from 'src/components/site/AppFooter.vue'
import FloatingContact from 'src/components/site/FloatingContact.vue'
import PremiumIntro from 'src/components/site/PremiumIntro.vue'
</script>

<style scoped lang="scss">
.mlws-layout {
  min-height: 100vh;
  color: #f8fafc;
  background:
    radial-gradient(circle at 12% 0%, rgba(59, 130, 246, 0.26), transparent 31rem),
    radial-gradient(circle at 86% 4%, rgba(124, 58, 237, 0.24), transparent 34rem),
    radial-gradient(circle at 52% 100%, rgba(219, 39, 119, 0.12), transparent 42rem),
    linear-gradient(180deg, #07111f 0%, #050816 45%, #07111f 100%);
}

.mlws-noise {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  opacity: 0.23;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.026) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.026) 1px, transparent 1px);
  background-size: 42px 42px;
  mask-image: linear-gradient(to bottom, black, transparent 86%);
}

.mlws-ambient {
  position: fixed;
  z-index: 0;
  pointer-events: none;
  border-radius: 999px;
  filter: blur(28px);
  opacity: 0.35;
  animation: ambientFloat 11s ease-in-out infinite;
}

.mlws-ambient--one {
  width: 360px;
  height: 360px;
  left: -140px;
  top: 120px;
  background: rgba(37, 99, 235, 0.48);
}

.mlws-ambient--two {
  width: 390px;
  height: 390px;
  right: -160px;
  top: 240px;
  background: rgba(124, 58, 237, 0.48);
  animation-delay: -4s;
}

.page-transition-enter-active,
.page-transition-leave-active {
  transition:
    opacity 260ms ease,
    transform 260ms ease,
    filter 260ms ease;
}

.page-transition-enter-from {
  opacity: 0;
  transform: translateY(16px);
  filter: blur(8px);
}

.page-transition-leave-to {
  opacity: 0;
  transform: translateY(-10px);
  filter: blur(7px);
}

@keyframes ambientFloat {
  0%,
  100% {
    transform: translate3d(0, 0, 0) scale(1);
  }

  50% {
    transform: translate3d(24px, -18px, 0) scale(1.06);
  }
}

@media (prefers-reduced-motion: reduce) {
  .mlws-ambient,
  .page-transition-enter-active,
  .page-transition-leave-active {
    animation: none !important;
    transition: none !important;
  }
}
</style>
