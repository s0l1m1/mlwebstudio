<template>
  <div
    ref="target"
    class="reveal"
    :class="[
      `reveal--${variant}`,
      {
        'reveal--visible': visible,
      },
    ]"
    :style="{ '--reveal-delay': `${delay}ms` }"
  >
    <slot />
  </div>
</template>

<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'

defineProps({
  delay: {
    type: Number,
    default: 0,
  },
  variant: {
    type: String,
    default: 'up',
    validator: (value) => ['up', 'left', 'right', 'zoom'].includes(value),
  },
})

const target = ref(null)
const visible = ref(false)

let observer
let fallbackTimer

function show() {
  visible.value = true
  observer?.disconnect()
}

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function shouldSkipAnimation() {
  return window.matchMedia('(max-width: 980px)').matches || prefersReducedMotion()
}

function isElementInViewport(element) {
  const rect = element.getBoundingClientRect()
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight
  const viewportWidth = window.innerWidth || document.documentElement.clientWidth

  return rect.top < viewportHeight && rect.bottom > 0 && rect.left < viewportWidth && rect.right > 0
}

onMounted(async () => {
  await nextTick()

  if (!target.value) return

  // Mobile/tablet: odmah prikaži sadržaj zbog boljeg performance-a i bez rizika od blur stanja.
  if (shouldSkipAnimation()) {
    show()
    return
  }

  if (isElementInViewport(target.value)) {
    show()
    return
  }

  if (!('IntersectionObserver' in window)) {
    show()
    return
  }

  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        show()
      }
    },
    {
      threshold: 0.01,
      rootMargin: '120px 0px 120px 0px',
    },
  )

  observer.observe(target.value)

  // Fallback da nikad ne ostane sakriveno.
  fallbackTimer = window.setTimeout(() => {
    show()
  }, 800)
})

onBeforeUnmount(() => {
  observer?.disconnect()
  window.clearTimeout(fallbackTimer)
})
</script>

<style scoped>
.reveal {
  height: 100%;
  opacity: 0;
  filter: blur(4px);
  transition:
    opacity 560ms cubic-bezier(0.22, 1, 0.36, 1),
    transform 560ms cubic-bezier(0.22, 1, 0.36, 1),
    filter 560ms cubic-bezier(0.22, 1, 0.36, 1);
  transition-delay: var(--reveal-delay);
  will-change: opacity, transform;
}

.reveal--up {
  transform: translate3d(0, 22px, 0) scale(0.99);
}

.reveal--left {
  transform: translate3d(-22px, 0, 0) scale(0.99);
}

.reveal--right {
  transform: translate3d(22px, 0, 0) scale(0.99);
}

.reveal--zoom {
  transform: translate3d(0, 16px, 0) scale(0.975);
}

.reveal--visible {
  opacity: 1;
  transform: translate3d(0, 0, 0) scale(1);
  filter: blur(0);
  will-change: auto;
}

/* Telefon/tablet: nikad ne skrivaj i nikad ne bluruj sadržaj */
@media (max-width: 980px) {
  .reveal,
  .reveal--up,
  .reveal--left,
  .reveal--right,
  .reveal--zoom,
  .reveal--visible {
    height: 100%;
    opacity: 1 !important;
    transform: none !important;
    filter: none !important;
    transition: none !important;
    transition-delay: 0ms !important;
    will-change: auto !important;
  }
}

@media (prefers-reduced-motion: reduce) {
  .reveal,
  .reveal--up,
  .reveal--left,
  .reveal--right,
  .reveal--zoom,
  .reveal--visible {
    height: 100%;
    opacity: 1 !important;
    transform: none !important;
    filter: none !important;
    transition: none !important;
    transition-delay: 0ms !important;
    will-change: auto !important;
  }
}
</style>
