<template>
  <q-form class="contact-form" @submit.prevent="submitForm">
    <div class="form-glow form-glow--one"></div>
    <div class="form-glow form-glow--two"></div>

    <div class="form-intro">
      <div class="form-kicker">
        <q-icon name="draw" />
        <span>{{ t('contact.brief.label') }}</span>
      </div>

      <h2>{{ t('contact.brief.title') }}</h2>
      <p>{{ t('contact.brief.text') }}</p>
    </div>

    <div class="form-progress" aria-hidden="true">
      <span></span>
      <strong>{{ t('contact.form.progress') }}</strong>
    </div>

    <div class="form-section">
      <div class="section-label">
        <span>01</span>
        <strong>{{ t('contact.form.basicInfo') }}</strong>
      </div>

      <div class="form-grid">
        <q-input
          v-model="form.name"
          :disable="isSubmitting"
          borderless
          :label="t('contact.form.name')"
          class="input"
        >
          <template #prepend>
            <q-icon name="person" />
          </template>
        </q-input>

        <q-input
          v-model="form.contact"
          :disable="isSubmitting"
          borderless
          :label="t('contact.form.contact')"
          class="input"
        >
          <template #prepend>
            <q-icon name="alternate_email" />
          </template>
        </q-input>
      </div>
    </div>

    <div class="form-section">
      <div class="section-label">
        <span>02</span>
        <strong>{{ t('contact.form.projectInfo') }}</strong>
      </div>

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
          popup-content-class="contact-select-menu"
        >
          <template #prepend>
            <q-icon name="web" />
          </template>
        </q-select>

        <q-select
          v-model="form.goal"
          :options="goalOptions"
          emit-value
          map-options
          borderless
          :disable="isSubmitting"
          :label="t('contact.form.goal')"
          class="input"
          popup-content-class="contact-select-menu"
        >
          <template #prepend>
            <q-icon name="flag" />
          </template>
        </q-select>
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
          popup-content-class="contact-select-menu"
        >
          <template #prepend>
            <q-icon name="schedule" />
          </template>
        </q-select>

        <q-select
          v-model="form.budget"
          :options="budgetOptions"
          emit-value
          map-options
          borderless
          :disable="isSubmitting"
          :label="t('contact.form.budget')"
          class="input"
          popup-content-class="contact-select-menu"
        >
          <template #prepend>
            <q-icon name="payments" />
          </template>
        </q-select>
      </div>
    </div>

    <div class="form-section">
      <div class="section-label">
        <span>03</span>
        <strong>{{ t('contact.form.detailsInfo') }}</strong>
      </div>

      <q-input
        v-model="form.website"
        borderless
        :disable="isSubmitting"
        :label="t('contact.form.website')"
        class="input"
      >
        <template #prepend>
          <q-icon name="link" />
        </template>
      </q-input>

      <label class="analysis-check" :class="{ 'analysis-check--active': form.freeAnalysis }">
        <q-checkbox
          v-model="form.freeAnalysis"
          :disable="isSubmitting"
          dense
          color="primary"
          class="analysis-check__box"
        />

        <span class="analysis-check__content">
          <strong>{{ t('contact.form.freeAnalysisTitle') }}</strong>
          <small>{{ t('contact.form.freeAnalysisText') }}</small>
        </span>
      </label>

      <q-input
        v-model="form.message"
        borderless
        :disable="isSubmitting"
        type="textarea"
        autogrow
        :label="t('contact.form.message')"
        :placeholder="t('contact.form.messagePlaceholder')"
        class="input input--textarea"
      >
        <template #prepend>
          <q-icon name="notes" />
        </template>
      </q-input>
    </div>

    <transition name="form-alert">
      <div v-if="formStatus.message" class="form-status" :class="`form-status--${formStatus.type}`">
        <q-icon :name="formStatusIcon" />
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
    >
      <span>{{ t('contact.form.submit') }}</span>
      <q-icon name="arrow_forward" />
    </q-btn>

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
  freeAnalysis: true,
  message: '',
})

const projectTypeOptions = computed(() => tm('contact.projectTypes'))
const goalOptions = computed(() => tm('contact.goals'))
const timelineOptions = computed(() => tm('contact.timelines'))
const budgetOptions = computed(() => tm('contact.budgets'))

const formStatusIcon = computed(() => {
  if (formStatus.value.type === 'positive') return 'check_circle'
  if (formStatus.value.type === 'warning') return 'warning'
  return 'error'
})

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
        zeli_besplatnu_analizu: form.freeAnalysis ? 'Da' : 'Ne',
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
      freeAnalysis: true,
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
  padding: clamp(22px, 3vw, 34px);
  border-radius: 38px;
  isolation: isolate;
  background:
    radial-gradient(circle at top right, rgba(96, 165, 250, 0.2), transparent 24rem),
    radial-gradient(circle at 8% 0%, rgba(219, 39, 119, 0.11), transparent 22rem),
    linear-gradient(155deg, rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.045));
  border: 1px solid rgba(255, 255, 255, 0.145);
  box-shadow:
    0 30px 90px rgba(0, 0, 0, 0.32),
    inset 0 1px 0 rgba(255, 255, 255, 0.13);
  transition:
    transform 260ms ease,
    border-color 260ms ease,
    box-shadow 260ms ease;

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    z-index: -2;
    border-radius: inherit;
    pointer-events: none;
    background: linear-gradient(
      135deg,
      rgba(96, 165, 250, 0.38),
      transparent 34%,
      rgba(219, 39, 119, 0.26)
    );
    opacity: 0.28;
  }

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(147, 197, 253, 0.28);
    box-shadow:
      0 36px 110px rgba(37, 99, 235, 0.18),
      0 22px 78px rgba(0, 0, 0, 0.34),
      inset 0 1px 0 rgba(255, 255, 255, 0.15);
  }
}

.form-glow {
  position: absolute;
  z-index: -1;
  border-radius: 999px;
  pointer-events: none;
  filter: blur(34px);
}

.form-glow--one {
  right: -90px;
  top: -90px;
  width: 260px;
  height: 260px;
  background: rgba(59, 130, 246, 0.22);
  animation: formGlowOne 7s ease-in-out infinite;
}

.form-glow--two {
  left: -110px;
  bottom: 10%;
  width: 230px;
  height: 230px;
  background: rgba(219, 39, 119, 0.14);
  animation: formGlowTwo 8s ease-in-out infinite;
}

.form-intro {
  position: relative;
  z-index: 2;
  margin-bottom: 22px;

  h2 {
    margin: 12px 0 0;
    color: white;
    font-size: clamp(28px, 3vw, 42px);
    line-height: 0.98;
    letter-spacing: -0.065em;
    font-weight: 950;
  }

  p {
    margin: 13px 0 0;
    color: rgba(255, 255, 255, 0.66);
    line-height: 1.72;
  }
}

.form-kicker {
  width: fit-content;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 12px;
  border-radius: 999px;
  color: #dbeafe;
  background: rgba(59, 130, 246, 0.14);
  border: 1px solid rgba(147, 197, 253, 0.2);
  font-size: 12px;
  font-weight: 950;
  text-transform: uppercase;
  letter-spacing: 0.08em;

  .q-icon {
    color: #93c5fd;
    font-size: 18px;
  }
}

.form-progress {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 22px;
  padding: 13px 14px;
  border-radius: 20px;
  background: rgba(15, 23, 42, 0.32);
  border: 1px solid rgba(147, 197, 253, 0.13);

  span {
    position: relative;
    overflow: hidden;
    height: 9px;
    flex: 1;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.09);

    &::after {
      content: '';
      position: absolute;
      inset: 0;
      width: 72%;
      border-radius: inherit;
      background: linear-gradient(90deg, #2563eb, #7c3aed, #db2777);
      box-shadow: 0 0 24px rgba(124, 58, 237, 0.26);
      animation: progressPulse 3.8s ease-in-out infinite;
    }
  }

  strong {
    color: rgba(219, 234, 254, 0.78);
    font-size: 12px;
    font-weight: 950;
    white-space: nowrap;
  }
}

.form-section {
  position: relative;
  z-index: 2;
  margin-top: 18px;
}

.section-label {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;

  span {
    color: rgba(255, 255, 255, 0.25);
    font-size: 23px;
    line-height: 1;
    font-weight: 950;
    letter-spacing: -0.065em;
  }

  strong {
    color: rgba(255, 255, 255, 0.88);
    font-size: 13px;
    font-weight: 950;
    text-transform: uppercase;
    letter-spacing: 0.065em;
  }
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.input {
  margin-bottom: 12px;
  padding: 4px 14px;
  border-radius: 19px;
  color: white;
  background: rgba(255, 255, 255, 0.085);
  border: 1px solid rgba(255, 255, 255, 0.11);
  transition:
    border-color 220ms ease,
    box-shadow 220ms ease,
    background-color 220ms ease,
    transform 220ms ease;

  &:focus-within {
    transform: translateY(-2px);
    border-color: rgba(147, 197, 253, 0.58);
    background: rgba(255, 255, 255, 0.11);
    box-shadow:
      0 0 0 4px rgba(59, 130, 246, 0.1),
      0 18px 46px rgba(37, 99, 235, 0.16);
  }

  :deep(.q-field__prepend) {
    padding-right: 8px;
  }

  :deep(.q-field__prepend .q-icon) {
    color: #93c5fd;
    font-size: 20px;
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

  :deep(.q-field__marginal) {
    color: rgba(219, 234, 254, 0.74);
  }
}

.input--textarea {
  padding-top: 10px;
}

.analysis-check {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin: 0 0 14px;
  padding: 17px;
  border-radius: 24px;
  cursor: pointer;
  color: white;
  overflow: hidden;
  background:
    radial-gradient(circle at 12% 0%, rgba(34, 197, 94, 0.22), transparent 16rem),
    linear-gradient(135deg, rgba(34, 197, 94, 0.13), rgba(59, 130, 246, 0.08));
  border: 1px solid rgba(34, 197, 94, 0.24);
  box-shadow:
    0 18px 52px rgba(34, 197, 94, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  transition:
    transform 220ms ease,
    border-color 220ms ease,
    box-shadow 220ms ease;

  &::after {
    content: 'FREE';
    position: absolute;
    right: 14px;
    top: 12px;
    padding: 5px 8px;
    border-radius: 999px;
    color: #bbf7d0;
    background: rgba(34, 197, 94, 0.16);
    border: 1px solid rgba(34, 197, 94, 0.22);
    font-size: 10px;
    font-weight: 950;
    letter-spacing: 0.08em;
  }

  &:hover {
    transform: translateY(-3px);
    border-color: rgba(34, 197, 94, 0.42);
    box-shadow:
      0 24px 68px rgba(34, 197, 94, 0.12),
      0 0 36px rgba(34, 197, 94, 0.08);
  }
}

.analysis-check--active {
  border-color: rgba(34, 197, 94, 0.5);
  background:
    radial-gradient(circle at 12% 0%, rgba(34, 197, 94, 0.28), transparent 16rem),
    linear-gradient(135deg, rgba(34, 197, 94, 0.18), rgba(59, 130, 246, 0.1));
}

.analysis-check__box {
  margin-top: 1px;
}

.analysis-check__content {
  display: grid;
  gap: 5px;
  padding-right: 54px;

  strong {
    color: white;
    font-size: 15px;
    line-height: 1.2;
    font-weight: 950;
  }

  small {
    color: rgba(255, 255, 255, 0.68);
    font-size: 13px;
    line-height: 1.5;
    font-weight: 700;
  }
}

.form-status {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 9px;
  margin: 10px 0 14px;
  padding: 13px 14px;
  border-radius: 18px;
  color: white;
  font-weight: 850;
  line-height: 1.45;

  .q-icon {
    font-size: 21px;
  }
}

.form-status--positive {
  background: rgba(34, 197, 94, 0.16);
  border: 1px solid rgba(34, 197, 94, 0.24);

  .q-icon {
    color: #86efac;
  }
}

.form-status--warning,
.form-status--negative {
  background: rgba(245, 158, 11, 0.16);
  border: 1px solid rgba(245, 158, 11, 0.24);

  .q-icon {
    color: #fcd34d;
  }
}

.submit-btn {
  position: relative;
  overflow: hidden;
  z-index: 2;
  min-height: 58px;
  margin-top: 6px;
  color: white;
  font-size: 15px;
  font-weight: 950;
  letter-spacing: -0.015em;
  background:
    radial-gradient(circle at 20% -20%, rgba(255, 255, 255, 0.3), transparent 50%),
    linear-gradient(135deg, #2563eb, #7c3aed 58%, #db2777);
  box-shadow:
    0 24px 58px rgba(37, 99, 235, 0.36),
    inset 0 1px 0 rgba(255, 255, 255, 0.24);
  transition:
    transform 220ms ease,
    box-shadow 220ms ease,
    filter 220ms ease;

  :deep(.q-btn__content) {
    position: relative;
    z-index: 2;
    gap: 9px;
  }

  :deep(.q-icon) {
    font-size: 20px;
    transition: transform 220ms ease;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    transform: translateX(-120%);
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.34), transparent);
    transition: transform 720ms cubic-bezier(0.22, 1, 0.36, 1);
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-3px);
    filter: saturate(1.12);
    box-shadow:
      0 30px 76px rgba(37, 99, 235, 0.46),
      0 0 44px rgba(219, 39, 119, 0.16);
  }

  &:hover::after {
    transform: translateX(120%);
  }

  &:hover :deep(.q-icon) {
    transform: translateX(4px);
  }

  &:active {
    transform: translateY(-1px) scale(0.99);
  }

  &[disabled],
  &.disabled {
    opacity: 0.72;
    transform: none;
    filter: none;
    box-shadow:
      0 16px 38px rgba(37, 99, 235, 0.22),
      inset 0 1px 0 rgba(255, 255, 255, 0.18);
  }
}

.form-note {
  position: relative;
  z-index: 2;
  margin: 14px 0 0;
  color: rgba(255, 255, 255, 0.58);
  font-size: 13px;
  line-height: 1.6;
  text-align: center;
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

@keyframes formGlowOne {
  0%,
  100% {
    transform: scale(1) translate(0, 0);
    opacity: 0.65;
  }

  50% {
    transform: scale(1.14) translate(-18px, 18px);
    opacity: 1;
  }
}

@keyframes formGlowTwo {
  0%,
  100% {
    transform: scale(1) translate(0, 0);
    opacity: 0.45;
  }

  50% {
    transform: scale(1.12) translate(20px, -12px);
    opacity: 0.85;
  }
}

@keyframes progressPulse {
  0%,
  100% {
    transform: translateX(0);
    filter: hue-rotate(0deg);
  }

  50% {
    transform: translateX(8%);
    filter: hue-rotate(18deg);
  }
}

@media (max-width: 720px) {
  .contact-form {
    padding: 20px;
    border-radius: 30px;
  }

  .form-grid {
    grid-template-columns: 1fr;
    gap: 0;
  }

  .form-progress {
    align-items: flex-start;
    flex-direction: column;

    span {
      width: 100%;
      flex: none;
    }
  }
}

@media (prefers-reduced-motion: reduce) {
  .contact-form,
  .form-glow,
  .input,
  .analysis-check,
  .submit-btn,
  .form-progress span::after {
    animation: none !important;
    transition: none !important;
  }

  .submit-btn::after {
    display: none;
  }
}
</style>
