<template>
  <q-page class="servicepro-product-page">
    <section class="product-hero">
      <div class="container">
        <RevealSection variant="zoom">
          <div class="product-hero__shell">
            <div class="product-hero__glow product-hero__glow--one"></div>
            <div class="product-hero__glow product-hero__glow--two"></div>

            <div class="product-badge">
              <q-icon name="shopping_bag" />
              <span>{{ locale === 'en' ? 'Digital product' : 'Digitalni proizvod' }}</span>
            </div>

            <h1>ServicePro Landing Kit</h1>

            <p class="product-hero__lead">
              {{
                locale === 'en'
                  ? 'Multilingual Vue 3 + Quasar landing page template for local service businesses.'
                  : 'Multilingual Vue 3 + Quasar template za moderne landing stranice lokalnih biznisa.'
              }}
            </p>

            <p class="product-hero__text">
              {{
                locale === 'en'
                  ? 'Build polished landing pages and client demos for HVAC services, auto repair shops, beauty salons, gyms, cleaning companies, restaurants and more — without starting from scratch.'
                  : 'Napravi moderan demo ili landing stranicu za servisne firme, auto servise, salone, teretane, ordinacije, restorane i druge lokalne biznise — bez kretanja od nule.'
              }}
            </p>

            <div class="product-actions">
              <q-btn
                unelevated
                rounded
                no-caps
                size="lg"
                class="btn-primary"
                icon-right="open_in_new"
                :label="locale === 'en' ? 'Live demo' : 'Live demo'"
                :href="demoUrl"
                target="_blank"
              />

              <q-btn
                outline
                rounded
                no-caps
                size="lg"
                class="btn-ghost"
                :label="locale === 'en' ? 'Buy on Gumroad' : 'Kupi na Gumroad'"
                :href="gumroadUrl"
                target="_blank"
              />

              <q-btn
                flat
                rounded
                no-caps
                size="lg"
                class="btn-ghost"
                :label="locale === 'en' ? 'Buy with Lemon Squeezy' : 'Kupi preko Lemon Squeezy'"
                :href="lemonUrl"
                target="_blank"
              />
            </div>

            <div class="product-stats">
              <div v-for="stat in stats" :key="stat.label">
                <strong>{{ stat.value }}</strong>
                <span>{{ stat.label }}</span>
              </div>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>

    <section class="preview-section">
      <div class="container preview-grid">
        <RevealSection variant="left">
          <div class="preview-copy">
            <span>{{ locale === 'en' ? 'Live preview' : 'Live prikaz' }}</span>
            <h2>
              {{
                locale === 'en'
                  ? 'One template, multiple industries and markets.'
                  : 'Jedan template, više industrija i tržišta.'
              }}
            </h2>
            <p>
              {{
                locale === 'en'
                  ? 'Use the built-in demo toolbar to switch language, industry and color theme. Create client-specific demo links in seconds.'
                  : 'Koristi demo toolbar da menjaš jezik, industriju i temu. Personalizovan demo link za klijenta možeš napraviti za par sekundi.'
              }}
            </p>

            <div class="preview-tags">
              <div v-for="tag in previewTags" :key="tag">
                <q-icon name="check" />
                <span>{{ tag }}</span>
              </div>
            </div>
          </div>
        </RevealSection>

        <RevealSection variant="right" :delay="120">
          <a class="product-preview-card" :href="demoUrl" target="_blank" rel="noopener">
            <div class="product-preview-card__bar">
              <span></span>
              <span></span>
              <span></span>
              <i>servicepro-landing-kit.vercel.app</i>
            </div>

            <div class="product-preview-card__content">
              <small>CoolFix Services · HVAC</small>
              <strong>Modern local business landing page</strong>
              <p>
                Hero, services, pricing, reviews, FAQ, process, contact form and sticky mobile CTA.
              </p>

              <div class="fake-actions">
                <em>Book a service</em>
                <b>View services</b>
              </div>
            </div>

            <div class="product-preview-card__cards">
              <div>
                <q-icon name="language" />
                <span>2 languages</span>
              </div>
              <div>
                <q-icon name="business_center" />
                <span>8 industries</span>
              </div>
              <div>
                <q-icon name="palette" />
                <span>4 themes</span>
              </div>
              <div>
                <q-icon name="phone_iphone" />
                <span>Mobile CTA</span>
              </div>
            </div>
          </a>
        </RevealSection>
      </div>
    </section>

    <section class="product-section">
      <div class="container">
        <RevealSection variant="up">
          <div class="section-head">
            <span>{{ locale === 'en' ? 'Features' : 'Funkcionalnosti' }}</span>
            <h2>
              {{
                locale === 'en'
                  ? 'Everything you need to create fast client demos.'
                  : 'Sve što ti treba za brzo pravljenje demo sajtova.'
              }}
            </h2>
            <p>
              {{
                locale === 'en'
                  ? 'Built for freelancers, agencies and developers who create websites for local service businesses.'
                  : 'Napravljeno za freelancere, agencije i developere koji prave sajtove za lokalne biznise.'
              }}
            </p>
          </div>
        </RevealSection>

        <div class="features-grid">
          <RevealSection
            v-for="(feature, index) in features"
            :key="feature.title"
            variant="up"
            :delay="index * 80"
          >
            <article class="feature-card">
              <q-icon :name="feature.icon" />
              <h3>{{ feature.title }}</h3>
              <p>{{ feature.text }}</p>
            </article>
          </RevealSection>
        </div>
      </div>
    </section>

    <section class="product-section product-section--compact">
      <div class="container">
        <RevealSection variant="up">
          <div class="section-head">
            <span>{{ locale === 'en' ? 'Included industries' : 'Podržane industrije' }}</span>
            <h2>
              {{
                locale === 'en'
                  ? 'Ready-made presets for service businesses.'
                  : 'Gotovi preseti za lokalne uslužne biznise.'
              }}
            </h2>
          </div>
        </RevealSection>

        <div class="industries-grid">
          <RevealSection
            v-for="(industry, index) in industries"
            :key="industry.title"
            variant="up"
            :delay="index * 50"
          >
            <div class="industry-pill">
              <q-icon :name="industry.icon" />
              <span>{{ industry.title }}</span>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>

    <section class="product-section">
      <div class="container product-split">
        <RevealSection variant="left">
          <div class="included-card">
            <span>{{ locale === 'en' ? 'What’s included' : 'Šta dobijaš' }}</span>
            <h2>
              {{ locale === 'en' ? 'Full source code package.' : 'Kompletan source code paket.' }}
            </h2>

            <ul>
              <li v-for="item in included" :key="item">
                <q-icon name="check_circle" />
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </RevealSection>

        <RevealSection variant="right" :delay="120">
          <div class="price-card">
            <div class="price-card__badge">
              {{ locale === 'en' ? 'Launch price' : 'Launch cena' }}
            </div>

            <div class="price">€29</div>

            <p>
              {{
                locale === 'en'
                  ? 'Includes the full Vue 3 + Quasar source code, documentation and commercial usage for client projects.'
                  : 'Uključuje kompletan Vue 3 + Quasar source code, dokumentaciju i komercijalnu upotrebu za klijentske projekte.'
              }}
            </p>

            <q-btn
              unelevated
              rounded
              no-caps
              size="lg"
              class="btn-primary full-width"
              :label="locale === 'en' ? 'Buy on Gumroad' : 'Kupi na Gumroad'"
              :href="gumroadUrl"
              target="_blank"
            />

            <q-btn
              outline
              rounded
              no-caps
              size="lg"
              class="btn-ghost full-width q-mt-sm"
              :label="locale === 'en' ? 'Buy with Lemon Squeezy' : 'Kupi preko Lemon Squeezy'"
              :href="lemonUrl"
              target="_blank"
            />

            <a class="demo-link" :href="demoUrl" target="_blank" rel="noopener">
              {{ locale === 'en' ? 'Open live demo' : 'Otvori live demo' }}
              <q-icon name="arrow_forward" />
            </a>
          </div>
        </RevealSection>
      </div>
    </section>

    <section class="product-section product-section--compact">
      <div class="container">
        <RevealSection variant="up">
          <div class="section-head">
            <span>FAQ</span>
            <h2>{{ locale === 'en' ? 'Common questions' : 'Česta pitanja' }}</h2>
          </div>
        </RevealSection>

        <RevealSection variant="up" :delay="120">
          <q-list bordered separator class="product-faq">
            <q-expansion-item
              v-for="item in faq"
              :key="item.question"
              :label="item.question"
              expand-icon="add"
            >
              <q-card>
                <q-card-section>
                  {{ item.answer }}
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </q-list>
        </RevealSection>
      </div>
    </section>

    <section class="final-product-cta">
      <div class="container">
        <RevealSection variant="zoom">
          <div class="final-product-cta__card">
            <div>
              <span>{{ locale === 'en' ? 'Ready to use' : 'Spremno za korišćenje' }}</span>
              <h2>
                {{
                  locale === 'en'
                    ? 'Start building better local business demos today.'
                    : 'Kreni da praviš bolje demo sajtove za lokalne biznise.'
                }}
              </h2>
              <p>
                {{
                  locale === 'en'
                    ? 'Use ServicePro Landing Kit as a ready-made template, client demo system or starting point for custom websites.'
                    : 'Koristi ServicePro Landing Kit kao gotov template, demo sistem za klijente ili početnu osnovu za custom sajtove.'
                }}
              </p>
            </div>

            <q-btn
              unelevated
              rounded
              no-caps
              size="lg"
              class="btn-primary"
              :label="locale === 'en' ? 'Get the template' : 'Preuzmi template'"
              :href="gumroadUrl"
              target="_blank"
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
import RevealSection from 'src/components/site/RevealSection.vue'

const { locale } = useI18n()

const gumroadUrl = 'https://milosphere38.gumroad.com/l/mnsfr'
const lemonUrl = 'https://solim.lemonsqueezy.com/checkout/buy/d8b31524-694c-4085-bb1d-e7862f0f135e'
const demoUrl =
  'https://servicepro-landing-kit.vercel.app/?demo=true&lang=en&industry=hvac&business=CoolFix%20Services&city=Houston&theme=blue&phone=%2B1%20213%20555%200184&email=hello@coolfixservices.com&address=Houston%2C%20TX'

const stats = computed(() => {
  if (locale.value === 'en') {
    return [
      { value: '8', label: 'industry presets' },
      { value: '2', label: 'languages' },
      { value: '4', label: 'themes' },
      { value: '€29', label: 'launch price' },
    ]
  }

  return [
    { value: '8', label: 'industrija' },
    { value: '2', label: 'jezika' },
    { value: '4', label: 'teme' },
    { value: '€29', label: 'launch cena' },
  ]
})

const previewTags = computed(() => {
  if (locale.value === 'en') {
    return [
      'Demo toolbar',
      'Copy client links',
      'Query-based personalization',
      'Vercel-ready setup',
    ]
  }

  return [
    'Demo toolbar',
    'Kopiranje client linkova',
    'Personalizacija kroz URL',
    'Spremno za Vercel deploy',
  ]
})

const features = computed(() => {
  if (locale.value === 'en') {
    return [
      {
        icon: 'language',
        title: 'Multilingual structure',
        text: 'Serbian and English are included by default, with a structure ready for more languages.',
      },
      {
        icon: 'business_center',
        title: '8 industry presets',
        text: 'HVAC, auto repair, beauty, dental, gym, cleaning, handyman and restaurant presets.',
      },
      {
        icon: 'palette',
        title: '4 color themes',
        text: 'Blue, green, orange and purple themes powered by simple CSS variables.',
      },
      {
        icon: 'tune',
        title: 'Demo toolbar',
        text: 'Switch industries, languages and themes directly in the browser for fast client demos.',
      },
      {
        icon: 'link',
        title: 'Query personalization',
        text: 'Change business name, city, phone, email, address, language, industry and theme through the URL.',
      },
      {
        icon: 'phone_iphone',
        title: 'Mobile sticky CTA',
        text: 'Mobile-first design with a sticky call/request bar for service businesses.',
      },
    ]
  }

  return [
    {
      icon: 'language',
      title: 'Multilingual struktura',
      text: 'Srpski i engleski su uključeni, a struktura je spremna za dodavanje novih jezika.',
    },
    {
      icon: 'business_center',
      title: '8 industry preseta',
      text: 'Klima servisi, auto servisi, saloni, ordinacije, teretane, cleaning firme, majstori i restorani.',
    },
    {
      icon: 'palette',
      title: '4 teme boja',
      text: 'Blue, green, orange i purple teme kroz jednostavne CSS varijable.',
    },
    {
      icon: 'tune',
      title: 'Demo toolbar',
      text: 'Menjaj industriju, jezik i temu direktno u browseru za brze klijentske demo linkove.',
    },
    {
      icon: 'link',
      title: 'URL personalizacija',
      text: 'Promeni naziv firme, grad, telefon, email, adresu, jezik, industriju i temu kroz URL.',
    },
    {
      icon: 'phone_iphone',
      title: 'Mobile sticky CTA',
      text: 'Mobile-first dizajn sa sticky dugmetom za poziv i slanje upita.',
    },
  ]
})

const industries = computed(() => {
  if (locale.value === 'en') {
    return [
      { icon: 'ac_unit', title: 'HVAC / AC service' },
      { icon: 'directions_car', title: 'Auto repair' },
      { icon: 'spa', title: 'Beauty salon' },
      { icon: 'medical_services', title: 'Dental clinic' },
      { icon: 'fitness_center', title: 'Gym / fitness' },
      { icon: 'cleaning_services', title: 'Cleaning service' },
      { icon: 'handyman', title: 'Handyman service' },
      { icon: 'restaurant', title: 'Restaurant / cafe' },
    ]
  }

  return [
    { icon: 'ac_unit', title: 'Klima servis' },
    { icon: 'directions_car', title: 'Auto servis' },
    { icon: 'spa', title: 'Salon lepote' },
    { icon: 'medical_services', title: 'Stomatološka ordinacija' },
    { icon: 'fitness_center', title: 'Teretana / fitness' },
    { icon: 'cleaning_services', title: 'Servis za čišćenje' },
    { icon: 'handyman', title: 'Majstorske usluge' },
    { icon: 'restaurant', title: 'Restoran / kafić' },
  ]
})

const included = computed(() => {
  if (locale.value === 'en') {
    return [
      'Vue 3 + Quasar source code',
      'Serbian and English language support',
      '8 industry presets',
      '4 color themes',
      'Demo toolbar and copy link buttons',
      'Sticky mobile CTA',
      'Pricing, FAQ, reviews, process and contact sections',
      'README, changelog, license and Vercel config',
    ]
  }

  return [
    'Vue 3 + Quasar source code',
    'Podrška za srpski i engleski jezik',
    '8 industry preseta',
    '4 teme boja',
    'Demo toolbar i copy link dugmad',
    'Sticky mobile CTA',
    'Pricing, FAQ, reviews, process i contact sekcije',
    'README, changelog, license i Vercel config',
  ]
})

const faq = computed(() => {
  if (locale.value === 'en') {
    return [
      {
        question: 'Is this a full website or a landing page?',
        answer: 'It is a premium landing page template that can be extended into a full website.',
      },
      {
        question: 'Can I use it for client projects?',
        answer: 'Yes, you can use it to build customized websites for clients.',
      },
      {
        question: 'Can I resell the template source code?',
        answer:
          'No, you cannot resell or redistribute the original template as your own template product.',
      },
      {
        question: 'Does it include a backend?',
        answer:
          'No. The contact form is frontend-only by default and can be connected to EmailJS, Formspree, your backend or a CRM.',
      },
    ]
  }

  return [
    {
      question: 'Da li je ovo ceo sajt ili landing page?',
      answer: 'Ovo je premium landing page template koji se može proširiti u kompletan sajt.',
    },
    {
      question: 'Da li mogu da ga koristim za klijentske projekte?',
      answer: 'Da, možeš ga koristiti za izradu prilagođenih sajtova za klijente.',
    },
    {
      question: 'Da li mogu da preprodajem source code template-a?',
      answer:
        'Ne, ne možeš preprodavati ili redistribuirati originalni template kao svoj template proizvod.',
    },
    {
      question: 'Da li uključuje backend?',
      answer:
        'Ne. Kontakt forma je frontend demo forma i može se povezati sa EmailJS, Formspree, backendom ili CRM sistemom.',
    },
  ]
})

function applySeo() {
  if (locale.value === 'en') {
    document.title = 'ServicePro Landing Kit | Vue + Quasar Template for Local Businesses'
    setMeta(
      'description',
      'Premium multilingual Vue 3 + Quasar landing page template for local service businesses, freelancers and agencies.',
    )
    return
  }

  document.title = 'ServicePro Landing Kit | Vue + Quasar template za lokalne biznise'
  setMeta(
    'description',
    'Premium multilingual Vue 3 + Quasar landing page template za lokalne biznise, freelancere i agencije.',
  )
}

function setMeta(name, content) {
  let tag = document.querySelector(`meta[name="${name}"]`)

  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('name', name)
    document.head.appendChild(tag)
  }

  tag.setAttribute('content', content)
}

onMounted(applySeo)

watch(
  () => locale.value,
  () => applySeo(),
)
</script>

<style scoped lang="scss">
.servicepro-product-page {
  position: relative;
  z-index: 1;
  overflow: hidden;
}

.container {
  width: min(1360px, calc(100% - 48px));
  margin: 0 auto;
}

/* HERO */

.product-hero {
  padding: 104px 0 48px;
}

.product-hero__shell {
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
    radial-gradient(circle at 86% 12%, rgba(34, 197, 94, 0.18), transparent 28rem),
    radial-gradient(circle at 50% 100%, rgba(219, 39, 119, 0.16), transparent 28rem),
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
    font-size: clamp(46px, 7vw, 92px);
    line-height: 0.9;
    letter-spacing: -0.085em;
    font-weight: 950;
  }
}

.product-hero__glow {
  position: absolute;
  z-index: -1;
  border-radius: 999px;
  filter: blur(42px);
  pointer-events: none;
}

.product-hero__glow--one {
  width: 380px;
  height: 380px;
  left: -130px;
  top: -120px;
  background: rgba(37, 99, 235, 0.25);
  animation: glowOne 7s ease-in-out infinite;
}

.product-hero__glow--two {
  width: 420px;
  height: 420px;
  right: -150px;
  bottom: -160px;
  background: rgba(34, 197, 94, 0.18);
  animation: glowTwo 8s ease-in-out infinite;
}

.product-badge {
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

.product-hero__lead {
  position: relative;
  z-index: 2;
  max-width: 820px;
  margin: 24px auto 0;
  color: white;
  font-size: clamp(20px, 2.3vw, 30px);
  line-height: 1.25;
  letter-spacing: -0.035em;
  font-weight: 850;
}

.product-hero__text {
  position: relative;
  z-index: 2;
  max-width: 820px;
  margin: 18px auto 0;
  color: rgba(255, 255, 255, 0.68);
  font-size: 17px;
  line-height: 1.75;
}

.product-actions {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 32px;
}

.product-stats {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  max-width: 820px;
  margin: 34px auto 0;

  div {
    padding: 16px;
    border-radius: 22px;
    background: rgba(255, 255, 255, 0.075);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  strong {
    display: block;
    color: white;
    font-size: 30px;
    line-height: 1;
    letter-spacing: -0.06em;
    font-weight: 950;
  }

  span {
    display: block;
    margin-top: 6px;
    color: rgba(255, 255, 255, 0.62);
    font-size: 13px;
    font-weight: 850;
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

/* PREVIEW */

.preview-section {
  padding: 34px 0 62px;
}

.preview-grid {
  display: grid;
  grid-template-columns: 0.86fr 1.14fr;
  gap: 24px;
  align-items: center;
}

.preview-copy,
.product-preview-card,
.feature-card,
.included-card,
.price-card,
.final-product-cta__card {
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

.preview-copy {
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

.preview-tags {
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

.product-preview-card {
  display: block;
  min-height: 560px;
  padding: 18px;
  text-decoration: none;
  isolation: isolate;
  background:
    radial-gradient(circle at 16% 0%, rgba(59, 130, 246, 0.28), transparent 24rem),
    radial-gradient(circle at 90% 16%, rgba(219, 39, 119, 0.2), transparent 26rem),
    linear-gradient(145deg, rgba(15, 23, 42, 0.96), rgba(2, 6, 23, 0.96));
  transition:
    transform 230ms ease,
    border-color 230ms ease,
    box-shadow 230ms ease;

  &:hover {
    transform: translateY(-8px);
    border-color: rgba(147, 197, 253, 0.28);
    box-shadow:
      0 34px 110px rgba(37, 99, 235, 0.18),
      inset 0 1px 0 rgba(255, 255, 255, 0.13);
  }
}

.product-preview-card__bar {
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

.product-preview-card__content {
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

.fake-actions {
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
  }

  b {
    color: #dbeafe;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(147, 197, 253, 0.18);
  }
}

.product-preview-card__cards {
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

/* SECTIONS */

.product-section {
  padding: 62px 0;
}

.product-section--compact {
  padding-top: 24px;
}

.section-head {
  max-width: 920px;
  margin: 0 auto 34px;
  text-align: center;

  span {
    display: inline-flex;
    align-items: center;
    padding: 9px 13px;
    border-radius: 999px;
    color: #dbeafe;
    background: rgba(59, 130, 246, 0.14);
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

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  align-items: stretch;
}

.features-grid :deep(.reveal) {
  height: 100%;
}

.feature-card {
  height: 100%;
  min-height: 260px;
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

  .q-icon {
    color: #93c5fd;
    font-size: 34px;
  }

  h3 {
    margin: 22px 0 0;
    color: white;
    font-size: 24px;
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

.industries-grid {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
}

.industry-pill {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  min-height: 50px;
  padding: 0 17px;
  border-radius: 999px;
  color: rgba(255, 255, 255, 0.86);
  background: rgba(255, 255, 255, 0.075);
  border: 1px solid rgba(255, 255, 255, 0.105);
  font-weight: 900;

  .q-icon {
    color: #93c5fd;
    font-size: 20px;
  }
}

.product-split {
  display: grid;
  grid-template-columns: 1fr 390px;
  gap: 24px;
  align-items: start;
}

.included-card {
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

  ul {
    display: grid;
    gap: 12px;
    margin: 28px 0 0;
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

.price-card {
  position: sticky;
  top: 110px;
  padding: 28px;
}

.price-card__badge {
  width: fit-content;
  padding: 8px 12px;
  border-radius: 999px;
  color: #dbeafe;
  background: rgba(59, 130, 246, 0.14);
  border: 1px solid rgba(147, 197, 253, 0.2);
  font-size: 12px;
  font-weight: 950;
  text-transform: uppercase;
  letter-spacing: 0.085em;
}

.price {
  margin-top: 16px;
  color: white;
  font-size: 58px;
  line-height: 1;
  letter-spacing: -0.075em;
  font-weight: 950;
}

.price-card p {
  margin: 18px 0 24px;
  color: rgba(255, 255, 255, 0.66);
  line-height: 1.7;
}

.demo-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 18px;
  color: #dbeafe;
  text-decoration: none;
  font-weight: 900;
  transition:
    color 220ms ease,
    transform 220ms ease;

  &:hover {
    color: white;
    transform: translateX(3px);
  }
}

.product-faq {
  max-width: 900px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 26px;
  color: white;
  background: rgba(255, 255, 255, 0.075);
  border: 1px solid rgba(255, 255, 255, 0.105);

  :deep(.q-item) {
    min-height: 64px;
    color: white;
    font-weight: 850;
  }

  :deep(.q-card) {
    color: rgba(255, 255, 255, 0.72);
    background: rgba(15, 23, 42, 0.55);
  }
}

/* FINAL CTA */

.final-product-cta {
  padding: 0 0 96px;
}

.final-product-cta__card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 28px;
  padding: clamp(30px, 4vw, 50px);
  border-radius: 42px;
  background:
    radial-gradient(circle at 18% 0%, rgba(37, 99, 235, 0.24), transparent 30rem),
    radial-gradient(circle at 94% 14%, rgba(34, 197, 94, 0.16), transparent 28rem),
    linear-gradient(135deg, rgba(255, 255, 255, 0.13), rgba(255, 255, 255, 0.045));

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

/* ANIMATIONS */

@keyframes glowOne {
  0%,
  100% {
    transform: translate3d(0, 0, 0) scale(1);
  }

  50% {
    transform: translate3d(20px, -14px, 0) scale(1.08);
  }
}

@keyframes glowTwo {
  0%,
  100% {
    transform: translate3d(0, 0, 0) scale(1);
  }

  50% {
    transform: translate3d(-18px, 18px, 0) scale(1.08);
  }
}

/* RESPONSIVE */

@media (max-width: 1100px) {
  .preview-grid,
  .product-split {
    grid-template-columns: 1fr;
  }

  .price-card {
    position: relative;
    top: auto;
  }
}

@media (max-width: 900px) {
  .container {
    width: min(100% - 28px, 1360px);
  }

  .product-hero {
    padding-top: 78px;
  }

  .product-stats {
    grid-template-columns: repeat(2, 1fr);
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .final-product-cta__card {
    align-items: stretch;
    flex-direction: column;

    .q-btn {
      width: 100%;
    }
  }
}

@media (max-width: 560px) {
  .container {
    width: min(100% - 22px, 1360px);
  }

  .product-hero__shell {
    padding: 28px 20px;
    border-radius: 34px;

    h1 {
      font-size: 42px;
      letter-spacing: -0.07em;
    }
  }

  .product-actions .q-btn {
    width: 100%;
  }

  .product-stats {
    grid-template-columns: 1fr;
  }

  .preview-copy,
  .included-card,
  .price-card {
    border-radius: 28px;
    padding: 22px;
  }

  .product-preview-card {
    min-height: auto;
    border-radius: 28px;
  }

  .product-preview-card__cards {
    grid-template-columns: 1fr;
  }

  .feature-card {
    min-height: auto;
  }

  .product-section {
    padding: 48px 0;
  }

  .final-product-cta {
    padding-bottom: 64px;
  }
}
</style>
