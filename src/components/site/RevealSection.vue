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
import { onBeforeUnmount, onMounted, ref } from 'vue'

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

onMounted(() => {
  if (!target.value) return

  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        visible.value = true
        observer?.disconnect()
      }
    },
    {
      threshold: 0.14,
      rootMargin: '0px 0px -70px 0px',
    },
  )

  observer.observe(target.value)
})

onBeforeUnmount(() => {
  observer?.disconnect()
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
