<template>
  <transition name="intro-root">
    <div v-if="visible" class="premium-intro" aria-hidden="true">
      <div class="premium-intro__noise"></div>
      <div class="premium-intro__orb premium-intro__orb--one"></div>
      <div class="premium-intro__orb premium-intro__orb--two"></div>

      <div class="premium-intro__content">
        <div class="premium-intro__logo-wrap">
          <span class="premium-intro__logo-glow"></span>

          <img class="premium-intro__logo" src="/brand/ml-logo.png" alt="" width="84" height="84" />
        </div>

        <div class="premium-intro__copy">
          <span>ML Web Studio</span>
          <strong>{{ introTitle }}</strong>
        </div>

        <div class="premium-intro__loader">
          <span></span>
        </div>

        <p>{{ introText }}</p>
      </div>

      <div class="premium-intro__wipe"></div>
    </div>
  </transition>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const visible = ref(false)

const introTitle = computed(() => {
  return locale.value === 'en'
    ? 'Designing better first impressions.'
    : 'Dizajn koji ostavlja bolji prvi utisak.'
})

const introText = computed(() => {
  return locale.value === 'en'
    ? 'Building modern websites that lead visitors toward action.'
    : 'Pravimo moderne sajtove koji vode korisnika ka upitu.'
})

onMounted(() => {
  const hasSeenIntro = window.sessionStorage.getItem('ml-premium-intro-seen')

  if (hasSeenIntro === 'true') return

  visible.value = true
  window.sessionStorage.setItem('ml-premium-intro-seen', 'true')

  window.setTimeout(() => {
    visible.value = false
  }, 1650)
})
</script>

<style scoped lang="scss">
.premium-intro {
  position: fixed;
  inset: 0;
  z-index: 99999;
  display: grid;
  place-items: center;
  overflow: hidden;
  color: white;
  background:
    radial-gradient(circle at 20% 10%, rgba(37, 99, 235, 0.22), transparent 28rem),
    radial-gradient(circle at 82% 18%, rgba(219, 39, 119, 0.2), transparent 30rem),
    radial-gradient(circle at 50% 90%, rgba(124, 58, 237, 0.14), transparent 30rem), #020617;
}

.premium-intro__noise {
  position: absolute;
  inset: 0;
  opacity: 0.12;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
  background-size: 58px 58px;
  mask-image: radial-gradient(circle at center, black 0%, transparent 72%);
  animation: introGrid 9s linear infinite;
}

.premium-intro__orb {
  position: absolute;
  border-radius: 999px;
  pointer-events: none;
  filter: blur(28px);
  mix-blend-mode: screen;
}

.premium-intro__orb--one {
  width: 420px;
  height: 420px;
  left: -140px;
  top: 22%;
  background: rgba(37, 99, 235, 0.36);
  animation: introOrbOne 3.2s ease-in-out infinite;
}

.premium-intro__orb--two {
  width: 460px;
  height: 460px;
  right: -160px;
  top: 12%;
  background: rgba(219, 39, 119, 0.28);
  animation: introOrbTwo 3.4s ease-in-out infinite;
}

.premium-intro__content {
  position: relative;
  z-index: 3;
  width: min(560px, calc(100% - 40px));
  display: grid;
  justify-items: center;
  text-align: center;
  padding: 34px;
  border-radius: 40px;
  background:
    radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.12), transparent 22rem),
    linear-gradient(135deg, rgba(255, 255, 255, 0.11), rgba(255, 255, 255, 0.035));
  border: 1px solid rgba(255, 255, 255, 0.14);
  box-shadow:
    0 34px 110px rgba(0, 0, 0, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.12);
  animation: introCardIn 900ms cubic-bezier(0.22, 1, 0.36, 1) both;
}

.premium-intro__logo-wrap {
  position: relative;
  width: 96px;
  height: 96px;
  display: grid;
  place-items: center;
}

.premium-intro__logo-glow {
  position: absolute;
  inset: -16px;
  border-radius: 28px;
  background:
    radial-gradient(circle at 20% 0%, rgba(255, 255, 255, 0.28), transparent 48%),
    linear-gradient(135deg, rgba(37, 99, 235, 0.5), rgba(219, 39, 119, 0.32));
  filter: blur(16px);
  opacity: 0.8;
  animation: logoGlow 1.4s ease-in-out infinite;
}

.premium-intro__logo {
  position: relative;
  z-index: 2;
  width: 84px;
  height: 84px;
  border-radius: 28px;
  object-fit: cover;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow:
    0 24px 58px rgba(37, 99, 235, 0.34),
    inset 0 1px 0 rgba(255, 255, 255, 0.14);
  animation: logoPop 820ms cubic-bezier(0.22, 1, 0.36, 1) both;
}

.premium-intro__copy {
  margin-top: 22px;

  span {
    display: block;
    color: #93c5fd;
    font-size: 12px;
    font-weight: 950;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    animation: introFadeUp 720ms cubic-bezier(0.22, 1, 0.36, 1) 180ms both;
  }

  strong {
    display: block;
    max-width: 470px;
    margin-top: 10px;
    color: white;
    font-size: clamp(31px, 5vw, 52px);
    line-height: 0.94;
    letter-spacing: -0.075em;
    font-weight: 950;
    animation: introFadeUp 760ms cubic-bezier(0.22, 1, 0.36, 1) 280ms both;
  }
}

.premium-intro__loader {
  width: min(320px, 100%);
  height: 7px;
  overflow: hidden;
  margin-top: 28px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.09);
  animation: introFadeUp 760ms cubic-bezier(0.22, 1, 0.36, 1) 380ms both;

  span {
    display: block;
    height: 100%;
    border-radius: inherit;
    background: linear-gradient(90deg, #2563eb, #7c3aed, #db2777);
    box-shadow:
      0 0 24px rgba(96, 165, 250, 0.4),
      0 0 34px rgba(219, 39, 119, 0.2);
    transform-origin: left;
    animation: loadingLine 1.1s cubic-bezier(0.22, 1, 0.36, 1) 260ms both;
  }
}

.premium-intro p {
  max-width: 430px;
  margin: 18px 0 0;
  color: rgba(255, 255, 255, 0.62);
  line-height: 1.65;
  animation: introFadeUp 760ms cubic-bezier(0.22, 1, 0.36, 1) 460ms both;
}

.premium-intro__wipe {
  position: absolute;
  inset: 0;
  z-index: 5;
  transform: translateX(-110%) skewX(-12deg);
  background:
    linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent),
    linear-gradient(
      135deg,
      rgba(37, 99, 235, 0.75),
      rgba(124, 58, 237, 0.7),
      rgba(219, 39, 119, 0.65)
    );
  animation: introWipe 1.45s cubic-bezier(0.22, 1, 0.36, 1) 320ms both;
}

.intro-root-leave-active {
  transition:
    opacity 360ms ease,
    transform 360ms ease,
    filter 360ms ease;
}

.intro-root-leave-to {
  opacity: 0;
  transform: scale(1.012);
  filter: blur(8px);
}

@keyframes introCardIn {
  from {
    opacity: 0;
    transform: translate3d(0, 22px, 0) scale(0.96);
    filter: blur(12px);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0) scale(1);
    filter: blur(0);
  }
}

@keyframes logoPop {
  from {
    opacity: 0;
    transform: scale(0.78) rotate(-4deg);
  }

  to {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}

@keyframes logoGlow {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.64;
  }

  50% {
    transform: scale(1.12);
    opacity: 1;
  }
}

@keyframes introFadeUp {
  from {
    opacity: 0;
    transform: translate3d(0, 14px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

@keyframes loadingLine {
  from {
    transform: scaleX(0);
  }

  to {
    transform: scaleX(1);
  }
}

@keyframes introWipe {
  0%,
  42% {
    transform: translateX(-110%) skewX(-12deg);
    opacity: 0;
  }

  54% {
    opacity: 0.95;
  }

  100% {
    transform: translateX(115%) skewX(-12deg);
    opacity: 0;
  }
}

@keyframes introOrbOne {
  0%,
  100% {
    transform: translate3d(0, 0, 0) scale(1);
  }

  50% {
    transform: translate3d(44px, -22px, 0) scale(1.1);
  }
}

@keyframes introOrbTwo {
  0%,
  100% {
    transform: translate3d(0, 0, 0) scale(1);
  }

  50% {
    transform: translate3d(-42px, 28px, 0) scale(1.12);
  }
}

@keyframes introGrid {
  from {
    background-position: 0 0;
  }

  to {
    background-position: 58px 58px;
  }
}

@media (max-width: 768px) {
  .premium-intro__content {
    width: min(100% - 28px, 520px);
    padding: 28px 22px;
    border-radius: 32px;
  }

  .premium-intro__logo-wrap {
    width: 82px;
    height: 82px;
  }

  .premium-intro__logo {
    width: 74px;
    height: 74px;
    border-radius: 24px;
  }

  .premium-intro__copy strong {
    font-size: clamp(30px, 11vw, 44px);
    line-height: 0.96;
  }

  .premium-intro p {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .premium-intro__orb--one {
    width: 300px;
    height: 300px;
    left: -150px;
  }

  .premium-intro__orb--two {
    width: 320px;
    height: 320px;
    right: -170px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .premium-intro,
  .premium-intro *,
  .intro-root-leave-active {
    animation: none !important;
    transition: none !important;
  }
}
</style>
