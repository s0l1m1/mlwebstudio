<template>
  <div class="section-heading" :class="{ 'section-heading--center': center }">
    <span v-if="label">{{ label }}</span>
    <h1 v-if="level === 1">{{ title }}</h1>
    <h2 v-else>{{ title }}</h2>
    <p v-if="text">{{ text }}</p>
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
})
</script>

<style scoped lang="scss">
.section-heading {
  max-width: 850px;

  span {
    display: inline-flex;
    margin-bottom: 14px;
    color: #93c5fd;
    font-size: 14px;
    font-weight: 950;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  h1,
  h2 {
    margin: 0;
    color: white;
    font-size: clamp(34px, 4.3vw, 62px);
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
  margin-inline: auto;
  text-align: center;
}
</style>
