<template>
  <div ref="auroraRef" class="hero-aurora" aria-hidden="true">
    <div class="hero-aurora__spotlight"></div>

    <div class="hero-aurora__orb hero-aurora__orb--one"></div>
    <div class="hero-aurora__orb hero-aurora__orb--two"></div>
    <div class="hero-aurora__orb hero-aurora__orb--three"></div>
    <div class="hero-aurora__orb hero-aurora__orb--four"></div>

    <div class="hero-aurora__grid"></div>

    <div class="hero-aurora__particles">
      <span
        v-for="particle in particles"
        :key="particle.id"
        :style="{
          '--x': `${particle.x}%`,
          '--y': `${particle.y}%`,
          '--size': `${particle.size}px`,
          '--duration': `${particle.duration}s`,
          '--delay': `${particle.delay}s`,
        }"
      ></span>
    </div>

    <div class="hero-aurora__scan"></div>
    <div class="hero-aurora__vignette"></div>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const auroraRef = ref(null)

const particles = computed(() => {
  if (typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches) {
    return []
  }

  return Array.from({ length: 14 }, (_, index) => {
    const id = index + 1

    return {
      id,
      x: (id * 17) % 96,
      y: 8 + ((id * 23) % 66),
      size: 3 + (id % 3) * 1.4,
      duration: 5.4 + id * 0.28,
      delay: id * -0.19,
    }
  })
})

let rafId = 0

function handlePointerMove(event) {
  if (!auroraRef.value) return

  if (rafId) cancelAnimationFrame(rafId)

  rafId = requestAnimationFrame(() => {
    if (!auroraRef.value) return

    auroraRef.value.style.setProperty('--mouse-x', `${event.clientX}px`)
    auroraRef.value.style.setProperty('--mouse-y', `${event.clientY}px`)
  })
}

onMounted(() => {
  const isMobile = window.matchMedia('(max-width: 768px)').matches
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (!isMobile && !reducedMotion) {
    window.addEventListener('pointermove', handlePointerMove, { passive: true })
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('pointermove', handlePointerMove)

  if (rafId) {
    cancelAnimationFrame(rafId)
  }
})
</script>

<style scoped lang="scss">
.hero-aurora {
  --mouse-x: 50vw;
  --mouse-y: 32vh;

  position: absolute;
  inset: -140px 0 auto;
  height: 900px;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
  opacity: 1;
  mask-image: linear-gradient(to bottom, black 0%, black 78%, transparent 100%);
}

.hero-aurora__spotlight {
  position: fixed;
  left: 0;
  top: 0;
  width: 560px;
  height: 560px;
  transform: translate3d(calc(var(--mouse-x) - 280px), calc(var(--mouse-y) - 280px), 0);
  border-radius: 999px;
  background:
    radial-gradient(circle, rgba(96, 165, 250, 0.18), transparent 58%),
    radial-gradient(circle, rgba(219, 39, 119, 0.09), transparent 70%);
  filter: blur(8px);
  opacity: 0.85;
  transition: transform 140ms linear;
}

.hero-aurora__orb {
  position: absolute;
  border-radius: 999px;
  filter: blur(18px);
  mix-blend-mode: screen;
  opacity: 0.68;
  will-change: transform;
}

.hero-aurora__orb--one {
  width: 460px;
  height: 460px;
  left: -130px;
  top: 90px;
  background:
    radial-gradient(circle at 35% 35%, rgba(96, 165, 250, 0.62), transparent 62%),
    radial-gradient(circle at 70% 55%, rgba(124, 58, 237, 0.34), transparent 60%);
  animation: auroraOrbOne 13s ease-in-out infinite;
}

.hero-aurora__orb--two {
  width: 520px;
  height: 520px;
  right: -170px;
  top: 120px;
  background:
    radial-gradient(circle at 35% 35%, rgba(219, 39, 119, 0.46), transparent 62%),
    radial-gradient(circle at 70% 55%, rgba(37, 99, 235, 0.3), transparent 60%);
  animation: auroraOrbTwo 15s ease-in-out infinite;
}

.hero-aurora__orb--three {
  width: 360px;
  height: 360px;
  left: 43%;
  top: 40px;
  background:
    radial-gradient(circle at 35% 35%, rgba(34, 211, 238, 0.26), transparent 62%),
    radial-gradient(circle at 70% 55%, rgba(168, 85, 247, 0.28), transparent 60%);
  animation: auroraOrbThree 14s ease-in-out infinite;
}

.hero-aurora__orb--four {
  width: 300px;
  height: 300px;
  left: 28%;
  top: 270px;
  background:
    radial-gradient(circle at 35% 35%, rgba(59, 130, 246, 0.22), transparent 62%),
    radial-gradient(circle at 70% 55%, rgba(244, 114, 182, 0.18), transparent 60%);
  opacity: 0.42;
  animation: auroraOrbFour 18s ease-in-out infinite;
}

.hero-aurora__grid {
  position: absolute;
  inset: 0;
  opacity: 0.13;
  background-image:
    linear-gradient(rgba(147, 197, 253, 0.24) 1px, transparent 1px),
    linear-gradient(90deg, rgba(147, 197, 253, 0.24) 1px, transparent 1px);
  background-size: 84px 84px;
  transform: perspective(700px) rotateX(58deg) translateY(-160px) scale(1.35);
  transform-origin: top;
  animation: gridDrift 22s linear infinite;
}

.hero-aurora__particles {
  position: absolute;
  inset: 0;
}

.hero-aurora__particles span {
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: var(--size);
  height: var(--size);
  border-radius: 999px;
  background: rgba(219, 234, 254, 0.72);
  box-shadow:
    0 0 14px rgba(147, 197, 253, 0.58),
    0 0 28px rgba(124, 58, 237, 0.26);
  opacity: 0.36;
  animation: particleFloat var(--duration) ease-in-out infinite;
  animation-delay: var(--delay);
  will-change: transform, opacity;
}

.hero-aurora__scan {
  position: absolute;
  left: -24%;
  top: 0;
  width: 24%;
  height: 100%;
  transform: skewX(-16deg);
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.075),
    rgba(147, 197, 253, 0.055),
    transparent
  );
  opacity: 0;
  animation: auroraScan 9s ease-in-out infinite;
}

.hero-aurora__vignette {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at center, transparent 0%, transparent 54%, rgba(2, 6, 23, 0.36) 100%),
    linear-gradient(to bottom, transparent 0%, rgba(2, 6, 23, 0.32) 100%);
}

@keyframes auroraOrbOne {
  0%,
  100% {
    transform: translate3d(0, 0, 0) scale(1);
  }

  50% {
    transform: translate3d(56px, -26px, 0) scale(1.08);
  }
}

@keyframes auroraOrbTwo {
  0%,
  100% {
    transform: translate3d(0, 0, 0) scale(1);
  }

  50% {
    transform: translate3d(-62px, 32px, 0) scale(1.08);
  }
}

@keyframes auroraOrbThree {
  0%,
  100% {
    transform: translate3d(0, 0, 0) scale(1);
  }

  50% {
    transform: translate3d(24px, 44px, 0) scale(1.1);
  }
}

@keyframes auroraOrbFour {
  0%,
  100% {
    transform: translate3d(0, 0, 0) scale(1);
  }

  50% {
    transform: translate3d(-28px, -24px, 0) scale(1.08);
  }
}

@keyframes gridDrift {
  0% {
    background-position: 0 0;
  }

  100% {
    background-position: 84px 84px;
  }
}

@keyframes particleFloat {
  0%,
  100% {
    transform: translate3d(0, 0, 0) scale(1);
    opacity: 0.24;
  }

  50% {
    transform: translate3d(12px, -24px, 0) scale(1.25);
    opacity: 0.58;
  }
}

@keyframes auroraScan {
  0%,
  64%,
  100% {
    left: -28%;
    opacity: 0;
  }

  74% {
    opacity: 0.42;
  }

  88% {
    left: 122%;
    opacity: 0;
  }
}

/* Mobile: ostavi premium pozadinu, ali bez skupih animacija, particles i grid-a */
@media (max-width: 768px) {
  .hero-aurora {
    height: 680px;
    top: -80px;
    opacity: 0.72;
    mask-image: linear-gradient(to bottom, black 0%, black 72%, transparent 100%);
  }

  .hero-aurora__spotlight,
  .hero-aurora__grid,
  .hero-aurora__particles,
  .hero-aurora__scan {
    display: none;
  }

  .hero-aurora__orb {
    filter: blur(16px);
    mix-blend-mode: normal;
    opacity: 0.52;
    animation: none !important;
    will-change: auto;
  }

  .hero-aurora__orb--one {
    width: 330px;
    height: 330px;
    left: -150px;
    top: 120px;
  }

  .hero-aurora__orb--two {
    width: 370px;
    height: 370px;
    right: -170px;
    top: 130px;
  }

  .hero-aurora__orb--three {
    width: 260px;
    height: 260px;
    left: 42%;
    top: 80px;
  }

  .hero-aurora__orb--four {
    display: none;
  }

  .hero-aurora__vignette {
    background:
      radial-gradient(circle at center, transparent 0%, transparent 52%, rgba(2, 6, 23, 0.4) 100%),
      linear-gradient(to bottom, transparent 0%, rgba(2, 6, 23, 0.42) 100%);
  }
}

@media (max-width: 480px) {
  .hero-aurora {
    height: 620px;
    top: -60px;
    opacity: 0.66;
  }

  .hero-aurora__orb--one {
    width: 300px;
    height: 300px;
  }

  .hero-aurora__orb--two {
    width: 330px;
    height: 330px;
  }

  .hero-aurora__orb--three {
    width: 230px;
    height: 230px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-aurora__spotlight,
  .hero-aurora__orb,
  .hero-aurora__grid,
  .hero-aurora__particles span,
  .hero-aurora__scan {
    animation: none !important;
    transition: none !important;
    will-change: auto !important;
  }
}
</style>
