<template>
  <router-view />
</template>

<script setup>
import { nextTick, onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

onMounted(async () => {
  await nextTick()

  AOS.init({
    duration: 450,
    once: true,
    offset: 50,
    delay: 0,
    easing: 'ease-out-cubic',
    mirror: false,
  })

  window.setTimeout(() => {
    AOS.refresh()
  }, 150)
})
</script>
