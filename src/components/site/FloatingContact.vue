<template>
  <div class="floating-contact" aria-label="Brzi kontakt">
    <a
      v-if="whatsappHref"
      class="floating-contact__btn floating-contact__btn--wa"
      :href="whatsappHref"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Kontakt preko WhatsApp-a"
      title="WhatsApp"
    >
      <svg viewBox="0 0 32 32" aria-hidden="true" class="floating-contact__icon">
        <path
          fill="currentColor"
          d="M16.04 3C8.86 3 3.02 8.74 3.02 15.8c0 2.26.6 4.47 1.74 6.4L3 29l6.97-1.8a13.2 13.2 0 0 0 6.07 1.48c7.18 0 13.02-5.74 13.02-12.8S23.22 3 16.04 3Zm0 23.48c-1.93 0-3.82-.51-5.47-1.48l-.39-.23-4.13 1.07 1.1-4.01-.26-.41a10.43 10.43 0 0 1-1.64-5.62c0-5.84 4.84-10.6 10.79-10.6s10.79 4.76 10.79 10.6-4.84 10.68-10.79 10.68Zm5.92-7.94c-.32-.16-1.9-.92-2.2-1.02-.3-.11-.52-.16-.74.16-.21.31-.84 1.02-1.03 1.23-.19.21-.38.24-.7.08-.32-.16-1.36-.49-2.58-1.56-.95-.84-1.6-1.88-1.79-2.2-.19-.31-.02-.48.14-.64.15-.14.32-.37.49-.55.16-.18.21-.31.32-.52.11-.21.05-.39-.03-.55-.08-.16-.74-1.76-1.02-2.42-.27-.63-.54-.55-.74-.56h-.63c-.22 0-.56.08-.86.39-.3.31-1.13 1.09-1.13 2.65s1.16 3.08 1.32 3.29c.16.21 2.28 3.43 5.53 4.8.77.33 1.37.53 1.84.68.77.24 1.48.21 2.04.13.62-.09 1.9-.76 2.17-1.5.27-.73.27-1.36.19-1.5-.08-.13-.3-.21-.62-.37Z"
        />
      </svg>
    </a>

    <a
      v-if="viberHref"
      class="floating-contact__btn floating-contact__btn--viber"
      :href="viberHref"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Kontakt preko Vibera"
      title="Viber"
    >
      <svg viewBox="0 0 32 32" aria-hidden="true" class="floating-contact__icon">
        <path
          fill="currentColor"
          d="M22.7 4.1A23.5 23.5 0 0 0 16 3.2c-2.3 0-4.5.3-6.7.9-2.2.6-3.9 2.4-4.3 4.7-.6 3.2-.6 6.4 0 9.6.4 2.1 1.9 3.8 3.9 4.5v4.3c0 .7.8 1.1 1.3.6l4.3-4.1h1.5c2.3 0 4.5-.3 6.7-.9 2.2-.6 3.9-2.4 4.3-4.7.6-3.2.6-6.4 0-9.6-.4-2.3-2.1-4.1-4.3-4.7Zm2.1 13.7c-.3 1.5-1.4 2.7-2.9 3.1-1.9.5-3.9.8-5.9.8h-2.1l-3.1 2.9v-3.2l-.8-.2c-1.5-.4-2.6-1.6-2.9-3.1-.5-2.9-.5-5.9 0-8.8.3-1.5 1.4-2.7 2.9-3.1 1.9-.5 3.9-.8 5.9-.8s4 .3 5.9.8c1.5.4 2.6 1.6 2.9 3.1.5 2.9.5 5.9 0 8.8ZM18.5 18c-3.2-1.3-5.2-3.3-6.5-6.5-.2-.5 0-1 .5-1.2l1.1-.5c.5-.2 1.1 0 1.3.5l.8 1.8c.2.4.1.9-.3 1.2l-.5.4c.5.9 1.2 1.6 2.1 2.1l.4-.5c.3-.4.8-.5 1.2-.3l1.8.8c.5.2.7.8.5 1.3l-.5 1.1c-.2.5-.8.7-1.2.5Zm1.1-9.4c-1.2-.5-2.5-.7-3.8-.6-.4 0-.7.3-.7.7s.3.7.7.7c1.1-.1 2.2.1 3.2.5 1 .4 1.8 1.2 2.2 2.2.4 1 .6 2.1.5 3.2 0 .4.3.7.7.7s.7-.3.7-.7c.1-1.3-.1-2.6-.6-3.8-.6-1.3-1.6-2.3-2.9-2.9Zm-1.1 2.4c-.8-.3-1.6-.4-2.4-.4-.4 0-.7.3-.7.7s.3.7.7.7c.6 0 1.2.1 1.7.3.5.2.9.6 1.1 1.1.2.5.3 1.1.3 1.7 0 .4.3.7.7.7s.7-.3.7-.7c0-.8-.1-1.6-.4-2.4-.4-.8-.9-1.4-1.7-1.7Z"
        />
      </svg>
    </a>
    <a
      v-if="instagramHref"
      class="floating-contact__btn floating-contact__btn--instagram"
      :href="instagramHref"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Otvori Instagram profil"
      title="Instagram"
    >
      <svg viewBox="0 0 32 32" aria-hidden="true" class="floating-contact__icon">
        <path
          fill="currentColor"
          d="M10.2 4h11.6A6.2 6.2 0 0 1 28 10.2v11.6a6.2 6.2 0 0 1-6.2 6.2H10.2A6.2 6.2 0 0 1 4 21.8V10.2A6.2 6.2 0 0 1 10.2 4Zm0 2.3a3.9 3.9 0 0 0-3.9 3.9v11.6a3.9 3.9 0 0 0 3.9 3.9h11.6a3.9 3.9 0 0 0 3.9-3.9V10.2a3.9 3.9 0 0 0-3.9-3.9H10.2Zm5.8 5a4.7 4.7 0 1 1 0 9.4 4.7 4.7 0 0 1 0-9.4Zm0 2.3a2.4 2.4 0 1 0 0 4.8 2.4 2.4 0 0 0 0-4.8Zm6-3.7a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z"
        />
      </svg>
    </a>

    <router-link
      class="floating-contact__btn floating-contact__btn--mail"
      to="/kontakt"
      aria-label="Otvori kontakt formu"
      title="Kontakt forma"
    >
      <svg viewBox="0 0 32 32" aria-hidden="true" class="floating-contact__icon">
        <path
          fill="currentColor"
          d="M6.5 8h19c1.38 0 2.5 1.12 2.5 2.5v11c0 1.38-1.12 2.5-2.5 2.5h-19A2.5 2.5 0 0 1 4 21.5v-11C4 9.12 5.12 8 6.5 8Zm.25 2.5 8.55 6.25c.42.31.98.31 1.4 0l8.55-6.25H6.75Zm18.75 2.28-7.62 5.57a3.1 3.1 0 0 1-3.76 0L6.5 12.78v8.72h19v-8.72Z"
        />
      </svg>
    </router-link>
  </div>
</template>

<script setup>
const whatsappHref = import.meta.env.VITE_WHATSAPP_URL || ''
const viberHref = import.meta.env.VITE_VIBER_URL || ''
const instagramHref = import.meta.env.VITE_INSTAGRAM_URL || ''
</script>

<style scoped lang="scss">
.floating-contact {
  position: fixed;
  right: 22px;
  bottom: 28px;
  z-index: 2000;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.floating-contact__btn {
  position: relative;
  width: 58px;
  height: 58px;
  display: grid;
  place-items: center;
  overflow: hidden;
  border-radius: 20px;
  color: white;
  text-decoration: none;
  isolation: isolate;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow:
    0 20px 50px rgba(0, 0, 0, 0.34),
    inset 0 1px 0 rgba(255, 255, 255, 0.22);
  backdrop-filter: blur(14px);
  transition:
    transform 220ms cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 220ms ease,
    filter 220ms ease;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -2;
    border-radius: inherit;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    transform: translateX(-130%);
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.34), transparent);
    transition: transform 700ms cubic-bezier(0.22, 1, 0.36, 1);
  }

  &:hover {
    transform: translateY(-5px) scale(1.045);
    filter: saturate(1.08);
    box-shadow:
      0 26px 62px rgba(0, 0, 0, 0.42),
      0 0 38px rgba(147, 197, 253, 0.16),
      inset 0 1px 0 rgba(255, 255, 255, 0.24);
  }

  &:hover::after {
    transform: translateX(130%);
  }
}

.floating-contact__icon {
  width: 29px;
  height: 29px;
  display: block;
  filter: drop-shadow(0 8px 14px rgba(0, 0, 0, 0.24));
}

.floating-contact__btn--wa {
  animation:
    contactFloat 4.2s ease-in-out infinite,
    contactPulseWa 2.8s ease-in-out infinite;

  &::before {
    background:
      radial-gradient(circle at 24% 0%, rgba(255, 255, 255, 0.32), transparent 54%),
      linear-gradient(135deg, #25d366 0%, #16a34a 100%);
  }
}

.floating-contact__btn--viber {
  animation:
    contactFloat 4.6s ease-in-out infinite 0.35s,
    contactPulseViber 3.1s ease-in-out infinite;

  &::before {
    background:
      radial-gradient(circle at 24% 0%, rgba(255, 255, 255, 0.3), transparent 54%),
      linear-gradient(135deg, #8b5cf6 0%, #665cac 100%);
  }
}

.floating-contact__btn--mail {
  animation:
    contactFloat 5s ease-in-out infinite 0.7s,
    contactPulseMail 3.4s ease-in-out infinite;

  &::before {
    background:
      radial-gradient(circle at 24% 0%, rgba(255, 255, 255, 0.3), transparent 54%),
      linear-gradient(135deg, #2563eb 0%, #7c3aed 58%, #db2777 100%);
  }
}

@keyframes contactPulseWa {
  0%,
  100% {
    box-shadow:
      0 20px 50px rgba(0, 0, 0, 0.34),
      0 0 0 0 rgba(37, 211, 102, 0);
  }

  50% {
    box-shadow:
      0 20px 50px rgba(0, 0, 0, 0.34),
      0 0 0 10px rgba(37, 211, 102, 0.1);
  }
}

@keyframes contactPulseViber {
  0%,
  100% {
    box-shadow:
      0 20px 50px rgba(0, 0, 0, 0.34),
      0 0 0 0 rgba(139, 92, 246, 0);
  }

  50% {
    box-shadow:
      0 20px 50px rgba(0, 0, 0, 0.34),
      0 0 0 10px rgba(139, 92, 246, 0.1);
  }
}

@keyframes contactPulseMail {
  0%,
  100% {
    box-shadow:
      0 20px 50px rgba(0, 0, 0, 0.34),
      0 0 0 0 rgba(96, 165, 250, 0);
  }

  50% {
    box-shadow:
      0 20px 50px rgba(0, 0, 0, 0.34),
      0 0 0 10px rgba(96, 165, 250, 0.09);
  }
}

@media (max-width: 720px) {
  .floating-contact {
    right: 14px;
    bottom: 18px;
    gap: 10px;
  }

  .floating-contact__btn {
    width: 52px;
    height: 52px;
    border-radius: 18px;
  }

  .floating-contact__icon {
    width: 26px;
    height: 26px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .floating-contact__btn {
    animation: none !important;
    transition: none !important;
  }

  .floating-contact__btn::after {
    display: none;
  }
}
@keyframes contactFloat {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-7px);
  }
}
.floating-contact__btn--instagram {
  animation:
    contactFloat 4.8s ease-in-out infinite 0.5s,
    contactPulseInstagram 3.2s ease-in-out infinite;

  &::before {
    background:
      radial-gradient(circle at 24% 0%, rgba(255, 255, 255, 0.32), transparent 54%),
      linear-gradient(135deg, #f97316 0%, #db2777 45%, #7c3aed 100%);
  }
}
@keyframes contactPulseInstagram {
  0%,
  100% {
    box-shadow:
      0 20px 50px rgba(0, 0, 0, 0.34),
      0 0 0 0 rgba(219, 39, 119, 0);
  }

  50% {
    box-shadow:
      0 20px 50px rgba(0, 0, 0, 0.34),
      0 0 0 10px rgba(219, 39, 119, 0.1);
  }
}
</style>
