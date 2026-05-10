<template>
  <div
    class="section-heading"
    :class="{
      'section-heading--center': center,
      'section-heading--wide': wide,
      'section-heading--compact': compact,
    }"
  >
    <span v-if="label" class="section-heading__label">
      <q-icon v-if="icon" :name="icon" />
      {{ label }}
    </span>

    <component :is="level === 1 ? 'h1' : 'h2'" class="section-heading__title">
      {{ title }}
    </component>

    <p v-if="text" class="section-heading__text">
      {{ text }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    default: '',
  },
  center: {
    type: Boolean,
    default: false,
  },
  level: {
    type: Number,
    default: 2,
  },
  icon: {
    type: String,
    default: '',
  },
  wide: {
    type: Boolean,
    default: false,
  },
  compact: {
    type: Boolean,
    default: false,
  },
})
</script>

<style scoped lang="scss">
.section-heading {
  position: relative;
  max-width: 850px;
}

.section-heading__label {
  position: relative;
  width: fit-content;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  padding: 9px 13px;
  overflow: hidden;
  border-radius: 999px;
  color: #dbeafe;
  font-size: 12px;
  font-weight: 950;
  text-transform: uppercase;
  letter-spacing: 0.085em;
  background:
    radial-gradient(circle at 20% 0%, rgba(255, 255, 255, 0.14), transparent 58%),
    linear-gradient(135deg, rgba(59, 130, 246, 0.16), rgba(124, 58, 237, 0.08));
  border: 1px solid rgba(147, 197, 253, 0.2);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.1),
    0 14px 34px rgba(37, 99, 235, 0.1);

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    transform: translateX(-130%);
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.22), transparent);
    animation: labelShine 5.8s ease-in-out infinite;
  }

  .q-icon {
    position: relative;
    z-index: 2;
    color: #93c5fd;
    font-size: 18px;
  }
}

.section-heading__label {
  :deep(*) {
    position: relative;
    z-index: 2;
  }
}

.section-heading__title {
  position: relative;
  margin: 0;
  color: white;
  font-size: clamp(36px, 4.4vw, 66px);
  line-height: 0.96;
  letter-spacing: -0.078em;
  font-weight: 950;
  text-wrap: balance;

  &::after {
    content: '';
    display: block;
    width: 84px;
    height: 4px;
    margin-top: 20px;
    border-radius: 999px;
    background: linear-gradient(90deg, #60a5fa, #c084fc, #f472b6);
    box-shadow: 0 12px 32px rgba(96, 165, 250, 0.22);
  }
}

.section-heading__text {
  max-width: 760px;
  margin: 20px 0 0;
  color: rgba(255, 255, 255, 0.68);
  font-size: 17px;
  line-height: 1.78;
  text-wrap: pretty;
}

.section-heading--center {
  margin-inline: auto;
  text-align: center;

  .section-heading__label {
    margin-left: auto;
    margin-right: auto;
  }

  .section-heading__title::after {
    margin-left: auto;
    margin-right: auto;
  }

  .section-heading__text {
    margin-left: auto;
    margin-right: auto;
  }
}

.section-heading--wide {
  max-width: 1050px;

  .section-heading__text {
    max-width: 860px;
  }
}

.section-heading--compact {
  .section-heading__label {
    margin-bottom: 12px;
  }

  .section-heading__title {
    font-size: clamp(30px, 3.5vw, 52px);
  }

  .section-heading__title::after {
    margin-top: 16px;
  }

  .section-heading__text {
    margin-top: 16px;
  }
}

@keyframes labelShine {
  0%,
  55%,
  100% {
    transform: translateX(-130%);
  }

  72% {
    transform: translateX(130%);
  }
}

@media (max-width: 700px) {
  .section-heading__label {
    border-radius: 18px;
    font-size: 11px;
    letter-spacing: 0.075em;
  }

  .section-heading__title {
    font-size: clamp(34px, 11vw, 52px);
    line-height: 0.98;
    letter-spacing: -0.065em;
  }

  .section-heading__title::after {
    width: 70px;
    height: 3px;
    margin-top: 16px;
  }

  .section-heading__text {
    font-size: 16px;
    line-height: 1.72;
  }
}

@media (prefers-reduced-motion: reduce) {
  .section-heading__label::after {
    animation: none !important;
    display: none;
  }
}
</style>
