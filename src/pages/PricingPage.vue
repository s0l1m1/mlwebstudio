<template>
  <q-page class="page">
    <section class="pricing-hero">
      <div class="container">
        <RevealSection variant="zoom">
          <div class="hero-shell">
            <div class="hero-orb hero-orb--one"></div>
            <div class="hero-orb hero-orb--two"></div>

            <div class="hero-badge">
              <q-icon name="payments" />
              <span>{{ t('pricing.label') }}</span>
            </div>

            <h1>{{ t('pricing.title') }}</h1>

            <p class="hero-text">
              {{ t('pricing.text') }}
            </p>

            <div class="hero-actions">
              <q-btn
                unelevated
                rounded
                no-caps
                class="btn-primary"
                :label="t('nav.sendInquiry')"
                to="/kontakt"
              />

              <q-btn
                outline
                rounded
                no-caps
                class="btn-ghost"
                :label="t('nav.examples')"
                to="/primeri"
              />
            </div>
          </div>
        </RevealSection>
      </div>
    </section>

    <section class="pricing-section">
      <div class="container">
        <RevealSection variant="up">
          <div class="pricing-guide">
            <div class="pricing-guide__copy">
              <span>{{ t('pricing.guideLabel') }}</span>
              <h2>{{ t('pricing.guideTitle') }}</h2>
              <p>{{ t('pricing.guideText') }}</p>
            </div>

            <div class="pricing-guide__items">
              <div v-for="item in guideItems" :key="item.title" class="guide-item">
                <q-icon :name="item.icon" />
                <strong>{{ item.title }}</strong>
                <p>{{ item.text }}</p>
              </div>
            </div>
          </div>
        </RevealSection>
      </div>

      <div class="container pricing-grid">
        <RevealSection
          v-for="(item, index) in packages"
          :key="item.title"
          :delay="index * 95"
          variant="up"
        >
          <article
            class="pricing-card"
            :class="[{ 'pricing-card--featured': item.featured }, `pricing-card--${index + 1}`]"
          >
            <div v-if="item.featured" class="featured-ribbon">
              {{ t('pricing.recommended') }}
            </div>

            <div class="pricing-card__glow"></div>

            <div class="pricing-card__head">
              <span class="pricing-kicker">{{ item.kicker }}</span>

              <div class="pricing-icon">
                <q-icon :name="icons[index] || 'web'" />
              </div>
            </div>

            <h2>{{ item.title }}</h2>

            <div class="price-row">
              <strong>{{ item.price }}</strong>
              <small>{{ t('pricing.startingFrom') }}</small>
            </div>

            <p class="pricing-description">
              {{ item.text }}
            </p>

            <div class="best-for">
              <span>{{ t('pricing.bestFor') }}</span>
              <strong>{{ getBestFor(index) }}</strong>
            </div>

            <ul class="pricing-features">
              <li v-for="feature in item.features" :key="feature">
                <span class="check">
                  <q-icon name="done" />
                </span>
                <span>{{ feature }}</span>
              </li>
            </ul>

            <div class="pricing-actions">
              <q-btn
                unelevated
                rounded
                no-caps
                class="pricing-btn"
                :class="{ 'pricing-btn--featured': item.featured }"
                :label="item.featured ? t('pricing.featuredCta') : t('nav.sendInquiry')"
                to="/kontakt"
              />
            </div>
          </article>
        </RevealSection>
      </div>

      <div class="container">
        <RevealSection variant="up">
          <div class="after-pricing-cta">
            <div>
              <strong>{{ t('pricing.afterCardsTitle') }}</strong>
              <p>{{ t('pricing.afterCardsText') }}</p>
            </div>

            <q-btn
              unelevated
              rounded
              no-caps
              class="btn-primary"
              :label="t('nav.sendInquiry')"
              to="/kontakt"
            />
          </div>
        </RevealSection>
      </div>

      <div class="container">
        <RevealSection variant="up">
          <div class="pricing-note-card">
            <div class="pricing-note-card__icon">
              <q-icon name="info" />
            </div>

            <div>
              <strong>{{ t('pricing.noteTitle') }}</strong>
              <p>{{ t('pricing.note') }}</p>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>

    <section class="value-section">
      <div class="container">
        <RevealSection variant="up">
          <div class="value-card">
            <div class="value-card__copy">
              <span>{{ t('pricing.valueLabel') }}</span>
              <h2>{{ t('pricing.valueTitle') }}</h2>
              <p>{{ t('pricing.valueText') }}</p>
            </div>

            <div class="value-list">
              <div v-for="item in valueItems" :key="item" class="value-item">
                <q-icon name="task_alt" />
                <span>{{ item }}</span>
              </div>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>

    <section class="final-cta-section">
      <div class="container">
        <RevealSection variant="zoom">
          <div class="final-cta">
            <div>
              <span>{{ t('pricing.finalCtaLabel') }}</span>
              <h2>{{ t('pricing.finalCtaTitle') }}</h2>
              <p>{{ t('pricing.finalCtaText') }}</p>
            </div>

            <q-btn
              unelevated
              rounded
              no-caps
              size="lg"
              class="btn-primary final-cta__btn"
              :label="t('nav.sendInquiry')"
              to="/kontakt"
            />
          </div>
        </RevealSection>
      </div>
    </section>
  </q-page>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import RevealSection from 'src/components/site/RevealSection.vue'

const { t, tm, locale } = useI18n()

const packages = computed(() => tm('pricing.packages'))
const guideItems = computed(() => tm('pricing.guideItems'))
const valueItems = computed(() => tm('pricing.valueItems'))

const icons = ['auto_fix_high', 'rocket_launch', 'design_services', 'hub']

const bestForSr = [
  'Sajt koji već postoji, ali izgleda zastarelo ili ne donosi dovoljno upita',
  'Jedna usluga, kampanja, akcija ili konkretna ponuda koju želite da promovišete',
  'Biznis koji već ima sadržaj, ali želi ozbiljniji dizajn i jasniji prodajni tok',
  'Firma kojoj treba više stranica, kompletna struktura i ozbiljniji online nastup',
]

const bestForEn = [
  'An existing website that feels outdated or does not generate enough inquiries',
  'One service, campaign, promotion or specific offer you want to present clearly',
  'A business with existing content that needs stronger design and a clearer conversion flow',
  'A company that needs multiple pages, complete structure and a stronger online presence',
]

function getBestFor(index) {
  return locale.value === 'en' ? bestForEn[index] : bestForSr[index]
}

onMounted(() => {
  document.title = t('seo.pricingTitle')
})
</script>

<style scoped lang="scss">
.page {
  position: relative;
  z-index: 1;
  overflow: hidden;
}

.container {
  width: min(1360px, calc(100% - 48px));
  margin: 0 auto;
}

/* HERO */

.pricing-hero {
  padding: 104px 0 44px;
}

.hero-shell {
  position: relative;
  max-width: 1140px;
  margin: 0 auto;
  padding: clamp(34px, 5vw, 64px);
  overflow: hidden;
  border-radius: 46px;
  text-align: center;
  isolation: isolate;
  background:
    radial-gradient(circle at 16% 0%, rgba(59, 130, 246, 0.26), transparent 26rem),
    radial-gradient(circle at 88% 10%, rgba(219, 39, 119, 0.2), transparent 27rem),
    linear-gradient(135deg, rgba(255, 255, 255, 0.13), rgba(255, 255, 255, 0.045));
  border: 1px solid rgba(255, 255, 255, 0.145);
  box-shadow:
    0 30px 100px rgba(0, 0, 0, 0.32),
    inset 0 1px 0 rgba(255, 255, 255, 0.13);

  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    z-index: -3;
    border-radius: inherit;
    background: linear-gradient(
      135deg,
      rgba(96, 165, 250, 0.5),
      transparent 31%,
      rgba(219, 39, 119, 0.36)
    );
    opacity: 0.22;
  }

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    top: -150px;
    z-index: -2;
    width: 450px;
    height: 450px;
    transform: translateX(-50%);
    border-radius: 999px;
    background: rgba(124, 58, 237, 0.24);
    filter: blur(46px);
    pointer-events: none;
    animation: heroGlow 7s ease-in-out infinite;
  }
}

.hero-orb {
  position: absolute;
  z-index: -1;
  border-radius: 999px;
  pointer-events: none;
  filter: blur(8px);
  opacity: 0.55;
}

.hero-orb--one {
  width: 120px;
  height: 120px;
  left: 7%;
  top: 18%;
  background: rgba(96, 165, 250, 0.18);
  animation: orbFloatOne 8s ease-in-out infinite;
}

.hero-orb--two {
  width: 150px;
  height: 150px;
  right: 7%;
  bottom: 12%;
  background: rgba(219, 39, 119, 0.16);
  animation: orbFloatTwo 9s ease-in-out infinite;
}

.hero-badge {
  position: relative;
  z-index: 2;
  width: fit-content;
  margin: 0 auto 22px;
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 10px 15px;
  border-radius: 999px;
  color: #dbeafe;
  font-size: 13px;
  font-weight: 950;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  background: rgba(59, 130, 246, 0.14);
  border: 1px solid rgba(147, 197, 253, 0.23);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.12),
    0 16px 36px rgba(37, 99, 235, 0.12);

  .q-icon {
    color: #93c5fd;
    font-size: 20px;
  }
}

.hero-shell h1 {
  position: relative;
  z-index: 2;
  max-width: 960px;
  margin: 0 auto;
  color: white;
  font-size: clamp(42px, 6vw, 86px);
  line-height: 0.91;
  letter-spacing: -0.085em;
  font-weight: 950;
}

.hero-text {
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 24px auto 0;
  color: rgba(255, 255, 255, 0.7);
  font-size: 17px;
  line-height: 1.75;
}

.hero-actions {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 32px;
}

/* BUTTONS */

.btn-primary,
.btn-ghost,
.pricing-btn {
  position: relative;
  overflow: hidden;
  min-height: 46px;
  padding-inline: 22px;
  font-weight: 950;
  letter-spacing: -0.01em;
  transition:
    transform 230ms cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 230ms ease,
    filter 230ms ease;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    transform: translateX(-130%);
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.34), transparent);
    transition: transform 700ms cubic-bezier(0.22, 1, 0.36, 1);
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-3px);
    filter: saturate(1.08);
  }

  &:hover::after {
    transform: translateX(130%);
  }
}

.btn-primary,
.pricing-btn {
  color: white;
  background:
    radial-gradient(circle at 20% -20%, rgba(255, 255, 255, 0.3), transparent 50%),
    linear-gradient(135deg, #2563eb, #7c3aed 56%, #db2777);
  box-shadow:
    0 24px 58px rgba(37, 99, 235, 0.34),
    inset 0 1px 0 rgba(255, 255, 255, 0.24);

  &:hover {
    box-shadow:
      0 30px 76px rgba(37, 99, 235, 0.46),
      0 0 44px rgba(219, 39, 119, 0.16);
  }
}

.btn-ghost {
  color: #e0ecff;
  border: 1px solid rgba(147, 197, 253, 0.26);
  background: linear-gradient(135deg, rgba(147, 197, 253, 0.11), rgba(255, 255, 255, 0.04));
  backdrop-filter: blur(14px);
}

/* GUIDE */

.pricing-section {
  padding: 30px 0 72px;
}

.pricing-guide {
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: 0.88fr 1.12fr;
  gap: 30px;
  align-items: center;
  margin-bottom: 36px;
  padding: clamp(24px, 3.4vw, 38px);
  border-radius: 36px;
  isolation: isolate;
  background:
    radial-gradient(circle at 16% 0%, rgba(59, 130, 246, 0.2), transparent 28rem),
    radial-gradient(circle at 90% 20%, rgba(34, 211, 238, 0.12), transparent 24rem),
    linear-gradient(135deg, rgba(255, 255, 255, 0.105), rgba(255, 255, 255, 0.04));
  border: 1px solid rgba(255, 255, 255, 0.13);
  box-shadow: 0 24px 76px rgba(0, 0, 0, 0.23);

  &::after {
    content: '';
    position: absolute;
    right: -100px;
    top: -120px;
    z-index: -1;
    width: 270px;
    height: 270px;
    border-radius: 999px;
    background: rgba(59, 130, 246, 0.18);
    filter: blur(36px);
  }
}

.pricing-guide__copy {
  span {
    color: #93c5fd;
    font-size: 13px;
    font-weight: 950;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  h2 {
    margin: 12px 0 0;
    color: white;
    font-size: clamp(30px, 3.7vw, 54px);
    line-height: 0.98;
    letter-spacing: -0.07em;
    font-weight: 950;
  }

  p {
    margin: 16px 0 0;
    color: rgba(255, 255, 255, 0.66);
    line-height: 1.72;
  }
}

.pricing-guide__items {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
}

.guide-item {
  min-height: 180px;
  padding: 18px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.075);
  border: 1px solid rgba(255, 255, 255, 0.105);
  transition:
    transform 240ms ease,
    background-color 240ms ease,
    border-color 240ms ease,
    box-shadow 240ms ease;

  &:hover {
    transform: translateY(-7px);
    background: rgba(255, 255, 255, 0.105);
    border-color: rgba(147, 197, 253, 0.26);
    box-shadow: 0 20px 54px rgba(37, 99, 235, 0.12);
  }

  .q-icon {
    color: #93c5fd;
    font-size: 30px;
  }

  strong {
    display: block;
    margin-top: 16px;
    color: white;
    font-size: 17px;
    line-height: 1.15;
    font-weight: 950;
  }

  p {
    margin: 10px 0 0;
    color: rgba(255, 255, 255, 0.62);
    font-size: 14px;
    line-height: 1.55;
  }
}

/* PRICING GRID */

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 22px;
  align-items: stretch;
}

.pricing-grid :deep(.reveal) {
  height: 100%;
}

.pricing-card {
  position: relative;
  height: 100%;
  min-height: 635px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 24px;
  border-radius: 34px;
  color: white;
  isolation: isolate;
  background:
    radial-gradient(circle at top right, rgba(96, 165, 250, 0.16), transparent 18rem),
    linear-gradient(145deg, rgba(255, 255, 255, 0.115), rgba(255, 255, 255, 0.04));
  border: 1px solid rgba(255, 255, 255, 0.125);
  box-shadow:
    0 22px 70px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.12);
  transition:
    transform 300ms cubic-bezier(0.22, 1, 0.36, 1),
    border-color 300ms ease,
    box-shadow 300ms ease,
    filter 300ms ease;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -2;
    border-radius: inherit;
    opacity: 0;
    background:
      radial-gradient(circle at 18% 0%, rgba(96, 165, 250, 0.22), transparent 20rem),
      radial-gradient(circle at 92% 16%, rgba(219, 39, 119, 0.16), transparent 20rem);
    transition: opacity 300ms ease;
  }

  &:hover {
    transform: translateY(-10px) scale(1.006);
    border-color: rgba(147, 197, 253, 0.34);
    box-shadow:
      0 34px 96px rgba(37, 99, 235, 0.16),
      0 0 46px rgba(124, 58, 237, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.16);
    filter: saturate(1.04);
  }

  &:hover::before {
    opacity: 1;
  }
}

.pricing-card--featured {
  transform: translateY(-14px);
  background:
    radial-gradient(circle at top right, rgba(219, 39, 119, 0.24), transparent 18rem),
    radial-gradient(circle at 10% 0%, rgba(37, 99, 235, 0.24), transparent 20rem),
    linear-gradient(145deg, rgba(37, 99, 235, 0.29), rgba(124, 58, 237, 0.17));
  border-color: rgba(147, 197, 253, 0.34);
  box-shadow:
    0 36px 104px rgba(37, 99, 235, 0.2),
    0 0 76px rgba(219, 39, 119, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.18);

  &:hover {
    transform: translateY(-20px) scale(1.008);
  }
}

.featured-ribbon {
  position: absolute;
  top: 18px;
  right: 18px;
  z-index: 4;
  padding: 7px 11px;
  border-radius: 999px;
  color: white;
  background: linear-gradient(135deg, #2563eb, #db2777);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 14px 32px rgba(37, 99, 235, 0.22);
  font-size: 11px;
  font-weight: 950;
  text-transform: uppercase;
  letter-spacing: 0.07em;
}

.pricing-card__glow {
  position: absolute;
  right: -120px;
  top: -120px;
  z-index: -1;
  width: 250px;
  height: 250px;
  border-radius: 999px;
  background: rgba(59, 130, 246, 0.22);
  filter: blur(34px);
  opacity: 0.72;
  pointer-events: none;
  transition:
    transform 420ms ease,
    opacity 420ms ease;
}

.pricing-card:hover .pricing-card__glow {
  transform: scale(1.18) translate(-20px, 20px);
  opacity: 1;
}

.pricing-card--featured .pricing-card__glow {
  background: rgba(219, 39, 119, 0.25);
}

.pricing-card__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.pricing-kicker {
  color: #93c5fd;
  font-size: 12px;
  font-weight: 950;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.pricing-icon {
  width: 50px;
  height: 50px;
  display: grid;
  place-items: center;
  flex: 0 0 auto;
  border-radius: 18px;
  color: #dbeafe;
  background: rgba(255, 255, 255, 0.09);
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);

  .q-icon {
    font-size: 25px;
  }
}

.pricing-card h2 {
  margin: 24px 0 0;
  color: white;
  font-size: clamp(25px, 2vw, 34px);
  line-height: 0.98;
  letter-spacing: -0.06em;
  font-weight: 950;
}

.price-row {
  display: grid;
  gap: 5px;
  margin-top: 18px;

  strong {
    display: block;
    color: white;
    font-size: clamp(32px, 3vw, 46px);
    line-height: 1;
    letter-spacing: -0.07em;
    font-weight: 950;
  }

  small {
    color: rgba(219, 234, 254, 0.64);
    font-size: 13px;
    font-weight: 800;
  }
}

.pricing-description {
  min-height: 106px;
  margin: 18px 0 0;
  color: rgba(255, 255, 255, 0.65);
  line-height: 1.68;
}

.best-for {
  margin-top: 18px;
  padding: 14px;
  border-radius: 18px;
  background: rgba(15, 23, 42, 0.36);
  border: 1px solid rgba(147, 197, 253, 0.13);

  span {
    display: block;
    color: rgba(147, 197, 253, 0.82);
    font-size: 11px;
    font-weight: 950;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  strong {
    display: block;
    margin-top: 7px;
    color: rgba(255, 255, 255, 0.9);
    font-size: 14px;
    line-height: 1.45;
    font-weight: 850;
  }
}

.pricing-features {
  display: grid;
  gap: 10px;
  flex: 1;
  margin: 22px 0 0;
  padding: 0;
  list-style: none;

  li {
    display: flex;
    align-items: flex-start;
    gap: 9px;
    color: rgba(255, 255, 255, 0.82);
    font-weight: 800;
    line-height: 1.45;
  }
}

.check {
  width: 22px;
  height: 22px;
  display: grid;
  place-items: center;
  flex: 0 0 auto;
  border-radius: 999px;
  color: white;
  background: rgba(59, 130, 246, 0.24);
  border: 1px solid rgba(147, 197, 253, 0.2);

  .q-icon {
    font-size: 15px;
  }
}

.pricing-actions {
  margin-top: auto;
  padding-top: 24px;
}

.pricing-btn {
  width: 100%;
  min-height: 48px;
}

.pricing-btn--featured {
  box-shadow:
    0 26px 66px rgba(219, 39, 119, 0.2),
    0 22px 54px rgba(37, 99, 235, 0.26),
    inset 0 1px 0 rgba(255, 255, 255, 0.24);
}

/* AFTER CARDS CTA */

.after-pricing-cta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 22px;
  margin-top: 32px;
  padding: 24px 26px;
  border-radius: 30px;
  background:
    radial-gradient(circle at 18% 0%, rgba(59, 130, 246, 0.18), transparent 24rem),
    linear-gradient(135deg, rgba(255, 255, 255, 0.105), rgba(255, 255, 255, 0.04));
  border: 1px solid rgba(255, 255, 255, 0.13);
  box-shadow: 0 22px 64px rgba(0, 0, 0, 0.21);

  strong {
    color: white;
    font-size: clamp(22px, 2.5vw, 34px);
    line-height: 1;
    letter-spacing: -0.055em;
    font-weight: 950;
  }

  p {
    max-width: 720px;
    margin: 10px 0 0;
    color: rgba(255, 255, 255, 0.64);
    line-height: 1.65;
  }

  .q-btn {
    flex: 0 0 auto;
  }
}

/* NOTE */

.pricing-note-card {
  display: flex;
  gap: 16px;
  align-items: flex-start;
  max-width: 960px;
  margin: 34px auto 0;
  padding: 20px 22px;
  border-radius: 24px;
  background: linear-gradient(135deg, rgba(147, 197, 253, 0.1), rgba(255, 255, 255, 0.045));
  border: 1px solid rgba(147, 197, 253, 0.16);
  box-shadow: 0 18px 46px rgba(0, 0, 0, 0.18);

  strong {
    display: block;
    color: white;
    font-size: 17px;
    font-weight: 950;
  }

  p {
    margin: 8px 0 0;
    color: rgba(255, 255, 255, 0.64);
    line-height: 1.72;
  }
}

.pricing-note-card__icon {
  width: 44px;
  height: 44px;
  display: grid;
  place-items: center;
  flex: 0 0 auto;
  border-radius: 16px;
  color: #dbeafe;
  background: rgba(59, 130, 246, 0.18);
  border: 1px solid rgba(147, 197, 253, 0.18);

  .q-icon {
    font-size: 24px;
  }
}

/* VALUE */

.value-section {
  padding: 0 0 72px;
}

.value-card {
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: 0.95fr 1.05fr;
  gap: 34px;
  align-items: center;
  padding: clamp(28px, 4vw, 46px);
  border-radius: 40px;
  background:
    radial-gradient(circle at 16% 0%, rgba(37, 99, 235, 0.22), transparent 30rem),
    radial-gradient(circle at 94% 18%, rgba(34, 211, 238, 0.12), transparent 28rem),
    linear-gradient(135deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.045));
  border: 1px solid rgba(255, 255, 255, 0.14);
  box-shadow: 0 28px 90px rgba(0, 0, 0, 0.24);
}

.value-card__copy {
  span {
    color: #93c5fd;
    font-size: 13px;
    font-weight: 950;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  h2 {
    max-width: 720px;
    margin: 14px 0 0;
    color: white;
    font-size: clamp(30px, 4vw, 56px);
    line-height: 0.98;
    letter-spacing: -0.075em;
    font-weight: 950;
  }

  p {
    margin: 18px 0 0;
    color: rgba(255, 255, 255, 0.66);
    line-height: 1.72;
    font-size: 16px;
  }
}

.value-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.value-item {
  min-height: 72px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px;
  border-radius: 20px;
  color: rgba(255, 255, 255, 0.84);
  background: rgba(255, 255, 255, 0.075);
  border: 1px solid rgba(255, 255, 255, 0.105);
  font-weight: 850;
  transition:
    transform 220ms ease,
    background-color 220ms ease,
    border-color 220ms ease,
    box-shadow 220ms ease;

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.105);
    border-color: rgba(147, 197, 253, 0.24);
    box-shadow: 0 20px 54px rgba(37, 99, 235, 0.1);
  }

  .q-icon {
    color: #93c5fd;
    font-size: 22px;
    flex: 0 0 auto;
  }
}

/* FINAL CTA */

.final-cta-section {
  padding: 0 0 96px;
}

.final-cta {
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 28px;
  padding: clamp(30px, 4vw, 50px);
  border-radius: 42px;
  background:
    radial-gradient(circle at 18% 0%, rgba(37, 99, 235, 0.24), transparent 30rem),
    radial-gradient(circle at 94% 14%, rgba(219, 39, 119, 0.2), transparent 28rem),
    linear-gradient(135deg, rgba(255, 255, 255, 0.13), rgba(255, 255, 255, 0.045));
  border: 1px solid rgba(255, 255, 255, 0.14);
  box-shadow: 0 30px 94px rgba(0, 0, 0, 0.26);

  span {
    color: #93c5fd;
    font-size: 13px;
    font-weight: 950;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  h2 {
    max-width: 840px;
    margin: 12px 0 0;
    color: white;
    font-size: clamp(30px, 4vw, 56px);
    line-height: 0.98;
    letter-spacing: -0.07em;
    font-weight: 950;
  }

  p {
    max-width: 780px;
    margin: 16px 0 0;
    color: rgba(255, 255, 255, 0.66);
    line-height: 1.72;
  }
}

.final-cta__btn {
  flex: 0 0 auto;
}

/* ANIMATIONS */

@keyframes heroGlow {
  0%,
  100% {
    transform: translateX(-50%) scale(1);
    opacity: 0.55;
  }

  50% {
    transform: translateX(-50%) scale(1.16);
    opacity: 0.88;
  }
}

@keyframes orbFloatOne {
  0%,
  100% {
    transform: translate3d(0, 0, 0) scale(1);
  }

  50% {
    transform: translate3d(18px, -16px, 0) scale(1.08);
  }
}

@keyframes orbFloatTwo {
  0%,
  100% {
    transform: translate3d(0, 0, 0) scale(1);
  }

  50% {
    transform: translate3d(-18px, 18px, 0) scale(1.08);
  }
}

/* RESPONSIVE */

@media (max-width: 1250px) {
  .pricing-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .pricing-card--featured {
    transform: none;

    &:hover {
      transform: translateY(-10px) scale(1.006);
    }
  }
}

@media (max-width: 1000px) {
  .pricing-guide {
    grid-template-columns: 1fr;
  }

  .pricing-guide__items {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 900px) {
  .value-card {
    grid-template-columns: 1fr;
  }

  .after-pricing-cta,
  .final-cta {
    align-items: stretch;
    flex-direction: column;

    .q-btn {
      width: 100%;
    }
  }
}

@media (max-width: 700px) {
  .container {
    width: min(100% - 28px, 1360px);
  }

  .pricing-hero {
    padding-top: 72px;
  }

  .hero-shell {
    border-radius: 32px;
    text-align: left;
  }

  .hero-badge {
    margin-left: 0;
  }

  .hero-text {
    margin-left: 0;
    margin-right: 0;
  }

  .hero-actions {
    justify-content: flex-start;
  }

  .pricing-grid {
    grid-template-columns: 1fr;
  }

  .pricing-card {
    min-height: auto;
  }

  .pricing-description {
    min-height: auto;
  }

  .value-list {
    grid-template-columns: 1fr;
  }

  .pricing-note-card {
    flex-direction: column;
  }
}

@media (max-width: 460px) {
  .hero-shell {
    padding: 26px 20px;
  }

  .hero-shell h1 {
    font-size: clamp(40px, 13vw, 58px);
  }

  .pricing-card {
    padding: 20px;
    border-radius: 28px;
  }

  .featured-ribbon {
    position: static;
    width: fit-content;
    margin-bottom: 14px;
  }

  .pricing-card__head {
    align-items: flex-start;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-shell::after,
  .hero-orb,
  .pricing-card,
  .pricing-card__glow,
  .btn-primary,
  .btn-ghost,
  .pricing-btn,
  .guide-item,
  .value-item {
    animation: none !important;
    transition: none !important;
  }

  .btn-primary::after,
  .btn-ghost::after,
  .pricing-btn::after {
    display: none;
  }
}
</style>
