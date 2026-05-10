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
let resizeTimer

function show() {
  visible.value = true
  observer?.disconnect()
}

function isElementAlreadyInViewport(element) {
  const rect = element.getBoundingClientRect()
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight
  const viewportWidth = window.innerWidth || document.documentElement.clientWidth

  return (
    rect.top < viewportHeight * 0.96 &&
    rect.bottom > 0 &&
    rect.left < viewportWidth &&
    rect.right > 0
  )
}

function checkImmediately() {
  if (!target.value || visible.value) return

  if (isElementAlreadyInViewport(target.value)) {
    show()
  }
}

onMounted(async () => {
  await nextTick()

  if (!target.value) return

  checkImmediately()

  if (visible.value) return

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

  fallbackTimer = window.setTimeout(() => {
    checkImmediately()

    if (!visible.value) {
      show()
    }
  }, 450)

  window.addEventListener(
    'resize',
    () => {
      window.clearTimeout(resizeTimer)

      resizeTimer = window.setTimeout(() => {
        checkImmediately()
      }, 120)
    },
    { passive: true },
  )
})

onBeforeUnmount(() => {
  observer?.disconnect()
  window.clearTimeout(fallbackTimer)
  window.clearTimeout(resizeTimer)
})
</script>

<style scoped>
.reveal {
  height: 100%;
  opacity: 0;
  filter: blur(12px);
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

@media (max-width: 700px) {
  .reveal {
    filter: blur(8px);
    transition-duration: 560ms;
  }

  .reveal--up {
    transform: translate3d(0, 22px, 0) scale(0.99);
  }

  .reveal--left {
    transform: translate3d(-18px, 0, 0) scale(0.99);
  }

  .reveal--right {
    transform: translate3d(18px, 0, 0) scale(0.99);
  }

  .reveal--zoom {
    transform: translate3d(0, 16px, 0) scale(0.975);
  }
}

@media (prefers-reduced-motion: reduce) {
  .reveal {
    height: 100%;
    opacity: 1;
    transform: none;
    filter: none;
    transition: none;
  }
}
</style>
