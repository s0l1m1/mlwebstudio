<template>
  <q-page class="page">
    <section class="services-hero">
      <div class="container">
        <RevealSection variant="zoom">
          <div class="hero-shell">
            <div class="hero-orb hero-orb--one"></div>
            <div class="hero-orb hero-orb--two"></div>

            <div class="hero-badge">
              <q-icon name="design_services" />
              <span>{{ t('services.label') }}</span>
            </div>

            <h1>{{ t('services.title') }}</h1>

            <p class="hero-text">
              {{ t('services.text') }}
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
                :label="t('nav.pricing')"
                to="/cene"
              />
            </div>
          </div>
        </RevealSection>
      </div>
    </section>

    <section class="service-overview-section">
      <div class="container">
        <RevealSection variant="up">
          <div class="service-guide">
            <div class="service-guide__copy">
              <span>{{ t('services.guideLabel') }}</span>
              <h2>{{ t('services.guideTitle') }}</h2>
              <p>{{ t('services.guideText') }}</p>
            </div>

            <div class="service-guide__steps">
              <div v-for="item in guideItems" :key="item.title" class="guide-item">
                <q-icon :name="item.icon" />
                <strong>{{ item.title }}</strong>
                <p>{{ item.text }}</p>
              </div>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
    <section class="service-pages-section">
      <div class="container">
        <RevealSection variant="up">
          <div class="service-pages-head">
            <span>{{ t('services.pagesLabel') }}</span>
            <h2>{{ t('services.pagesTitle') }}</h2>
            <p>{{ t('services.pagesText') }}</p>
          </div>
        </RevealSection>

        <div class="service-pages-grid">
          <RevealSection
            v-for="(page, index) in servicePages"
            :key="page.to"
            :delay="index * 80"
            variant="up"
          >
            <router-link class="service-page-card" :to="page.to">
              <div class="service-page-card__glow"></div>

              <div class="service-page-card__top">
                <div class="service-page-card__icon">
                  <q-icon :name="page.icon" />
                </div>

                <q-icon name="arrow_forward" class="service-page-card__arrow" />
              </div>

              <h3>{{ page.title }}</h3>
              <p>{{ page.text }}</p>

              <span>{{ t('services.pagesCta') }}</span>
            </router-link>
          </RevealSection>
        </div>
      </div>
    </section>
    <section class="services-section">
      <div class="container services-grid">
        <RevealSection
          v-for="(service, index) in services"
          :key="service.title"
          :delay="index * 90"
          variant="up"
        >
          <article
            class="service-card"
            :class="[{ 'service-card--featured': index === 1 }, `service-card--${index + 1}`]"
          >
            <div class="service-card__glow"></div>

            <div v-if="index === 1" class="featured-badge">
              {{ t('services.featured') }}
            </div>

            <div class="service-card__head">
              <span class="service-number">{{ service.number }}</span>

              <div class="service-icon">
                <q-icon :name="service.icon" />
              </div>
            </div>

            <h2>{{ service.title }}</h2>

            <p class="service-text">
              {{ service.text }}
            </p>

            <div class="service-best">
              <small>{{ t('services.bestFor') }}</small>
              <strong>{{ getBestFor(index) }}</strong>
            </div>

            <ul class="service-points">
              <li v-for="point in getServicePoints(index)" :key="point">
                <q-icon name="done" />
                <span>{{ point }}</span>
              </li>
            </ul>

            <div class="service-actions">
              <q-btn
                unelevated
                rounded
                no-caps
                class="service-btn"
                :label="t('nav.sendInquiry')"
                to="/kontakt"
              />

              <router-link to="/cene">
                {{ t('services.priceLink') }}
                <q-icon name="arrow_forward" />
              </router-link>
            </div>
          </article>
        </RevealSection>
      </div>
    </section>

    <section class="process-section">
      <div class="container">
        <RevealSection variant="up">
          <div class="process-card">
            <div class="process-copy">
              <span>{{ t('services.processLabel') }}</span>
              <h2>{{ t('approach.title') }}</h2>
              <p>{{ t('approach.text') }}</p>
            </div>

            <div class="points">
              <div v-for="(point, index) in approachPoints" :key="point" class="point-card">
                <span>{{ String(index + 1).padStart(2, '0') }}</span>
                <q-icon name="check_circle" />
                <strong>{{ point }}</strong>
              </div>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
    <section class="product-promo-section">
      <div class="container">
        <RevealSection variant="zoom">
          <div class="product-promo-card">
            <div>
              <span>{{ locale === 'en' ? 'Digital product' : 'Digitalni proizvod' }}</span>
              <h2>ServicePro Landing Kit</h2>
              <p>
                {{
                  locale === 'en'
                    ? 'A ready-made Vue + Quasar landing page kit for freelancers and agencies building websites for local service businesses.'
                    : 'Gotov Vue + Quasar landing page kit za freelancere i agencije koji prave sajtove za lokalne biznise.'
                }}
              </p>
            </div>

            <div class="product-promo-actions">
              <q-btn
                unelevated
                rounded
                no-caps
                class="btn-primary"
                :label="locale === 'en' ? 'View product' : 'Pogledaj proizvod'"
                to="/products/servicepro-landing-kit"
              />

              <q-btn
                outline
                rounded
                no-caps
                class="btn-ghost"
                label="Live demo"
                href="https://servicepro-landing-kit.vercel.app/?demo=true&lang=en&industry=hvac&business=CoolFix%20Services&city=Houston&theme=blue"
                target="_blank"
              />
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
              <span>{{ t('services.finalCtaLabel') }}</span>
              <h2>{{ t('services.finalCtaTitle') }}</h2>
              <p>{{ t('services.finalCtaText') }}</p>
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

const services = computed(() => tm('services.items'))
const approachPoints = computed(() => tm('approach.points'))

const servicePages = computed(() => {
  const items = tm('services.pages')
  if (Array.isArray(items) && items.length) return items

  return [
    {
      icon: 'web',
      title: 'Izrada sajtova',
      text: 'Moderan sajt za mali biznis, sa jasnom ponudom, kontaktom i dobrim mobilnim prikazom.',
      to: '/izrada-sajtova',
    },
    {
      icon: 'auto_fix_high',
      title: 'Redizajn sajta',
      text: 'Osveženje postojećeg sajta bez gubljenja korisnog sadržaja i SEO osnove.',
      to: '/redizajn-sajta',
    },
    {
      icon: 'rocket_launch',
      title: 'Landing stranice',
      text: 'Jedna fokusirana stranica za konkretnu uslugu, ponudu ili kampanju.',
      to: '/landing-stranice',
    },
    {
      icon: 'shopping_bag',
      title: locale.value === 'en' ? 'ServicePro Landing Kit' : 'ServicePro Landing Kit',
      text:
        locale.value === 'en'
          ? 'A multilingual Vue + Quasar landing page template for local service businesses, freelancers and agencies.'
          : 'Vue + Quasar template za moderne landing stranice lokalnih biznisa, freelancere i male agencije.',
      to: '/products/servicepro-landing-kit',
    },
  ]
})

const guideItems = computed(() => {
  const items = tm('services.guideItems')
  if (Array.isArray(items) && items.length) return items

  return [
    {
      icon: 'search',
      title: 'Razumemo cilj',
      text: 'Prvo se definiše šta sajt treba da postigne.',
    },
    {
      icon: 'architecture',
      title: 'Slažemo strukturu',
      text: 'Usluge, kontakt i sadržaj se organizuju jasnije.',
    },
    {
      icon: 'rocket_launch',
      title: 'Pravimo bolji nastup',
      text: 'Dizajn, mobilni prikaz i CTA vode ka upitu.',
    },
  ]
})

const bestForSr = [
  'Mali biznis koji želi profesionalan prvi utisak i jasnu prezentaciju usluga',
  'Jednu uslugu, kampanju, promociju ili ponudu koju treba brzo objasniti',
  'Postojeći sajt koji ima sadržaj, ali izgleda zastarelo ili ne vodi ka upitu',
  'Sajt koji treba bolje da se vidi na Google-u kroz osnovnu strukturu i sadržaj',
  'Biznis kome je bitno da korisnik lako pošalje upit, pozove ili zakaže',
  'Klijente koji nemaju tehničko iskustvo i treba im pomoć oko objave sajta',
]

const bestForEn = [
  'A small business that wants a professional first impression and clear service presentation',
  'One service, campaign, promotion or offer that needs to be explained quickly',
  'An existing website with content that feels outdated or does not lead to inquiries',
  'A website that needs better Google structure and basic content optimization',
  'A business that needs visitors to easily send an inquiry, call or book',
  'Clients without technical experience who need support with publishing the website',
]

const servicePointsSr = [
  ['Jasan hero i CTA', 'Usluge predstavljene bez komplikovanja', 'Kontakt forma i mobilni prikaz'],
  ['Jedna konkretna ponuda', 'Sekcije za benefite i poverenje', 'Fokus na slanje upita'],
  ['Moderniji vizuelni utisak', 'Bolja struktura postojećeg sadržaja', 'Pažljiv SEO-safe pristup'],
  ['Osnovna SEO struktura', 'Bolji naslovi i sekcije', 'Jasniji sadržaj za korisnike'],
  ['Kontakt forma', 'WhatsApp/Viber ili email flow', 'Jasna dugmad kroz sajt'],
  ['Pomoć oko domena', 'Objava sajta', 'Osnovna tehnička podrška'],
]

const servicePointsEn = [
  ['Clear hero and CTA', 'Services presented without confusion', 'Contact form and mobile layout'],
  ['One specific offer', 'Benefit and trust sections', 'Focused inquiry flow'],
  [
    'More modern visual impression',
    'Better structure for existing content',
    'Careful SEO-safe approach',
  ],
  ['Basic SEO structure', 'Better headings and sections', 'Clearer content for visitors'],
  ['Contact form', 'WhatsApp/Viber or email flow', 'Clear buttons across the website'],
  ['Domain support', 'Website launch', 'Basic technical support'],
]

function getBestFor(index) {
  const fallback = locale.value === 'en' ? bestForEn : bestForSr
  return fallback[index] || fallback[fallback.length - 1]
}

function getServicePoints(index) {
  const fallback = locale.value === 'en' ? servicePointsEn : servicePointsSr
  return fallback[index] || fallback[fallback.length - 1]
}

onMounted(() => {
  document.title = t('seo.servicesTitle')
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

.services-hero {
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
.service-btn {
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
.service-btn {
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

.service-overview-section {
  padding: 28px 0 34px;
}

.service-guide {
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: 0.86fr 1.14fr;
  gap: 30px;
  align-items: center;
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

.service-guide__copy {
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

.service-guide__steps {
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

/* SERVICES */

.services-section {
  padding: 38px 0 72px;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 22px;
  align-items: stretch;
}

.services-grid :deep(.reveal) {
  height: 100%;
}

.service-card {
  position: relative;
  height: 100%;
  min-height: 520px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 26px;
  border-radius: 36px;
  color: white;
  isolation: isolate;
  transform-style: preserve-3d;
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
    inset: -1px;
    z-index: -2;
    border-radius: inherit;
    background: linear-gradient(
      135deg,
      rgba(96, 165, 250, 0.55),
      transparent 34%,
      rgba(219, 39, 119, 0.42),
      transparent 70%,
      rgba(34, 211, 238, 0.35)
    );
    opacity: 0;
    transition: opacity 280ms ease;
  }

  &::after {
    content: '';
    position: absolute;
    top: -40%;
    left: -80%;
    z-index: -1;
    width: 48%;
    height: 180%;
    transform: rotate(18deg);
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.16), transparent);
    opacity: 0;
    pointer-events: none;
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
    opacity: 0.55;
  }

  &:hover::after {
    opacity: 1;
    animation: cardScanner 900ms cubic-bezier(0.22, 1, 0.36, 1);
  }
}

.service-card--featured {
  border-color: rgba(147, 197, 253, 0.32);
  background:
    radial-gradient(circle at top right, rgba(219, 39, 119, 0.2), transparent 18rem),
    radial-gradient(circle at 10% 0%, rgba(37, 99, 235, 0.2), transparent 20rem),
    linear-gradient(145deg, rgba(37, 99, 235, 0.22), rgba(124, 58, 237, 0.14));
  box-shadow:
    0 34px 100px rgba(37, 99, 235, 0.18),
    0 0 70px rgba(219, 39, 119, 0.09),
    inset 0 1px 0 rgba(255, 255, 255, 0.16);

  .service-card__glow {
    animation: featuredGlow 5.8s ease-in-out infinite;
    background: rgba(219, 39, 119, 0.25);
  }

  .service-icon {
    animation: iconPulse 2.8s ease-in-out infinite;
  }
}

.featured-badge {
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

.service-card__glow {
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

.service-card:hover .service-card__glow {
  transform: scale(1.18) translate(-20px, 20px);
  opacity: 1;
}

.service-card__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.service-number {
  color: rgba(255, 255, 255, 0.22);
  font-size: 46px;
  line-height: 1;
  font-weight: 950;
  letter-spacing: -0.08em;
}

.service-icon {
  width: 56px;
  height: 56px;
  display: grid;
  place-items: center;
  flex: 0 0 auto;
  border-radius: 20px;
  color: #dbeafe;
  background: rgba(59, 130, 246, 0.18);
  border: 1px solid rgba(147, 197, 253, 0.18);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.12);
  transition: transform 240ms ease;

  .q-icon {
    font-size: 30px;
  }
}

.service-card:hover .service-icon {
  transform: translateY(-3px) scale(1.05);
}

.service-card h2 {
  margin: 24px 0 0;
  color: white;
  font-size: clamp(28px, 3vw, 42px);
  line-height: 0.98;
  letter-spacing: -0.065em;
  font-weight: 950;
}

.service-text {
  margin: 16px 0 0;
  color: rgba(255, 255, 255, 0.66);
  line-height: 1.72;
}

.service-best {
  margin-top: 18px;
  padding: 14px;
  border-radius: 18px;
  background: rgba(15, 23, 42, 0.36);
  border: 1px solid rgba(147, 197, 253, 0.13);

  small {
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

.service-points {
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

  .q-icon {
    flex: 0 0 auto;
    color: #93c5fd;
    font-size: 18px;
    margin-top: 1px;
  }
}

.service-actions {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
  margin-top: auto;
  padding-top: 24px;

  a {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: rgba(219, 234, 254, 0.86);
    text-decoration: none;
    font-size: 14px;
    font-weight: 900;
    transition:
      color 220ms ease,
      transform 220ms ease;

    &:hover {
      color: white;
      transform: translateX(3px);
    }
  }
}

/* PROCESS */

.process-section {
  padding: 0 0 72px;
}

.process-card {
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
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

.process-copy {
  span {
    color: #93c5fd;
    font-size: 13px;
    font-weight: 950;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  h2 {
    max-width: 760px;
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

.points {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.point-card {
  min-height: 108px;
  display: grid;
  align-content: start;
  gap: 8px;
  padding: 16px;
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

  > span {
    color: rgba(255, 255, 255, 0.22);
    font-size: 28px;
    line-height: 1;
    font-weight: 950;
    letter-spacing: -0.07em;
  }

  .q-icon {
    color: #93c5fd;
    font-size: 21px;
  }

  strong {
    color: rgba(255, 255, 255, 0.88);
    line-height: 1.35;
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

@keyframes cardScanner {
  0% {
    left: -80%;
  }

  100% {
    left: 130%;
  }
}

@keyframes featuredGlow {
  0%,
  100% {
    transform: scale(1) translate(0, 0);
    opacity: 0.72;
  }

  50% {
    transform: scale(1.16) translate(-18px, 18px);
    opacity: 1;
  }
}

@keyframes iconPulse {
  0%,
  100% {
    box-shadow:
      0 0 0 0 rgba(147, 197, 253, 0),
      inset 0 1px 0 rgba(255, 255, 255, 0.12);
  }

  50% {
    box-shadow:
      0 0 0 10px rgba(147, 197, 253, 0.08),
      0 18px 44px rgba(37, 99, 235, 0.24),
      inset 0 1px 0 rgba(255, 255, 255, 0.16);
  }
}
/* SERVICE SEO PAGES */

.service-pages-section {
  padding: 34px 0 48px;
}

.service-pages-head {
  max-width: 920px;
  margin: 0 auto;
  text-align: center;

  span {
    display: inline-flex;
    align-items: center;
    padding: 9px 13px;
    border-radius: 999px;
    color: #dbeafe;
    background:
      radial-gradient(circle at 20% 0%, rgba(255, 255, 255, 0.14), transparent 58%),
      linear-gradient(135deg, rgba(59, 130, 246, 0.16), rgba(124, 58, 237, 0.08));
    border: 1px solid rgba(147, 197, 253, 0.2);
    font-size: 12px;
    font-weight: 950;
    text-transform: uppercase;
    letter-spacing: 0.085em;
  }

  h2 {
    margin: 16px 0 0;
    color: white;
    font-size: clamp(32px, 4vw, 58px);
    line-height: 0.98;
    letter-spacing: -0.075em;
    font-weight: 950;
  }

  p {
    max-width: 760px;
    margin: 18px auto 0;
    color: rgba(255, 255, 255, 0.66);
    font-size: 16px;
    line-height: 1.72;
  }
}

.service-pages-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  align-items: stretch;
  margin-top: 34px;
}

.service-pages-grid :deep(.reveal) {
  height: 100%;
}

.service-page-card {
  position: relative;
  height: 100%;
  min-height: 280px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 24px;
  border-radius: 32px;
  color: white;
  text-decoration: none;
  isolation: isolate;
  background:
    radial-gradient(circle at top right, rgba(96, 165, 250, 0.15), transparent 18rem),
    linear-gradient(145deg, rgba(255, 255, 255, 0.105), rgba(255, 255, 255, 0.04));
  border: 1px solid rgba(255, 255, 255, 0.115);
  box-shadow:
    0 22px 70px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  transition:
    transform 260ms cubic-bezier(0.22, 1, 0.36, 1),
    border-color 260ms ease,
    box-shadow 260ms ease,
    filter 260ms ease;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    transform: translateX(-120%);
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.11), transparent);
    transition: transform 760ms cubic-bezier(0.22, 1, 0.36, 1);
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-8px);
    border-color: rgba(147, 197, 253, 0.3);
    box-shadow:
      0 32px 90px rgba(37, 99, 235, 0.16),
      0 0 42px rgba(124, 58, 237, 0.1);
    filter: saturate(1.05);
  }

  &:hover::after {
    transform: translateX(120%);
  }

  h3 {
    margin: 22px 0 0;
    color: white;
    font-size: 27px;
    line-height: 1.04;
    letter-spacing: -0.055em;
    font-weight: 950;
  }

  p {
    flex: 1;
    margin: 14px 0 0;
    color: rgba(255, 255, 255, 0.64);
    line-height: 1.68;
  }

  > span {
    width: fit-content;
    display: inline-flex;
    align-items: center;
    margin-top: 22px;
    color: #dbeafe;
    font-size: 14px;
    font-weight: 950;
  }
}

.service-page-card__glow {
  position: absolute;
  right: -100px;
  top: -100px;
  z-index: -1;
  width: 230px;
  height: 230px;
  border-radius: 999px;
  background: rgba(59, 130, 246, 0.2);
  filter: blur(32px);
  opacity: 0.78;
  transition:
    transform 360ms ease,
    opacity 360ms ease;
}

.service-page-card:hover .service-page-card__glow {
  transform: scale(1.15) translate(-18px, 18px);
  opacity: 1;
}

.service-page-card__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.service-page-card__icon {
  width: 56px;
  height: 56px;
  display: grid;
  place-items: center;
  border-radius: 20px;
  color: #dbeafe;
  background: rgba(59, 130, 246, 0.18);
  border: 1px solid rgba(147, 197, 253, 0.18);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.12);

  .q-icon {
    font-size: 29px;
  }
}

.service-page-card__arrow {
  color: rgba(219, 234, 254, 0.64);
  font-size: 23px;
  transition:
    transform 220ms ease,
    color 220ms ease;
}

.service-page-card:hover .service-page-card__arrow {
  transform: translateX(4px);
  color: white;
}
/* RESPONSIVE */

@media (max-width: 1150px) {
  .service-pages-grid {
    grid-template-columns: 1fr;
  }
  .service-guide,
  .process-card {
    grid-template-columns: 1fr;
  }

  .service-guide__steps {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 980px) {
  .services-grid {
    grid-template-columns: 1fr;
  }

  .points {
    grid-template-columns: 1fr;
  }

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

  .services-hero {
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

  .service-card {
    min-height: auto;
    padding: 22px;
    border-radius: 30px;
  }

  .service-actions {
    align-items: stretch;
    flex-direction: column;

    .q-btn {
      width: 100%;
    }

    a {
      justify-content: center;
    }
  }

  .featured-badge {
    position: static;
    width: fit-content;
    margin-bottom: 14px;
  }
}

@media (max-width: 460px) {
  .hero-shell {
    padding: 26px 20px;
  }

  .hero-shell h1 {
    font-size: clamp(40px, 13vw, 58px);
  }

  .service-card__head {
    align-items: flex-start;
  }

  .service-number {
    font-size: 38px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-shell::after,
  .hero-orb,
  .service-card,
  .service-card__glow,
  .service-icon,
  .btn-primary,
  .btn-ghost,
  .service-btn,
  .guide-item,
  .point-card {
    animation: none !important;
    transition: none !important;
  }

  .service-card::after,
  .btn-primary::after,
  .btn-ghost::after,
  .service-btn::after {
    display: none;
  }
}
.product-promo-section {
  padding: 0 0 72px;
}

.product-promo-card {
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 28px;
  padding: clamp(30px, 4vw, 50px);
  border-radius: 42px;
  color: white;
  background:
    radial-gradient(circle at 18% 0%, rgba(34, 197, 94, 0.18), transparent 28rem),
    radial-gradient(circle at 94% 14%, rgba(59, 130, 246, 0.22), transparent 28rem),
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

.product-promo-actions {
  display: flex;
  flex: 0 0 auto;
  gap: 12px;
  flex-wrap: wrap;
}

@media (max-width: 980px) {
  .product-promo-card {
    align-items: stretch;
    flex-direction: column;

    .q-btn {
      width: 100%;
    }
  }

  .product-promo-actions {
    flex-direction: column;
    width: 100%;
  }
}
</style>
