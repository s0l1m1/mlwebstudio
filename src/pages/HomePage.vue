<template>
  <q-page class="page">
    <section class="hero">
      <div class="hero-orb hero-orb--one"></div>
      <div class="hero-orb hero-orb--two"></div>

      <div class="container hero__grid">
        <RevealSection variant="left">
          <div class="hero__content">
            <div class="hero__badge">
              <q-icon name="auto_awesome" />
              <span>{{ t('hero.badge') }}</span>
            </div>

            <h1>
              Sajtovi koji donose
              <span>upite.</span>
            </h1>

            <p class="hero__lead">
              {{ t('hero.lead') }}
            </p>

            <div class="hero__actions">
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
                :label="t('nav.examples')"
                to="/primeri"
              />
            </div>

            <p class="hero__microcopy">{{ t('hero.microcopy') }}</p>

            <div class="hero__chips">
              <div v-for="chip in heroChips" :key="chip">
                <q-icon name="check_circle" />
                <span>{{ chip }}</span>
              </div>
            </div>
          </div>
        </RevealSection>

        <RevealSection variant="right" :delay="140">
          <div class="hero-showcase">
            <div class="showcase-glow"></div>

            <div class="showcase-top">
              <div>
                <span>{{ t('showcase.process') }}</span>
                <strong>{{ t('showcase.title') }}</strong>
              </div>

              <div class="showcase-icon">
                <q-icon name="north_east" />
              </div>
            </div>

            <div class="browser-card">
              <div class="browser-card__chrome">
                <span></span>
                <span></span>
                <span></span>
                <i>ml-webstudio.com</i>
              </div>

              <div class="browser-card__hero">
                <small>{{ t('homePreview.kicker') }}</small>
                <strong>{{ t('homePreview.title') }}</strong>
                <em>{{ t('nav.sendInquiry') }}</em>
              </div>

              <div class="browser-card__grid">
                <div>
                  <q-icon name="phone_iphone" />
                  <span>{{ t('homePreview.mobile') }}</span>
                </div>
                <div>
                  <q-icon name="bolt" />
                  <span>{{ t('homePreview.speed') }}</span>
                </div>
                <div>
                  <q-icon name="ads_click" />
                  <span>{{ t('homePreview.cta') }}</span>
                </div>
              </div>
            </div>

            <div class="workflow">
              <div class="workflow__item workflow__item--active">
                <q-icon name="psychology" />
                <div>
                  <strong>{{ t('showcase.strategy') }}</strong>
                  <span>{{ t('showcase.strategyText') }}</span>
                </div>
              </div>

              <div class="workflow__item">
                <q-icon name="palette" />
                <div>
                  <strong>{{ t('showcase.visual') }}</strong>
                  <span>{{ t('showcase.visualText') }}</span>
                </div>
              </div>

              <div class="workflow__item">
                <q-icon name="code" />
                <div>
                  <strong>{{ t('showcase.implementation') }}</strong>
                  <span>{{ t('showcase.implementationText') }}</span>
                </div>
              </div>
            </div>

            <div class="showcase-bottom">
              <span class="live-dot"></span>
              <p>{{ t('showcase.footer') }}</p>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>

    <section class="trust-strip-section">
      <div class="container">
        <RevealSection variant="up">
          <div class="trust-strip">
            <div v-for="item in trustItems" :key="item.title">
              <q-icon :name="item.icon" />
              <strong>{{ item.title }}</strong>
              <span>{{ item.text }}</span>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>

    <section class="section problem-section">
      <div class="container">
        <RevealSection variant="up">
          <div class="section-head section-head--center">
            <span>{{ t('problem.label') }}</span>
            <h2>{{ t('problem.title') }}</h2>
            <p>{{ t('problem.text') }}</p>
          </div>
        </RevealSection>

        <div class="problem-grid">
          <RevealSection
            v-for="(item, index) in problems"
            :key="item.title"
            :delay="index * 90"
            variant="up"
          >
            <article class="glass-card problem-card">
              <div class="card-icon">
                <q-icon :name="item.icon" />
              </div>
              <h3>{{ item.title }}</h3>
              <p>{{ item.text }}</p>
            </article>
          </RevealSection>
        </div>
      </div>
    </section>

    <section class="section services-section">
      <div class="container services-layout">
        <RevealSection variant="left">
          <div class="section-head">
            <span>{{ t('services.label') }}</span>
            <h2>{{ t('services.title') }}</h2>
            <p>{{ t('services.text') }}</p>

            <q-btn
              unelevated
              rounded
              no-caps
              size="lg"
              class="btn-primary section-button"
              :label="t('services.cta')"
              to="/usluge"
            />
          </div>
        </RevealSection>

        <div class="service-preview">
          <RevealSection
            v-for="(service, index) in services.slice(0, 4)"
            :key="service.title"
            :delay="index * 90"
            variant="zoom"
          >
            <article class="service-mini">
              <div class="service-mini__number">{{ service.number }}</div>
              <div class="service-mini__icon">
                <q-icon :name="service.icon" />
              </div>
              <h3>{{ service.title }}</h3>
              <p>{{ service.text }}</p>
            </article>
          </RevealSection>
        </div>
      </div>
    </section>

    <section class="section cta-section">
      <div class="container">
        <RevealSection variant="zoom">
          <div class="cta-card">
            <div class="cta-card__glow"></div>

            <div>
              <span>{{ t('homeCta.label') }}</span>
              <h2>{{ t('conversion.title') }}</h2>
              <p>{{ t('conversion.text') }}</p>
            </div>

            <q-btn
              unelevated
              rounded
              no-caps
              size="lg"
              class="btn-primary cta-card__button"
              :label="t('conversion.button')"
              to="/kontakt"
            />
          </div>
        </RevealSection>
      </div>
    </section>

    <section class="section examples-section">
      <div class="container">
        <RevealSection variant="up">
          <div class="section-head section-head--split">
            <div>
              <span>{{ t('examples.label') }}</span>
              <h2>{{ t('examples.title') }}</h2>
              <p>{{ t('examples.text') }}</p>
            </div>

            <q-btn
              outline
              rounded
              no-caps
              class="btn-ghost section-head__button"
              :label="t('nav.examples')"
              to="/primeri"
            />
          </div>
        </RevealSection>

        <div class="examples-preview">
          <RevealSection
            v-for="(example, index) in examples.slice(0, 2)"
            :key="example.title"
            :delay="index * 110"
            variant="zoom"
          >
            <article class="example-mini">
              <div class="example-mini__mockup">
                <div class="mockup-chrome">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div class="mockup-nav">
                  <i v-for="navItem in example.preview.nav" :key="navItem">
                    {{ navItem }}
                  </i>
                </div>

                <div class="mockup-hero">
                  <strong>{{ example.preview.heroTitle }}</strong>
                  <em>{{ example.preview.cta }}</em>
                </div>
              </div>

              <div class="example-mini__content">
                <h3>{{ example.title }}</h3>
                <p>{{ example.description }}</p>

                <ul>
                  <li v-for="bullet in example.bullets.slice(0, 3)" :key="bullet">
                    <q-icon name="done" />
                    <span>{{ bullet }}</span>
                  </li>
                </ul>

                <router-link to="/primeri">
                  {{ t('homeExamples.viewCase') }}
                  <q-icon name="arrow_forward" />
                </router-link>
              </div>
            </article>
          </RevealSection>
        </div>
      </div>
    </section>

    <section class="section pricing-teaser-section">
      <div class="container">
        <RevealSection variant="up">
          <div class="pricing-teaser">
            <div>
              <span>{{ t('homePricing.label') }}</span>
              <h2>{{ t('homePricing.title') }}</h2>
              <p>{{ t('homePricing.text') }}</p>
            </div>

            <div class="pricing-teaser__cards">
              <div>
                <small>{{ t('homePricing.refresh') }}</small>
                <strong>150€</strong>
              </div>
              <div class="is-featured">
                <small>{{ t('homePricing.landing') }}</small>
                <strong>200€</strong>
              </div>
              <div>
                <small>{{ t('homePricing.redesign') }}</small>
                <strong>250€</strong>
              </div>
            </div>

            <q-btn
              unelevated
              rounded
              no-caps
              class="btn-primary pricing-teaser__button"
              :label="t('nav.pricing')"
              to="/cene"
            />
          </div>
        </RevealSection>
      </div>
    </section>

    <section class="final-section">
      <div class="container">
        <RevealSection variant="zoom">
          <div class="final-card">
            <div>
              <span>{{ t('homeFinal.label') }}</span>
              <h2>{{ t('homeFinal.title') }}</h2>
              <p>{{ t('homeFinal.text') }}</p>
            </div>

            <q-btn
              unelevated
              rounded
              no-caps
              size="lg"
              class="btn-primary final-card__button"
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

const { t, tm } = useI18n()

const heroChips = computed(() => tm('hero.chips'))
const problems = computed(() => tm('problem.items'))
const services = computed(() => tm('services.items'))
const examples = computed(() => tm('examples.items'))

const trustItems = computed(() => {
  const items = tm('homeTrust.items')
  if (Array.isArray(items) && items.length) return items

  return [
    {
      icon: 'phone_iphone',
      title: 'Mobilni prikaz',
      text: 'Sajt mora izgledati dobro tamo gde ljudi najčešće dolaze — na telefonu.',
    },
    {
      icon: 'bolt',
      title: 'Brzo učitavanje',
      text: 'Brzina i preglednost direktno utiču na prvi utisak i upite.',
    },
    {
      icon: 'ads_click',
      title: 'Jasan kontakt',
      text: 'Korisnik mora odmah da zna gde da klikne i kako da pošalje upit.',
    },
  ]
})

onMounted(() => {
  document.title = t('seo.title')
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

.hero {
  position: relative;
  padding: 100px 0 54px;
}

.hero-orb {
  position: absolute;
  z-index: 0;
  pointer-events: none;
  border-radius: 999px;
  filter: blur(18px);
  opacity: 0.44;
}

.hero-orb--one {
  width: 280px;
  height: 280px;
  left: -90px;
  top: 90px;
  background: rgba(37, 99, 235, 0.38);
  animation: orbFloatOne 9s ease-in-out infinite;
}

.hero-orb--two {
  width: 320px;
  height: 320px;
  right: -120px;
  top: 180px;
  background: rgba(219, 39, 119, 0.25);
  animation: orbFloatTwo 10s ease-in-out infinite;
}

.hero__grid {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: minmax(0, 1.02fr) minmax(430px, 0.9fr);
  gap: 52px;
  align-items: center;
}

.hero__content {
  max-width: 880px;
}

.hero__badge {
  width: fit-content;
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 10px 15px;
  border-radius: 999px;
  color: #dbeafe;
  font-size: 13px;
  font-weight: 950;
  text-transform: uppercase;
  letter-spacing: 0.065em;
  background: rgba(59, 130, 246, 0.13);
  border: 1px solid rgba(147, 197, 253, 0.2);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.1),
    0 16px 36px rgba(37, 99, 235, 0.12);

  .q-icon {
    color: #93c5fd;
    font-size: 20px;
  }
}

h1 {
  max-width: 840px;
  margin: 26px 0 0;
  color: white;
  font-size: clamp(52px, 7.4vw, 104px);
  line-height: 0.88;
  letter-spacing: -0.09em;
  font-weight: 950;

  span {
    display: inline-block;
    color: transparent;
    background: linear-gradient(135deg, #60a5fa, #c084fc 48%, #f472b6);
    background-clip: text;
    -webkit-background-clip: text;
    animation: gradientShift 5.8s ease-in-out infinite;
  }
}

.hero__lead {
  max-width: 720px;
  margin: 26px 0 0;
  color: rgba(255, 255, 255, 0.72);
  font-size: 18px;
  line-height: 1.75;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 30px;
}

.hero__microcopy {
  margin: 13px 0 0;
  color: rgba(255, 255, 255, 0.58);
  font-size: 14px;
}

.hero__chips {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 24px;

  div {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 11px 14px;
    border-radius: 999px;
    color: rgba(255, 255, 255, 0.8);
    font-weight: 850;
    background: rgba(255, 255, 255, 0.075);
    border: 1px solid rgba(255, 255, 255, 0.105);
  }

  .q-icon {
    color: #93c5fd;
  }
}

/* BUTTONS */

.btn-primary,
.btn-ghost {
  position: relative;
  overflow: hidden;
  min-height: 48px;
  padding-inline: 24px;
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

.btn-primary {
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

/* HERO SHOWCASE */

.hero-showcase {
  position: relative;
  overflow: hidden;
  padding: 22px;
  border-radius: 38px;
  isolation: isolate;
  background:
    radial-gradient(circle at top right, rgba(147, 197, 253, 0.16), transparent 20rem),
    linear-gradient(135deg, rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.045));
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow:
    0 26px 80px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.12);
  animation: floatCard 7s ease-in-out infinite;
}

.showcase-glow {
  position: absolute;
  right: -100px;
  top: -100px;
  z-index: -1;
  width: 280px;
  height: 280px;
  border-radius: 999px;
  background: rgba(37, 99, 235, 0.32);
  filter: blur(30px);
}

.showcase-top {
  display: flex;
  justify-content: space-between;
  gap: 18px;
  align-items: flex-start;
  padding: 6px 4px 16px;

  span {
    display: block;
    margin-bottom: 7px;
    color: rgba(255, 255, 255, 0.58);
    font-size: 13px;
    font-weight: 850;
  }

  strong {
    display: block;
    color: white;
    font-size: 23px;
    line-height: 1.1;
    letter-spacing: -0.05em;
    font-weight: 950;
  }
}

.showcase-icon {
  width: 46px;
  height: 46px;
  display: grid;
  place-items: center;
  border-radius: 17px;
  color: white;
  background: rgba(255, 255, 255, 0.095);
  border: 1px solid rgba(255, 255, 255, 0.11);

  .q-icon {
    font-size: 23px;
  }
}

.browser-card {
  overflow: hidden;
  border-radius: 28px;
  background:
    radial-gradient(circle at 18% 0%, rgba(59, 130, 246, 0.3), transparent 16rem),
    rgba(15, 23, 42, 0.72);
  border: 1px solid rgba(255, 255, 255, 0.11);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08);
}

.browser-card__chrome {
  display: flex;
  align-items: center;
  gap: 6px;
  height: 44px;
  padding: 0 14px;
  background: rgba(255, 255, 255, 0.055);
  border-bottom: 1px solid rgba(255, 255, 255, 0.075);

  span {
    width: 8px;
    height: 8px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.34);
  }

  i {
    flex: 1;
    margin-left: 8px;
    padding: 7px 11px;
    overflow: hidden;
    border-radius: 999px;
    color: rgba(219, 234, 254, 0.68);
    background: rgba(15, 23, 42, 0.65);
    font-size: 11px;
    font-style: normal;
    font-weight: 800;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}

.browser-card__hero {
  padding: 22px;

  small {
    display: block;
    color: #93c5fd;
    font-weight: 950;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  strong {
    display: block;
    max-width: 360px;
    margin-top: 10px;
    color: white;
    font-size: clamp(30px, 3.1vw, 42px);
    line-height: 0.95;
    letter-spacing: -0.065em;
    font-weight: 950;
  }

  em {
    width: fit-content;
    display: inline-flex;
    margin-top: 16px;
    padding: 9px 13px;
    border-radius: 999px;
    color: white;
    background: linear-gradient(135deg, #2563eb, #7c3aed);
    font-size: 12px;
    font-style: normal;
    font-weight: 950;
  }
}

.browser-card__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  padding: 0 14px 14px;

  div {
    min-height: 70px;
    display: grid;
    place-items: center;
    text-align: center;
    padding: 10px;
    border-radius: 18px;
    color: rgba(255, 255, 255, 0.82);
    background: rgba(255, 255, 255, 0.075);
    border: 1px solid rgba(255, 255, 255, 0.085);
    font-size: 12px;
    font-weight: 850;
  }

  .q-icon {
    color: #93c5fd;
    font-size: 24px;
  }
}

.workflow {
  display: grid;
  gap: 12px;
  margin-top: 14px;
}

.workflow__item {
  display: flex;
  gap: 14px;
  align-items: center;
  padding: 15px;
  border-radius: 22px;
  color: white;
  background: rgba(255, 255, 255, 0.075);
  border: 1px solid rgba(255, 255, 255, 0.105);
  transition:
    transform 220ms ease,
    background-color 220ms ease,
    border-color 220ms ease;

  &:hover {
    transform: translateX(7px);
    background: rgba(255, 255, 255, 0.11);
    border-color: rgba(147, 197, 253, 0.24);
  }

  .q-icon {
    color: #93c5fd;
    font-size: 25px;
  }

  strong {
    display: block;
    font-weight: 950;
  }

  span {
    display: block;
    margin-top: 4px;
    color: rgba(255, 255, 255, 0.62);
    font-size: 13px;
    line-height: 1.45;
  }
}

.workflow__item--active {
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.4), rgba(124, 58, 237, 0.26));
}

.showcase-bottom {
  display: flex;
  gap: 10px;
  align-items: center;
  margin-top: 14px;
  padding: 13px 15px;
  border-radius: 22px;
  background: rgba(0, 0, 0, 0.18);

  p {
    margin: 0;
    color: rgba(255, 255, 255, 0.64);
    font-size: 13px;
    line-height: 1.5;
  }
}

.live-dot {
  width: 9px;
  height: 9px;
  flex: 0 0 auto;
  border-radius: 999px;
  background: #22c55e;
  box-shadow: 0 0 0 7px rgba(34, 197, 94, 0.13);
  animation: pulseDot 1.9s ease-in-out infinite;
}

/* TRUST */

.trust-strip-section {
  padding: 10px 0 44px;
}

.trust-strip {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  padding: 16px;
  border-radius: 30px;
  background:
    radial-gradient(circle at 16% 0%, rgba(59, 130, 246, 0.16), transparent 24rem),
    linear-gradient(135deg, rgba(255, 255, 255, 0.095), rgba(255, 255, 255, 0.035));
  border: 1px solid rgba(255, 255, 255, 0.105);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);

  div {
    min-height: 112px;
    display: grid;
    align-content: start;
    gap: 7px;
    padding: 18px;
    border-radius: 22px;
    background: rgba(255, 255, 255, 0.065);
    border: 1px solid rgba(255, 255, 255, 0.085);
  }

  .q-icon {
    color: #93c5fd;
    font-size: 26px;
  }

  strong {
    color: white;
    font-size: 17px;
    font-weight: 950;
  }

  span {
    color: rgba(255, 255, 255, 0.62);
    line-height: 1.55;
    font-size: 14px;
  }
}

/* SECTION GLOBAL */

.section {
  padding: 74px 0;
}

.section-head {
  max-width: 850px;

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
    font-size: clamp(34px, 4.4vw, 64px);
    line-height: 0.96;
    letter-spacing: -0.078em;
    font-weight: 950;
  }

  p {
    margin: 20px 0 0;
    color: rgba(255, 255, 255, 0.66);
    font-size: 17px;
    line-height: 1.75;
  }
}

.section-head--center {
  margin-inline: auto;
  text-align: center;
}

.section-head--split {
  max-width: none;
  display: flex;
  justify-content: space-between;
  gap: 28px;
  align-items: flex-end;

  > div {
    max-width: 880px;
  }
}

.section-head__button {
  flex: 0 0 auto;
}

.section-button {
  margin-top: 28px;
}

/* PROBLEMS */

.problem-section {
  padding-top: 54px;
}

.problem-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  align-items: stretch;
  margin-top: 40px;
}

.problem-grid :deep(.reveal) {
  height: 100%;
}

.glass-card,
.service-mini,
.example-mini,
.cta-card,
.pricing-teaser,
.final-card {
  position: relative;
  overflow: hidden;
  border-radius: 34px;
  color: white;
  background:
    radial-gradient(circle at top right, rgba(96, 165, 250, 0.12), transparent 20rem),
    linear-gradient(135deg, rgba(255, 255, 255, 0.105), rgba(255, 255, 255, 0.04));
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow:
    0 22px 70px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  transition:
    transform 260ms cubic-bezier(0.22, 1, 0.36, 1),
    border-color 260ms ease,
    box-shadow 260ms ease,
    filter 260ms ease;

  &:hover {
    transform: translateY(-8px);
    border-color: rgba(147, 197, 253, 0.28);
    box-shadow:
      0 32px 92px rgba(37, 99, 235, 0.16),
      inset 0 1px 0 rgba(255, 255, 255, 0.14);
    filter: saturate(1.04);
  }
}

.problem-card {
  height: 100%;
  min-height: 260px;
  padding: 26px;
  display: flex;
  flex-direction: column;

  h3 {
    margin: 22px 0 12px;
    color: white;
    font-size: 26px;
    line-height: 1.06;
    letter-spacing: -0.05em;
    font-weight: 950;
  }

  p {
    flex: 1;
    margin: 0;
    color: rgba(255, 255, 255, 0.62);
    line-height: 1.72;
  }
}

.card-icon {
  width: 60px;
  height: 60px;
  display: grid;
  place-items: center;
  border-radius: 21px;
  color: white;
  background:
    radial-gradient(circle at 20% 0%, rgba(255, 255, 255, 0.26), transparent 52%),
    linear-gradient(135deg, #2563eb, #7c3aed);
  box-shadow: 0 18px 40px rgba(37, 99, 235, 0.24);

  .q-icon {
    font-size: 29px;
  }
}

/* SERVICES */

.services-section {
  padding-top: 62px;
}

.services-layout {
  display: grid;
  grid-template-columns: 0.82fr 1.18fr;
  gap: 46px;
  align-items: start;
}

.service-preview {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  align-items: stretch;
}

.service-preview :deep(.reveal) {
  height: 100%;
}

.service-mini {
  height: 100%;
  min-height: 260px;
  display: flex;
  flex-direction: column;
  padding: 24px;

  &:hover .service-mini__icon {
    transform: translateY(-3px) scale(1.04);
  }

  h3 {
    margin: 18px 0 0;
    color: white;
    font-size: 25px;
    line-height: 1.08;
    letter-spacing: -0.05em;
    font-weight: 950;
  }

  p {
    flex: 1;
    margin: 12px 0 0;
    color: rgba(255, 255, 255, 0.62);
    line-height: 1.65;
    font-size: 14px;
  }
}

.service-mini__number {
  color: rgba(255, 255, 255, 0.22);
  font-size: 40px;
  line-height: 1;
  font-weight: 950;
  letter-spacing: -0.08em;
}

.service-mini__icon {
  width: 54px;
  height: 54px;
  display: grid;
  place-items: center;
  margin-top: 22px;
  border-radius: 19px;
  color: #dbeafe;
  background: rgba(59, 130, 246, 0.18);
  border: 1px solid rgba(147, 197, 253, 0.18);
  transition: transform 240ms ease;

  .q-icon {
    font-size: 28px;
  }
}

/* CTA */

.cta-section {
  padding-top: 44px;
}

.cta-card {
  min-height: 250px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 28px;
  padding: clamp(28px, 4vw, 44px);
  isolation: isolate;

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
    font-size: clamp(32px, 4.4vw, 60px);
    line-height: 0.96;
    letter-spacing: -0.075em;
    font-weight: 950;
  }

  p {
    max-width: 760px;
    margin: 18px 0 0;
    color: rgba(255, 255, 255, 0.66);
    line-height: 1.72;
  }
}

.cta-card__glow {
  position: absolute;
  right: -110px;
  top: -110px;
  z-index: -1;
  width: 280px;
  height: 280px;
  border-radius: 999px;
  background: rgba(219, 39, 119, 0.2);
  filter: blur(34px);
}

.cta-card__button {
  flex: 0 0 auto;
}

/* EXAMPLES */

.examples-section {
  padding-top: 54px;
}

.examples-preview {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 22px;
  align-items: stretch;
  margin-top: 36px;
}

.examples-preview :deep(.reveal) {
  height: 100%;
}

.example-mini {
  height: 100%;
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 22px;
  padding: 22px;
}

.example-mini__mockup {
  min-height: 280px;
  padding: 16px;
  border-radius: 26px;
  background:
    radial-gradient(circle at 18% 12%, rgba(59, 130, 246, 0.34), transparent 12rem),
    linear-gradient(145deg, rgba(15, 23, 42, 0.96), rgba(30, 41, 59, 0.85));
  border: 1px solid rgba(255, 255, 255, 0.12);
  transition:
    transform 260ms ease,
    filter 260ms ease;
}

.example-mini:hover .example-mini__mockup {
  transform: scale(1.018);
  filter: saturate(1.12);
}

.mockup-chrome {
  display: flex;
  gap: 6px;

  span {
    width: 8px;
    height: 8px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.36);
  }
}

.mockup-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 16px;

  i {
    padding: 5px 8px;
    border-radius: 999px;
    color: rgba(255, 255, 255, 0.74);
    background: rgba(255, 255, 255, 0.09);
    font-size: 10px;
    font-style: normal;
    font-weight: 850;
  }
}

.mockup-hero {
  margin-top: 36px;

  strong {
    display: block;
    color: white;
    font-size: 31px;
    line-height: 0.98;
    letter-spacing: -0.065em;
    font-weight: 950;
  }

  em {
    width: fit-content;
    display: inline-flex;
    margin-top: 16px;
    padding: 9px 12px;
    border-radius: 999px;
    color: white;
    background: linear-gradient(135deg, #2563eb, #7c3aed);
    font-size: 12px;
    font-style: normal;
    font-weight: 950;
  }
}

.example-mini__content {
  display: flex;
  flex-direction: column;

  h3 {
    margin: 4px 0 0;
    color: white;
    font-size: 31px;
    line-height: 1;
    letter-spacing: -0.06em;
    font-weight: 950;
  }

  p {
    margin: 14px 0 0;
    color: rgba(255, 255, 255, 0.64);
    line-height: 1.7;
  }

  ul {
    display: grid;
    gap: 8px;
    margin: 18px 0 0;
    padding: 0;
    list-style: none;
  }

  li {
    display: flex;
    gap: 8px;
    align-items: center;
    color: rgba(255, 255, 255, 0.8);
    font-weight: 800;
  }

  .q-icon {
    color: #93c5fd;
  }

  a {
    width: fit-content;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    margin-top: auto;
    padding-top: 20px;
    color: rgba(219, 234, 254, 0.88);
    text-decoration: none;
    font-weight: 950;
    transition:
      transform 220ms ease,
      color 220ms ease;

    &:hover {
      transform: translateX(4px);
      color: white;
    }
  }
}

/* PRICING TEASER */

.pricing-teaser-section {
  padding-top: 44px;
}

.pricing-teaser {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr auto;
  gap: 26px;
  align-items: center;
  padding: clamp(26px, 4vw, 40px);

  > div:first-child {
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
      font-size: clamp(30px, 3.8vw, 52px);
      line-height: 0.98;
      letter-spacing: -0.07em;
      font-weight: 950;
    }

    p {
      margin: 16px 0 0;
      color: rgba(255, 255, 255, 0.66);
      line-height: 1.7;
    }
  }
}

.pricing-teaser__cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;

  div {
    min-height: 104px;
    display: grid;
    align-content: center;
    gap: 8px;
    padding: 16px;
    border-radius: 22px;
    background: rgba(255, 255, 255, 0.075);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .is-featured {
    background: linear-gradient(135deg, rgba(37, 99, 235, 0.28), rgba(124, 58, 237, 0.18));
    border-color: rgba(147, 197, 253, 0.24);
  }

  small {
    color: rgba(219, 234, 254, 0.7);
    font-weight: 850;
  }

  strong {
    color: white;
    font-size: 28px;
    line-height: 1;
    letter-spacing: -0.055em;
    font-weight: 950;
  }
}

.pricing-teaser__button {
  white-space: nowrap;
}

/* FINAL */

.final-section {
  padding: 0 0 96px;
}

.final-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 28px;
  padding: clamp(30px, 4vw, 48px);

  span {
    color: #93c5fd;
    font-size: 13px;
    font-weight: 950;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  h2 {
    max-width: 860px;
    margin: 12px 0 0;
    color: white;
    font-size: clamp(32px, 4.4vw, 60px);
    line-height: 0.96;
    letter-spacing: -0.075em;
    font-weight: 950;
  }

  p {
    max-width: 760px;
    margin: 18px 0 0;
    color: rgba(255, 255, 255, 0.66);
    line-height: 1.72;
  }
}

.final-card__button {
  flex: 0 0 auto;
}

/* ANIMATIONS */

@keyframes gradientShift {
  0%,
  100% {
    filter: hue-rotate(0deg);
  }

  50% {
    filter: hue-rotate(28deg);
  }
}

@keyframes floatCard {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }

  50% {
    transform: translateY(-14px) rotate(0.6deg);
  }
}

@keyframes pulseDot {
  0%,
  100% {
    box-shadow: 0 0 0 6px rgba(34, 197, 94, 0.12);
  }

  50% {
    box-shadow: 0 0 0 12px rgba(34, 197, 94, 0.04);
  }
}

@keyframes orbFloatOne {
  0%,
  100% {
    transform: translate3d(0, 0, 0) scale(1);
  }

  50% {
    transform: translate3d(28px, -20px, 0) scale(1.08);
  }
}

@keyframes orbFloatTwo {
  0%,
  100% {
    transform: translate3d(0, 0, 0) scale(1);
  }

  50% {
    transform: translate3d(-24px, 22px, 0) scale(1.08);
  }
}

/* RESPONSIVE */

@media (max-width: 1180px) {
  .hero__grid,
  .services-layout,
  .pricing-teaser {
    grid-template-columns: 1fr;
  }

  .example-mini {
    grid-template-columns: 1fr;
  }

  .section-head--split {
    align-items: flex-start;
    flex-direction: column;
  }
}

@media (max-width: 980px) {
  .problem-grid,
  .examples-preview,
  .service-preview,
  .trust-strip,
  .pricing-teaser__cards {
    grid-template-columns: 1fr;
  }

  .cta-card,
  .final-card {
    align-items: flex-start;
    flex-direction: column;
  }

  .cta-card__button,
  .final-card__button,
  .pricing-teaser__button {
    width: 100%;
  }

  .hero__grid {
    gap: 36px;
  }
}

@media (max-width: 700px) {
  .container {
    width: min(100% - 28px, 1360px);
  }

  .hero {
    padding-top: 72px;
  }

  h1 {
    font-size: clamp(44px, 14vw, 68px);
  }

  .hero__lead {
    font-size: 16px;
  }

  .hero-showcase,
  .cta-card,
  .pricing-teaser,
  .final-card {
    border-radius: 30px;
  }

  .browser-card__grid {
    grid-template-columns: 1fr;
  }

  .section {
    padding: 58px 0;
  }
}

@media (max-width: 460px) {
  .hero__badge {
    align-items: flex-start;
    border-radius: 20px;
  }

  .hero__actions {
    align-items: stretch;
    flex-direction: column;

    .q-btn {
      width: 100%;
    }
  }

  .hero__chips div {
    width: 100%;
  }

  .mockup-hero strong {
    font-size: 26px;
  }
}

@media (prefers-reduced-motion: reduce) {
  h1 span,
  .hero-showcase,
  .live-dot,
  .hero-orb,
  .btn-primary,
  .btn-ghost,
  .glass-card,
  .service-mini,
  .example-mini,
  .cta-card,
  .pricing-teaser,
  .final-card {
    animation: none !important;
    transition: none !important;
  }

  .btn-primary::after,
  .btn-ghost::after {
    display: none;
  }
}
</style>
