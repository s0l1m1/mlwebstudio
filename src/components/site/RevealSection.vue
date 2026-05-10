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

function isMobile() {
  return window.matchMedia('(max-width: 768px)').matches
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

  // Najbitnije: na telefonu odmah prikaži sadržaj.
  // Nema rizika da ostane blur/opacity state.
  if (isMobile()) {
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
      rootMargin: '160px 0px 160px 0px',
    },
  )

  observer.observe(target.value)

  // Fallback da nikada ne ostane sakriveno/zamućeno.
  fallbackTimer = window.setTimeout(() => {
    show()
  }, 900)
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
  filter: blur(10px);
  transition:
    opacity 720ms cubic-bezier(0.22, 1, 0.36, 1),
    transform 720ms cubic-bezier(0.22, 1, 0.36, 1),
    filter 720ms cubic-bezier(0.22, 1, 0.36, 1);
  transition-delay: var(--reveal-delay);
  will-change: opacity, transform, filter;
}

.reveal--up {
  transform: translate3d(0, 34px, 0) scale(0.985);
}

.reveal--left {
  transform: translate3d(-34px, 0, 0) scale(0.985);
}

.reveal--right {
  transform: translate3d(34px, 0, 0) scale(0.985);
}

.reveal--zoom {
  transform: translate3d(0, 22px, 0) scale(0.955);
}

.reveal--visible {
  opacity: 1;
  transform: translate3d(0, 0, 0) scale(1);
  filter: blur(0);
}

/* Telefon: nikad ne skrivaj i nikad ne bluruj sadržaj */
@media (max-width: 768px) {
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
    will-change: auto;
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
    will-change: auto;
  }
}
</style>
