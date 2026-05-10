<template>
  <q-page class="page">
    <section class="contact-section">
      <div class="container contact-layout">
        <RevealSection variant="left">
          <div class="contact-copy">
            <div class="contact-badge">
              <q-icon name="bolt" />
              <span>{{ t('contact.label') }}</span>
            </div>

            <h1>{{ t('contact.title') }}</h1>

            <p class="contact-lead">
              {{ t('contact.text') }}
            </p>

            <div class="contact-highlight">
              <div class="contact-highlight__icon">
                <q-icon name="auto_awesome" />
              </div>

              <div>
                <strong>{{ t('contact.quickTitle') }}</strong>
                <p>{{ t('contact.quickText') }}</p>
              </div>
            </div>

            <div class="direct-links">
              <a :href="`mailto:${contactEmail}`" class="direct-link direct-link--email">
                <span class="direct-link__icon">
                  <q-icon name="mail" />
                </span>

                <span>
                  <small>{{ t('contact.emailLabel') }}</small>
                  <strong>{{ contactEmail }}</strong>
                </span>
              </a>

              <a
                v-if="whatsappHref"
                :href="whatsappHref"
                target="_blank"
                rel="noopener noreferrer"
                class="direct-link direct-link--whatsapp"
              >
                <span class="direct-link__icon">
                  <q-icon name="chat" />
                </span>

                <span>
                  <small>WhatsApp</small>
                  <strong>{{ t('contact.fastMessage') }}</strong>
                </span>
              </a>

              <a
                v-if="viberHref"
                :href="viberHref"
                target="_blank"
                rel="noopener noreferrer"
                class="direct-link direct-link--viber"
              >
                <span class="direct-link__icon">
                  <q-icon name="phone_in_talk" />
                </span>

                <span>
                  <small>Viber</small>
                  <strong>{{ t('contact.fastMessage') }}</strong>
                </span>
              </a>
              <a
                v-if="instagramHref"
                :href="instagramHref"
                target="_blank"
                rel="noopener noreferrer"
                class="direct-link direct-link--instagram"
              >
                <span class="direct-link__icon">
                  <q-icon name="photo_camera" />
                </span>

                <span>
                  <small>Instagram</small>
                  <strong>{{ t('contact.instagramText') }}</strong>
                </span>
              </a>
            </div>

            <div class="contact-steps">
              <div v-for="(step, index) in contactSteps" :key="step.title" class="contact-step">
                <span>{{ String(index + 1).padStart(2, '0') }}</span>

                <div>
                  <strong>{{ step.title }}</strong>
                  <p>{{ step.text }}</p>
                </div>
              </div>
            </div>

            <div class="trust-grid">
              <div v-for="trust in contactTrust" :key="trust">
                <q-icon name="task_alt" />
                <span>{{ trust }}</span>
              </div>
            </div>
          </div>
        </RevealSection>

        <RevealSection variant="right" :delay="140">
          <div class="form-shell">
            <div class="form-shell__glow"></div>
            <ContactForm />
          </div>
        </RevealSection>
      </div>
    </section>
  </q-page>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import ContactForm from 'src/components/contact/ContactForm.vue'
import RevealSection from 'src/components/site/RevealSection.vue'

const { t, tm } = useI18n()

const contactTrust = computed(() => {
  const items = tm('contact.trust')
  return Array.isArray(items) ? items.slice(0, 3) : []
})

const contactSteps = computed(() => {
  const items = tm('contact.steps')

  if (Array.isArray(items) && items.length) return items

  return [
    {
      title: 'Pošaljete upit',
      text: 'Kratko napišete šta vam treba, ili pošaljete link postojećeg sajta.',
    },
    {
      title: 'Dobijate predlog',
      text: 'Predlažem najbolji pravac, strukturu i realan obim posla.',
    },
    {
      title: 'Dogovaramo sledeći korak',
      text: 'Ako vam odgovara, krećemo od jasnog plana bez komplikovanja.',
    },
  ]
})

const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || 'miloslazarevic410@gmail.com'
const whatsappHref = import.meta.env.VITE_WHATSAPP_URL || ''
const viberHref = import.meta.env.VITE_VIBER_URL || ''
const instagramHref = import.meta.env.VITE_INSTAGRAM_URL || ''

onMounted(() => {
  document.title = t('seo.contactTitle')
})
</script>

<style scoped lang="scss">
.page {
  position: relative;
  z-index: 1;
}

.container {
  width: min(1360px, calc(100% - 48px));
  margin: 0 auto;
}

.contact-section {
  position: relative;
  padding: 104px 0 86px;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    left: -180px;
    top: 80px;
    width: 420px;
    height: 420px;
    border-radius: 999px;
    background: rgba(37, 99, 235, 0.18);
    filter: blur(44px);
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    right: -200px;
    top: 20px;
    width: 460px;
    height: 460px;
    border-radius: 999px;
    background: rgba(219, 39, 119, 0.12);
    filter: blur(48px);
    pointer-events: none;
  }
}

.contact-layout {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 0.86fr 1.14fr;
  gap: 42px;
  align-items: stretch;
}

.contact-layout :deep(.reveal) {
  height: 100%;
}

.contact-copy {
  position: sticky;
  top: 118px;
  height: fit-content;
}

.contact-badge {
  width: fit-content;
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 10px 14px;
  border-radius: 999px;
  color: #dbeafe;
  background:
    radial-gradient(circle at 20% 0%, rgba(255, 255, 255, 0.14), transparent 58%),
    linear-gradient(135deg, rgba(59, 130, 246, 0.16), rgba(124, 58, 237, 0.08));
  border: 1px solid rgba(147, 197, 253, 0.2);
  font-size: 13px;
  font-weight: 950;
  text-transform: uppercase;
  letter-spacing: 0.08em;

  .q-icon {
    color: #93c5fd;
    font-size: 19px;
  }
}

.contact-copy h1 {
  margin: 20px 0 0;
  color: white;
  font-size: clamp(46px, 5.6vw, 78px);
  line-height: 0.92;
  letter-spacing: -0.085em;
  font-weight: 950;
}

.contact-lead {
  max-width: 680px;
  margin: 22px 0 0;
  color: rgba(255, 255, 255, 0.68);
  font-size: 17px;
  line-height: 1.76;
}

.contact-highlight {
  display: flex;
  gap: 15px;
  margin-top: 28px;
  padding: 18px;
  border-radius: 26px;
  color: white;
  background:
    radial-gradient(circle at 16% 0%, rgba(59, 130, 246, 0.24), transparent 16rem),
    linear-gradient(145deg, rgba(255, 255, 255, 0.105), rgba(255, 255, 255, 0.045));
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow:
    0 20px 60px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);

  strong {
    display: block;
    color: white;
    font-size: 18px;
    line-height: 1.18;
    font-weight: 950;
  }

  p {
    margin: 7px 0 0;
    color: rgba(255, 255, 255, 0.64);
    line-height: 1.6;
  }
}

.contact-highlight__icon {
  width: 48px;
  height: 48px;
  display: grid;
  place-items: center;
  flex: 0 0 auto;
  border-radius: 18px;
  color: white;
  background: linear-gradient(135deg, #2563eb, #7c3aed 58%, #db2777);
  box-shadow: 0 18px 42px rgba(37, 99, 235, 0.24);

  .q-icon {
    font-size: 24px;
  }
}

.direct-links {
  display: grid;
  gap: 12px;
  margin-top: 22px;
}

.direct-link {
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 12px;
  min-height: 62px;
  padding: 12px 14px;
  border-radius: 22px;
  color: white;
  text-decoration: none;
  background: rgba(255, 255, 255, 0.075);
  border: 1px solid rgba(255, 255, 255, 0.105);
  transition:
    transform 220ms ease,
    background-color 220ms ease,
    border-color 220ms ease,
    box-shadow 220ms ease;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    transform: translateX(-120%);
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.12), transparent);
    transition: transform 640ms cubic-bezier(0.22, 1, 0.36, 1);
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-4px);
    background: rgba(255, 255, 255, 0.105);
    border-color: rgba(147, 197, 253, 0.28);
    box-shadow: 0 22px 60px rgba(37, 99, 235, 0.12);
  }

  &:hover::after {
    transform: translateX(120%);
  }

  small {
    display: block;
    color: rgba(219, 234, 254, 0.62);
    font-size: 12px;
    font-weight: 850;
  }

  strong {
    display: block;
    margin-top: 2px;
    color: white;
    font-size: 14px;
    line-height: 1.25;
    font-weight: 950;
  }
}

.direct-link__icon {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  flex: 0 0 auto;
  border-radius: 16px;
  background: rgba(59, 130, 246, 0.18);
  border: 1px solid rgba(147, 197, 253, 0.16);

  .q-icon {
    color: #93c5fd;
    font-size: 22px;
  }
}

.direct-link--whatsapp .direct-link__icon {
  background: rgba(34, 197, 94, 0.16);
  border-color: rgba(34, 197, 94, 0.22);

  .q-icon {
    color: #86efac;
  }
}

.direct-link--viber .direct-link__icon {
  background: rgba(139, 92, 246, 0.18);
  border-color: rgba(167, 139, 250, 0.2);

  .q-icon {
    color: #c4b5fd;
  }
}

.contact-steps {
  position: relative;
  display: grid;
  gap: 0;
  margin-top: 26px;
  padding: 18px;
  border-radius: 26px;
  background:
    radial-gradient(circle at 12% 0%, rgba(59, 130, 246, 0.16), transparent 18rem),
    rgba(255, 255, 255, 0.055);
  border: 1px solid rgba(255, 255, 255, 0.095);
}

.contact-step {
  position: relative;
  display: grid;
  grid-template-columns: 42px 1fr;
  gap: 12px;
  padding: 0 0 18px;
  background: transparent;
  border: 0;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    left: 20px;
    top: 36px;
    bottom: 0;
    width: 1px;
    background: linear-gradient(to bottom, rgba(147, 197, 253, 0.38), transparent);
  }

  &:last-child {
    padding-bottom: 0;
  }

  > span {
    width: 42px;
    height: 42px;
    display: grid;
    place-items: center;
    border-radius: 16px;
    color: #dbeafe;
    background: rgba(59, 130, 246, 0.16);
    border: 1px solid rgba(147, 197, 253, 0.18);
    font-size: 14px;
    font-weight: 950;
    letter-spacing: 0;
  }

  strong {
    display: block;
    color: white;
    font-weight: 950;
    line-height: 1.2;
  }

  p {
    margin: 6px 0 0;
    color: rgba(255, 255, 255, 0.58);
    font-size: 14px;
    line-height: 1.55;
  }
}

.trust-grid {
  display: grid;
  gap: 10px;
  margin-top: 24px;

  div {
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 13px 14px;
    border-radius: 18px;
    color: white;
    font-weight: 850;
    background: rgba(255, 255, 255, 0.075);
    border: 1px solid rgba(255, 255, 255, 0.105);
  }

  .q-icon {
    color: #93c5fd;
  }
}

.form-shell {
  position: relative;
  min-height: 100%;
}

.form-shell__glow {
  position: absolute;
  right: -70px;
  top: -70px;
  width: 240px;
  height: 240px;
  border-radius: 999px;
  background: rgba(59, 130, 246, 0.22);
  filter: blur(38px);
  pointer-events: none;
  animation: formGlow 6.8s ease-in-out infinite;
}

@keyframes formGlow {
  0%,
  100% {
    transform: scale(1) translate(0, 0);
    opacity: 0.65;
  }

  50% {
    transform: scale(1.15) translate(-18px, 18px);
    opacity: 1;
  }
}

@media (max-width: 980px) {
  .contact-layout {
    grid-template-columns: 1fr;
  }

  .contact-copy {
    position: relative;
    top: auto;
  }
}

@media (max-width: 680px) {
  .container {
    width: min(100% - 28px, 1360px);
  }

  .contact-section {
    padding-top: 78px;
  }

  .contact-copy h1 {
    font-size: clamp(42px, 13vw, 60px);
  }

  .contact-highlight,
  .direct-link,
  .contact-step {
    border-radius: 20px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .form-shell__glow,
  .direct-link {
    animation: none !important;
    transition: none !important;
  }
}
.direct-link--instagram .direct-link__icon {
  background: rgba(219, 39, 119, 0.16);
  border-color: rgba(244, 114, 182, 0.24);

  .q-icon {
    color: #f9a8d4;
  }
}
</style>
