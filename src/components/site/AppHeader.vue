<template>
  <q-header class="site-header bg-transparent shadow-none">
    <div class="site-header__bar" :class="{ 'site-header__bar--scrolled': scrolled }">
      <div class="site-header__glow"></div>

      <router-link to="/" class="brand" aria-label="ML Web Studio početna">
        <span class="brand__logo">
          <img src="/brand/ml-logo.png" :alt="t('aria.logoAlt')" width="52" height="52" />
        </span>

        <span class="brand__copy">
          <strong>ML Web Studio</strong>
          <small>{{ t('nav.tagline') }}</small>
        </span>
      </router-link>

      <nav class="desktop-nav" aria-label="Glavna navigacija">
        <router-link
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="desktop-nav__link"
          active-class="is-active"
          exact-active-class="is-active"
        >
          <span>{{ link.label }}</span>
        </router-link>
      </nav>

      <div class="header-actions">
        <q-btn-dropdown
          unelevated
          rounded
          no-caps
          class="lang-dropdown"
          dropdown-icon="expand_more"
          :aria-label="t('aria.languageSwitcher')"
        >
          <template #label>
            <span class="lang-label">
              <strong>{{ currentLanguage.short }}</strong>
              <span>{{ currentLanguage.label }}</span>
            </span>
          </template>

          <q-list class="lang-menu">
            <q-item
              v-for="language in languages"
              :key="language.code"
              clickable
              v-close-popup
              class="lang-menu__item"
              :class="{ 'lang-menu__item--active': locale === language.code }"
              @click="setLanguage(language.code)"
            >
              <q-item-section avatar>
                <span class="lang-short">{{ language.short }}</span>
              </q-item-section>

              <q-item-section>
                <q-item-label>{{ language.label }}</q-item-label>
              </q-item-section>

              <q-item-section v-if="locale === language.code" side>
                <q-icon name="check" />
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>

        <router-link to="/kontakt" class="header-cta desktop-cta">
          <span>{{ t('nav.sendInquiry') }}</span>
          <q-icon name="arrow_forward" />
        </router-link>

        <q-btn
          flat
          round
          dense
          class="mobile-trigger"
          :aria-label="drawerOpen ? 'Zatvori meni' : 'Otvori meni'"
          @click="drawerOpen = true"
        >
          <q-icon name="menu" size="md" />
        </q-btn>
      </div>
    </div>

    <transition name="mobile-menu">
      <div v-if="drawerOpen" class="mobile-menu" @click.self="drawerOpen = false">
        <div class="mobile-menu__panel">
          <div class="mobile-menu__ambient"></div>

          <div class="mobile-menu__head">
            <router-link to="/" class="mobile-brand" @click="drawerOpen = false">
              <img src="/brand/ml-logo.png" :alt="t('aria.logoAlt')" width="44" height="44" />
              <div>
                <strong>ML Web Studio</strong>
                <span>{{ t('nav.tagline') }}</span>
              </div>
            </router-link>

            <q-btn flat round dense color="white" class="drawer-close" @click="drawerOpen = false">
              <q-icon name="close" />
            </q-btn>
          </div>

          <nav class="mobile-menu__nav" aria-label="Mobilna navigacija">
            <router-link
              v-for="link in navLinks"
              :key="link.to"
              :to="link.to"
              class="mobile-menu__link"
              active-class="is-active"
              exact-active-class="is-active"
              @click="drawerOpen = false"
            >
              <span>{{ link.label }}</span>
              <q-icon name="arrow_forward" />
            </router-link>
          </nav>

          <div class="mobile-menu__bottom">
            <router-link class="mobile-menu__cta" to="/kontakt" @click="drawerOpen = false">
              <span>{{ t('nav.sendInquiry') }}</span>
              <q-icon name="arrow_forward" />
            </router-link>

            <div class="mobile-menu__lang">
              <button
                v-for="language in languages"
                :key="language.code"
                type="button"
                :class="{ 'is-active': locale === language.code }"
                @click="setLanguage(language.code)"
              >
                {{ language.short }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </q-header>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { STORAGE_KEY } from 'src/boot/i18n'

const { t, locale } = useI18n()

const drawerOpen = ref(false)
const scrolled = ref(false)

const languages = [
  { code: 'sr', label: 'Srpski', short: 'SR' },
  { code: 'en', label: 'English', short: 'EN' },
]

const currentLanguage = computed(() => {
  return languages.find((language) => language.code === locale.value) ?? languages[0]
})

const navLinks = computed(() => [
  { to: '/', label: t('nav.home') },
  { to: '/usluge', label: t('nav.services') },
  { to: '/primeri', label: t('nav.examples') },
  { to: '/products', label: t('nav.products') },
  { to: '/cene', label: t('nav.pricing') },
  { to: '/kontakt', label: t('nav.contact') },
])

function setLanguage(nextLocale) {
  if (nextLocale !== 'sr' && nextLocale !== 'en') return
  locale.value = nextLocale
}

function handleScroll() {
  scrolled.value = window.scrollY > 18
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = ''
})

watch(drawerOpen, (isOpen) => {
  document.body.style.overflow = isOpen ? 'hidden' : ''
})

watch(
  locale,
  (newLocale) => {
    window.localStorage.setItem(STORAGE_KEY, newLocale)
    document.documentElement.lang = newLocale
  },
  { immediate: true },
)
</script>

<style scoped lang="scss">
.site-header {
  z-index: 3000;
  pointer-events: none;
}

.site-header__bar {
  position: relative;
  width: min(1380px, calc(100% - 36px));
  min-height: 76px;
  margin: 12px auto 0;
  padding: 10px 12px;
  display: grid;
  grid-template-columns: minmax(0, 300px) 1fr auto;
  align-items: center;
  gap: 18px;
  overflow: hidden;
  border-radius: 999px;
  pointer-events: auto;
  isolation: isolate;
  background:
    radial-gradient(circle at 12% 0%, rgba(59, 130, 246, 0.14), transparent 18rem),
    radial-gradient(circle at 88% 0%, rgba(219, 39, 119, 0.1), transparent 20rem),
    rgba(5, 8, 22, 0.66);
  border: 1px solid rgba(255, 255, 255, 0.13);
  backdrop-filter: blur(22px);
  box-shadow:
    0 18px 46px rgba(0, 0, 0, 0.28),
    inset 0 1px 0 rgba(255, 255, 255, 0.09);
  transition:
    min-height 260ms ease,
    margin 260ms ease,
    background-color 260ms ease,
    border-color 260ms ease,
    box-shadow 260ms ease,
    transform 260ms ease;
}

.site-header__glow {
  position: absolute;
  right: 18%;
  top: -80px;
  z-index: -1;
  width: 260px;
  height: 160px;
  border-radius: 999px;
  background: rgba(59, 130, 246, 0.16);
  filter: blur(26px);
  opacity: 0.75;
  pointer-events: none;
  animation: headerGlow 7s ease-in-out infinite;
}

.site-header__bar--scrolled {
  min-height: 68px;
  margin-top: 8px;
  transform: translateY(1px);
  background:
    radial-gradient(circle at 12% 0%, rgba(59, 130, 246, 0.16), transparent 18rem),
    radial-gradient(circle at 88% 0%, rgba(219, 39, 119, 0.1), transparent 20rem),
    rgba(5, 8, 22, 0.88);
  border-color: rgba(147, 197, 253, 0.26);
  box-shadow:
    0 28px 70px rgba(0, 0, 0, 0.42),
    0 0 42px rgba(59, 130, 246, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

/* BRAND */

.brand {
  min-width: 0;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: white;
  text-decoration: none;
}

.brand__logo {
  position: relative;
  width: 52px;
  height: 52px;
  flex: 0 0 auto;
  overflow: hidden;
  border-radius: 19px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: rgba(255, 255, 255, 0.08);
  box-shadow:
    0 14px 34px rgba(37, 99, 235, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  transition:
    transform 220ms ease,
    box-shadow 220ms ease;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    transform: translateX(-130%);
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.28), transparent);
    transition: transform 680ms cubic-bezier(0.22, 1, 0.36, 1);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.brand:hover .brand__logo {
  transform: translateY(-2px) scale(1.03);
  box-shadow:
    0 18px 44px rgba(37, 99, 235, 0.34),
    0 0 28px rgba(124, 58, 237, 0.12);
}

.brand:hover .brand__logo::after {
  transform: translateX(130%);
}

.brand__copy {
  min-width: 0;
  display: grid;
  gap: 3px;

  strong {
    color: white;
    font-size: 15px;
    font-weight: 950;
    letter-spacing: -0.035em;
  }

  small {
    max-width: 225px;
    color: rgba(255, 255, 255, 0.58);
    font-size: 12px;
    line-height: 1.25;
    font-weight: 760;
  }
}

/* DESKTOP NAV */

.desktop-nav {
  display: flex;
  justify-content: center;
  gap: 5px;
  padding: 5px;
  justify-self: center;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.045);
  border: 1px solid rgba(255, 255, 255, 0.065);
}

.desktop-nav__link {
  position: relative;
  min-height: 42px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 14px;
  overflow: hidden;
  border-radius: 999px;
  border: 1px solid transparent;
  color: rgba(255, 255, 255, 0.68);
  text-decoration: none;
  font-size: 14px;
  font-weight: 880;
  transition:
    color 200ms ease,
    background-color 200ms ease,
    transform 200ms ease,
    box-shadow 200ms ease,
    border-color 200ms ease;

  span {
    position: relative;
    z-index: 2;
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    opacity: 0;
    border-radius: inherit;
    background:
      radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.18), transparent 60%),
      linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(124, 58, 237, 0.12));
    transition: opacity 200ms ease;
  }

  &::after {
    display: none;
  }

  &:hover {
    color: white;
    transform: translateY(-1px);
  }

  &:hover::before {
    opacity: 1;
  }

  &.router-link-active,
  &.is-active {
    color: white;
    background:
      radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.16), transparent 62%),
      linear-gradient(135deg, rgba(59, 130, 246, 0.24), rgba(124, 58, 237, 0.16));
    border-color: rgba(147, 197, 253, 0.2);
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.12),
      0 12px 32px rgba(37, 99, 235, 0.16);
  }

  &.router-link-active::before,
  &.is-active::before {
    opacity: 1;
  }
}

/* ACTIONS */

.header-actions {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
}

.header-cta,
.mobile-menu__cta {
  position: relative;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  min-height: 44px;
  padding: 0 20px;
  border-radius: 999px;
  color: white;
  text-decoration: none;
  font-size: 14px;
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

  &:hover {
    transform: translateY(-2px);
    filter: saturate(1.08);
    box-shadow:
      0 26px 58px rgba(37, 99, 235, 0.42),
      0 0 34px rgba(219, 39, 119, 0.16);
  }

  &:hover .q-icon {
    transform: translateX(3px);
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    transform: translateX(-120%);
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.35), transparent);
    transition: transform 650ms cubic-bezier(0.22, 1, 0.36, 1);
  }

  &:hover::after {
    transform: translateX(120%);
  }
}

.lang-dropdown {
  min-height: 44px;
  color: #e2e8f0;
  background:
    radial-gradient(circle at 20% 0%, rgba(255, 255, 255, 0.1), transparent 56%),
    linear-gradient(135deg, rgba(148, 163, 184, 0.16), rgba(15, 23, 42, 0.42));
  border: 1px solid rgba(255, 255, 255, 0.14);
  transition:
    transform 220ms ease,
    border-color 220ms ease,
    background-color 220ms ease;

  &:hover {
    transform: translateY(-1px);
    border-color: rgba(147, 197, 253, 0.26);
  }
}

.lang-label {
  display: inline-flex;
  align-items: center;
  gap: 8px;

  strong {
    display: inline-grid;
    place-items: center;
    width: 30px;
    height: 24px;
    border-radius: 999px;
    color: white;
    background: rgba(59, 130, 246, 0.18);
    font-size: 11px;
    font-weight: 950;
  }

  span {
    color: rgba(226, 232, 240, 0.88);
    font-size: 12px;
    font-weight: 850;
  }
}

.lang-menu {
  min-width: 188px;
  padding: 7px;
  border-radius: 18px;
  color: white;
  background:
    radial-gradient(circle at top right, rgba(59, 130, 246, 0.14), transparent 12rem), #0f172a;
  border: 1px solid rgba(255, 255, 255, 0.14);
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.4);
}

.lang-menu__item {
  min-height: 46px;
  margin-bottom: 4px;
  border-radius: 13px;
  color: #e2e8f0;
  transition:
    background-color 180ms ease,
    transform 180ms ease;

  &:hover {
    transform: translateX(2px);
    background: rgba(255, 255, 255, 0.07);
  }
}

.lang-menu__item--active {
  background: rgba(59, 130, 246, 0.22);
}

.lang-short {
  display: inline-grid;
  place-items: center;
  width: 34px;
  height: 24px;
  border-radius: 999px;
  color: #dbeafe;
  background: rgba(59, 130, 246, 0.22);
  font-size: 11px;
  font-weight: 950;
}

.mobile-trigger {
  display: none;
  width: 44px;
  height: 44px;
  color: white;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* MOBILE MENU */

.mobile-menu {
  position: fixed;
  inset: 0;
  z-index: 5000;
  display: flex;
  justify-content: flex-end;
  padding: 12px;
  pointer-events: auto;
  background: rgba(2, 6, 23, 0.62);
  backdrop-filter: blur(12px);
}

.mobile-menu__panel {
  position: relative;
  width: min(360px, 100%);
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border-radius: 30px;
  color: white;
  isolation: isolate;
  background:
    radial-gradient(circle at top right, rgba(59, 130, 246, 0.28), transparent 18rem),
    radial-gradient(circle at bottom left, rgba(219, 39, 119, 0.18), transparent 16rem),
    linear-gradient(145deg, rgba(15, 23, 42, 0.98), rgba(3, 7, 18, 0.98));
  border: 1px solid rgba(255, 255, 255, 0.13);
  box-shadow:
    0 30px 90px rgba(0, 0, 0, 0.48),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.mobile-menu__ambient {
  position: absolute;
  right: -90px;
  top: -80px;
  z-index: -1;
  width: 260px;
  height: 260px;
  pointer-events: none;
  border-radius: 999px;
  background: rgba(59, 130, 246, 0.22);
  filter: blur(30px);
}

.mobile-menu__head {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  padding: 20px 18px 14px;
}

.mobile-brand {
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 12px;
  color: white;
  text-decoration: none;

  img {
    width: 44px;
    height: 44px;
    flex: 0 0 auto;
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.14);
    box-shadow: 0 14px 34px rgba(37, 99, 235, 0.22);
  }

  strong {
    display: block;
    font-size: 15px;
    font-weight: 950;
    letter-spacing: -0.03em;
  }

  span {
    display: block;
    max-width: 210px;
    margin-top: 2px;
    color: rgba(255, 255, 255, 0.56);
    font-size: 12px;
    line-height: 1.3;
    font-weight: 750;
  }
}

.drawer-close {
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.mobile-menu__nav {
  position: relative;
  z-index: 2;
  display: grid;
  gap: 8px;
  padding: 12px 14px;
}

.mobile-menu__link {
  min-height: 58px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  padding: 0 16px;
  border-radius: 18px;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  background: rgba(255, 255, 255, 0.045);
  border: 1px solid rgba(255, 255, 255, 0.07);
  font-size: 15px;
  font-weight: 900;
  transition:
    transform 200ms ease,
    background-color 200ms ease,
    border-color 200ms ease,
    color 200ms ease;

  .q-icon {
    color: rgba(219, 234, 254, 0.64);
    font-size: 18px;
    transition: transform 200ms ease;
  }

  &:active {
    transform: scale(0.985);
  }

  &:hover,
  &.is-active,
  &.router-link-active {
    color: white;
    background: linear-gradient(135deg, rgba(37, 99, 235, 0.32), rgba(124, 58, 237, 0.18));
    border-color: rgba(147, 197, 253, 0.25);
    box-shadow: 0 16px 42px rgba(37, 99, 235, 0.14);
  }

  &:hover .q-icon,
  &.is-active .q-icon,
  &.router-link-active .q-icon {
    transform: translateX(3px);
    color: white;
  }
}

.mobile-menu__bottom {
  position: relative;
  z-index: 2;
  margin-top: auto;
  padding: 14px 18px 22px;
}

.mobile-menu__cta {
  width: 100%;
  min-height: 52px;
}

.mobile-menu__lang {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  margin-top: 14px;

  button {
    min-height: 42px;
    border: 0;
    border-radius: 999px;
    color: rgba(255, 255, 255, 0.72);
    background: rgba(255, 255, 255, 0.07);
    font-weight: 950;
    cursor: pointer;
    transition:
      transform 200ms ease,
      background-color 200ms ease,
      color 200ms ease;

    &:hover {
      transform: translateY(-2px);
      color: white;
      background: rgba(255, 255, 255, 0.1);
    }

    &.is-active {
      color: white;
      background: linear-gradient(135deg, #2563eb, #7c3aed);
      box-shadow: 0 14px 34px rgba(37, 99, 235, 0.22);
    }
  }
}

/* MOBILE MENU TRANSITION */

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 220ms ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
}

.mobile-menu-enter-active .mobile-menu__panel,
.mobile-menu-leave-active .mobile-menu__panel {
  transition:
    transform 260ms cubic-bezier(0.22, 1, 0.36, 1),
    opacity 260ms ease;
}

.mobile-menu-enter-from .mobile-menu__panel,
.mobile-menu-leave-to .mobile-menu__panel {
  opacity: 0;
  transform: translateX(28px) scale(0.98);
}

/* ANIMATIONS */

@keyframes headerGlow {
  0%,
  100% {
    transform: translate3d(0, 0, 0) scale(1);
    opacity: 0.55;
  }

  50% {
    transform: translate3d(34px, 10px, 0) scale(1.18);
    opacity: 0.95;
  }
}

/* RESPONSIVE */

@media (max-width: 1160px) {
  .site-header__bar {
    grid-template-columns: minmax(0, auto) auto;
  }

  .desktop-nav,
  .desktop-cta,
  .brand__copy small {
    display: none;
  }

  .mobile-trigger {
    display: inline-flex;
  }
}

@media (max-width: 620px) {
  .site-header__bar {
    width: calc(100% - 22px);
    min-height: 66px;
    padding: 8px 10px;
  }

  .brand__logo {
    width: 48px;
    height: 48px;
    border-radius: 17px;
  }

  .brand__copy strong {
    font-size: 14px;
  }

  .lang-label span {
    display: none;
  }

  .lang-dropdown {
    min-height: 42px;
  }
}

@media (max-width: 420px) {
  .brand__copy {
    display: none;
  }

  .site-header__bar {
    grid-template-columns: auto auto;
  }
}

@media (prefers-reduced-motion: reduce) {
  .site-header__bar,
  .site-header__glow,
  .brand__logo,
  .desktop-nav__link,
  .header-cta,
  .mobile-menu,
  .mobile-menu__panel,
  .mobile-menu__link,
  .mobile-menu__cta,
  .mobile-menu__lang button,
  .lang-dropdown,
  .lang-menu__item {
    animation: none !important;
    transition: none !important;
  }

  .brand__logo::after,
  .header-cta::after,
  .mobile-menu__cta::after {
    display: none;
  }
}
</style>
