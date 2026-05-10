<template>
  <q-form class="contact-form" @submit.prevent="submitForm">
    <div class="form-intro">
      <span>{{ t('contact.brief.label') }}</span>
      <h2>{{ t('contact.brief.title') }}</h2>
      <p>{{ t('contact.brief.text') }}</p>
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

    <div class="form-grid">
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

    <div class="form-grid">
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

    <transition name="form-alert">
      <div v-if="formStatus.message" class="form-status" :class="`form-status--${formStatus.type}`">
        <q-icon :name="formStatus.type === 'positive' ? 'check_circle' : 'warning'" />
        <span>{{ formStatus.message }}</span>
      </div>
    </transition>

    <q-btn
      type="submit"
      unelevated
      rounded
      size="lg"
      class="submit-btn full-width"
      :loading="isSubmitting"
      :disable="isSubmitting"
      :label="t('contact.form.submit')"
    />

    <p class="form-note">{{ t('contact.form.note') }}</p>
  </q-form>
</template>

<script setup>
import { computed, reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm, locale } = useI18n()

const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT
const isSubmitting = ref(false)

const formStatus = ref({
  type: '',
  message: '',
})

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

const projectTypeOptions = computed(() => tm('contact.projectTypes'))
const goalOptions = computed(() => tm('contact.goals'))
const timelineOptions = computed(() => tm('contact.timelines'))
const budgetOptions = computed(() => tm('contact.budgets'))

function setFormStatus(type, message) {
  formStatus.value = { type, message }
}

function clearFormStatus() {
  formStatus.value = { type: '', message: '' }
}

function getOptionLabel(options, value) {
  const match = options.find((option) => option.value === value)
  return match ? match.label : t('contact.form.notSelected')
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
        ime_i_firma: form.name,
        kontakt: form.contact,
        tip_projekta: getOptionLabel(projectTypeOptions.value, form.projectType),
        cilj_sajta: getOptionLabel(goalOptions.value, form.goal),
        rok: getOptionLabel(timelineOptions.value, form.timeline),
        budzet: getOptionLabel(budgetOptions.value, form.budget),
        sajt: form.website || t('contact.form.notSelected'),
        poruka: form.message,
        jezik: locale.value,
        izvor: 'ML Web Studio website',
      }),
    })

    if (!response.ok) throw new Error('Form submission failed')

    setFormStatus('positive', t('contact.form.success'))

    Object.assign(form, {
      name: '',
      contact: '',
      projectType: '',
      goal: '',
      timeline: '',
      budget: '',
      website: '',
      message: '',
    })
  } catch {
    setFormStatus('negative', t('contact.form.error'))
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped lang="scss">
.contact-form {
  position: relative;
  overflow: hidden;
  padding: 28px;
  border-radius: 34px;
  background:
    radial-gradient(circle at top right, rgba(96, 165, 250, 0.18), transparent 24rem),
    linear-gradient(155deg, rgba(255, 255, 255, 0.13), rgba(255, 255, 255, 0.045));
  border: 1px solid rgba(255, 255, 255, 0.14);
  box-shadow:
    0 28px 80px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.12);

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    border-radius: inherit;
    pointer-events: none;
    background: linear-gradient(
      135deg,
      rgba(96, 165, 250, 0.32),
      transparent 34%,
      rgba(219, 39, 119, 0.22)
    );
    opacity: 0.2;
  }
}

.form-intro {
  position: relative;
  z-index: 2;
  margin-bottom: 20px;

  span {
    color: #93c5fd;
    font-size: 13px;
    font-weight: 950;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  h2 {
    margin: 10px 0 0;
    color: white;
    font-size: clamp(26px, 3vw, 38px);
    line-height: 1;
    letter-spacing: -0.06em;
    font-weight: 950;
  }

  p {
    margin: 12px 0 0;
    color: rgba(255, 255, 255, 0.66);
    line-height: 1.7;
  }
}

.form-grid {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.input {
  position: relative;
  z-index: 2;
  margin-bottom: 12px;
  padding: 3px 14px;
  border-radius: 18px;
  color: white;
  background: rgba(255, 255, 255, 0.085);
  border: 1px solid rgba(255, 255, 255, 0.11);
  transition:
    border-color 220ms ease,
    box-shadow 220ms ease,
    background-color 220ms ease;

  &:focus-within {
    border-color: rgba(147, 197, 253, 0.58);
    background: rgba(255, 255, 255, 0.11);
    box-shadow:
      0 0 0 4px rgba(59, 130, 246, 0.1),
      0 18px 46px rgba(37, 99, 235, 0.16);
  }

  :deep(.q-field__label),
  :deep(.q-field__native),
  :deep(.q-field__input),
  :deep(.q-field__control) {
    color: white;
  }

  :deep(.q-field__label) {
    color: rgba(255, 255, 255, 0.64);
  }
}

.input--textarea {
  padding-top: 10px;
}

.submit-btn {
  position: relative;
  overflow: hidden;
  z-index: 2;
  margin-top: 4px;
  color: white;
  font-weight: 950;
  background:
    radial-gradient(circle at 20% -20%, rgba(255, 255, 255, 0.28), transparent 50%),
    linear-gradient(135deg, #2563eb, #7c3aed 58%, #db2777);
  box-shadow:
    0 24px 58px rgba(37, 99, 235, 0.36),
    inset 0 1px 0 rgba(255, 255, 255, 0.24);
}

.form-note {
  position: relative;
  z-index: 2;
  margin: 14px 0 0;
  color: rgba(255, 255, 255, 0.58);
  font-size: 13px;
  line-height: 1.6;
}

.form-status {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 6px 0 14px;
  padding: 12px 14px;
  border-radius: 16px;
  color: white;
  font-weight: 800;
}

.form-status--positive {
  background: rgba(34, 197, 94, 0.16);
  border: 1px solid rgba(34, 197, 94, 0.24);
}
.contact-form {
  transition:
    transform 260ms ease,
    border-color 260ms ease,
    box-shadow 260ms ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(147, 197, 253, 0.26);
    box-shadow:
      0 34px 100px rgba(37, 99, 235, 0.18),
      0 20px 70px rgba(0, 0, 0, 0.32),
      inset 0 1px 0 rgba(255, 255, 255, 0.14);
  }
}

.submit-btn {
  transition:
    transform 220ms ease,
    box-shadow 220ms ease,
    filter 220ms ease;

  &:hover {
    transform: translateY(-3px);
    filter: saturate(1.12);
    box-shadow:
      0 30px 76px rgba(37, 99, 235, 0.46),
      0 0 44px rgba(219, 39, 119, 0.16);
  }
}

.submit-btn::after {
  content: '';
  position: absolute;
  inset: 0;
  transform: translateX(-120%);
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.34), transparent);
  transition: transform 720ms cubic-bezier(0.22, 1, 0.36, 1);
  pointer-events: none;
}

.submit-btn:hover::after {
  transform: translateX(120%);
}
.form-status--warning,
.form-status--negative {
  background: rgba(245, 158, 11, 0.16);
  border: 1px solid rgba(245, 158, 11, 0.24);
}

.form-alert-enter-active,
.form-alert-leave-active {
  transition:
    opacity 220ms ease,
    transform 220ms ease;
}

.form-alert-enter-from,
.form-alert-leave-to {
  opacity: 0;
  transform: translateY(8px);
}

@media (max-width: 720px) {
  .contact-form {
    padding: 20px;
  }

  .form-grid {
    grid-template-columns: 1fr;
    gap: 0;
  }
}
</style>
