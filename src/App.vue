<template>
  <router-view />
</template>

<script setup>
import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

onMounted(() => {
  AOS.init({
    duration: 550,
    once: true,
    offset: 45,
    delay: 0,
    easing: 'ease-out-cubic',
    mirror: false,
  })
})
</script>
