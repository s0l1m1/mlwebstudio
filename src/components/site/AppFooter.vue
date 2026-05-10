<template>
  <footer class="site-footer">
    <div class="footer-orb footer-orb--one"></div>
    <div class="footer-orb footer-orb--two"></div>

    <div class="site-footer__inner">
      <div class="footer-main">
        <div class="footer-brand-block">
          <router-link to="/" class="footer-brand">
            <span class="footer-brand__logo">
              <img src="/brand/ml-logo.png" :alt="t('aria.logoAlt')" width="54" height="54" />
            </span>

            <span>
              <strong>ML Web Studio</strong>
              <small>{{ t('nav.tagline') }}</small>
            </span>
          </router-link>

          <p class="footer-text">
            {{ t('footer.text') }}
          </p>

          <div class="footer-chips">
            <span v-for="item in footerChips" :key="item">
              <q-icon name="check_circle" />
              {{ item }}
            </span>
          </div>
        </div>

        <div class="footer-links-grid">
          <div class="footer-column">
            <strong>{{ t('footer.navigation') }}</strong>

            <router-link v-for="link in navLinks" :key="link.to" :to="link.to">
              {{ link.label }}
            </router-link>
          </div>

          <div class="footer-column">
            <strong>{{ t('footer.services') }}</strong>

            <router-link to="/usluge">
              {{ t('footer.serviceWebsite') }}
            </router-link>

            <router-link to="/usluge">
              {{ t('footer.serviceLanding') }}
            </router-link>

            <router-link to="/usluge">
              {{ t('footer.serviceRedesign') }}
            </router-link>

            <router-link to="/cene">
              {{ t('footer.pricing') }}
            </router-link>
          </div>

          <div class="footer-cta-card">
            <span>{{ t('footer.ctaLabel') }}</span>
            <h2>{{ t('footer.ctaTitle') }}</h2>
            <p>{{ t('footer.ctaText') }}</p>

            <router-link to="/kontakt" class="footer-cta">
              <span>{{ t('nav.sendInquiry') }}</span>
              <q-icon name="arrow_forward" />
            </router-link>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>© {{ currentYear }} ML Web Studio. {{ t('footer.rights') }}</p>

        <div>
          <router-link to="/kontakt">{{ t('nav.contact') }}</router-link>
          <router-link to="/primeri">{{ t('nav.examples') }}</router-link>
          <router-link to="/cene">{{ t('nav.pricing') }}</router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()

const currentYear = new Date().getFullYear()

const navLinks = computed(() => [
  { to: '/', label: t('nav.home') },
  { to: '/usluge', label: t('nav.services') },
  { to: '/primeri', label: t('nav.examples') },
  { to: '/cene', label: t('nav.pricing') },
  { to: '/kontakt', label: t('nav.contact') },
])

const footerChips = computed(() => {
  const items = tm('footer.chips')
  if (Array.isArray(items) && items.length) return items

  return ['Moderan dizajn', 'Mobilni prikaz', 'Jasan kontakt']
})
</script>

<style scoped lang="scss">
.site-footer {
  position: relative;
  z-index: 2;
  overflow: hidden;
  padding: 18px 0 42px;
}

.footer-orb {
  position: absolute;
  z-index: 0;
  pointer-events: none;
  border-radius: 999px;
  filter: blur(36px);
  opacity: 0.42;
}

.footer-orb--one {
  width: 320px;
  height: 320px;
  left: -120px;
  bottom: 10px;
  background: rgba(37, 99, 235, 0.28);
  animation: footerOrbOne 9s ease-in-out infinite;
}

.footer-orb--two {
  width: 360px;
  height: 360px;
  right: -150px;
  bottom: -80px;
  background: rgba(219, 39, 119, 0.2);
  animation: footerOrbTwo 10s ease-in-out infinite;
}

.site-footer__inner {
  position: relative;
  z-index: 2;
  width: min(1360px, calc(100% - 48px));
  margin: 0 auto;
}

.footer-main {
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: 0.82fr 1.18fr;
  gap: 34px;
  padding: clamp(24px, 3.5vw, 38px);
  border-radius: 40px;
  isolation: isolate;
  background:
    radial-gradient(circle at 12% 0%, rgba(59, 130, 246, 0.2), transparent 28rem),
    radial-gradient(circle at 92% 20%, rgba(219, 39, 119, 0.15), transparent 26rem),
    linear-gradient(135deg, rgba(255, 255, 255, 0.115), rgba(255, 255, 255, 0.04));
  border: 1px solid rgba(255, 255, 255, 0.13);
  box-shadow:
    0 28px 90px rgba(0, 0, 0, 0.28),
    inset 0 1px 0 rgba(255, 255, 255, 0.11);

  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    z-index: -2;
    border-radius: inherit;
    background: linear-gradient(
      135deg,
      rgba(96, 165, 250, 0.34),
      transparent 34%,
      rgba(219, 39, 119, 0.24)
    );
    opacity: 0.22;
  }
}

.footer-brand-block {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.footer-brand {
  display: inline-flex;
  align-items: center;
  gap: 13px;
  color: white;
  text-decoration: none;
}

.footer-brand__logo {
  position: relative;
  width: 54px;
  height: 54px;
  flex: 0 0 auto;
  overflow: hidden;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: rgba(255, 255, 255, 0.08);
  box-shadow:
    0 18px 44px rgba(37, 99, 235, 0.28),
    inset 0 1px 0 rgba(255, 255, 255, 0.12);
  transition:
    transform 220ms ease,
    box-shadow 220ms ease;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    transform: translateX(-130%);
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: transform 680ms cubic-bezier(0.22, 1, 0.36, 1);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.footer-brand:hover .footer-brand__logo {
  transform: translateY(-3px) scale(1.035);
  box-shadow:
    0 22px 54px rgba(37, 99, 235, 0.38),
    0 0 32px rgba(124, 58, 237, 0.16);
}

.footer-brand:hover .footer-brand__logo::after {
  transform: translateX(130%);
}

.footer-brand strong {
  display: block;
  color: white;
  font-size: 18px;
  line-height: 1;
  font-weight: 950;
  letter-spacing: -0.045em;
}

.footer-brand small {
  display: block;
  max-width: 260px;
  margin-top: 5px;
  color: rgba(255, 255, 255, 0.58);
  font-size: 13px;
  line-height: 1.35;
  font-weight: 760;
}

.footer-text {
  max-width: 520px;
  margin: 22px 0 0;
  color: rgba(255, 255, 255, 0.66);
  line-height: 1.75;
}

.footer-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  margin-top: 22px;

  span {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    padding: 10px 12px;
    border-radius: 999px;
    color: rgba(255, 255, 255, 0.78);
    background: rgba(255, 255, 255, 0.075);
    border: 1px solid rgba(255, 255, 255, 0.105);
    font-size: 13px;
    font-weight: 850;
  }

  .q-icon {
    color: #93c5fd;
    font-size: 18px;
  }
}

.footer-links-grid {
  display: grid;
  grid-template-columns: 0.72fr 0.82fr 1.2fr;
  gap: 16px;
  align-items: stretch;
}

.footer-column,
.footer-cta-card {
  min-height: 250px;
  padding: 20px;
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.065);
  border: 1px solid rgba(255, 255, 255, 0.095);
}

.footer-column {
  display: flex;
  flex-direction: column;
  gap: 11px;

  strong {
    margin-bottom: 6px;
    color: white;
    font-size: 14px;
    font-weight: 950;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  a {
    width: fit-content;
    position: relative;
    display: inline-flex;
    color: rgba(255, 255, 255, 0.66);
    text-decoration: none;
    font-size: 14px;
    font-weight: 820;
    transition:
      color 200ms ease,
      transform 200ms ease;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -4px;
      width: 100%;
      height: 2px;
      transform: scaleX(0);
      transform-origin: left;
      border-radius: 999px;
      background: linear-gradient(90deg, #60a5fa, #c084fc, #f472b6);
      transition: transform 220ms ease;
    }

    &:hover {
      color: white;
      transform: translateX(3px);
    }

    &:hover::after {
      transform: scaleX(1);
    }
  }
}

.footer-cta-card {
  position: relative;
  overflow: hidden;
  isolation: isolate;
  background:
    radial-gradient(circle at 18% 0%, rgba(37, 99, 235, 0.22), transparent 18rem),
    linear-gradient(135deg, rgba(37, 99, 235, 0.16), rgba(124, 58, 237, 0.1));
  border-color: rgba(147, 197, 253, 0.18);

  &::after {
    content: '';
    position: absolute;
    right: -70px;
    top: -90px;
    z-index: -1;
    width: 210px;
    height: 210px;
    border-radius: 999px;
    background: rgba(219, 39, 119, 0.2);
    filter: blur(30px);
  }

  > span {
    display: inline-flex;
    color: #93c5fd;
    font-size: 12px;
    font-weight: 950;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  h2 {
    margin: 12px 0 0;
    color: white;
    font-size: clamp(26px, 2.6vw, 38px);
    line-height: 1;
    letter-spacing: -0.065em;
    font-weight: 950;
  }

  p {
    margin: 14px 0 0;
    color: rgba(255, 255, 255, 0.64);
    line-height: 1.65;
  }
}

.footer-cta {
  position: relative;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  min-height: 46px;
  margin-top: 18px;
  padding: 0 20px;
  border-radius: 999px;
  color: white;
  text-decoration: none;
  font-weight: 950;
  background:
    radial-gradient(circle at 18% -20%, rgba(255, 255, 255, 0.34), transparent 55%),
    linear-gradient(135deg, #2563eb, #7c3aed 58%, #db2777);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow:
    0 20px 44px rgba(37, 99, 235, 0.32),
    inset 0 1px 0 rgba(255, 255, 255, 0.22);
  transition:
    transform 220ms ease,
    box-shadow 220ms ease,
    filter 220ms ease;

  span,
  .q-icon {
    position: relative;
    z-index: 2;
  }

  .q-icon {
    font-size: 18px;
    transition: transform 220ms ease;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    transform: translateX(-120%);
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.35), transparent);
    transition: transform 650ms cubic-bezier(0.22, 1, 0.36, 1);
  }

  &:hover {
    transform: translateY(-3px);
    filter: saturate(1.08);
    box-shadow:
      0 26px 58px rgba(37, 99, 235, 0.42),
      0 0 34px rgba(219, 39, 119, 0.16);
  }

  &:hover .q-icon {
    transform: translateX(3px);
  }

  &:hover::after {
    transform: translateX(120%);
  }
}

.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 20px 4px 0;

  p {
    margin: 0;
    color: rgba(255, 255, 255, 0.48);
    font-size: 13px;
    line-height: 1.5;
  }

  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: 14px;
  }

  a {
    color: rgba(255, 255, 255, 0.5);
    text-decoration: none;
    font-size: 13px;
    font-weight: 800;
    transition: color 180ms ease;

    &:hover {
      color: white;
    }
  }
}

@keyframes footerOrbOne {
  0%,
  100% {
    transform: translate3d(0, 0, 0) scale(1);
  }

  50% {
    transform: translate3d(28px, -14px, 0) scale(1.08);
  }
}

@keyframes footerOrbTwo {
  0%,
  100% {
    transform: translate3d(0, 0, 0) scale(1);
  }

  50% {
    transform: translate3d(-24px, -18px, 0) scale(1.08);
  }
}

@media (max-width: 1100px) {
  .footer-main,
  .footer-links-grid {
    grid-template-columns: 1fr;
  }

  .footer-column,
  .footer-cta-card {
    min-height: auto;
  }
}

@media (max-width: 720px) {
  .site-footer__inner {
    width: min(100% - 28px, 1360px);
  }

  .footer-main {
    border-radius: 32px;
    padding: 22px;
  }

  .footer-bottom {
    align-items: flex-start;
    flex-direction: column;

    div {
      justify-content: flex-start;
    }
  }

  .footer-cta {
    width: 100%;
  }
}

@media (max-width: 460px) {
  .footer-brand {
    align-items: flex-start;
  }

  .footer-brand small {
    max-width: 220px;
  }

  .footer-chips span {
    width: 100%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .footer-orb,
  .footer-brand__logo,
  .footer-column a,
  .footer-cta {
    animation: none !important;
    transition: none !important;
  }

  .footer-brand__logo::after,
  .footer-cta::after {
    display: none;
  }
}
</style>
