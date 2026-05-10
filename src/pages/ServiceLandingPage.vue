<template>
  <q-page class="service-page">
    <section class="landing-hero">
      <div class="container">
        <RevealSection variant="zoom">
          <div class="landing-hero__shell">
            <div class="landing-hero__glow landing-hero__glow--one"></div>
            <div class="landing-hero__glow landing-hero__glow--two"></div>

            <div class="landing-badge">
              <q-icon name="auto_awesome" />
              <span>{{ page.eyebrow }}</span>
            </div>

            <h1>{{ page.title }}</h1>

            <p>{{ page.lead }}</p>

            <div class="landing-actions">
              <q-btn
                unelevated
                rounded
                no-caps
                size="lg"
                class="btn-primary"
                :label="t('nav.sendInquiry')"
                to="/kontakt"
              />

              <q-btn
                outline
                rounded
                no-caps
                size="lg"
                class="btn-ghost"
                :label="t('nav.pricing')"
                to="/cene"
              />
            </div>
          </div>
        </RevealSection>
      </div>
    </section>

    <section class="landing-section">
      <div class="container landing-split">
        <RevealSection variant="left">
          <div class="problem-card">
            <span>{{ page.eyebrow }}</span>
            <h2>{{ page.problemTitle }}</h2>
            <p>{{ page.problemText }}</p>
          </div>
        </RevealSection>

        <RevealSection variant="right" :delay="120">
          <div class="benefits-card">
            <h2>{{ locale === 'en' ? 'What you get' : 'Šta dobijate' }}</h2>

            <ul>
              <li v-for="benefit in page.benefits" :key="benefit">
                <q-icon name="check_circle" />
                <span>{{ benefit }}</span>
              </li>
            </ul>
          </div>
        </RevealSection>
      </div>
    </section>

    <section class="example-section">
      <div class="container example-layout">
        <RevealSection variant="left">
          <div class="example-copy">
            <span>{{ locale === 'en' ? 'Example structure' : 'Primer strukture' }}</span>
            <h2>{{ exampleTitle }}</h2>
            <p>{{ exampleText }}</p>

            <div class="example-tags">
              <div v-for="tag in exampleTags" :key="tag">
                <q-icon name="check" />
                <span>{{ tag }}</span>
              </div>
            </div>
          </div>
        </RevealSection>

        <RevealSection variant="right" :delay="120">
          <div class="website-preview">
            <div class="website-preview__bar">
              <span></span>
              <span></span>
              <span></span>
              <i>{{ previewHost }}</i>
            </div>

            <div class="website-preview__hero">
              <small>{{ preview.kicker }}</small>
              <strong>{{ preview.title }}</strong>
              <p>{{ preview.text }}</p>

              <div class="website-preview__buttons">
                <em>{{ preview.primaryCta }}</em>
                <b>{{ preview.secondaryCta }}</b>
              </div>
            </div>

            <div class="website-preview__cards">
              <div v-for="item in preview.cards" :key="item">
                <q-icon name="check_circle" />
                <span>{{ item }}</span>
              </div>
            </div>

            <router-link class="website-preview__phone" to="/kontakt" aria-label="Kontakt">
              <div class="phone-speaker"></div>
              <strong>{{ preview.phoneTitle }}</strong>
              <span>{{ preview.phoneCta }}</span>
            </router-link>
          </div>
        </RevealSection>
      </div>
    </section>

    <section class="landing-section landing-section--compact">
      <div class="container">
        <div class="details-grid">
          <RevealSection
            v-for="(section, index) in page.sections"
            :key="section.title"
            :delay="index * 90"
            variant="up"
          >
            <article class="detail-card">
              <span>{{ String(index + 1).padStart(2, '0') }}</span>
              <h3>{{ section.title }}</h3>
              <p>{{ section.text }}</p>
            </article>
          </RevealSection>
        </div>
      </div>
    </section>

    <section class="landing-section">
      <div class="container">
        <RevealSection variant="zoom">
          <div class="landing-cta">
            <div>
              <span>{{ page.eyebrow }}</span>
              <h2>{{ page.ctaTitle }}</h2>
              <p>{{ page.ctaText }}</p>
            </div>

            <q-btn
              unelevated
              rounded
              no-caps
              size="lg"
              class="btn-primary"
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
import { computed, onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import RevealSection from 'src/components/site/RevealSection.vue'
import { serviceLandingPages } from 'src/data/serviceLandingPages'

const props = defineProps({
  pageKey: {
    type: String,
    required: true,
  },
})

const route = useRoute()
const { t, locale } = useI18n()

const siteUrl = import.meta.env.VITE_SITE_URL || 'https://www.ml-webstudio.com'

const page = computed(() => {
  const item = serviceLandingPages[props.pageKey] || serviceLandingPages['izrada-sajtova']
  return item[locale.value] || item.sr
})

const previewHost = computed(() => {
  if (props.pageKey === 'izrada-sajtova-za-klima-servise') {
    return locale.value === 'en' ? 'hvac-service.com' : 'klima-servis.rs'
  }

  if (props.pageKey === 'izrada-sajtova-za-majstore') {
    return locale.value === 'en' ? 'local-service.com' : 'majstor-usluge.rs'
  }

  if (props.pageKey === 'izrada-sajtova-za-ordinacije') {
    return locale.value === 'en' ? 'clinic-example.com' : 'ordinacija.rs'
  }

  return locale.value === 'en' ? 'example-website.com' : 'primer-sajta.rs'
})

const preview = computed(() => {
  return (
    page.value.preview || {
      kicker: page.value.eyebrow,
      title: page.value.title,
      text: page.value.lead,
      primaryCta: locale.value === 'en' ? 'Send inquiry' : 'Pošalji upit',
      secondaryCta: locale.value === 'en' ? 'View services' : 'Pogledaj usluge',
      cards: page.value.sections?.map((item) => item.title).slice(0, 3) || [],
      phoneTitle: locale.value === 'en' ? 'Need a website?' : 'Treba vam sajt?',
      phoneCta: locale.value === 'en' ? 'Contact now' : 'Kontaktiraj',
    }
  )
})

const exampleTitle = computed(() => {
  return (
    page.value.exampleTitle ||
    (locale.value === 'en'
      ? 'Example of how this page could look.'
      : 'Primer kako bi ovakva stranica mogla da izgleda.')
  )
})

const exampleText = computed(() => {
  return (
    page.value.exampleText ||
    (locale.value === 'en'
      ? 'A page like this should quickly show the offer, explain the value, build trust and guide visitors toward contact.'
      : 'Ovakva stranica treba brzo da prikaže ponudu, objasni vrednost, izgradi poverenje i usmeri korisnika ka kontaktu.')
  )
})

const exampleTags = computed(() => {
  return page.value.exampleTags || page.value.benefits?.slice(0, 4) || []
})

function setMetaTag(name, content) {
  let tag = document.querySelector(`meta[name="${name}"]`)

  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('name', name)
    document.head.appendChild(tag)
  }

  tag.setAttribute('content', content)
}

function setPropertyMetaTag(property, content) {
  let tag = document.querySelector(`meta[property="${property}"]`)

  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('property', property)
    document.head.appendChild(tag)
  }

  tag.setAttribute('content', content)
}

function setCanonical(url) {
  let link = document.querySelector('link[rel="canonical"]')

  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    document.head.appendChild(link)
  }

  link.setAttribute('href', url)
}

function applySeo() {
  const url = `${siteUrl}${route.path}`

  document.title = page.value.metaTitle

  setMetaTag('description', page.value.metaDescription)
  setCanonical(url)

  setPropertyMetaTag('og:title', page.value.metaTitle)
  setPropertyMetaTag('og:description', page.value.metaDescription)
  setPropertyMetaTag('og:url', url)
  setPropertyMetaTag('og:type', 'website')
}

onMounted(applySeo)

watch(
  () => [locale.value, route.path, props.pageKey],
  () => applySeo(),
)
</script>

<style scoped lang="scss">
.service-page {
  position: relative;
  z-index: 1;
  overflow: hidden;
}

.container {
  width: min(1360px, calc(100% - 48px));
  margin: 0 auto;
}

/* HERO */

.landing-hero {
  padding: 104px 0 48px;
}

.landing-hero__shell {
  position: relative;
  overflow: hidden;
  max-width: 1180px;
  margin: 0 auto;
  padding: clamp(34px, 5vw, 66px);
  border-radius: 46px;
  text-align: center;
  isolation: isolate;
  background:
    radial-gradient(circle at 16% 0%, rgba(59, 130, 246, 0.28), transparent 26rem),
    radial-gradient(circle at 86% 12%, rgba(219, 39, 119, 0.2), transparent 28rem),
    linear-gradient(135deg, rgba(255, 255, 255, 0.13), rgba(255, 255, 255, 0.045));
  border: 1px solid rgba(255, 255, 255, 0.145);
  box-shadow:
    0 32px 110px rgba(0, 0, 0, 0.34),
    inset 0 1px 0 rgba(255, 255, 255, 0.13);

  h1 {
    position: relative;
    z-index: 2;
    max-width: 980px;
    margin: 0 auto;
    color: white;
    font-size: clamp(42px, 6vw, 84px);
    line-height: 0.92;
    letter-spacing: -0.085em;
    font-weight: 950;
  }

  p {
    position: relative;
    z-index: 2;
    max-width: 800px;
    margin: 24px auto 0;
    color: rgba(255, 255, 255, 0.7);
    font-size: 17px;
    line-height: 1.75;
  }
}

.landing-hero__glow {
  position: absolute;
  z-index: -1;
  border-radius: 999px;
  filter: blur(42px);
  pointer-events: none;
}

.landing-hero__glow--one {
  width: 380px;
  height: 380px;
  left: -130px;
  top: -120px;
  background: rgba(37, 99, 235, 0.25);
  animation: glowOne 7s ease-in-out infinite;
}

.landing-hero__glow--two {
  width: 420px;
  height: 420px;
  right: -150px;
  bottom: -160px;
  background: rgba(219, 39, 119, 0.2);
  animation: glowTwo 8s ease-in-out infinite;
}

.landing-badge {
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

  .q-icon {
    color: #93c5fd;
    font-size: 20px;
  }
}

.landing-actions {
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
.btn-ghost {
  position: relative;
  overflow: hidden;
  min-height: 48px;
  padding-inline: 24px;
  font-weight: 950;
  transition:
    transform 230ms ease,
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

.btn-primary {
  color: white;
  background:
    radial-gradient(circle at 20% -20%, rgba(255, 255, 255, 0.3), transparent 50%),
    linear-gradient(135deg, #2563eb, #7c3aed 56%, #db2777);
  box-shadow:
    0 24px 58px rgba(37, 99, 235, 0.34),
    inset 0 1px 0 rgba(255, 255, 255, 0.24);
}

.btn-ghost {
  color: #e0ecff;
  border: 1px solid rgba(147, 197, 253, 0.26);
  background: linear-gradient(135deg, rgba(147, 197, 253, 0.11), rgba(255, 255, 255, 0.04));
  backdrop-filter: blur(14px);
}

/* CONTENT SECTIONS */

.landing-section {
  padding: 62px 0;
}

.landing-section--compact {
  padding-top: 24px;
}

.landing-split {
  display: grid;
  grid-template-columns: 0.95fr 1.05fr;
  gap: 22px;
  align-items: stretch;
}

.problem-card,
.benefits-card,
.detail-card,
.landing-cta,
.example-copy {
  position: relative;
  overflow: hidden;
  border-radius: 36px;
  color: white;
  background:
    radial-gradient(circle at top right, rgba(96, 165, 250, 0.16), transparent 18rem),
    linear-gradient(145deg, rgba(255, 255, 255, 0.11), rgba(255, 255, 255, 0.04));
  border: 1px solid rgba(255, 255, 255, 0.125);
  box-shadow:
    0 24px 80px rgba(0, 0, 0, 0.22),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.problem-card,
.benefits-card {
  height: 100%;
  padding: clamp(26px, 3.5vw, 42px);
}

.problem-card {
  span {
    color: #93c5fd;
    font-size: 13px;
    font-weight: 950;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  h2 {
    margin: 14px 0 0;
    font-size: clamp(30px, 4vw, 56px);
    line-height: 0.98;
    letter-spacing: -0.075em;
    font-weight: 950;
  }

  p {
    margin: 20px 0 0;
    color: rgba(255, 255, 255, 0.66);
    line-height: 1.75;
  }
}

.benefits-card {
  h2 {
    margin: 0;
    font-size: clamp(28px, 3vw, 42px);
    line-height: 1;
    letter-spacing: -0.06em;
    font-weight: 950;
  }

  ul {
    display: grid;
    gap: 12px;
    margin: 24px 0 0;
    padding: 0;
    list-style: none;
  }

  li {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding: 14px;
    border-radius: 18px;
    color: rgba(255, 255, 255, 0.82);
    background: rgba(255, 255, 255, 0.07);
    font-weight: 850;
    line-height: 1.45;
  }

  .q-icon {
    color: #93c5fd;
    font-size: 20px;
    margin-top: 1px;
  }
}

/* EXAMPLE PREVIEW */

.example-section {
  padding: 34px 0 62px;
}

.example-layout {
  display: grid;
  grid-template-columns: 0.86fr 1.14fr;
  gap: 24px;
  align-items: center;
}

.example-layout :deep(.reveal) {
  height: 100%;
}

.example-copy {
  height: 100%;
  padding: clamp(26px, 3.5vw, 42px);

  > span {
    color: #93c5fd;
    font-size: 13px;
    font-weight: 950;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  h2 {
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
    line-height: 1.75;
  }
}

.example-tags {
  display: grid;
  gap: 10px;
  margin-top: 24px;

  div {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 13px 14px;
    border-radius: 18px;
    color: rgba(255, 255, 255, 0.84);
    background: rgba(255, 255, 255, 0.07);
    border: 1px solid rgba(255, 255, 255, 0.085);
    font-weight: 850;
  }

  .q-icon {
    color: #93c5fd;
    font-size: 18px;
  }
}

.website-preview {
  position: relative;
  overflow: hidden;
  min-height: 560px;
  padding: 18px;
  border-radius: 38px;
  color: white;
  isolation: isolate;
  background:
    radial-gradient(circle at 16% 0%, rgba(59, 130, 246, 0.28), transparent 24rem),
    radial-gradient(circle at 90% 16%, rgba(219, 39, 119, 0.2), transparent 26rem),
    linear-gradient(145deg, rgba(15, 23, 42, 0.96), rgba(2, 6, 23, 0.96));
  border: 1px solid rgba(255, 255, 255, 0.14);
  box-shadow:
    0 34px 110px rgba(0, 0, 0, 0.34),
    inset 0 1px 0 rgba(255, 255, 255, 0.12);

  &::before {
    content: '';
    position: absolute;
    right: -110px;
    top: -120px;
    z-index: -1;
    width: 330px;
    height: 330px;
    border-radius: 999px;
    background: rgba(37, 99, 235, 0.24);
    filter: blur(34px);
    animation: previewGlow 7s ease-in-out infinite;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(147, 197, 253, 0.08) 1px, transparent 1px),
      linear-gradient(90deg, rgba(147, 197, 253, 0.08) 1px, transparent 1px);
    background-size: 54px 54px;
    mask-image: linear-gradient(to bottom, black, transparent 78%);
    pointer-events: none;
  }
}

.website-preview__bar {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 7px;
  min-height: 42px;
  padding: 0 14px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.075);
  border: 1px solid rgba(255, 255, 255, 0.105);

  span {
    width: 9px;
    height: 9px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.35);
  }

  i {
    margin-left: 8px;
    color: rgba(219, 234, 254, 0.62);
    font-size: 12px;
    font-style: normal;
    font-weight: 800;
  }
}

.website-preview__hero {
  position: relative;
  z-index: 2;
  margin-top: 16px;
  padding: clamp(22px, 3vw, 34px);
  border-radius: 28px;
  background:
    radial-gradient(circle at 12% 0%, rgba(59, 130, 246, 0.32), transparent 18rem),
    linear-gradient(135deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.045));
  border: 1px solid rgba(255, 255, 255, 0.11);

  small {
    color: #93c5fd;
    font-size: 12px;
    font-weight: 950;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  strong {
    display: block;
    max-width: 560px;
    margin-top: 14px;
    color: white;
    font-size: clamp(30px, 4vw, 54px);
    line-height: 0.96;
    letter-spacing: -0.045em;
    font-weight: 950;
  }

  p {
    max-width: 540px;
    margin: 16px 0 0;
    color: rgba(255, 255, 255, 0.66);
    line-height: 1.65;
  }
}
.website-preview__cards div:nth-child(3):last-child {
  grid-column: span 2;
}
.website-preview__buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 22px;

  em,
  b {
    min-height: 40px;
    display: inline-flex;
    align-items: center;
    padding: 0 16px;
    border-radius: 999px;
    font-size: 13px;
    font-style: normal;
    font-weight: 950;
  }

  em {
    color: white;
    background: linear-gradient(135deg, #2563eb, #7c3aed 58%, #db2777);
    box-shadow: 0 16px 38px rgba(37, 99, 235, 0.28);
  }

  b {
    color: #dbeafe;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(147, 197, 253, 0.18);
  }
}

.website-preview__cards {
  position: relative;
  z-index: 2;
  width: calc(100% - 220px);
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
  margin-top: 14px;

  div {
    min-height: 105px;
    padding: 14px;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.075);
    border: 1px solid rgba(255, 255, 255, 0.095);
  }

  .q-icon {
    color: #93c5fd;
    font-size: 21px;
  }

  span {
    display: block;
    margin-top: 12px;
    color: rgba(255, 255, 255, 0.82);
    font-size: 13px;
    line-height: 1.35;
    font-weight: 850;
  }
}

.website-preview__phone {
  position: absolute;
  right: 24px;
  bottom: 24px;
  z-index: 4;
  width: 190px;
  min-height: 230px;
  padding: 22px 16px 16px;
  border-radius: 30px;
  color: white;
  text-decoration: none;
  cursor: pointer;
  background:
    radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.12), transparent 10rem),
    linear-gradient(145deg, rgba(15, 23, 42, 0.96), rgba(2, 6, 23, 0.98));
  border: 1px solid rgba(255, 255, 255, 0.14);
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.38);
  animation: phoneFloat 5.8s ease-in-out infinite;
  transition:
    transform 220ms ease,
    border-color 220ms ease,
    box-shadow 220ms ease,
    filter 220ms ease;

  &:hover {
    border-color: rgba(147, 197, 253, 0.28);
    filter: saturate(1.08);
    box-shadow:
      0 30px 82px rgba(0, 0, 0, 0.45),
      0 0 44px rgba(34, 197, 94, 0.14);
  }

  strong {
    display: block;
    margin-top: 30px;
    color: white;
    font-size: 19px;
    line-height: 1.05;
    letter-spacing: -0.045em;
    font-weight: 950;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 38px;
    margin-top: 18px;
    border-radius: 999px;
    color: white;
    background: linear-gradient(135deg, #16a34a, #22c55e);
    font-size: 12px;
    font-weight: 950;
    box-shadow: 0 16px 34px rgba(34, 197, 94, 0.22);
    transition:
      transform 220ms ease,
      box-shadow 220ms ease;
  }

  &:hover span {
    transform: translateY(-2px);
    box-shadow: 0 20px 42px rgba(34, 197, 94, 0.3);
  }
}

.phone-speaker {
  position: absolute;
  left: 50%;
  top: 12px;
  width: 48px;
  height: 5px;
  transform: translateX(-50%);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.22);
}

/* DETAILS */

.details-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  align-items: stretch;
}

.details-grid :deep(.reveal) {
  height: 100%;
}

.detail-card {
  height: 100%;
  min-height: 270px;
  padding: 24px;
  transition:
    transform 230ms ease,
    border-color 230ms ease,
    box-shadow 230ms ease;

  &:hover {
    transform: translateY(-8px);
    border-color: rgba(147, 197, 253, 0.28);
    box-shadow:
      0 32px 90px rgba(37, 99, 235, 0.14),
      inset 0 1px 0 rgba(255, 255, 255, 0.13);
  }

  span {
    color: rgba(255, 255, 255, 0.22);
    font-size: 38px;
    line-height: 1;
    font-weight: 950;
    letter-spacing: -0.08em;
  }

  h3 {
    margin: 28px 0 0;
    font-size: 26px;
    line-height: 1.05;
    letter-spacing: -0.055em;
    font-weight: 950;
  }

  p {
    margin: 14px 0 0;
    color: rgba(255, 255, 255, 0.64);
    line-height: 1.7;
  }
}

/* CTA */

.landing-cta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 28px;
  padding: clamp(30px, 4vw, 50px);

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
    font-size: clamp(30px, 4vw, 56px);
    line-height: 0.98;
    letter-spacing: -0.075em;
    font-weight: 950;
  }

  p {
    max-width: 760px;
    margin: 16px 0 0;
    color: rgba(255, 255, 255, 0.66);
    line-height: 1.72;
  }
}

/* ANIMATIONS */

@keyframes glowOne {
  0%,
  100% {
    transform: translate3d(0, 0, 0) scale(1);
  }

  50% {
    transform: translate3d(40px, 24px, 0) scale(1.12);
  }
}

@keyframes glowTwo {
  0%,
  100% {
    transform: translate3d(0, 0, 0) scale(1);
  }

  50% {
    transform: translate3d(-38px, -20px, 0) scale(1.12);
  }
}

@keyframes previewGlow {
  0%,
  100% {
    transform: scale(1) translate(0, 0);
    opacity: 0.72;
  }

  50% {
    transform: scale(1.15) translate(-20px, 18px);
    opacity: 1;
  }
}

@keyframes phoneFloat {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }

  50% {
    transform: translateY(-10px) rotate(1.2deg);
  }
}

/* RESPONSIVE */

@media (max-width: 980px) {
  .landing-split,
  .details-grid,
  .example-layout {
    grid-template-columns: 1fr;
  }

  .landing-cta {
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

  .landing-hero {
    padding-top: 72px;
  }

  .landing-hero__shell {
    border-radius: 32px;
    text-align: left;
    padding: 28px 22px;
  }

  .landing-badge {
    margin-left: 0;
  }

  .landing-actions {
    justify-content: flex-start;

    .q-btn {
      width: 100%;
    }
  }

  .problem-card,
  .benefits-card,
  .detail-card,
  .example-copy {
    border-radius: 30px;
  }

  .website-preview {
    min-height: auto;
    border-radius: 30px;
    padding: 14px;
  }

  .website-preview__cards {
    width: 100%;
    grid-template-columns: 1fr;
  }

  .website-preview__phone {
    position: relative;
    right: auto;
    bottom: auto;
    width: 100%;
    min-height: auto;
    margin-top: 14px;
    padding: 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    border-radius: 22px;
    animation: none;
  }

  .website-preview__phone .phone-speaker {
    display: none;
  }

  .website-preview__phone strong {
    margin-top: 0;
    font-size: 16px;
    line-height: 1.15;
  }

  .website-preview__phone span {
    min-height: 38px;
    margin-top: 0;
    padding: 0 14px;
    flex: 0 0 auto;
    white-space: nowrap;
  }
}

@media (max-width: 460px) {
  .landing-hero__shell h1 {
    font-size: clamp(40px, 13vw, 58px);
  }

  .website-preview__hero strong {
    font-size: clamp(28px, 10vw, 42px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .landing-hero__glow,
  .detail-card,
  .btn-primary,
  .btn-ghost,
  .website-preview::before,
  .website-preview__phone {
    animation: none !important;
    transition: none !important;
  }

  .btn-primary::after,
  .btn-ghost::after {
    display: none;
  }
}
@media (max-width: 420px) {
  .website-preview__phone {
    align-items: stretch;
    flex-direction: column;
  }

  .website-preview__phone span {
    width: 100%;
  }
}
</style>
