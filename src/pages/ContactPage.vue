<template>
  <q-page class="page">
    <section class="section">
      <div class="container contact-layout">
        <RevealSection variant="left">
          <div class="contact-copy">
            <span>{{ t('contact.label') }}</span>
            <h1>{{ t('contact.title') }}</h1>
            <p>{{ t('contact.text') }}</p>

            <div class="direct-links">
              <a href="mailto:miloslazarevic410@gmail.com">
                <q-icon name="mail" />
                <span>miloslazarevic410@gmail.com</span>
              </a>

              <a v-if="whatsappHref" :href="whatsappHref" target="_blank" rel="noopener noreferrer">
                <q-icon name="chat" />
                <span>WhatsApp</span>
              </a>

              <a v-if="viberHref" :href="viberHref" target="_blank" rel="noopener noreferrer">
                <q-icon name="phone_in_talk" />
                <span>Viber</span>
              </a>
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
          <ContactForm />
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

const contactTrust = computed(() => tm('contact.trust'))
const whatsappHref = import.meta.env.VITE_WHATSAPP_URL || ''
const viberHref = import.meta.env.VITE_VIBER_URL || ''

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
  width: min(1340px, calc(100% - 48px));
  margin: 0 auto;
}

.section {
  padding: 92px 0 76px;
}

.contact-layout {
  display: grid;
  grid-template-columns: 0.82fr 1.18fr;
  gap: 42px;
  align-items: start;
}

.contact-copy {
  position: sticky;
  top: 120px;

  > span {
    color: #93c5fd;
    font-size: 14px;
    font-weight: 950;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  h1 {
    margin: 16px 0 0;
    color: white;
    font-size: clamp(42px, 5vw, 72px);
    line-height: 0.94;
    letter-spacing: -0.08em;
    font-weight: 950;
  }

  p {
    margin: 22px 0 0;
    color: rgba(255, 255, 255, 0.68);
    font-size: 17px;
    line-height: 1.75;
  }
}

.direct-links {
  display: grid;
  gap: 12px;
  margin-top: 28px;

  a {
    display: flex;
    align-items: center;
    gap: 10px;
    width: fit-content;
    padding: 12px 15px;
    border-radius: 999px;
    color: white;
    text-decoration: none;
    font-weight: 850;
    background: rgba(255, 255, 255, 0.085);
    border: 1px solid rgba(255, 255, 255, 0.12);
    transition:
      transform 220ms ease,
      background-color 220ms ease,
      border-color 220ms ease;

    &:hover {
      transform: translateY(-3px);
      background: rgba(255, 255, 255, 0.12);
      border-color: rgba(147, 197, 253, 0.32);
    }
  }

  .q-icon {
    color: #93c5fd;
  }
}
.contact-layout {
  align-items: stretch;
}

.contact-layout :deep(.reveal) {
  height: 100%;
}

.contact-copy {
  height: fit-content;
}
.trust-grid {
  display: grid;
  gap: 10px;
  margin-top: 28px;

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
    width: min(100% - 28px, 1340px);
  }
}
</style>
