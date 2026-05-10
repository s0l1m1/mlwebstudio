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
          '--i': particle.id,
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
import { onBeforeUnmount, onMounted, ref } from 'vue'

const auroraRef = ref(null)

const particles = Array.from({ length: 24 }, (_, index) => {
  const id = index + 1

  return {
    id,
    x: (id * 17) % 96,
    y: 8 + ((id * 23) % 66),
    size: 3 + (id % 4) * 1.6,
    duration: 4.8 + id * 0.26,
    delay: id * -0.19,
  }
})

function handlePointerMove(event) {
  if (!auroraRef.value) return

  auroraRef.value.style.setProperty('--mouse-x', `${event.clientX}px`)
  auroraRef.value.style.setProperty('--mouse-y', `${event.clientY}px`)
}

onMounted(() => {
  window.addEventListener('pointermove', handlePointerMove, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('pointermove', handlePointerMove)
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
  width: 680px;
  height: 680px;
  transform: translate3d(calc(var(--mouse-x) - 340px), calc(var(--mouse-y) - 340px), 0);
  border-radius: 999px;
  background:
    radial-gradient(circle, rgba(96, 165, 250, 0.26), transparent 56%),
    radial-gradient(circle, rgba(219, 39, 119, 0.14), transparent 68%);
  filter: blur(10px);
  opacity: 1;
  transition: transform 120ms linear;
}

.hero-aurora__orb {
  position: absolute;
  border-radius: 999px;
  filter: blur(22px);
  mix-blend-mode: screen;
  opacity: 0.82;
  will-change: transform;
}

.hero-aurora__orb--one {
  width: 500px;
  height: 500px;
  left: -130px;
  top: 80px;
  background:
    radial-gradient(circle at 35% 35%, rgba(96, 165, 250, 0.78), transparent 62%),
    radial-gradient(circle at 70% 55%, rgba(124, 58, 237, 0.46), transparent 60%);
  animation: auroraOrbOne 10s ease-in-out infinite;
}

.hero-aurora__orb--two {
  width: 580px;
  height: 580px;
  right: -170px;
  top: 110px;
  background:
    radial-gradient(circle at 35% 35%, rgba(219, 39, 119, 0.64), transparent 62%),
    radial-gradient(circle at 70% 55%, rgba(37, 99, 235, 0.42), transparent 60%);
  animation: auroraOrbTwo 12s ease-in-out infinite;
}

.hero-aurora__orb--three {
  width: 420px;
  height: 420px;
  left: 42%;
  top: 30px;
  background:
    radial-gradient(circle at 35% 35%, rgba(34, 211, 238, 0.4), transparent 62%),
    radial-gradient(circle at 70% 55%, rgba(168, 85, 247, 0.42), transparent 60%);
  animation: auroraOrbThree 11s ease-in-out infinite;
}

.hero-aurora__orb--four {
  width: 340px;
  height: 340px;
  left: 28%;
  top: 260px;
  background:
    radial-gradient(circle at 35% 35%, rgba(59, 130, 246, 0.28), transparent 62%),
    radial-gradient(circle at 70% 55%, rgba(244, 114, 182, 0.24), transparent 60%);
  opacity: 0.56;
  animation: auroraOrbFour 15s ease-in-out infinite;
}

.hero-aurora__grid {
  position: absolute;
  inset: 0;
  opacity: 0.2;
  background-image:
    linear-gradient(rgba(147, 197, 253, 0.28) 1px, transparent 1px),
    linear-gradient(90deg, rgba(147, 197, 253, 0.28) 1px, transparent 1px);
  background-size: 72px 72px;
  transform: perspective(700px) rotateX(58deg) translateY(-160px) scale(1.35);
  transform-origin: top;
  animation: gridDrift 15s linear infinite;
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
  background: rgba(219, 234, 254, 0.9);
  box-shadow:
    0 0 18px rgba(147, 197, 253, 0.85),
    0 0 38px rgba(124, 58, 237, 0.38),
    0 0 58px rgba(219, 39, 119, 0.18);
  opacity: 0.52;
  animation: particleFloat var(--duration) ease-in-out infinite;
  animation-delay: var(--delay);
  will-change: transform, opacity;
}

.hero-aurora__scan {
  position: absolute;
  left: -24%;
  top: 0;
  width: 28%;
  height: 100%;
  transform: skewX(-16deg);
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.11),
    rgba(147, 197, 253, 0.09),
    transparent
  );
  opacity: 0;
  animation: auroraScan 5.8s ease-in-out infinite;
}

.hero-aurora__vignette {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at center, transparent 0%, transparent 52%, rgba(2, 6, 23, 0.42) 100%),
    linear-gradient(to bottom, transparent 0%, rgba(2, 6, 23, 0.34) 100%);
}

@keyframes auroraOrbOne {
  0%,
  100% {
    transform: translate3d(0, 0, 0) scale(1);
  }

  50% {
    transform: translate3d(74px, -34px, 0) scale(1.14);
  }
}

@keyframes auroraOrbTwo {
  0%,
  100% {
    transform: translate3d(0, 0, 0) scale(1);
  }

  50% {
    transform: translate3d(-82px, 40px, 0) scale(1.12);
  }
}

@keyframes auroraOrbThree {
  0%,
  100% {
    transform: translate3d(0, 0, 0) scale(1);
  }

  50% {
    transform: translate3d(34px, 58px, 0) scale(1.18);
  }
}

@keyframes auroraOrbFour {
  0%,
  100% {
    transform: translate3d(0, 0, 0) scale(1);
  }

  50% {
    transform: translate3d(-38px, -36px, 0) scale(1.16);
  }
}

@keyframes gridDrift {
  0% {
    background-position: 0 0;
  }

  100% {
    background-position: 72px 72px;
  }
}

@keyframes particleFloat {
  0%,
  100% {
    transform: translate3d(0, 0, 0) scale(1);
    opacity: 0.28;
  }

  50% {
    transform: translate3d(16px, -32px, 0) scale(1.45);
    opacity: 0.74;
  }
}

@keyframes auroraScan {
  0%,
  50%,
  100% {
    left: -28%;
    opacity: 0;
  }

  62% {
    opacity: 0.78;
  }

  82% {
    left: 122%;
    opacity: 0;
  }
}

@media (max-width: 768px) {
  .hero-aurora {
    height: 760px;
    top: -90px;
    opacity: 0.9;
  }

  .hero-aurora__spotlight {
    display: none;
  }

  .hero-aurora__orb {
    filter: blur(26px);
    opacity: 0.72;
  }

  .hero-aurora__orb--one {
    width: 390px;
    height: 390px;
    left: -160px;
    top: 110px;
  }

  .hero-aurora__orb--two {
    width: 450px;
    height: 450px;
    right: -190px;
    top: 120px;
  }

  .hero-aurora__orb--three {
    width: 320px;
    height: 320px;
    left: 36%;
    top: 60px;
  }

  .hero-aurora__orb--four {
    display: none;
  }

  .hero-aurora__grid {
    opacity: 0.12;
    background-size: 64px 64px;
  }

  .hero-aurora__particles span {
    opacity: 0.42;
  }

  .hero-aurora__scan {
    opacity: 0;
    animation-duration: 7s;
  }
}

@media (max-width: 480px) {
  .hero-aurora {
    height: 700px;
    top: -70px;
    opacity: 0.82;
  }

  .hero-aurora__grid {
    opacity: 0.08;
  }

  .hero-aurora__particles span:nth-child(n + 15) {
    display: none;
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
  }
}
</style>
