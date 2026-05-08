<template>
  <q-page class="page">
    <div class="noise"></div>
    <div class="ambient ambient--one"></div>
    <div class="ambient ambient--two"></div>
    <div class="ambient ambient--three"></div>

    <header class="nav">
      <button class="brand" type="button" @click="scrollToSection('top')">
        <div class="brand__mark brand__mark--logo">
          <img src="/brand/ml-logo.png" :alt="t('aria.logoAlt')" width="50" height="50" />
        </div>
        <div class="brand__text">
          <strong>ML Web Studio</strong>
          <span>{{ t('nav.tagline') }}</span>
        </div>
      </button>

      <nav class="nav__links">
        <button type="button" @click="scrollToSection('services')">{{ t('nav.services') }}</button>
        <button type="button" @click="scrollToSection('approach')">{{ t('nav.approach') }}</button>
        <button type="button" @click="scrollToSection('process')">{{ t('nav.process') }}</button>
        <button type="button" @click="scrollToSection('contact')">{{ t('nav.contact') }}</button>
      </nav>

      <div class="nav__actions">
        <q-btn-dropdown
          unelevated
          rounded
          no-caps
          dropdown-icon="expand_more"
          class="lang-dropdown"
          :aria-label="t('aria.languageSwitcher')"
        >
          <template #label>
            <span class="lang-dropdown__label">
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
              :aria-label="language.code === 'sr' ? t('aria.switchToSr') : t('aria.switchToEn')"
              @click="setLanguage(language.code)"
            >
              <q-item-section avatar>
                <span class="lang-menu__short">{{ language.short }}</span>
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ language.label }}</q-item-label>
              </q-item-section>
              <q-item-section side v-if="locale === language.code">
                <q-icon name="check" />
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        <q-btn
          unelevated
          rounded
          class="nav__button"
          :label="t('nav.sendInquiry')"
          @click="scrollToSection('contact')"
        />
      </div>
    </header>

    <main id="top">
      <section class="hero">
        <div class="container hero__grid">
          <div class="hero__content" data-aos="fade-right">
            <div class="hero__badge">
              <q-icon name="auto_awesome" />
              {{ t('hero.badge') }}
            </div>

            <h1>
              {{ t('hero.titleTop') }}
              <span>{{ t('hero.titleBottom') }}</span>
            </h1>

            <p class="hero__lead">
              {{ t('hero.lead') }}
            </p>

            <div class="hero__actions">
              <q-btn
                unelevated
                rounded
                size="lg"
                class="btn-primary"
                :label="t('hero.requestOffer')"
                @click="scrollToSection('contact')"
              />

              <q-btn
                outline
                rounded
                size="lg"
                class="btn-ghost"
                :label="t('hero.viewServices')"
                @click="scrollToSection('services')"
              />
            </div>
            <p class="hero__microcopy">{{ t('hero.microcopy') }}</p>

            <div class="hero__chips">
              <div v-for="(chip, index) in heroChips" :key="chip">
                <q-icon :name="heroChipIcons[index] || 'check_circle'" />
                <span>{{ chip }}</span>
              </div>
            </div>
          </div>

          <div class="hero__visual" data-aos="fade-left">
            <div class="showcase-card">
              <div class="showcase-card__shine"></div>

              <div class="showcase-card__top">
                <div>
                  <span>{{ t('showcase.process') }}</span>
                  <strong>{{ t('showcase.title') }}</strong>
                </div>

                <div class="showcase-card__icon">
                  <q-icon name="north_east" />
                </div>
              </div>

              <div class="showcase-card__status">
                <div>
                  <q-icon name="verified" />
                  <span>{{ t('showcase.statusOffer') }}</span>
                </div>
                <div>
                  <q-icon name="auto_graph" />
                  <span>{{ t('showcase.statusSales') }}</span>
                </div>
              </div>

              <div class="workflow">
                <div class="workflow__item workflow__item--active">
                  <div class="workflow__icon">
                    <q-icon name="psychology" />
                  </div>
                  <div>
                    <strong>{{ t('showcase.strategy') }}</strong>
                    <span>{{ t('showcase.strategyText') }}</span>
                  </div>
                </div>

                <div class="workflow__item">
                  <div class="workflow__icon">
                    <q-icon name="palette" />
                  </div>
                  <div>
                    <strong>{{ t('showcase.visual') }}</strong>
                    <span>{{ t('showcase.visualText') }}</span>
                  </div>
                </div>

                <div class="workflow__item">
                  <div class="workflow__icon">
                    <q-icon name="code" />
                  </div>
                  <div>
                    <strong>{{ t('showcase.implementation') }}</strong>
                    <span>{{ t('showcase.implementationText') }}</span>
                  </div>
                </div>
              </div>

              <div class="showcase-grid">
                <div class="showcase-grid__main">
                  <div class="gradient-line"></div>
                  <strong>{{ t('showcase.structure') }}</strong>
                  <p>{{ t('showcase.structureText') }}</p>
                </div>

                <div class="showcase-grid__box">
                  <q-icon name="bolt" />
                  <span>{{ t('showcase.speed') }}</span>
                </div>

                <div class="showcase-grid__box showcase-grid__box--pink">
                  <q-icon name="workspace_premium" />
                  <span>{{ t('showcase.impression') }}</span>
                </div>
              </div>

              <div class="showcase-card__bottom">
                <span class="live-dot"></span>
                <p>{{ t('showcase.footer') }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="intro-strip">
        <div class="wide-container">
          <div class="strip-card" data-aos="fade-up">
            <div>
              <span>{{ t('intro.label') }}</span>
              <strong>{{ t('intro.title') }}</strong>
            </div>

            <q-btn
              rounded
              unelevated
              class="strip-button"
              :label="t('intro.button')"
              @click="scrollToSection('approach')"
            />
          </div>
        </div>
      </section>

      <section class="section problem-section">
        <div class="container">
          <div class="section-heading section-heading--center" data-aos="fade-up">
            <span>{{ t('problem.label') }}</span>
            <h2>{{ t('problem.title') }}</h2>
            <p>{{ t('problem.text') }}</p>
          </div>

          <div class="problem-grid">
            <article v-for="item in problems" :key="item.title" class="problem-card">
              <div class="problem-card__icon">
                <q-icon :name="item.icon" />
              </div>
              <h3>{{ item.title }}</h3>
              <p>{{ item.text }}</p>
            </article>
          </div>
        </div>
      </section>

      <section id="services" class="section services-section">
        <div class="wide-container services-shell">
          <div class="container services-layout">
            <div class="section-heading section-heading--left sticky-heading" data-aos="fade-right">
              <span>{{ t('services.label') }}</span>
              <h2>{{ t('services.title') }}</h2>
              <p>{{ t('services.text') }}</p>

              <q-btn
                unelevated
                rounded
                size="lg"
                class="btn-primary"
                :label="t('services.cta')"
                @click="scrollToSection('contact')"
              />
            </div>

            <div class="service-stack">
              <article v-for="service in services" :key="service.title" class="service-row">
                <div class="service-row__number">{{ service.number }}</div>
                <div class="service-row__content">
                  <div class="service-row__top">
                    <q-icon :name="service.icon" />
                    <h3>{{ service.title }}</h3>
                  </div>
                  <p>{{ service.text }}</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
      <section class="section conversion-section">
        <div class="container">
          <div class="conversion-card" data-aos="fade-up">
            <div>
              <h3>{{ t('conversion.title') }}</h3>
              <p>{{ t('conversion.text') }}</p>
            </div>
            <q-btn
              unelevated
              rounded
              size="lg"
              class="btn-primary conversion-card__button"
              :label="t('conversion.button')"
              @click="scrollToSection('contact')"
            />
          </div>
        </div>
      </section>

      <section class="section examples-section">
        <div class="container">
          <div class="section-heading section-heading--center" data-aos="fade-up">
            <span>{{ t('examples.label') }}</span>
            <h2>{{ t('examples.title') }}</h2>
            <p>{{ t('examples.text') }}</p>
          </div>

          <div class="examples-grid">
            <article
              v-for="(example, index) in examples"
              :key="example.title"
              class="example-card"
              :class="`example-card--${exampleTones[index]}`"
            >
              <div class="example-preview" :class="`example-preview--${exampleTones[index]}`">
                <div class="example-preview__bar">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div class="example-preview__nav">
                  <span v-for="navItem in example.preview.nav" :key="navItem">{{ navItem }}</span>
                </div>

                <template v-if="example.code !== 'website_redesign'">
                  <div class="example-preview__hero">
                    <p>{{ example.preview.heroTitle }}</p>
                    <span>{{ example.preview.cta }}</span>
                  </div>

                  <div
                    class="example-preview__cards"
                    :class="{
                      'example-preview__cards--landing': example.code === 'campaign_landing',
                    }"
                  >
                    <div
                      v-for="card in example.preview.cards"
                      :key="card"
                      class="example-preview__card"
                    >
                      <strong>{{ card }}</strong>
                    </div>
                  </div>

                  <div v-if="example.code === 'campaign_landing'" class="example-preview__pills">
                    <span v-for="pill in example.preview.pills" :key="pill">{{ pill }}</span>
                  </div>

                  <div
                    class="example-preview__footer"
                    :class="{
                      'example-preview__footer--corporate':
                        example.code === 'business_presentation',
                    }"
                  >
                    <div v-if="example.code === 'local_business'" class="example-preview__support">
                      {{ example.preview.support }}
                    </div>
                    <div v-else class="example-preview__cta-pill"></div>
                    <div
                      v-if="example.code === 'business_presentation'"
                      class="example-preview__phone"
                    ></div>
                  </div>

                  <div
                    v-if="example.code === 'campaign_landing'"
                    class="example-preview__mini-form"
                  >
                    <span></span>
                    <div></div>
                  </div>
                </template>

                <template v-else>
                  <div class="example-preview__before-after">
                    <div class="example-preview__state">
                      <strong>{{ example.preview.before }}</strong>
                      <div class="example-preview__state-lines">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                    <div class="example-preview__state example-preview__state--after">
                      <strong>{{ example.preview.after }}</strong>
                      <p>{{ example.preview.heroTitle }}</p>
                      <div class="example-preview__state-lines">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                      <i>{{ example.preview.cta }}</i>
                    </div>
                  </div>
                </template>
              </div>

              <div class="example-card__copy">
                <h3>{{ example.title }}</h3>
                <p class="example-card__subtitle">{{ example.subtitle }}</p>
                <p class="example-card__value">{{ example.description }}</p>
                <ul>
                  <li v-for="bullet in example.bullets" :key="bullet">
                    <q-icon name="done" />
                    <span>{{ bullet }}</span>
                  </li>
                </ul>
              </div>

              <div class="example-card__footer">
                <q-btn
                  unelevated
                  rounded
                  class="btn-primary example-card__button"
                  :label="t('examples.cta')"
                  @click="selectExample(example)"
                />
              </div>
            </article>
          </div>

          <div class="examples-footer">
            <h3>{{ t('examples.finalCta.title') }}</h3>
            <p>{{ t('examples.note') }}</p>
            <p>{{ t('examples.finalCta.text') }}</p>
            <q-btn
              unelevated
              rounded
              class="btn-primary"
              :label="t('examples.finalCta.button')"
              @click="scrollToSection('contact')"
            />
          </div>
        </div>
      </section>

      <section id="approach" class="section approach-section">
        <div class="wide-container">
          <div class="approach-card" data-aos="zoom-in-up">
            <div class="approach-card__content">
              <span class="mini-label">{{ t('approach.label') }}</span>
              <h2>{{ t('approach.title') }}</h2>
              <p>{{ t('approach.text') }}</p>

              <div class="approach-points">
                <div>
                  <q-icon name="ads_click" />
                  <span>{{ approachPoints[0] }}</span>
                </div>
                <div>
                  <q-icon name="schema" />
                  <span>{{ approachPoints[1] }}</span>
                </div>
                <div>
                  <q-icon name="speed" />
                  <span>{{ approachPoints[2] }}</span>
                </div>
                <div>
                  <q-icon name="workspace_premium" />
                  <span>{{ approachPoints[3] }}</span>
                </div>
              </div>
            </div>

            <div class="approach-visual">
              <div class="orbit">
                <div class="orbit__ring"></div>
                <div class="orbit__center">
                  <q-icon name="hub" />
                  <span>{{ t('approach.orbit.site') }}</span>
                </div>

                <div class="orbit__item orbit__item--one">
                  <q-icon name="psychology" />
                  <span>{{ t('approach.orbit.message') }}</span>
                </div>

                <div class="orbit__item orbit__item--two">
                  <q-icon name="palette" />
                  <span>{{ t('approach.orbit.design') }}</span>
                </div>

                <div class="orbit__item orbit__item--three">
                  <q-icon name="call" />
                  <span>{{ t('approach.orbit.inquiry') }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section audience-section">
        <div class="container">
          <div class="section-heading section-heading--center" data-aos="fade-up">
            <span>{{ t('audience.label') }}</span>
            <h2>{{ t('audience.title') }}</h2>
            <p>{{ t('audience.text') }}</p>
          </div>

          <div class="audience-grid">
            <div v-for="audience in audiences" :key="audience" class="audience-pill">
              <q-icon name="check_circle" />
              <span>{{ audience }}</span>
            </div>
          </div>
        </div>
      </section>

      <section id="process" class="section process-section">
        <div class="container">
          <div class="section-heading section-heading--center" data-aos="fade-up">
            <span>{{ t('process.label') }}</span>
            <h2>{{ t('process.title') }}</h2>
            <p>{{ t('process.text') }}</p>
          </div>

          <div class="process-grid">
            <article v-for="step in processSteps" :key="step.title" class="process-card">
              <div class="process-card__index">{{ step.index }}</div>
              <h3>{{ step.title }}</h3>
              <p>{{ step.text }}</p>
            </article>
          </div>
        </div>
      </section>

      <section class="section offer-section">
        <div class="wide-container">
          <div class="offer-card" data-aos="fade-up">
            <div class="offer-card__content">
              <span class="mini-label mini-label--dark">{{ t('offer.label') }}</span>
              <h2>{{ t('offer.title') }}</h2>
              <p>{{ t('offer.text') }}</p>
            </div>

            <div class="offer-list">
              <div v-for="item in offerItems" :key="item">
                <q-icon name="done" />
                {{ item }}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" class="section contact-section">
        <div class="container contact-layout">
          <div class="contact-copy" data-aos="fade-right">
            <span class="mini-label">{{ t('contact.label') }}</span>
            <h2>{{ t('contact.title') }}</h2>
            <p>{{ t('contact.text') }}</p>
            <div class="contact-trust">
              <div v-for="trust in contactTrust" :key="trust">
                <q-icon name="task_alt" />
                <span>{{ trust }}</span>
              </div>
            </div>

            <div class="contact-direct">
              <a href="mailto:miloslazarevic410@gmail.com">
                <q-icon name="mail" />
                <span>miloslazarevic410@gmail.com</span>
              </a>
              <!--
              <a href="tel:+381600000000">
                <q-icon name="phone" />
                <span>+381 60 000 0000</span>
              </a>
              -->
            </div>
          </div>

          <q-form class="contact-form" @submit.prevent="submitForm">
            <div class="form-intro">
              <span>{{ t('contact.brief.label') }}</span>
              <h3>{{ t('contact.brief.title') }}</h3>
              <p>{{ t('contact.brief.text') }}</p>
            </div>

            <div class="form-trust">
              <div v-for="trust in contactTrust" :key="trust">{{ trust }}</div>
            </div>

            <q-input
              v-model="form.name"
              :disable="isSubmitting"
              borderless
              :label="t('contact.form.name')"
              class="input"
            />

            <q-input
              v-model="form.contact"
              :disable="isSubmitting"
              borderless
              :label="t('contact.form.contact')"
              class="input"
            />

            <div class="form-grid-two">
              <q-select
                v-model="form.projectType"
                :options="projectTypeOptions"
                emit-value
                map-options
                borderless
                :disable="isSubmitting"
                :label="t('contact.form.projectType')"
                class="input"
              />

              <q-select
                v-model="form.goal"
                :options="goalOptions"
                emit-value
                map-options
                borderless
                :disable="isSubmitting"
                :label="t('contact.form.goal')"
                class="input"
              />
            </div>

            <div class="form-grid-two">
              <q-select
                v-model="form.timeline"
                :options="timelineOptions"
                emit-value
                map-options
                borderless
                :disable="isSubmitting"
                :label="t('contact.form.timeline')"
                class="input"
              />

              <q-select
                v-model="form.budget"
                :options="budgetOptions"
                emit-value
                map-options
                borderless
                :disable="isSubmitting"
                :label="t('contact.form.budget')"
                class="input"
              />
            </div>

            <q-input
              v-model="form.website"
              borderless
              :disable="isSubmitting"
              :label="t('contact.form.website')"
              class="input"
            />

            <q-input
              v-model="form.message"
              borderless
              :disable="isSubmitting"
              type="textarea"
              autogrow
              :label="t('contact.form.message')"
              :placeholder="t('contact.form.messagePlaceholder')"
              class="input input--textarea"
            />
            <transition name="form-alert-fade">
              <div
                v-if="formStatus.message"
                class="form-alert"
                :class="`form-alert--${formStatus.type}`"
              >
                <q-icon
                  :name="
                    formStatus.type === 'positive'
                      ? 'check_circle'
                      : formStatus.type === 'warning'
                        ? 'warning'
                        : 'error'
                  "
                />
                <span>{{ formStatus.message }}</span>
              </div>
            </transition>

            <q-btn
              type="submit"
              unelevated
              rounded
              size="lg"
              class="btn-primary full-width"
              :loading="isSubmitting"
              :disable="isSubmitting"
              :label="t('contact.form.submit')"
            />

            <p class="form-note">
              {{ t('contact.form.note') }}
            </p>
          </q-form>
        </div>
      </section>
    </main>

    <footer class="footer">
      <div class="container footer__inner">
        <button class="footer-brand" type="button" @click="scrollToSection('top')">
          <div class="brand__mark brand__mark--logo">
            <img src="/brand/ml-logo.png" :alt="t('aria.logoAlt')" width="50" height="50" />
          </div>
          <span>ML Web Studio</span>
        </button>

        <p>{{ t('footer.text') }}</p>
      </div>
    </footer>
    <transition name="scroll-top-fade">
      <q-btn
        v-if="showFloatingCta"
        unelevated
        rounded
        class="floating-cta"
        :label="t('contact.floatingCta')"
        :aria-label="t('aria.openContact')"
        @click="scrollToSection('contact')"
      />
    </transition>
    <transition name="scroll-top-fade">
      <button
        v-if="showScrollTop"
        type="button"
        class="scroll-top"
        :aria-label="t('aria.scrollTop')"
        @click="scrollToSection('top')"
      >
        <q-icon name="keyboard_arrow_up" />
      </button>
    </transition>
  </q-page>
</template>

<script setup>
import { computed, reactive, ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { STORAGE_KEY } from 'src/boot/i18n'

const { t, tm, locale } = useI18n()

const isSubmitting = ref(false)
const formStatus = ref({
  type: '',
  message: '',
})

function setFormStatus(type, message) {
  formStatus.value = {
    type,
    message,
  }
}

function clearFormStatus() {
  formStatus.value = {
    type: '',
    message: '',
  }
}

const showScrollTop = ref(false)
const showFloatingCta = ref(false)
const isMobile = ref(false)

const heroChips = computed(() => tm('hero.chips'))
const heroChipIcons = ['phone_iphone', 'speed', 'ads_click']
const languages = [
  { code: 'sr', label: 'Srpski', short: 'SR' },
  { code: 'en', label: 'English', short: 'EN' },
]
const currentLanguage = computed(() => {
  return languages.find((language) => language.code === locale.value) ?? languages[0]
})
const problems = computed(() => tm('problem.items'))
const services = computed(() => tm('services.items'))
const approachPoints = computed(() => tm('approach.points'))
const audiences = computed(() => tm('audience.items'))
const processSteps = computed(() => tm('process.items'))
const offerItems = computed(() => tm('offer.items'))
const contactTrust = computed(() => tm('contact.trust'))
const examples = computed(() => tm('examples.items'))
const projectTypeOptions = computed(() => tm('contact.projectTypes'))
const goalOptions = computed(() => tm('contact.goals'))
const timelineOptions = computed(() => tm('contact.timelines'))
const budgetOptions = computed(() => tm('contact.budgets'))
const exampleTones = ['blue', 'pink', 'cyan', 'neutral']

function handleScroll() {
  showScrollTop.value = window.scrollY > 650
  showFloatingCta.value = isMobile.value && window.scrollY > 520
}

onMounted(() => {
  isMobile.value = window.matchMedia('(max-width: 760px)').matches
  handleScroll()
  updateSeoTags()
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('resize', handleResize, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleResize)
})
const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT

const form = reactive({
  name: '',
  contact: '',
  projectType: '',
  goal: '',
  timeline: '',
  budget: '',
  website: '',
  message: '',
})

function handleResize() {
  isMobile.value = window.matchMedia('(max-width: 760px)').matches
  handleScroll()
}

function setLanguage(nextLocale) {
  if (nextLocale !== 'sr' && nextLocale !== 'en') return
  locale.value = nextLocale
}

function updateSeoTags() {
  document.title = t('seo.title')
  const description = document.querySelector('meta[name="description"]')
  if (description) {
    description.setAttribute('content', t('seo.description'))
  }
}

watch(
  locale,
  (newLocale) => {
    window.localStorage.setItem(STORAGE_KEY, newLocale)
    document.documentElement.lang = newLocale
    updateSeoTags()
  },
  { immediate: true },
)

function scrollToSection(id) {
  if (id === 'top') {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
    return
  }

  const element = document.getElementById(id)
  if (!element) return

  const offset = 92
  const top = element.getBoundingClientRect().top + window.scrollY - offset

  window.scrollTo({
    top,
    behavior: 'smooth',
  })
}

function getOptionLabel(options, value) {
  const match = options.find((option) => option.value === value)
  return match ? match.label : t('contact.form.notSelected')
}

function selectExample(example) {
  const suggestedTypeByExample = {
    local_business: 'presentation',
    campaign_landing: 'landing',
    business_presentation: 'presentation',
    website_redesign: 'redesign',
  }

  form.projectType = suggestedTypeByExample[example.code] || form.projectType
  form.message =
    locale.value === 'sr'
      ? `Zanima me pravac: ${example.title}. Želim da mi predložite najbolju strukturu.`
      : `I'm interested in this direction: ${example.title}. I'd like you to suggest the best structure.`
  scrollToSection('contact')
}

async function submitForm() {
  clearFormStatus()

  if (!form.name.trim() || !form.contact.trim() || !form.message.trim()) {
    setFormStatus('warning', t('contact.form.validation'))
    return
  }

  if (!formspreeEndpoint) {
    setFormStatus('negative', t('contact.form.endpointMissing'))
    return
  }

  isSubmitting.value = true

  try {
    const response = await fetch(formspreeEndpoint, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        project_type: getOptionLabel(projectTypeOptions.value, form.projectType),
        tip_projekta: getOptionLabel(projectTypeOptions.value, form.projectType),
        website_goal: getOptionLabel(goalOptions.value, form.goal),
        cilj_sajta: getOptionLabel(goalOptions.value, form.goal),
        timeline: getOptionLabel(timelineOptions.value, form.timeline),
        rok: getOptionLabel(timelineOptions.value, form.timeline),
        budget_range: getOptionLabel(budgetOptions.value, form.budget),
        budzet: getOptionLabel(budgetOptions.value, form.budget),
        language: locale.value,
        jezik: locale.value,
        ime_i_firma: form.name,
        kontakt: form.contact,
        sajt: form.website || t('contact.form.notSelected'),
        poruka: form.message,
        izvor: 'ML Web Studio landing stranica',
      }),
    })

    if (!response.ok) {
      throw new Error('Form submission failed')
    }

    setFormStatus('positive', t('contact.form.success'))

    form.name = ''
    form.contact = ''
    form.projectType = ''
    form.goal = ''
    form.timeline = ''
    form.budget = ''
    form.website = ''
    form.message = ''
  } catch {
    setFormStatus('negative', t('contact.form.error'))
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped lang="scss">
.page {
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
  color: #f8fafc;
  background:
    radial-gradient(circle at 12% 0%, rgba(59, 130, 246, 0.25), transparent 31rem),
    radial-gradient(circle at 86% 4%, rgba(124, 58, 237, 0.24), transparent 34rem),
    radial-gradient(circle at 52% 100%, rgba(219, 39, 119, 0.12), transparent 42rem),
    linear-gradient(180deg, #07111f 0%, #050816 44%, #07111f 100%);
}

.noise {
  position: fixed;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  opacity: 0.28;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.028) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.028) 1px, transparent 1px);
  background-size: 42px 42px;
  mask-image: linear-gradient(to bottom, black, transparent 86%);
}

.ambient {
  position: fixed;
  z-index: 0;
  border-radius: 999px;
  pointer-events: none;
  filter: blur(22px);
  opacity: 0.3;
}

.ambient--one {
  width: 340px;
  height: 340px;
  left: -130px;
  top: 120px;
  background: rgba(37, 99, 235, 0.5);
}

.ambient--two {
  width: 360px;
  height: 360px;
  right: -150px;
  top: 210px;
  background: rgba(124, 58, 237, 0.5);
}

.ambient--three {
  width: 240px;
  height: 240px;
  left: 45%;
  bottom: 80px;
  background: rgba(219, 39, 119, 0.32);
}

.container {
  position: relative;
  z-index: 2;
  width: min(1340px, calc(100% - 56px));
  margin: 0 auto;
}

.wide-container {
  position: relative;
  z-index: 2;
  width: min(1480px, calc(100% - 44px));
  margin: 0 auto;
}

button {
  font-family: inherit;
}

.nav {
  position: sticky;
  top: 14px;
  z-index: 30;
  width: min(1280px, calc(100% - 36px));
  margin: 14px auto 0;
  padding: 12px 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 999px;
  background: rgba(5, 8, 22, 0.72);
  border: 1px solid rgba(255, 255, 255, 0.13);
  box-shadow: 0 14px 34px rgba(0, 0, 0, 0.26);
  backdrop-filter: blur(14px);
}

.brand,
.footer-brand {
  border: 0;
  background: transparent;
  display: flex;
  align-items: center;
  gap: 12px;
  color: white;
  text-decoration: none;
  cursor: pointer;
}

.brand__mark {
  width: 46px;
  height: 46px;
  display: grid;
  place-items: center;
  border-radius: 17px;
  color: white;
  font-weight: 950;
  letter-spacing: -0.07em;
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.25), transparent),
    linear-gradient(135deg, #2563eb, #7c3aed 52%, #db2777);
  box-shadow:
    0 18px 40px rgba(37, 99, 235, 0.36),
    inset 0 1px 0 rgba(255, 255, 255, 0.25);
}

.brand__text {
  display: grid;
  gap: 2px;
  text-align: left;

  strong {
    font-size: 15px;
    font-weight: 950;
    letter-spacing: -0.03em;
  }

  span {
    color: rgba(255, 255, 255, 0.56);
    font-size: 12px;
    font-weight: 700;
  }
}

.nav__links {
  display: flex;
  align-items: center;
  gap: 6px;

  button {
    border: 0;
    padding: 11px 15px;
    border-radius: 999px;
    color: rgba(255, 255, 255, 0.7);
    background: transparent;
    font-size: 14px;
    font-weight: 850;
    cursor: pointer;
    transition: 0.22s ease;

    &:hover {
      color: white;
      background: rgba(255, 255, 255, 0.08);
    }
  }
}

.nav__button {
  color: white;
  font-weight: 950;
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.18), transparent),
    linear-gradient(
      135deg,
      rgba(37, 99, 235, 0.92),
      rgba(124, 58, 237, 0.92) 58%,
      rgba(219, 39, 119, 0.9)
    );
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow:
    0 14px 32px rgba(37, 99, 235, 0.26),
    inset 0 1px 0 rgba(255, 255, 255, 0.22);
  transition: 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow:
      0 18px 42px rgba(37, 99, 235, 0.34),
      inset 0 1px 0 rgba(255, 255, 255, 0.25);
  }
}

.nav__actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.lang-dropdown {
  min-height: 42px;
  color: #e2e8f0;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: linear-gradient(135deg, rgba(148, 163, 184, 0.16), rgba(15, 23, 42, 0.38));
  box-shadow:
    0 10px 22px rgba(2, 6, 23, 0.26),
    inset 0 1px 0 rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(10px);

  :deep(.q-btn__dropdown-icon) {
    color: #cbd5e1;
  }

  :deep(.q-btn__content) {
    gap: 8px;
  }
}

.lang-dropdown__label {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  line-height: 1;

  strong {
    color: #ffffff;
    font-size: 12px;
    font-weight: 950;
    letter-spacing: 0.04em;
  }

  span {
    color: rgba(226, 232, 240, 0.88);
    font-size: 12px;
    font-weight: 800;
  }
}

.lang-menu {
  min-width: 188px;
  padding: 6px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: linear-gradient(160deg, rgba(15, 23, 42, 0.96), rgba(30, 41, 59, 0.96));
  box-shadow: 0 16px 40px rgba(2, 6, 23, 0.35);
}

.lang-menu__item {
  border-radius: 12px;
  color: #e2e8f0;

  &:hover {
    background: rgba(148, 163, 184, 0.14);
  }
}

.lang-menu__item--active {
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.28), rgba(124, 58, 237, 0.24));

  :deep(.q-icon) {
    color: #93c5fd;
  }
}

.lang-menu__short {
  display: inline-flex;
  width: 34px;
  height: 24px;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 950;
  letter-spacing: 0.04em;
  color: #dbeafe;
  background: rgba(59, 130, 246, 0.22);
  border: 1px solid rgba(147, 197, 253, 0.26);
}

.hero {
  position: relative;
  padding: 72px 0 54px;
}

.hero__grid {
  display: grid;
  grid-template-columns: minmax(0, 1.02fr) minmax(440px, 0.86fr);
  gap: 42px;
  align-items: center;
}

.hero__content {
  max-width: 850px;
}

.hero__badge,
.mini-label {
  width: fit-content;
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 9px 14px;
  border-radius: 999px;
  color: #dbeafe;
  font-weight: 900;
  font-size: 14px;
  background: rgba(59, 130, 246, 0.13);
  border: 1px solid rgba(147, 197, 253, 0.2);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.1),
    0 14px 32px rgba(37, 99, 235, 0.12);
}

h1 {
  max-width: 790px;
  margin: 26px 0 0;
  color: white;
  font-size: clamp(46px, 5.7vw, 82px);
  line-height: 0.92;
  letter-spacing: -0.078em;
  font-weight: 950;

  span {
    display: block;
    color: transparent;
    background: linear-gradient(135deg, #93c5fd 0%, #c4b5fd 36%, #f9a8d4 74%, #67e8f9 100%);
    background-size: 180% 180%;
    background-clip: text;
    -webkit-background-clip: text;
    animation: gradientText 7s ease-in-out infinite;
  }
}

.hero__lead {
  max-width: 690px;
  margin: 24px 0 0;
  color: rgba(255, 255, 255, 0.72);
  font-size: 18px;
  line-height: 1.72;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 28px;
}

.btn-primary {
  color: white;
  font-weight: 950;
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.22), transparent),
    linear-gradient(135deg, #2563eb, #7c3aed 52%, #db2777);
  box-shadow:
    0 22px 46px rgba(37, 99, 235, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.22);
  transition: 0.25s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow:
      0 28px 58px rgba(37, 99, 235, 0.38),
      inset 0 1px 0 rgba(255, 255, 255, 0.24);
  }
}

.btn-ghost {
  color: #e0ecff;
  font-weight: 950;
  border: 1px solid rgba(147, 197, 253, 0.24);
  background: linear-gradient(135deg, rgba(147, 197, 253, 0.1), rgba(255, 255, 255, 0.035));
  box-shadow:
    0 16px 36px rgba(0, 0, 0, 0.16),
    inset 0 1px 0 rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(16px);
  transition: 0.25s ease;

  &:hover {
    transform: translateY(-3px);
    color: white;
    background: linear-gradient(135deg, rgba(147, 197, 253, 0.16), rgba(255, 255, 255, 0.06));
    border-color: rgba(147, 197, 253, 0.38);
  }
}

.hero__chips {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 22px;

  div {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 11px 14px;
    border-radius: 999px;
    color: rgba(255, 255, 255, 0.78);
    font-weight: 850;
    font-size: 14px;
    background: rgba(255, 255, 255, 0.075);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .q-icon {
    color: #93c5fd;
    font-size: 19px;
  }
}

.hero__microcopy {
  margin: 12px 0 0;
  color: rgba(255, 255, 255, 0.58);
  font-size: 14px;
  line-height: 1.6;
}

.hero__visual {
  display: flex;
  justify-content: center;
}

.showcase-card {
  position: relative;
  overflow: hidden;
  width: min(540px, 100%);
  padding: 18px;
  border-radius: 34px;
  background:
    radial-gradient(circle at top right, rgba(147, 197, 253, 0.16), transparent 20rem),
    linear-gradient(135deg, rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.045));
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 16px 38px rgba(0, 0, 0, 0.28);
  backdrop-filter: blur(10px);
  animation: floatCard 7s ease-in-out infinite;
  will-change: transform;
}

.showcase-card__shine {
  position: absolute;
  right: -90px;
  bottom: -110px;
  width: 300px;
  height: 300px;
  border-radius: 999px;
  background: rgba(37, 99, 235, 0.36);
  filter: blur(24px);
  pointer-events: none;
}

.showcase-card__top {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  gap: 18px;
  align-items: flex-start;
  padding: 8px 4px 16px;

  span {
    display: block;
    margin-bottom: 6px;
    color: rgba(255, 255, 255, 0.56);
    font-size: 13px;
    font-weight: 800;
  }

  strong {
    display: block;
    color: white;
    font-size: 21px;
    line-height: 1.12;
    letter-spacing: -0.04em;
    font-weight: 950;
  }
}

.showcase-card__icon {
  width: 44px;
  height: 44px;
  display: grid;
  place-items: center;
  flex: 0 0 auto;
  border-radius: 16px;
  color: white;
  font-size: 22px;
  background: rgba(255, 255, 255, 0.1);
}

.showcase-card__status {
  position: relative;
  z-index: 2;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 12px;

  div {
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 9px 11px;
    border-radius: 999px;
    color: white;
    font-weight: 900;
    font-size: 12px;
    background: rgba(255, 255, 255, 0.09);
    border: 1px solid rgba(255, 255, 255, 0.12);
  }

  .q-icon {
    color: #93c5fd;
    font-size: 18px;
  }
}

.workflow {
  position: relative;
  z-index: 2;
  display: grid;
  gap: 10px;
}

.workflow__item {
  display: flex;
  gap: 14px;
  align-items: center;
  padding: 13px 14px;
  border-radius: 20px;
  color: white;
  background: rgba(255, 255, 255, 0.075);
  border: 1px solid rgba(255, 255, 255, 0.105);
  transition: 0.25s ease;

  &:hover {
    transform: translateX(5px);
    background: rgba(255, 255, 255, 0.1);
  }

  &--active {
    background: linear-gradient(135deg, rgba(37, 99, 235, 0.4), rgba(124, 58, 237, 0.26));
    border-color: rgba(147, 197, 253, 0.24);
  }

  strong {
    display: block;
    font-size: 15px;
    font-weight: 950;
  }

  span {
    display: block;
    margin-top: 4px;
    color: rgba(255, 255, 255, 0.62);
    font-size: 12.5px;
    line-height: 1.45;
  }
}

.workflow__icon {
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  flex: 0 0 auto;
  border-radius: 14px;
  color: #bfdbfe;
  font-size: 21px;
  background: rgba(255, 255, 255, 0.09);
}

.showcase-grid {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  gap: 10px;
  margin-top: 12px;
}

.showcase-grid__main,
.showcase-grid__box {
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.065);
}

.showcase-grid__main {
  min-height: 144px;
  padding: 17px;
  grid-row: span 2;
  border-radius: 22px;

  strong {
    display: block;
    color: white;
    font-size: 21px;
    line-height: 1;
    letter-spacing: -0.05em;
    font-weight: 950;
  }

  p {
    margin: 12px 0 0;
    color: rgba(255, 255, 255, 0.6);
    font-size: 13.5px;
    line-height: 1.6;
  }
}

.gradient-line {
  width: 86px;
  height: 8px;
  margin-bottom: 20px;
  border-radius: 999px;
  background: linear-gradient(90deg, #60a5fa, #c084fc, #f472b6);
  animation: widthPulse 3.2s ease-in-out infinite;
}

.showcase-grid__box {
  min-height: 68px;
  display: grid;
  place-items: center;
  text-align: center;
  border-radius: 20px;
  transition: 0.25s ease;

  &:hover {
    transform: translateY(-4px);
  }

  .q-icon {
    color: #93c5fd;
    font-size: 27px;
  }

  span {
    display: block;
    margin-top: 6px;
    color: white;
    font-weight: 900;
    font-size: 13px;
  }

  &--pink .q-icon {
    color: #f9a8d4;
  }
}

.showcase-card__bottom {
  position: relative;
  z-index: 2;
  display: flex;
  gap: 10px;
  align-items: center;
  margin-top: 10px;
  padding: 12px 14px;
  border-radius: 22px;
  background: rgba(0, 0, 0, 0.18);

  p {
    margin: 0;
    color: rgba(255, 255, 255, 0.64);
    font-size: 12px;
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

.intro-strip {
  position: relative;
  z-index: 2;
  padding: 8px 0 38px;
}

.strip-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 28px;
  padding: 26px 30px;
  border-radius: 34px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.13), rgba(255, 255, 255, 0.05));
  border: 1px solid rgba(255, 255, 255, 0.13);
  box-shadow: 0 16px 38px rgba(0, 0, 0, 0.2);

  span {
    display: block;
    margin-bottom: 8px;
    color: #93c5fd;
    font-weight: 950;
  }

  strong {
    display: block;
    max-width: 880px;
    color: white;
    font-size: clamp(22px, 3vw, 34px);
    line-height: 1.1;
    letter-spacing: -0.055em;
    font-weight: 950;
  }
}

.strip-button {
  flex: 0 0 auto;
  color: white;
  font-weight: 950;
  background: rgba(255, 255, 255, 0.095);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow:
    0 10px 24px rgba(0, 0, 0, 0.16),
    inset 0 1px 0 rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(10px);
  transition: 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.14);
    border-color: rgba(147, 197, 253, 0.3);
  }
}

.section {
  position: relative;
  z-index: 2;
  padding: 74px 0;
}

.section-heading {
  span {
    color: #93c5fd;
    font-weight: 950;
  }

  h2 {
    margin: 14px 0 0;
    color: white;
    font-size: clamp(34px, 4.1vw, 56px);
    line-height: 0.98;
    letter-spacing: -0.075em;
    font-weight: 950;
  }

  p {
    margin: 20px 0 0;
    color: rgba(255, 255, 255, 0.66);
    font-size: 17px;
    line-height: 1.75;
  }
}

.section-heading--center {
  max-width: 920px;
  margin: 0 auto 38px;
  text-align: center;
}

.section-heading--left {
  max-width: 560px;
}

.problem-section {
  padding-top: 36px;
}

.problem-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.problem-card {
  position: relative;
  overflow: hidden;
  min-height: 230px;
  padding: 24px;
  border-radius: 32px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.105), rgba(255, 255, 255, 0.04));
  border: 1px solid rgba(255, 255, 255, 0.115);
  box-shadow: 0 22px 70px rgba(0, 0, 0, 0.18);
  transition: 0.25s ease;

  &:before {
    content: '';
    position: absolute;
    inset: -1px;
    opacity: 0;
    border-radius: inherit;
    background: radial-gradient(circle at top left, rgba(96, 165, 250, 0.3), transparent 16rem);
    transition: 0.25s ease;
  }

  &:hover {
    transform: translateY(-8px);
    border-color: rgba(147, 197, 253, 0.26);
  }

  &:hover:before {
    opacity: 1;
  }

  h3,
  p,
  .problem-card__icon {
    position: relative;
    z-index: 2;
  }

  h3 {
    margin: 22px 0 12px;
    color: white;
    font-size: 25px;
    line-height: 1.08;
    letter-spacing: -0.045em;
    font-weight: 950;
  }

  p {
    margin: 0;
    color: rgba(255, 255, 255, 0.62);
    line-height: 1.7;
  }
}

.problem-card__icon {
  width: 58px;
  height: 58px;
  display: grid;
  place-items: center;
  border-radius: 20px;
  color: white;
  font-size: 28px;
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.23), transparent),
    linear-gradient(135deg, #2563eb, #7c3aed);
  box-shadow: 0 18px 40px rgba(37, 99, 235, 0.24);
}

.services-shell {
  padding: 56px 0;
  border-radius: 48px;
  background:
    radial-gradient(circle at 20% 10%, rgba(96, 165, 250, 0.14), transparent 34rem),
    radial-gradient(circle at 90% 20%, rgba(219, 39, 119, 0.12), transparent 30rem),
    rgba(255, 255, 255, 0.035);
  border: 1px solid rgba(255, 255, 255, 0.07);
}

.services-layout {
  display: grid;
  grid-template-columns: 0.82fr 1.18fr;
  gap: 58px;
  align-items: start;
}

.sticky-heading {
  position: sticky;
  top: 130px;

  .btn-primary {
    margin-top: 30px;
  }
}

.service-stack {
  display: grid;
  gap: 16px;
}

.service-row {
  display: grid;
  grid-template-columns: 74px 1fr;
  gap: 20px;
  padding: 25px;
  border-radius: 34px;
  background: rgba(255, 255, 255, 0.075);
  border: 1px solid rgba(255, 255, 255, 0.115);
  transition: 0.25s ease;

  &:hover {
    transform: translateX(8px);
    background: rgba(255, 255, 255, 0.105);
    border-color: rgba(147, 197, 253, 0.25);
  }
}

.service-row__number {
  color: rgba(255, 255, 255, 0.23);
  font-size: 34px;
  line-height: 1;
  font-weight: 950;
  letter-spacing: -0.07em;
}

.service-row__top {
  display: flex;
  gap: 12px;
  align-items: center;

  .q-icon {
    color: #93c5fd;
    font-size: 27px;
  }

  h3 {
    margin: 0;
    color: white;
    font-size: 25px;
    line-height: 1.1;
    letter-spacing: -0.045em;
    font-weight: 950;
  }
}

.service-row__content p {
  margin: 12px 0 0;
  color: rgba(255, 255, 255, 0.62);
  line-height: 1.72;
}

.approach-card {
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 36px;
  align-items: center;
  padding: 46px;
  border-radius: 48px;
  background:
    radial-gradient(circle at top right, rgba(147, 197, 253, 0.24), transparent 30rem),
    radial-gradient(circle at bottom left, rgba(236, 72, 153, 0.12), transparent 28rem),
    linear-gradient(135deg, rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.05));
  border: 1px solid rgba(255, 255, 255, 0.145);
  box-shadow: 0 20px 54px rgba(0, 0, 0, 0.24);

  h2 {
    margin: 18px 0 0;
    color: white;
    font-size: clamp(36px, 4.1vw, 58px);
    line-height: 0.97;
    letter-spacing: -0.075em;
    font-weight: 950;
  }

  p {
    margin: 20px 0 0;
    color: rgba(255, 255, 255, 0.66);
    font-size: 17px;
    line-height: 1.75;
  }
}

.approach-points {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-top: 30px;

  div {
    display: flex;
    gap: 10px;
    align-items: center;
    padding: 14px;
    border-radius: 20px;
    color: white;
    font-weight: 850;
    background: rgba(255, 255, 255, 0.075);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .q-icon {
    color: #93c5fd;
    font-size: 22px;
  }
}

.approach-visual {
  min-height: 400px;
  display: grid;
  place-items: center;
}

.orbit {
  position: relative;
  width: min(390px, 100%);
  aspect-ratio: 1;
}

.orbit__ring {
  position: absolute;
  inset: 0;
  border-radius: 999px;
  border: 1px dashed rgba(147, 197, 253, 0.24);
  animation: rotateSlow 22s linear infinite;
}

.orbit__center,
.orbit__item {
  position: absolute;
  display: grid;
  place-items: center;
  text-align: center;
  color: white;
  border-radius: 999px;
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.34), rgba(124, 58, 237, 0.24));
  border: 1px solid rgba(147, 197, 253, 0.22);
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.26);

  .q-icon {
    color: #bfdbfe;
  }

  span {
    display: block;
    margin-top: 5px;
    font-weight: 950;
  }
}

.orbit__center {
  inset: 50%;
  width: 134px;
  height: 134px;
  transform: translate(-50%, -50%);
  animation: orbitCenterPulse 5.4s ease-in-out infinite;

  .q-icon {
    font-size: 34px;
  }
}

.orbit__item {
  width: 106px;
  height: 106px;

  .q-icon {
    font-size: 28px;
  }

  span {
    font-size: 13px;
  }
}

.orbit__item--one {
  left: 50%;
  top: -53px;
  margin-left: -53px;
  animation: orbitBobOne 5.8s ease-in-out infinite;
}

.orbit__item--two {
  right: -53px;
  top: 50%;
  margin-top: -53px;
  animation: orbitBobTwo 6.1s ease-in-out infinite;
}

.orbit__item--three {
  left: -53px;
  top: 50%;
  margin-top: -53px;
  animation: orbitBobThree 6.4s ease-in-out infinite;
}

.audience-grid {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
}

.audience-pill {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px 18px;
  border-radius: 999px;
  color: white;
  font-weight: 900;
  background: rgba(255, 255, 255, 0.085);
  border: 1px solid rgba(255, 255, 255, 0.12);
  transition: 0.22s ease;

  &:hover {
    transform: translateY(-4px);
    background: rgba(255, 255, 255, 0.12);
  }

  .q-icon {
    color: #93c5fd;
    font-size: 21px;
  }
}

.process-section {
  padding-bottom: 58px;
}

.process-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.process-card {
  position: relative;
  overflow: hidden;
  min-height: 245px;
  padding: 24px;
  border-radius: 34px;
  background: rgba(255, 255, 255, 0.075);
  border: 1px solid rgba(255, 255, 255, 0.115);
  transition: 0.25s ease;

  &:after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    opacity: 0;
    transition: 0.25s ease;
    background: radial-gradient(circle at top right, rgba(96, 165, 250, 0.24), transparent 16rem);
  }

  &:hover {
    transform: translateY(-7px);
  }

  &:hover:after {
    opacity: 1;
  }

  h3,
  p,
  .process-card__index {
    position: relative;
    z-index: 2;
  }

  h3 {
    margin: 34px 0 12px;
    color: white;
    font-size: 25px;
    line-height: 1.08;
    letter-spacing: -0.05em;
    font-weight: 950;
  }

  p {
    margin: 0;
    color: rgba(255, 255, 255, 0.62);
    line-height: 1.7;
  }
}

.process-card__index {
  color: rgba(255, 255, 255, 0.24);
  font-size: 40px;
  line-height: 1;
  font-weight: 950;
  letter-spacing: -0.075em;
}

.offer-section {
  padding-top: 42px;
}

.conversion-section {
  padding-top: 10px;
}

.conversion-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 28px 30px;
  border-radius: 30px;
  background:
    radial-gradient(circle at 18% 15%, rgba(59, 130, 246, 0.2), transparent 26rem),
    linear-gradient(135deg, rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.05));
  border: 1px solid rgba(255, 255, 255, 0.14);
  box-shadow: 0 14px 34px rgba(0, 0, 0, 0.2);

  h3 {
    margin: 0;
    color: white;
    font-size: clamp(28px, 3.6vw, 44px);
    letter-spacing: -0.05em;
    line-height: 1.05;
    font-weight: 950;
  }

  p {
    margin: 14px 0 0;
    color: rgba(255, 255, 255, 0.66);
    max-width: 720px;
    line-height: 1.7;
  }
}

.conversion-card__button {
  flex: 0 0 auto;
}

.examples-section {
  padding-top: 24px;
}

.examples-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 22px;
}

.example-card {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 24px;
  border-radius: 32px;
  background:
    radial-gradient(circle at top right, rgba(255, 255, 255, 0.12), transparent 22rem),
    linear-gradient(155deg, rgba(255, 255, 255, 0.11), rgba(255, 255, 255, 0.04));
  border: 1px solid rgba(255, 255, 255, 0.14);
  box-shadow:
    0 16px 42px rgba(2, 6, 23, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.14);
  transition:
    transform 0.24s ease,
    border-color 0.24s ease;

  &:hover {
    transform: translateY(-7px);
    border-color: rgba(147, 197, 253, 0.3);
    box-shadow: 0 14px 34px rgba(2, 6, 23, 0.28);
  }

  will-change: transform;
}

.example-preview {
  --preview-accent: #3b82f6;
  --preview-accent-two: #7c3aed;
  --preview-surface: rgba(15, 23, 42, 0.82);
  padding: 14px;
  border-radius: 22px;
  background: linear-gradient(145deg, rgba(15, 23, 42, 0.96), var(--preview-surface));
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08);
}

.example-preview--blue {
  --preview-accent: #06b6d4;
  --preview-accent-two: #3b82f6;
}

.example-preview--pink {
  --preview-accent: #ec4899;
  --preview-accent-two: #8b5cf6;
}

.example-preview--cyan {
  --preview-accent: #60a5fa;
  --preview-accent-two: #6366f1;
}

.example-preview--neutral {
  --preview-accent: #64748b;
  --preview-accent-two: #8b5cf6;
}

.example-preview__bar {
  display: flex;
  gap: 6px;
  margin-bottom: 10px;

  span {
    width: 8px;
    height: 8px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.35);
  }
}

.example-preview__nav {
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;

  span {
    padding: 5px 8px;
    border-radius: 999px;
    font-size: 10px;
    font-weight: 800;
    color: rgba(255, 255, 255, 0.76);
    background: rgba(148, 163, 184, 0.16);
    border: 1px solid rgba(148, 163, 184, 0.2);
  }
}

.example-preview__hero {
  min-height: 96px;
  padding: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 14px;
  background: linear-gradient(135deg, var(--preview-accent), var(--preview-accent-two));

  p {
    margin: 0;
    max-width: 80%;
    color: #f8fafc;
    font-size: 13px;
    font-weight: 900;
    line-height: 1.2;
    letter-spacing: -0.02em;
  }

  span {
    width: fit-content;
    padding: 7px 10px;
    border-radius: 999px;
    font-size: 10px;
    font-weight: 900;
    color: #0f172a;
    background: rgba(255, 255, 255, 0.9);
  }
}

.example-preview__cards {
  margin-top: 12px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 8px;
}

.example-preview__card {
  min-height: 56px;
  border-radius: 12px;
  background: rgba(30, 41, 59, 0.92);
  border: 1px solid rgba(255, 255, 255, 0.08);
  position: relative;
  overflow: hidden;

  strong {
    position: absolute;
    inset: auto 8px 8px;
    display: inline-block;
    padding: 5px 8px;
    border-radius: 999px;
    font-size: 9px;
    font-weight: 900;
    color: #e2e8f0;
    background: rgba(15, 23, 42, 0.8);
    border: 1px solid rgba(148, 163, 184, 0.3);
  }
}

.example-preview__cards--landing {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.example-preview__footer {
  margin-top: 12px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.example-preview__footer--corporate {
  justify-content: space-between;
}

.example-preview__phone {
  width: 42px;
  height: 74px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: rgba(15, 23, 42, 0.95);
  position: relative;

  &:before {
    content: '';
    position: absolute;
    left: 50%;
    top: 6px;
    width: 14px;
    height: 3px;
    border-radius: 999px;
    transform: translateX(-50%);
    background: rgba(226, 232, 240, 0.35);
  }

  &:after {
    content: '';
    position: absolute;
    left: 50%;
    top: 16px;
    width: 28px;
    height: 48px;
    border-radius: 8px;
    transform: translateX(-50%);
    background: linear-gradient(180deg, rgba(148, 163, 184, 0.3), rgba(30, 41, 59, 0.45));
  }
}

.example-preview__cta-pill {
  height: 24px;
  flex: 1;
  border-radius: 999px;
  background: linear-gradient(135deg, var(--preview-accent), var(--preview-accent-two));
}

.example-preview__support {
  width: 100%;
  padding: 7px 10px;
  border-radius: 999px;
  font-size: 10px;
  font-weight: 850;
  color: #dbeafe;
  background: rgba(59, 130, 246, 0.2);
  border: 1px solid rgba(147, 197, 253, 0.28);
  text-align: center;
}

.example-preview__pills {
  margin-top: 10px;
  display: flex;
  gap: 7px;
  flex-wrap: wrap;

  span {
    padding: 5px 8px;
    border-radius: 999px;
    font-size: 10px;
    font-weight: 800;
    color: rgba(255, 255, 255, 0.86);
    background: rgba(244, 114, 182, 0.18);
    border: 1px solid rgba(244, 114, 182, 0.32);
  }
}

.example-preview__mini-form {
  margin-top: 10px;
  display: grid;
  gap: 6px;

  span {
    height: 9px;
    border-radius: 999px;
    background: rgba(226, 232, 240, 0.24);
  }

  div {
    height: 20px;
    border-radius: 999px;
    background: linear-gradient(135deg, var(--preview-accent), var(--preview-accent-two));
  }
}

.example-preview__before-after {
  margin-top: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.example-preview__state {
  border-radius: 12px;
  padding: 10px;
  background: rgba(51, 65, 85, 0.62);
  border: 1px solid rgba(148, 163, 184, 0.22);

  strong {
    display: block;
    color: rgba(226, 232, 240, 0.84);
    font-size: 11px;
    font-weight: 900;
    letter-spacing: 0.01em;
  }

  p {
    margin: 6px 0 0;
    color: rgba(255, 255, 255, 0.82);
    font-size: 10px;
    font-weight: 800;
    line-height: 1.3;
  }
}

.example-preview__state--after {
  background: rgba(14, 116, 144, 0.32);
  border-color: rgba(56, 189, 248, 0.35);
}

.example-preview__state-lines {
  margin-top: 8px;
  display: grid;
  gap: 6px;

  span {
    display: block;
    height: 6px;
    border-radius: 999px;
    background: rgba(226, 232, 240, 0.24);
  }
}

.example-preview__state i {
  display: inline-block;
  margin-top: 8px;
  padding: 4px 8px;
  border-radius: 999px;
  font-style: normal;
  font-size: 9px;
  font-weight: 800;
  color: #0f172a;
  background: rgba(255, 255, 255, 0.88);
}

.example-card__copy {
  h3 {
    margin: 0;
    color: white;
    font-size: 27px;
    line-height: 1.05;
    letter-spacing: -0.04em;
    font-weight: 950;
  }

  ul {
    margin: 14px 0 0;
    padding: 0;
    display: grid;
    gap: 8px;
    list-style: none;
  }

  li {
    display: flex;
    align-items: center;
    gap: 8px;
    color: rgba(255, 255, 255, 0.9);
    font-weight: 800;
    font-size: 14px;
  }

  .q-icon {
    color: #93c5fd;
    font-size: 18px;
  }
}

.example-card__subtitle {
  margin: 10px 0 0;
  color: rgba(191, 219, 254, 0.86);
  font-weight: 800;
  line-height: 1.55;
}

.example-card__value {
  margin: 10px 0 0;
  color: rgba(255, 255, 255, 0.66);
  line-height: 1.65;
}

.example-card__button {
  min-height: 40px;
  width: 190px;
  font-size: 13px;
  padding: 0 14px;
}

.example-card__footer {
  margin-top: auto;
}

.examples-footer {
  margin-top: 28px;
  padding: 24px;
  border-radius: 24px;
  background:
    radial-gradient(circle at top left, rgba(96, 165, 250, 0.18), transparent 20rem),
    linear-gradient(145deg, rgba(255, 255, 255, 0.11), rgba(255, 255, 255, 0.04));
  border: 1px solid rgba(255, 255, 255, 0.12);
  text-align: center;

  h3 {
    margin: 0;
    color: white;
    font-size: clamp(24px, 3vw, 34px);
    font-weight: 950;
    letter-spacing: -0.03em;
  }

  p {
    margin: 10px 0 0;
    color: rgba(255, 255, 255, 0.68);
    line-height: 1.65;
  }

  .q-btn {
    margin-top: 16px;
  }
}

.offer-card {
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 0.72fr;
  gap: 34px;
  align-items: center;
  padding: 38px;
  border-radius: 40px;
  color: white;
  background:
    radial-gradient(circle at 18% 10%, rgba(96, 165, 250, 0.18), transparent 28rem),
    radial-gradient(circle at 88% 18%, rgba(216, 180, 254, 0.16), transparent 28rem),
    linear-gradient(135deg, rgba(255, 255, 255, 0.13), rgba(255, 255, 255, 0.045));
  border: 1px solid rgba(255, 255, 255, 0.14);
  box-shadow: 0 18px 46px rgba(0, 0, 0, 0.26);
  backdrop-filter: blur(12px);

  &:before {
    content: '';
    position: absolute;
    inset: auto -120px -140px auto;
    width: 340px;
    height: 340px;
    border-radius: 999px;
    background: rgba(124, 58, 237, 0.28);
    filter: blur(24px);
    pointer-events: none;
  }

  &:after {
    content: '';
    position: absolute;
    left: -120px;
    top: -140px;
    width: 320px;
    height: 320px;
    border-radius: 999px;
    background: rgba(37, 99, 235, 0.22);
    filter: blur(24px);
    pointer-events: none;
  }

  h2 {
    position: relative;
    z-index: 2;
    margin: 18px 0 0;
    color: white;
    font-size: clamp(34px, 3.9vw, 54px);
    line-height: 0.98;
    letter-spacing: -0.078em;
    font-weight: 950;
  }

  p {
    position: relative;
    z-index: 2;
    max-width: 720px;
    margin: 20px 0 0;
    color: rgba(255, 255, 255, 0.66);
    font-size: 17px;
    line-height: 1.75;
  }
}
.offer-card__content {
  position: relative;
  z-index: 2;
}

.mini-label--dark {
  position: relative;
  z-index: 2;
  color: #dbeafe;
  background: rgba(59, 130, 246, 0.13);
  border-color: rgba(147, 197, 253, 0.2);
}

.offer-list {
  position: relative;
  z-index: 2;
  display: grid;
  gap: 12px;

  div {
    display: flex;
    align-items: center;
    gap: 11px;
    padding: 15px 17px;
    border-radius: 19px;
    color: rgba(255, 255, 255, 0.9);
    font-weight: 900;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.055));
    border: 1px solid rgba(255, 255, 255, 0.12);
    box-shadow:
      0 14px 34px rgba(0, 0, 0, 0.14),
      inset 0 1px 0 rgba(255, 255, 255, 0.12);
    transition: 0.22s ease;

    &:hover {
      transform: translateX(5px);
      background: linear-gradient(135deg, rgba(96, 165, 250, 0.16), rgba(255, 255, 255, 0.07));
      border-color: rgba(147, 197, 253, 0.24);
    }
  }

  .q-icon {
    color: #93c5fd;
    font-size: 22px;
    flex: 0 0 auto;
  }
}

.contact-section {
  padding-top: 80px;
}

.contact-layout {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 48px;
  align-items: start;
}

.contact-copy {
  h2 {
    margin: 18px 0 0;
    color: white;
    font-size: clamp(40px, 5vw, 68px);
    line-height: 0.94;
    letter-spacing: -0.08em;
    font-weight: 950;
  }

  p {
    margin: 22px 0 0;
    color: rgba(255, 255, 255, 0.66);
    font-size: 18px;
    line-height: 1.75;
  }
}

.contact-direct {
  display: grid;
  gap: 12px;
  margin-top: 30px;

  a {
    width: fit-content;
    display: inline-flex;
    align-items: center;
    gap: 12px;
    padding: 14px 16px;
    border-radius: 999px;
    color: white;
    text-decoration: none;
    font-weight: 900;
    background: rgba(255, 255, 255, 0.085);
    border: 1px solid rgba(255, 255, 255, 0.12);
    transition: 0.22s ease;

    &:hover {
      transform: translateX(5px);
      background: rgba(255, 255, 255, 0.13);
    }
  }

  .q-icon {
    color: #93c5fd;
    font-size: 22px;
  }
}

.contact-trust {
  display: grid;
  gap: 10px;
  margin-top: 24px;

  div {
    display: inline-flex;
    width: fit-content;
    align-items: center;
    gap: 9px;
    padding: 10px 13px;
    border-radius: 999px;
    color: rgba(255, 255, 255, 0.9);
    font-size: 13px;
    font-weight: 850;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.12);
  }

  .q-icon {
    color: #93c5fd;
    font-size: 18px;
  }
}

.contact-form {
  padding: 18px;
  border-radius: 36px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.145), rgba(255, 255, 255, 0.05));
  border: 1px solid rgba(255, 255, 255, 0.145);
  box-shadow: 0 14px 34px rgba(0, 0, 0, 0.22);
  backdrop-filter: blur(10px);
}

.form-intro {
  margin: 2px 6px 14px;

  span {
    color: #93c5fd;
    font-weight: 900;
    font-size: 12px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  h3 {
    margin: 6px 0 0;
    color: white;
    font-size: 24px;
    line-height: 1.1;
    letter-spacing: -0.03em;
    font-weight: 900;
  }

  p {
    margin: 8px 0 0;
    color: rgba(255, 255, 255, 0.66);
    line-height: 1.6;
    font-size: 14px;
  }
}

.form-trust {
  margin: 0 6px 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  div {
    padding: 7px 10px;
    border-radius: 999px;
    font-size: 11px;
    font-weight: 850;
    color: rgba(255, 255, 255, 0.88);
    border: 1px solid rgba(147, 197, 253, 0.24);
    background: rgba(59, 130, 246, 0.12);
  }
}

.form-grid-two {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.input {
  margin-bottom: 12px;
  padding: 4px 16px;
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.95);

  :deep(.q-field__label) {
    color: rgba(15, 23, 42, 0.58);
    font-weight: 700;
  }

  :deep(.q-field__native) {
    color: #0f172a;
    font-weight: 750;
  }
}

.input--textarea {
  :deep(textarea) {
    min-height: 120px;
  }
}

.form-note {
  margin: 16px 6px 0;
  color: rgba(255, 255, 255, 0.52);
  font-size: 13px;
  line-height: 1.6;
  text-align: center;
}

.footer {
  position: relative;
  z-index: 2;
  padding: 34px 0 44px;
  color: rgba(255, 255, 255, 0.56);
}

.footer__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 22px;
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.09);

  p {
    margin: 0;
  }
}

.footer-brand {
  span {
    color: white;
    font-weight: 950;
  }
}

@media (max-width: 1180px) {
  .hero__grid,
  .services-layout,
  .approach-card,
  .offer-card,
  .contact-layout {
    grid-template-columns: 1fr;
  }

  .hero__content {
    max-width: 900px;
  }

  h1 {
    max-width: 900px;
  }

  .hero__visual {
    justify-content: center;
  }

  .sticky-heading {
    position: static;
  }

  .problem-grid {
    grid-template-columns: 1fr;
  }

  .examples-grid {
    grid-template-columns: 1fr;
  }

  .process-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .approach-visual {
    min-height: 360px;
  }
}

@media (max-width: 760px) {
  .container {
    width: min(100% - 28px, 1340px);
  }

  .wide-container {
    width: min(100% - 20px, 1480px);
  }

  .nav {
    top: 10px;
    border-radius: 26px;
  }

  .nav__links,
  .nav__button {
    display: none;
  }

  .lang-dropdown {
    min-height: 38px;
    padding: 0 2px;
  }

  .lang-dropdown__label {
    span {
      display: none;
    }
  }

  .brand__text span {
    display: none;
  }

  .hero {
    padding: 48px 0 42px;
  }

  h1 {
    font-size: clamp(42px, 13vw, 60px);
    line-height: 0.94;
    letter-spacing: -0.062em;
  }

  .hero__lead {
    font-size: 16.5px;
  }

  .hero__actions {
    .q-btn {
      width: 100%;
    }
  }

  .hero__chips {
    div {
      width: 100%;
    }
  }

  .showcase-card,
  .approach-card,
  .offer-card,
  .contact-form,
  .strip-card,
  .services-shell {
    border-radius: 28px;
  }

  .showcase-card {
    padding: 15px;
  }

  .showcase-card__status {
    div {
      width: 100%;
    }
  }

  .workflow__item {
    align-items: flex-start;
  }

  .showcase-grid {
    grid-template-columns: 1fr;
  }

  .showcase-grid__main {
    grid-row: auto;
  }

  .section {
    padding: 56px 0;
  }

  .intro-strip {
    padding-top: 6px;
  }

  .strip-card {
    align-items: flex-start;
    flex-direction: column;
    padding: 22px;
  }

  .conversion-card {
    flex-direction: column;
    align-items: flex-start;
    padding: 22px;
  }

  .conversion-card__button {
    width: 100%;
  }

  .example-card {
    padding: 16px;
  }

  .showcase-card,
  .example-card,
  .workflow__item,
  .process-card,
  .service-row {
    animation: none !important;
    transition: transform 0.18s ease;
  }

  .example-card__button {
    width: 100%;
    min-width: 0;
  }

  .form-grid-two {
    grid-template-columns: 1fr;
  }

  .strip-button {
    width: 100%;
  }

  .section-heading h2,
  .approach-card h2,
  .offer-card h2,
  .contact-copy h2 {
    letter-spacing: -0.055em;
  }

  .services-shell {
    padding: 30px 0;
  }

  .service-row {
    grid-template-columns: 1fr;
  }

  .service-row:hover {
    transform: translateY(-4px);
  }

  .approach-card,
  .offer-card {
    padding: 26px;
  }

  .approach-points {
    grid-template-columns: 1fr;
  }

  .approach-visual {
    min-height: 300px;
  }

  .orbit {
    width: 270px;
  }

  .orbit__center {
    width: 100px;
    height: 100px;
  }

  .orbit__item {
    width: 82px;
    height: 82px;
  }

  .orbit__item--one {
    top: -41px;
    margin-left: -41px;
  }

  .orbit__item--two {
    right: -41px;
    margin-top: -41px;
  }

  .orbit__item--three {
    left: -41px;
    margin-top: -41px;
  }

  .process-grid {
    grid-template-columns: 1fr;
  }

  .process-card {
    min-height: auto;
  }

  .footer__inner {
    align-items: flex-start;
    flex-direction: column;
  }

  .floating-cta {
    display: inline-flex;
    min-width: 170px;
    bottom: 88px;
  }
  .showcase-card {
    animation: floatCard 8s ease-in-out infinite;
  }

  .orbit__ring,
  .orbit__center,
  .orbit__item--one,
  .orbit__item--two,
  .orbit__item--three {
    animation: none;
  }

  .example-card {
    will-change: auto;
  }

  .ambient {
    filter: blur(18px);
    opacity: 0.22;
  }

  .noise {
    opacity: 0.18;
  }
}
.brand__mark {
  width: 50px;
  height: 50px;
}
.brand__mark--logo {
  padding: 0;
  overflow: hidden;
  background: transparent !important;
  border: 1px solid rgba(255, 255, 255, 0.14);
  box-shadow:
    0 14px 34px rgba(37, 99, 235, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.12);
}

.brand__mark--logo img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  border-radius: inherit;
}
.premium-notify {
  min-width: 320px;
  max-width: 420px;
  padding: 14px 16px;
  border-radius: 22px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  background:
    radial-gradient(circle at top left, rgba(147, 197, 253, 0.18), transparent 14rem),
    linear-gradient(135deg, rgba(15, 23, 42, 0.98), rgba(30, 41, 59, 0.96)) !important;
  box-shadow:
    0 24px 70px rgba(0, 0, 0, 0.34),
    inset 0 1px 0 rgba(255, 255, 255, 0.14);
  backdrop-filter: blur(22px);
  overflow: hidden;
}

.premium-notify .q-notification__message {
  font-weight: 850;
  line-height: 1.45;
  letter-spacing: -0.01em;
}

.premium-notify .q-notification__icon {
  font-size: 24px;
}

.premium-notify--positive {
  border-color: rgba(34, 197, 94, 0.24);
}

.premium-notify--positive .q-notification__icon {
  color: #86efac;
}

.premium-notify--warning {
  border-color: rgba(245, 158, 11, 0.28);
}

.premium-notify--warning .q-notification__icon {
  color: #fcd34d;
}
@keyframes floatCard {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }

  50% {
    transform: translateY(-8px) rotate(0.25deg);
  }
}

@keyframes gradientText {
  0%,
  100% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }
}

@keyframes widthPulse {
  0%,
  100% {
    width: 86px;
  }

  50% {
    width: 118px;
  }
}

@keyframes pulseDot {
  0%,
  100% {
    box-shadow: 0 0 0 7px rgba(34, 197, 94, 0.13);
  }

  50% {
    box-shadow: 0 0 0 12px rgba(34, 197, 94, 0.04);
  }
}

@keyframes rotateSlow {
  from {
    rotate: 0deg;
  }

  to {
    rotate: 360deg;
  }
}

@keyframes orbitCenterPulse {
  0%,
  100% {
    transform: translate(-50%, -50%) scale(1);
  }

  50% {
    transform: translate(-50%, -50%) scale(1.045);
  }
}

@keyframes orbitBobOne {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-8px);
  }
}

@keyframes orbitBobTwo {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(7px);
  }
}

@keyframes orbitBobThree {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-6px);
  }
}
.premium-notify--negative {
  border-color: rgba(248, 113, 113, 0.3);
}

.premium-notify--negative .q-notification__icon {
  color: #fca5a5;
}

.premium-notify .q-notification__progress {
  background: linear-gradient(90deg, #60a5fa, #a78bfa, #f472b6) !important;
  opacity: 1;
}
.scroll-top {
  position: fixed;
  right: 26px;
  bottom: 26px;
  z-index: 60;
  width: 58px;
  height: 58px;
  display: grid;
  place-items: center;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 22px;
  color: white;
  cursor: pointer;
  background:
    radial-gradient(circle at top left, rgba(147, 197, 253, 0.24), transparent 8rem),
    linear-gradient(
      135deg,
      rgba(37, 99, 235, 0.92),
      rgba(124, 58, 237, 0.92) 56%,
      rgba(219, 39, 119, 0.9)
    );
  box-shadow:
    0 22px 50px rgba(37, 99, 235, 0.26),
    0 10px 28px rgba(0, 0, 0, 0.24),
    inset 0 1px 0 rgba(255, 255, 255, 0.22);
  backdrop-filter: blur(18px);
  transition:
    transform 0.22s ease,
    box-shadow 0.22s ease,
    border-color 0.22s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(255, 255, 255, 0.28);
    box-shadow:
      0 28px 64px rgba(37, 99, 235, 0.34),
      0 12px 34px rgba(0, 0, 0, 0.28),
      inset 0 1px 0 rgba(255, 255, 255, 0.26);
  }

  &:active {
    transform: translateY(-2px) scale(0.98);
  }

  .q-icon {
    font-size: 31px;
    filter: drop-shadow(0 6px 12px rgba(0, 0, 0, 0.28));
  }
}

.floating-cta {
  position: fixed;
  left: 50%;
  bottom: 18px;
  transform: translateX(-50%);
  z-index: 61;
  min-width: 190px;
  color: white;
  font-weight: 950;
  background:
    radial-gradient(circle at top left, rgba(147, 197, 253, 0.22), transparent 8rem),
    linear-gradient(
      135deg,
      rgba(37, 99, 235, 0.94),
      rgba(124, 58, 237, 0.94) 56%,
      rgba(219, 39, 119, 0.92)
    );
  border: 1px solid rgba(255, 255, 255, 0.22);
  box-shadow:
    0 22px 54px rgba(37, 99, 235, 0.3),
    0 14px 36px rgba(0, 0, 0, 0.28),
    inset 0 1px 0 rgba(255, 255, 255, 0.24);
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

.scroll-top-fade-enter-active,
.scroll-top-fade-leave-active {
  transition:
    opacity 0.22s ease,
    transform 0.22s ease;
}

.scroll-top-fade-enter-from,
.scroll-top-fade-leave-to {
  opacity: 0;
  transform: translateY(12px) scale(0.92);
}

@media (max-width: 760px) {
  .ambient {
    filter: blur(18px);
    opacity: 0.22;
  }

  .showcase-card,
  .contact-form,
  .offer-card {
    backdrop-filter: blur(8px);
  }

  .scroll-top {
    right: 18px;
    bottom: 18px;
    width: 52px;
    height: 52px;
    border-radius: 19px;

    .q-icon {
      font-size: 29px;
    }
  }
}
.form-alert {
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 11px;
  margin: 2px 0 14px;
  padding: 14px 16px;
  border-radius: 20px;
  overflow: hidden;
  font-size: 14px;
  font-weight: 850;
  line-height: 1.45;
  letter-spacing: -0.01em;
  border: 1px solid rgba(255, 255, 255, 0.14);
  box-shadow:
    0 16px 38px rgba(0, 0, 0, 0.18),
    inset 0 1px 0 rgba(255, 255, 255, 0.13);
  backdrop-filter: blur(18px);

  &:before {
    content: '';
    position: absolute;
    inset: 0;
    opacity: 0.9;
    pointer-events: none;
  }

  .q-icon {
    position: relative;
    z-index: 2;
    margin-top: 1px;
    font-size: 22px;
    flex: 0 0 auto;
    filter: drop-shadow(0 6px 12px rgba(0, 0, 0, 0.22));
  }

  span {
    position: relative;
    z-index: 2;
    display: block;
  }
}

.form-alert--positive {
  color: #dcfce7;
  border-color: rgba(34, 197, 94, 0.3);
  background:
    radial-gradient(circle at top left, rgba(34, 197, 94, 0.22), transparent 12rem),
    linear-gradient(135deg, rgba(22, 101, 52, 0.46), rgba(15, 23, 42, 0.78));

  &:before {
    background: linear-gradient(90deg, rgba(34, 197, 94, 0.22), transparent 38%);
  }

  .q-icon {
    color: #86efac;
  }
}

.form-alert--warning {
  color: #fffbeb;
  border-color: rgba(245, 158, 11, 0.34);
  background:
    radial-gradient(circle at top left, rgba(245, 158, 11, 0.24), transparent 12rem),
    linear-gradient(135deg, rgba(146, 64, 14, 0.46), rgba(15, 23, 42, 0.78));

  &:before {
    background: linear-gradient(90deg, rgba(245, 158, 11, 0.23), transparent 38%);
  }

  .q-icon {
    color: #fcd34d;
  }
}

.form-alert--negative {
  color: #fee2e2;
  border-color: rgba(248, 113, 113, 0.34);
  background:
    radial-gradient(circle at top left, rgba(248, 113, 113, 0.24), transparent 12rem),
    linear-gradient(135deg, rgba(127, 29, 29, 0.48), rgba(15, 23, 42, 0.78));

  &:before {
    background: linear-gradient(90deg, rgba(248, 113, 113, 0.23), transparent 38%);
  }

  .q-icon {
    color: #fca5a5;
  }
}

.form-alert-fade-enter-active,
.form-alert-fade-leave-active {
  transition:
    opacity 0.22s ease,
    transform 0.22s ease;
}

.form-alert-fade-enter-from,
.form-alert-fade-leave-to {
  opacity: 0;
  transform: translateY(-8px) scale(0.98);
}
</style>
