<template>
  <q-page class="page">
    <section class="examples-hero">
      <div class="container">
        <RevealSection variant="zoom">
          <div class="hero-shell">
            <div class="hero-badge">
              <q-icon name="auto_awesome" />
              <span>{{ t('examples.label') }}</span>
            </div>

            <h1>{{ t('examples.title') }}</h1>

            <p class="hero-text">
              {{ t('examples.text') }}
            </p>

            <p class="demo-note">
              {{ t('examples.demoNote') }}
            </p>

            <div class="hero-actions">
              <q-btn
                unelevated
                rounded
                no-caps
                class="btn-primary"
                :label="t('examples.heroCtaPrimary') || t('nav.sendInquiry')"
                to="/kontakt"
              />

              <q-btn
                outline
                rounded
                no-caps
                class="btn-ghost"
                :label="t('examples.heroCtaSecondary') || t('nav.pricing')"
                to="/cene"
              />
            </div>
          </div>
        </RevealSection>
      </div>
    </section>

    <section class="examples-showcase">
      <div class="container">
        <div class="showcase-grid">
          <RevealSection
            v-for="(example, index) in examples"
            :key="example.title"
            :delay="index * 110"
            variant="zoom"
          >
            <article
              class="example-card"
              :class="[
                `example-card--${tones[index] || 'blue'}`,
                { 'example-card--featured': index === 0 },
              ]"
            >
              <div class="example-card__glow"></div>

              <div class="browser-preview" :class="`browser-preview--${tones[index] || 'blue'}`">
                <div class="browser-preview__chrome">
                  <div class="browser-preview__dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <div class="browser-preview__url">
                    {{ getPreviewUrl(example, index) }}
                  </div>
                </div>

                <div class="browser-preview__screen">
                  <div class="preview-nav">
                    <span v-for="item in example.preview.nav" :key="item">
                      {{ item }}
                    </span>
                  </div>

                  <div class="preview-hero">
                    <div>
                      <strong>{{ example.preview.heroTitle }}</strong>
                      <em>{{ example.preview.cta }}</em>
                    </div>
                  </div>

                  <div
                    v-if="example.code !== 'website_redesign'"
                    class="preview-cards"
                    :class="{ 'preview-cards--small': (example.preview.cards || []).length > 3 }"
                  >
                    <span v-for="card in example.preview.cards || []" :key="card">
                      {{ card }}
                    </span>
                  </div>

                  <div v-else class="before-after">
                    <div class="before-after__box before-after__box--before">
                      <span>{{ example.preview.before }}</span>
                      <i></i>
                      <i></i>
                      <i></i>
                    </div>

                    <div class="before-after__arrow">
                      <q-icon name="east" />
                    </div>

                    <div class="before-after__box before-after__box--after">
                      <span>{{ example.preview.after }}</span>
                      <strong>{{ example.preview.cta }}</strong>
                    </div>
                  </div>
                </div>
              </div>

              <div class="example-content">
                <div class="example-kicker">
                  <span>{{ getKicker(example, index) }}</span>
                  <i>{{ String(index + 1).padStart(2, '0') }}</i>
                </div>

                <h2>{{ example.title }}</h2>

                <p class="example-subtitle">
                  {{ example.subtitle }}
                </p>

                <p class="example-description">
                  {{ example.description }}
                </p>

                <ul class="example-benefits">
                  <li v-for="bullet in example.bullets" :key="bullet">
                    <q-icon name="done" />
                    <span>{{ bullet }}</span>
                  </li>
                </ul>

                <div class="example-actions">
                  <q-btn
                    v-if="example.liveUrl"
                    unelevated
                    rounded
                    no-caps
                    class="example-btn"
                    :label="uiLabels.viewProject"
                    :href="example.liveUrl"
                    target="_blank"
                    rel="noopener"
                  />

                  <q-btn
                    v-else
                    unelevated
                    rounded
                    no-caps
                    class="example-btn"
                    :label="t('examples.cta')"
                    to="/kontakt"
                  />

                  <router-link class="example-link" to="/kontakt">
                    {{
                      example.liveUrl
                        ? uiLabels.wantSimilar
                        : t('examples.quickAsk') || t('nav.sendInquiry')
                    }}
                    <q-icon name="arrow_forward" />
                  </router-link>
                </div>
              </div>
            </article>
          </RevealSection>
        </div>
      </div>
    </section>

    <section class="examples-cta">
      <div class="container">
        <RevealSection variant="up">
          <div class="final-card">
            <div>
              <span>{{ t('examples.finalCta.title') }}</span>
              <h2>{{ t('examples.finalCta.text') }}</h2>
              <p>{{ t('examples.note') }}</p>
            </div>

            <q-btn
              unelevated
              rounded
              no-caps
              size="lg"
              class="btn-primary final-card__btn"
              :label="t('examples.finalCta.button')"
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

const isEnglish = computed(() => String(locale.value || '').startsWith('en'))

const uiLabels = computed(() => {
  if (isEnglish.value) {
    return {
      viewProject: 'View live site',
      wantSimilar: 'I want a similar website',
    }
  }

  return {
    viewProject: 'Pogledaj sajt',
    wantSimilar: 'Želim sličan sajt',
  }
})

const realProject = computed(() => {
  if (isEnglish.value) {
    return {
      code: 'auto_centar_salinic',
      liveUrl: 'https://www.acsalinic.com/',
      previewUrl: 'www.acsalinic.com',
      kicker: 'Live client project',
      title: 'Auto Centar Šalinić',
      subtitle:
        'Presentation website for an auto service and wheel alignment business in Kraljevo.',
      description:
        'A complete local business website built for Auto Centar Šalinić, with a custom domain, responsive layout, clear call-to-action buttons, basic SEO setup, sitemap, robots.txt and Google Search Console indexing preparation.',
      bullets: [
        'Custom domain and live production deployment',
        'Clear mobile-first calls for phone inquiries',
        'Local SEO setup for Kraljevo searches',
        'robots.txt, sitemap.xml and canonical URL',
        'Google-ready structure for indexing',
      ],
      preview: {
        nav: ['Services', 'Location', 'Reviews', 'Contact'],
        heroTitle: 'Wheel alignment and auto service in Kraljevo',
        cta: 'Call the service',
        cards: ['Wheel alignment', 'Suspension repair', 'Minor service'],
      },
    }
  }

  return {
    code: 'auto_centar_salinic',
    liveUrl: 'https://www.acsalinic.com/',
    previewUrl: 'www.acsalinic.com',
    kicker: 'Realizovan projekat',
    title: 'Auto Centar Šalinić',
    subtitle: 'Prezentacioni sajt za auto servis i reglažu trapa u Kraljevu.',
    description:
      'Kompletan lokalni poslovni sajt urađen za Auto Centar Šalinić: domen, responsive dizajn, jasni pozivi za kontakt, osnovni SEO, sitemap, robots.txt i priprema za indeksiranje kroz Google Search Console.',
    bullets: [
      'Domen i produkciona objava sajta',
      'Jasni CTA dugmići za pozive sa telefona',
      'Lokalni SEO za pretrage u Kraljevu',
      'robots.txt, sitemap.xml i canonical URL',
      'Struktura spremna za Google indeksiranje',
    ],
    preview: {
      nav: ['Usluge', 'Lokacija', 'Recenzije', 'Kontakt'],
      heroTitle: 'Reglaža trapa i auto servis u Kraljevu',
      cta: 'Pozovite servis',
      cards: ['Reglaža trapa', 'Popravka trapa', 'Mali servis'],
    },
  }
})

const translatedExamples = computed(() => {
  const items = tm('examples.items')
  return Array.isArray(items) ? items : []
})

const examples = computed(() => [realProject.value, ...translatedExamples.value])

const tones = ['cyan', 'blue', 'pink', 'cyan', 'neutral']

const previewUrls = [
  'www.acsalinic.com',
  'klima-servis-demo.rs',
  'landing-kampanja.rs',
  'firma-modern.rs',
  'redizajn-sajta.rs',
]

const kickersSr = ['Realizovan projekat', 'Lokalni biznis', 'Kampanja', 'Firma', 'Redizajn']
const kickersEn = ['Live project', 'Local business', 'Campaign', 'Company', 'Redesign']

function getPreviewUrl(example, index) {
  return example.previewUrl || previewUrls[index] || `${example.code || 'demo'}.rs`
}

function getKicker(example, index) {
  if (example.kicker) return example.kicker

  return isEnglish.value ? kickersEn[index] || 'Demo' : kickersSr[index] || 'Demo'
}

onMounted(() => {
  document.title = t('seo.examplesTitle')
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

.examples-hero {
  position: relative;
  padding: 104px 0 44px;
}

.hero-shell {
  position: relative;
  max-width: 1100px;
  margin: 0 auto;
  padding: clamp(34px, 5vw, 58px);
  overflow: hidden;
  border-radius: 44px;
  text-align: center;
  background:
    radial-gradient(circle at 16% 0%, rgba(59, 130, 246, 0.24), transparent 26rem),
    radial-gradient(circle at 88% 10%, rgba(219, 39, 119, 0.18), transparent 26rem),
    linear-gradient(135deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.04));
  border: 1px solid rgba(255, 255, 255, 0.14);
  box-shadow:
    0 28px 90px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.12);

  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    z-index: -1;
    border-radius: inherit;
    background: linear-gradient(
      135deg,
      rgba(96, 165, 250, 0.5),
      transparent 32%,
      rgba(219, 39, 119, 0.34)
    );
    opacity: 0.18;
  }

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    top: -120px;
    width: 420px;
    height: 420px;
    transform: translateX(-50%);
    border-radius: 999px;
    background: rgba(124, 58, 237, 0.22);
    filter: blur(44px);
    pointer-events: none;
    animation: heroGlow 7s ease-in-out infinite;
  }
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
    font-size: 20px;
    color: #93c5fd;
  }
}

h1 {
  position: relative;
  z-index: 2;
  max-width: 920px;
  margin: 0 auto;
  color: white;
  font-size: clamp(42px, 6vw, 82px);
  line-height: 0.92;
  letter-spacing: -0.085em;
  font-weight: 950;
}

.hero-text,
.demo-note {
  position: relative;
  z-index: 2;
  max-width: 780px;
  margin: 22px auto 0;
  color: rgba(255, 255, 255, 0.7);
  font-size: 17px;
  line-height: 1.75;
}

.demo-note {
  max-width: 760px;
  margin-top: 16px;
  color: rgba(219, 234, 254, 0.72);
  font-size: 15px;
}

.hero-actions {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 30px;
}

.btn-primary,
.btn-ghost,
.example-btn {
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
.example-btn {
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

.examples-showcase {
  padding: 30px 0 84px;
}

.showcase-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 28px;
  align-items: stretch;
}

.showcase-grid :deep(.reveal) {
  height: 100%;
}

.example-card {
  position: relative;
  height: 100%;
  min-height: 720px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 24px;
  border-radius: 38px;
  color: white;
  isolation: isolate;
  background:
    radial-gradient(circle at 18% 0%, rgba(96, 165, 250, 0.14), transparent 28rem),
    linear-gradient(155deg, rgba(255, 255, 255, 0.125), rgba(255, 255, 255, 0.045));
  border: 1px solid rgba(255, 255, 255, 0.145);
  box-shadow:
    0 22px 60px rgba(2, 6, 23, 0.32),
    inset 0 1px 0 rgba(255, 255, 255, 0.13);
  transform-style: preserve-3d;
  transition:
    transform 320ms cubic-bezier(0.22, 1, 0.36, 1),
    border-color 320ms ease,
    box-shadow 320ms ease,
    filter 320ms ease;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -2;
    opacity: 0;
    border-radius: inherit;
    background:
      radial-gradient(circle at 18% 0%, rgba(96, 165, 250, 0.22), transparent 24rem),
      radial-gradient(circle at 92% 18%, rgba(219, 39, 119, 0.16), transparent 24rem);
    transition: opacity 320ms ease;
  }

  &:hover {
    transform: translateY(-12px) scale(1.006);
    border-color: rgba(147, 197, 253, 0.34);
    box-shadow:
      0 34px 100px rgba(37, 99, 235, 0.16),
      0 0 50px rgba(124, 58, 237, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.17);
    filter: saturate(1.04);
  }

  &:hover::before {
    opacity: 1;
  }
}

.example-card--featured {
  border-color: rgba(147, 197, 253, 0.24);
}

.example-card__glow {
  position: absolute;
  right: -120px;
  top: -120px;
  z-index: -1;
  width: 260px;
  height: 260px;
  border-radius: 999px;
  background: rgba(59, 130, 246, 0.24);
  filter: blur(34px);
  opacity: 0.72;
  pointer-events: none;
  transition:
    transform 420ms ease,
    opacity 420ms ease;
}

.example-card:hover .example-card__glow {
  transform: scale(1.16) translate(-18px, 18px);
  opacity: 1;
}

.example-card--pink .example-card__glow {
  background: rgba(219, 39, 119, 0.24);
}

.example-card--cyan .example-card__glow {
  background: rgba(34, 211, 238, 0.2);
}

.browser-preview {
  position: relative;
  height: 330px;
  flex: 0 0 auto;
  overflow: hidden;
  border-radius: 28px;
  background:
    radial-gradient(circle at 18% 10%, rgba(59, 130, 246, 0.35), transparent 13rem),
    linear-gradient(145deg, rgba(15, 23, 42, 0.98), rgba(30, 41, 59, 0.88));
  border: 1px solid rgba(255, 255, 255, 0.13);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.1),
    0 20px 50px rgba(0, 0, 0, 0.22);
  transition:
    transform 340ms cubic-bezier(0.22, 1, 0.36, 1),
    filter 340ms ease;
}

.example-card:hover .browser-preview {
  transform: translateY(-4px) scale(1.012);
  filter: saturate(1.13);
}

.browser-preview--pink {
  background:
    radial-gradient(circle at 18% 10%, rgba(236, 72, 153, 0.34), transparent 13rem),
    linear-gradient(145deg, rgba(15, 23, 42, 0.98), rgba(30, 41, 59, 0.88));
}

.browser-preview--cyan {
  background:
    radial-gradient(circle at 18% 10%, rgba(34, 211, 238, 0.27), transparent 13rem),
    linear-gradient(145deg, rgba(15, 23, 42, 0.98), rgba(30, 41, 59, 0.88));
}

.browser-preview--neutral {
  background:
    radial-gradient(circle at 18% 10%, rgba(148, 163, 184, 0.25), transparent 13rem),
    linear-gradient(145deg, rgba(15, 23, 42, 0.98), rgba(30, 41, 59, 0.88));
}

.browser-preview__chrome {
  height: 48px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 15px;
  background: rgba(255, 255, 255, 0.055);
  border-bottom: 1px solid rgba(255, 255, 255, 0.085);
}

.browser-preview__dots {
  display: flex;
  gap: 6px;
  flex: 0 0 auto;

  span {
    width: 8px;
    height: 8px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.34);
  }
}

.browser-preview__url {
  min-width: 0;
  flex: 1;
  padding: 8px 12px;
  overflow: hidden;
  border-radius: 999px;
  color: rgba(219, 234, 254, 0.68);
  background: rgba(15, 23, 42, 0.72);
  border: 1px solid rgba(255, 255, 255, 0.08);
  font-size: 11px;
  font-weight: 800;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.browser-preview__screen {
  position: relative;
  height: calc(100% - 48px);
  padding: 18px;
}

.preview-nav {
  display: flex;
  gap: 7px;
  flex-wrap: wrap;

  span {
    padding: 6px 10px;
    border-radius: 999px;
    color: rgba(255, 255, 255, 0.78);
    background: rgba(255, 255, 255, 0.09);
    font-size: 10px;
    font-weight: 900;
  }
}

.preview-hero {
  display: flex;
  align-items: center;
  min-height: 128px;
  margin-top: 18px;
  padding: 18px;
  border-radius: 24px;
  background:
    radial-gradient(circle at 90% 0%, rgba(255, 255, 255, 0.16), transparent 14rem),
    linear-gradient(135deg, rgba(37, 99, 235, 0.66), rgba(124, 58, 237, 0.38));
  border: 1px solid rgba(255, 255, 255, 0.12);

  strong {
    display: block;
    max-width: 390px;
    color: white;
    font-size: clamp(25px, 2.8vw, 36px);
    line-height: 0.97;
    letter-spacing: -0.065em;
    font-weight: 950;
  }

  em {
    width: fit-content;
    display: inline-flex;
    margin-top: 14px;
    padding: 9px 13px;
    border-radius: 999px;
    color: white;
    background: linear-gradient(135deg, #2563eb, #7c3aed);
    box-shadow: 0 16px 36px rgba(37, 99, 235, 0.28);
    font-size: 12px;
    font-style: normal;
    font-weight: 950;
  }
}

.preview-cards {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 9px;
  margin-top: 12px;

  span {
    min-height: 58px;
    display: flex;
    align-items: center;
    padding: 10px;
    border-radius: 16px;
    color: rgba(255, 255, 255, 0.78);
    background: rgba(255, 255, 255, 0.085);
    border: 1px solid rgba(255, 255, 255, 0.075);
    font-size: 12px;
    font-weight: 850;
    line-height: 1.3;
  }
}

.preview-cards--small span {
  font-size: 11px;
}

.before-after {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 10px;
  align-items: center;
  margin-top: 16px;
}

.before-after__box {
  min-height: 126px;
  padding: 14px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.075);
  border: 1px solid rgba(255, 255, 255, 0.09);

  span {
    color: rgba(255, 255, 255, 0.72);
    font-size: 12px;
    font-weight: 950;
    text-transform: uppercase;
    letter-spacing: 0.07em;
  }

  i {
    display: block;
    height: 9px;
    margin-top: 11px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.12);

    &:nth-child(3) {
      width: 72%;
    }

    &:nth-child(4) {
      width: 46%;
    }
  }

  strong {
    display: block;
    margin-top: 20px;
    color: white;
    font-size: 13px;
    font-weight: 950;
  }
}

.before-after__box--after {
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.36), rgba(124, 58, 237, 0.26));
  border-color: rgba(147, 197, 253, 0.22);
}

.before-after__arrow {
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  border-radius: 999px;
  color: white;
  background: linear-gradient(135deg, #2563eb, #db2777);
}

.example-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-top: 24px;
}

.example-kicker {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  span {
    color: #93c5fd;
    font-size: 12px;
    font-weight: 950;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  i {
    color: rgba(255, 255, 255, 0.18);
    font-size: 36px;
    line-height: 1;
    font-style: normal;
    font-weight: 950;
    letter-spacing: -0.08em;
  }
}

.example-content h2 {
  margin: 12px 0 0;
  color: white;
  font-size: clamp(30px, 3vw, 42px);
  line-height: 0.98;
  letter-spacing: -0.065em;
  font-weight: 950;
}

.example-subtitle {
  margin: 14px 0 0;
  color: rgba(219, 234, 254, 0.9);
  font-weight: 850;
  line-height: 1.6;
}

.example-description {
  margin: 12px 0 0;
  color: rgba(255, 255, 255, 0.64);
  line-height: 1.72;
}

.example-benefits {
  display: grid;
  gap: 9px;
  margin: 20px 0 0;
  padding: 0;
  list-style: none;

  li {
    display: flex;
    gap: 9px;
    align-items: center;
    color: rgba(255, 255, 255, 0.8);
    font-weight: 850;
  }

  .q-icon {
    flex: 0 0 auto;
    color: #93c5fd;
    font-size: 18px;
  }
}

.example-actions {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
  margin-top: auto;
  padding-top: 24px;
}

.example-btn {
  min-width: 190px;
}

.example-link {
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

  .q-icon {
    font-size: 18px;
  }
}

.examples-cta {
  padding: 0 0 90px;
}

.final-card {
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 26px;
  padding: clamp(28px, 4vw, 44px);
  border-radius: 38px;
  background:
    radial-gradient(circle at 18% 0%, rgba(37, 99, 235, 0.24), transparent 30rem),
    radial-gradient(circle at 94% 14%, rgba(219, 39, 119, 0.2), transparent 28rem),
    linear-gradient(135deg, rgba(255, 255, 255, 0.13), rgba(255, 255, 255, 0.045));
  border: 1px solid rgba(255, 255, 255, 0.14);
  box-shadow: 0 28px 90px rgba(0, 0, 0, 0.26);

  span {
    color: #93c5fd;
    font-size: 13px;
    font-weight: 950;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  h2 {
    max-width: 820px;
    margin: 12px 0 0;
    color: white;
    font-size: clamp(30px, 4vw, 54px);
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

.final-card__btn {
  flex: 0 0 auto;
}

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

@media (max-width: 1100px) {
  .showcase-grid {
    grid-template-columns: 1fr;
  }

  .example-card {
    min-height: auto;
  }
}

@media (max-width: 760px) {
  .container {
    width: min(100% - 28px, 1360px);
  }

  .examples-hero {
    padding-top: 72px;
  }

  .hero-shell {
    border-radius: 32px;
    text-align: left;
  }

  .hero-badge,
  .hero-text,
  .demo-note {
    margin-left: 0;
    margin-right: 0;
  }

  .hero-actions {
    justify-content: flex-start;
  }

  .browser-preview {
    height: auto;
    min-height: 340px;
  }

  .browser-preview__screen {
    height: auto;
  }

  .preview-cards,
  .before-after {
    grid-template-columns: 1fr;
  }

  .before-after__arrow {
    transform: rotate(90deg);
    margin: 0 auto;
  }

  .example-card {
    padding: 18px;
    border-radius: 30px;
  }

  .example-actions {
    align-items: stretch;
    flex-direction: column;
  }

  .example-btn {
    width: 100%;
  }

  .example-link {
    justify-content: center;
  }

  .final-card {
    align-items: flex-start;
    flex-direction: column;
  }

  .final-card__btn {
    width: 100%;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: clamp(40px, 13vw, 58px);
  }

  .hero-shell {
    padding: 26px 20px;
  }

  .preview-hero {
    min-height: 116px;

    strong {
      font-size: 26px;
    }
  }

  .example-content h2 {
    font-size: 30px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-shell::after,
  .example-card,
  .browser-preview,
  .btn-primary,
  .btn-ghost,
  .example-btn,
  .example-link {
    animation: none !important;
    transition: none !important;
  }

  .btn-primary::after,
  .btn-ghost::after,
  .example-btn::after {
    display: none;
  }
}
</style>
