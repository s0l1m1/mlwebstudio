<template>
  <q-page class="products-page">
    <section class="products-hero">
      <div class="container">
        <RevealSection variant="zoom">
          <div class="products-hero__shell">
            <div class="products-hero__glow products-hero__glow--one"></div>
            <div class="products-hero__glow products-hero__glow--two"></div>

            <div class="products-badge">
              <q-icon name="shopping_bag" />
              <span>{{ locale === 'en' ? 'Digital products' : 'Digitalni proizvodi' }}</span>
            </div>

            <h1>
              {{
                locale === 'en'
                  ? 'Templates and digital products for faster client work.'
                  : 'Template-i i digitalni proizvodi za brži rad sa klijentima.'
              }}
            </h1>

            <p>
              {{
                locale === 'en'
                  ? 'Reusable products for freelancers, agencies and developers who want to create better websites, demos and client deliverables without starting from scratch.'
                  : 'Reusable proizvodi za freelancere, agencije i developere koji žele brže da prave sajtove, demo prezentacije i klijentske projekte bez kretanja od nule.'
              }}
            </p>

            <div class="products-hero__actions">
              <q-btn
                unelevated
                rounded
                no-caps
                size="lg"
                class="btn-primary"
                :label="locale === 'en' ? 'View products' : 'Pogledaj proizvode'"
                @click="scrollToProducts"
              />

              <q-btn
                outline
                rounded
                no-caps
                size="lg"
                class="btn-ghost"
                :label="locale === 'en' ? 'Contact for custom work' : 'Kontakt za custom izradu'"
                to="/kontakt"
              />
            </div>
          </div>
        </RevealSection>
      </div>
    </section>

    <section id="products-list" class="products-section">
      <div class="container">
        <RevealSection variant="up">
          <div class="products-head">
            <span>{{ locale === 'en' ? 'Available now' : 'Trenutno dostupno' }}</span>
            <h2>
              {{
                locale === 'en'
                  ? 'Digital products you can use immediately.'
                  : 'Digitalni proizvodi koje možeš odmah da koristiš.'
              }}
            </h2>
            <p>
              {{
                locale === 'en'
                  ? 'Start with ServicePro Landing Kit, a ready-made Vue + Quasar template for local service business websites and demos.'
                  : 'Za početak je tu ServicePro Landing Kit, gotov Vue + Quasar template za lokalne service business sajtove i demo prezentacije.'
              }}
            </p>
          </div>
        </RevealSection>

        <div class="products-grid">
          <RevealSection
            v-for="(product, index) in products"
            :key="product.slug"
            variant="up"
            :delay="index * 90"
          >
            <article class="product-card" :class="{ 'product-card--featured': product.featured }">
              <div class="product-card__glow"></div>

              <div v-if="product.featured" class="featured-badge">
                {{ locale === 'en' ? 'Featured' : 'Izdvojeno' }}
              </div>

              <div class="product-card__top">
                <div class="product-icon">
                  <q-icon :name="product.icon" />
                </div>

                <div class="product-price">
                  {{ product.price }}
                </div>
              </div>

              <div class="product-tags">
                <span v-for="tag in product.tags" :key="tag">
                  {{ tag }}
                </span>
              </div>

              <h3>{{ product.title }}</h3>

              <p>{{ product.text }}</p>

              <ul>
                <li v-for="point in product.points" :key="point">
                  <q-icon name="done" />
                  <span>{{ point }}</span>
                </li>
              </ul>

              <div class="product-actions">
                <q-btn
                  unelevated
                  rounded
                  no-caps
                  class="product-btn"
                  :label="locale === 'en' ? 'View product' : 'Pogledaj proizvod'"
                  :to="product.to"
                />

                <a :href="product.demoUrl" target="_blank" rel="noopener">
                  {{ locale === 'en' ? 'Live demo' : 'Live demo' }}
                  <q-icon name="arrow_forward" />
                </a>
              </div>
            </article>
          </RevealSection>

          <RevealSection variant="up" :delay="120">
            <article class="product-card product-card--coming">
              <div class="product-card__glow"></div>

              <div class="product-card__top">
                <div class="product-icon">
                  <q-icon name="workspaces" />
                </div>

                <div class="product-price">
                  {{ locale === 'en' ? 'Soon' : 'Uskoro' }}
                </div>
              </div>

              <div class="product-tags">
                <span>Portfolio</span>
                <span>Frontend</span>
                <span>Career</span>
              </div>

              <h3>Junior Frontend Portfolio Pack</h3>

              <p>
                {{
                  locale === 'en'
                    ? 'Portfolio, CV, README and case study templates for junior frontend developers.'
                    : 'Portfolio, CV, README i case study template-i za junior frontend developere.'
                }}
              </p>

              <ul>
                <li>
                  <q-icon name="done" />
                  <span>{{ locale === 'en' ? 'Portfolio structure' : 'Portfolio struktura' }}</span>
                </li>
                <li>
                  <q-icon name="done" />
                  <span>{{ locale === 'en' ? 'CV and LinkedIn copy' : 'CV i LinkedIn copy' }}</span>
                </li>
                <li>
                  <q-icon name="done" />
                  <span>{{
                    locale === 'en'
                      ? 'Project case study templates'
                      : 'Project case study template-i'
                  }}</span>
                </li>
              </ul>

              <div class="product-actions">
                <q-btn
                  disable
                  unelevated
                  rounded
                  no-caps
                  class="product-btn"
                  :label="locale === 'en' ? 'Coming soon' : 'Uskoro'"
                />
              </div>
            </article>
          </RevealSection>

          <RevealSection variant="up" :delay="180">
            <article class="product-card product-card--coming">
              <div class="product-card__glow"></div>

              <div class="product-card__top">
                <div class="product-icon">
                  <q-icon name="event_note" />
                </div>

                <div class="product-price">
                  {{ locale === 'en' ? 'Soon' : 'Uskoro' }}
                </div>
              </div>

              <div class="product-tags">
                <span>Notion</span>
                <span>PDF</span>
                <span>Planning</span>
              </div>

              <h3>Life Audit 2026</h3>

              <p>
                {{
                  locale === 'en'
                    ? 'A Notion + PDF workbook for reviewing life areas, habits, goals and monthly progress.'
                    : 'Notion + PDF workbook za pregled oblasti života, navika, ciljeva i mesečnog napretka.'
                }}
              </p>

              <ul>
                <li>
                  <q-icon name="done" />
                  <span>{{
                    locale === 'en' ? 'Life area scoring' : 'Score po oblastima života'
                  }}</span>
                </li>
                <li>
                  <q-icon name="done" />
                  <span>{{
                    locale === 'en' ? 'Monthly review system' : 'Mesečni review sistem'
                  }}</span>
                </li>
                <li>
                  <q-icon name="done" />
                  <span>{{
                    locale === 'en' ? 'Habit and goal planning' : 'Planiranje navika i ciljeva'
                  }}</span>
                </li>
              </ul>

              <div class="product-actions">
                <q-btn
                  disable
                  unelevated
                  rounded
                  no-caps
                  class="product-btn"
                  :label="locale === 'en' ? 'Coming soon' : 'Uskoro'"
                />
              </div>
            </article>
          </RevealSection>
        </div>
      </div>
    </section>

    <section class="products-info-section">
      <div class="container info-grid">
        <RevealSection variant="left">
          <div class="info-card">
            <span>{{ locale === 'en' ? 'For freelancers' : 'Za freelancere' }}</span>
            <h2>
              {{
                locale === 'en'
                  ? 'Use products as shortcuts for client work.'
                  : 'Koristi proizvode kao prečice za klijentski rad.'
              }}
            </h2>
            <p>
              {{
                locale === 'en'
                  ? 'These products are built to help you create faster demos, reusable structures and polished deliverables.'
                  : 'Ovi proizvodi su napravljeni da ti pomognu da brže praviš demo sajtove, reusable strukture i profesionalne klijentske isporuke.'
              }}
            </p>
          </div>
        </RevealSection>

        <RevealSection variant="right" :delay="120">
          <div class="info-card">
            <span>{{ locale === 'en' ? 'Custom adaptation' : 'Custom prilagođavanje' }}</span>
            <h2>
              {{
                locale === 'en'
                  ? 'Need a version tailored to your business?'
                  : 'Treba ti verzija prilagođena tvojoj firmi?'
              }}
            </h2>
            <p>
              {{
                locale === 'en'
                  ? 'If you want a customized website based on one of these products, I can adapt the content, branding, sections and deployment.'
                  : 'Ako želiš custom sajt baziran na nekom od proizvoda, mogu da prilagodim tekstove, brending, sekcije i deploy.'
              }}
            </p>

            <q-btn
              unelevated
              rounded
              no-caps
              class="btn-primary info-btn"
              :label="locale === 'en' ? 'Send inquiry' : 'Pošalji upit'"
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
import RevealSection from 'src/components/site/RevealSection.vue'

const { locale } = useI18n()

const serviceProDemo =
  'https://servicepro-landing-kit.vercel.app/?demo=true&lang=en&industry=hvac&business=CoolFix%20Services&city=Houston&theme=blue&phone=%2B1%20213%20555%200184&email=hello@coolfixservices.com&address=Houston%2C%20TX'

const products = computed(() => {
  if (locale.value === 'en') {
    return [
      {
        slug: 'servicepro-landing-kit',
        featured: true,
        icon: 'rocket_launch',
        price: '€29',
        title: 'ServicePro Landing Kit',
        text: 'Multilingual Vue 3 + Quasar landing page template for local service businesses, freelancers and agencies.',
        to: '/products/servicepro-landing-kit',
        demoUrl: serviceProDemo,
        tags: ['Vue 3', 'Quasar', 'Template'],
        points: [
          '8 industry presets',
          'Serbian and English support',
          '4 color themes',
          'Demo toolbar and sticky mobile CTA',
        ],
      },
    ]
  }

  return [
    {
      slug: 'servicepro-landing-kit',
      featured: true,
      icon: 'rocket_launch',
      price: '€29',
      title: 'ServicePro Landing Kit',
      text: 'Multilingual Vue 3 + Quasar landing page template za lokalne biznise, freelancere i agencije.',
      to: '/products/servicepro-landing-kit',
      demoUrl: serviceProDemo,
      tags: ['Vue 3', 'Quasar', 'Template'],
      points: [
        '8 industry preseta',
        'Srpski i engleski jezik',
        '4 teme boja',
        'Demo toolbar i sticky mobile CTA',
      ],
    },
  ]
})

function scrollToProducts() {
  const el = document.getElementById('products-list')

  if (!el) return

  el.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
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

function applySeo() {
  if (locale.value === 'en') {
    document.title = 'Digital Products | Templates for Freelancers and Agencies'
    setMeta(
      'description',
      'Digital products, templates and reusable resources for freelancers, agencies and developers.',
    )
    return
  }

  document.title = 'Digitalni proizvodi | Template-i za freelancere i agencije'
  setMeta(
    'description',
    'Digitalni proizvodi, template-i i reusable resursi za freelancere, agencije i developere.',
  )
}

onMounted(applySeo)

watch(
  () => locale.value,
  () => applySeo(),
)
</script>

<style scoped lang="scss">
.products-page {
  position: relative;
  z-index: 1;
  overflow: hidden;
}

.container {
  width: min(1360px, calc(100% - 48px));
  margin: 0 auto;
}

/* HERO */

.products-hero {
  padding: 104px 0 48px;
}

.products-hero__shell {
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
    font-size: clamp(42px, 6vw, 84px);
    line-height: 0.92;
    letter-spacing: -0.085em;
    font-weight: 950;
  }

  p {
    position: relative;
    z-index: 2;
    max-width: 820px;
    margin: 24px auto 0;
    color: rgba(255, 255, 255, 0.7);
    font-size: 17px;
    line-height: 1.75;
  }
}

.products-hero__glow {
  position: absolute;
  z-index: -1;
  border-radius: 999px;
  filter: blur(42px);
  pointer-events: none;
}

.products-hero__glow--one {
  width: 380px;
  height: 380px;
  left: -130px;
  top: -120px;
  background: rgba(37, 99, 235, 0.25);
  animation: glowOne 7s ease-in-out infinite;
}

.products-hero__glow--two {
  width: 420px;
  height: 420px;
  right: -150px;
  bottom: -160px;
  background: rgba(34, 197, 94, 0.18);
  animation: glowTwo 8s ease-in-out infinite;
}

.products-badge {
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

.products-hero__actions {
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
.product-btn {
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

.btn-primary,
.product-btn {
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

/* PRODUCTS */

.products-section {
  padding: 44px 0 72px;
}

.products-head {
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

.products-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  align-items: stretch;
}

.products-grid :deep(.reveal) {
  height: 100%;
}

.product-card {
  position: relative;
  height: 100%;
  min-height: 560px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 26px;
  border-radius: 36px;
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

  &:hover {
    transform: translateY(-10px);
    border-color: rgba(147, 197, 253, 0.34);
    box-shadow:
      0 34px 96px rgba(37, 99, 235, 0.16),
      0 0 46px rgba(124, 58, 237, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.16);
  }
}

.product-card--featured {
  border-color: rgba(147, 197, 253, 0.32);
  background:
    radial-gradient(circle at top right, rgba(219, 39, 119, 0.2), transparent 18rem),
    radial-gradient(circle at 10% 0%, rgba(37, 99, 235, 0.2), transparent 20rem),
    linear-gradient(145deg, rgba(37, 99, 235, 0.22), rgba(124, 58, 237, 0.14));
}

.product-card--coming {
  opacity: 0.82;
}

.product-card__glow {
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

.product-card__top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

.product-icon {
  width: 58px;
  height: 58px;
  display: grid;
  place-items: center;
  border-radius: 21px;
  color: #dbeafe;
  background: rgba(59, 130, 246, 0.18);
  border: 1px solid rgba(147, 197, 253, 0.18);

  .q-icon {
    font-size: 31px;
  }
}

.product-price {
  padding: 8px 12px;
  border-radius: 999px;
  color: #dbeafe;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(147, 197, 253, 0.14);
  font-size: 13px;
  font-weight: 950;
}

.product-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 24px;

  span {
    padding: 7px 10px;
    border-radius: 999px;
    color: rgba(219, 234, 254, 0.84);
    background: rgba(255, 255, 255, 0.075);
    border: 1px solid rgba(255, 255, 255, 0.09);
    font-size: 12px;
    font-weight: 850;
  }
}

.product-card h3 {
  margin: 22px 0 0;
  color: white;
  font-size: clamp(27px, 2.7vw, 40px);
  line-height: 0.98;
  letter-spacing: -0.065em;
  font-weight: 950;
}

.product-card p {
  margin: 16px 0 0;
  color: rgba(255, 255, 255, 0.66);
  line-height: 1.72;
}

.product-card ul {
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

.product-actions {
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

/* INFO */

.products-info-section {
  padding: 0 0 96px;
}

.info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 22px;
}

.info-card {
  height: 100%;
  padding: clamp(28px, 4vw, 46px);
  border-radius: 40px;
  color: white;
  background:
    radial-gradient(circle at 16% 0%, rgba(37, 99, 235, 0.22), transparent 30rem),
    radial-gradient(circle at 94% 18%, rgba(34, 211, 238, 0.12), transparent 28rem),
    linear-gradient(135deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.045));
  border: 1px solid rgba(255, 255, 255, 0.14);
  box-shadow: 0 28px 90px rgba(0, 0, 0, 0.24);

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

.info-btn {
  margin-top: 24px;
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

/* RESPONSIVE */

@media (max-width: 1150px) {
  .products-grid {
    grid-template-columns: 1fr;
  }

  .info-grid {
    grid-template-columns: 1fr;
  }

  .product-card {
    min-height: auto;
  }
}

@media (max-width: 700px) {
  .container {
    width: min(100% - 28px, 1360px);
  }

  .products-hero {
    padding-top: 72px;
  }

  .products-hero__shell {
    border-radius: 32px;
    text-align: left;

    h1 {
      font-size: clamp(40px, 13vw, 58px);
    }

    p {
      margin-left: 0;
      margin-right: 0;
    }
  }

  .products-badge {
    margin-left: 0;
  }

  .products-hero__actions {
    justify-content: flex-start;

    .q-btn {
      width: 100%;
    }
  }

  .product-card {
    padding: 22px;
    border-radius: 30px;
  }

  .product-actions {
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
</style>
