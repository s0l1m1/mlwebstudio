<template>
  <q-page class="page">
    <div class="noise"></div>
    <div class="ambient ambient--one"></div>
    <div class="ambient ambient--two"></div>
    <div class="ambient ambient--three"></div>

    <header class="nav">
      <button class="brand" type="button" @click="scrollToSection('top')">
        <div class="brand__mark brand__mark--logo">
          <img src="/brand/ml-logo.png" alt="ML Web Studio logo" />
        </div>
        <div class="brand__text">
          <strong>ML Web Studio</strong>
          <span>Web dizajn za biznise</span>
        </div>
      </button>

      <nav class="nav__links">
        <button type="button" @click="scrollToSection('services')">Usluge</button>
        <button type="button" @click="scrollToSection('approach')">Pristup</button>
        <button type="button" @click="scrollToSection('process')">Proces</button>
        <button type="button" @click="scrollToSection('contact')">Kontakt</button>
      </nav>

      <q-btn
        unelevated
        rounded
        class="nav__button"
        label="Pošalji upit"
        @click="scrollToSection('contact')"
      />
    </header>

    <main id="top">
      <section class="hero">
        <div class="container hero__grid">
          <div class="hero__content" data-aos="fade-right">
            <div class="hero__badge">
              <q-icon name="auto_awesome" />
              Premium web stranice za biznise koji žele jači prvi utisak
            </div>

            <h1>
              Pravimo sajtove koji izgledaju moderno,
              <span>ozbiljno i spremno za klijente.</span>
            </h1>

            <p class="hero__lead">
              Pomažemo malim i srednjim biznisima da dobiju brz, moderan i prodajno usmeren sajt
              koji jasno predstavi uslugu, izgradi poverenje i pretvori posetioce u konkretne upite.
            </p>

            <div class="hero__actions">
              <q-btn
                unelevated
                rounded
                size="lg"
                class="btn-primary"
                label="Zatraži ponudu"
                @click="scrollToSection('contact')"
              />

              <q-btn
                outline
                rounded
                size="lg"
                class="btn-ghost"
                label="Pogledaj usluge"
                @click="scrollToSection('services')"
              />
            </div>

            <div class="hero__chips">
              <div>
                <q-icon name="phone_iphone" />
                Mobilno optimizovano
              </div>
              <div>
                <q-icon name="speed" />
                Brzo učitavanje
              </div>
              <div>
                <q-icon name="ads_click" />
                Jasan poziv na akciju
              </div>
            </div>
          </div>

          <div class="hero__visual" data-aos="fade-left">
            <div class="showcase-card">
              <div class="showcase-card__shine"></div>

              <div class="showcase-card__top">
                <div>
                  <span>Studio proces</span>
                  <strong>Od ideje do sajta koji prodaje priču</strong>
                </div>

                <div class="showcase-card__icon">
                  <q-icon name="north_east" />
                </div>
              </div>

              <div class="showcase-card__status">
                <div>
                  <q-icon name="verified" />
                  <span>Ponuda po dogovoru</span>
                </div>
                <div>
                  <q-icon name="auto_graph" />
                  <span>Prodajni fokus</span>
                </div>
              </div>

              <div class="workflow">
                <div class="workflow__item workflow__item--active">
                  <div class="workflow__icon">
                    <q-icon name="psychology" />
                  </div>
                  <div>
                    <strong>Strategija</strong>
                    <span>Definišemo cilj, poruku i korisnički tok.</span>
                  </div>
                </div>

                <div class="workflow__item">
                  <div class="workflow__icon">
                    <q-icon name="palette" />
                  </div>
                  <div>
                    <strong>Vizuelni identitet</strong>
                    <span>Pravimo moderan izgled koji gradi poverenje.</span>
                  </div>
                </div>

                <div class="workflow__item">
                  <div class="workflow__icon">
                    <q-icon name="code" />
                  </div>
                  <div>
                    <strong>Implementacija</strong>
                    <span>Pretvaramo dizajn u brz i responzivan sajt.</span>
                  </div>
                </div>
              </div>

              <div class="showcase-grid">
                <div class="showcase-grid__main">
                  <div class="gradient-line"></div>
                  <strong>Prodajna struktura</strong>
                  <p>
                    Stranicu gradimo kao jasnu priču: problem, rešenje, poverenje, usluge i kontakt.
                  </p>
                </div>

                <div class="showcase-grid__box">
                  <q-icon name="bolt" />
                  <span>Brzina</span>
                </div>

                <div class="showcase-grid__box showcase-grid__box--pink">
                  <q-icon name="workspace_premium" />
                  <span>Utisak</span>
                </div>
              </div>

              <div class="showcase-card__bottom">
                <span class="live-dot"></span>
                <p>Jasna struktura, moderan dizajn i put od posete do upita.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="intro-strip">
        <div class="wide-container">
          <div class="strip-card" data-aos="fade-up">
            <div>
              <span>Ne pravimo samo vizuelno lep sajt.</span>
              <strong>
                Pravimo stranicu koja objašnjava ponudu, gradi poverenje i vodi korisnika ka akciji.
              </strong>
            </div>

            <q-btn
              rounded
              unelevated
              class="strip-button"
              label="Kako radimo?"
              @click="scrollToSection('approach')"
            />
          </div>
        </div>
      </section>

      <section class="section problem-section">
        <div class="container">
          <div class="section-heading section-heading--center" data-aos="fade-up">
            <span>Zašto je bitno</span>
            <h2>Sajt često odlučuje da li korisnik šalje upit ili odlazi kod konkurencije.</h2>
            <p>
              Kada neko prvi put vidi vaš biznis online, dizajn, jasnoća i brzina direktno utiču na
              poverenje. Zato svaku stranicu gradimo oko toga šta korisnik treba da razume i uradi.
            </p>
          </div>

          <div class="problem-grid">
            <article
              v-for="item in problems"
              :key="item.title"
              class="problem-card"
              data-aos="fade-up"
            >
              <div class="problem-card__icon">
                <q-icon :name="item.icon" />
              </div>
              <h3>{{ item.title }}</h3>
              <p>{{ item.text }}</p>
            </article>
          </div>
        </div>
      </section>

      <section id="services" class="section services-section">
        <div class="wide-container services-shell">
          <div class="container services-layout">
            <div class="section-heading section-heading--left sticky-heading" data-aos="fade-right">
              <span>Usluge</span>
              <h2>Šta možemo da napravimo za vaš biznis?</h2>
              <p>
                Radimo stranice koje imaju jasnu namenu: da predstave uslugu, objasne prednosti,
                izgledaju profesionalno i povećaju šansu da posetilac pošalje upit.
              </p>

              <q-btn
                unelevated
                rounded
                size="lg"
                class="btn-primary"
                label="Razgovarajmo o sajtu"
                @click="scrollToSection('contact')"
              />
            </div>

            <div class="service-stack">
              <article
                v-for="service in services"
                :key="service.title"
                class="service-row"
                data-aos="fade-left"
              >
                <div class="service-row__number">{{ service.number }}</div>
                <div class="service-row__content">
                  <div class="service-row__top">
                    <q-icon :name="service.icon" />
                    <h3>{{ service.title }}</h3>
                  </div>
                  <p>{{ service.text }}</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="approach" class="section approach-section">
        <div class="wide-container">
          <div class="approach-card" data-aos="zoom-in-up">
            <div class="approach-card__content">
              <span class="mini-label">Naš pristup</span>
              <h2>Pre dizajna rešavamo najvažnije pitanje: zašto bi neko izabrao baš vas?</h2>
              <p>
                Dobar sajt nije samo kombinacija boja, animacija i sekcija. Prvo definišemo poruku,
                publiku, redosled informacija i akciju koju korisnik treba da napravi.
              </p>

              <div class="approach-points">
                <div>
                  <q-icon name="ads_click" />
                  <span>Jasan poziv na akciju</span>
                </div>
                <div>
                  <q-icon name="schema" />
                  <span>Struktura koja vodi kroz ponudu</span>
                </div>
                <div>
                  <q-icon name="speed" />
                  <span>Brzina i responzivnost</span>
                </div>
                <div>
                  <q-icon name="workspace_premium" />
                  <span>Premium prvi utisak</span>
                </div>
              </div>
            </div>

            <div class="approach-visual">
              <div class="orbit">
                <div class="orbit__ring"></div>
                <div class="orbit__center">
                  <q-icon name="hub" />
                  <span>Sajt</span>
                </div>

                <div class="orbit__item orbit__item--one">
                  <q-icon name="psychology" />
                  <span>Poruka</span>
                </div>

                <div class="orbit__item orbit__item--two">
                  <q-icon name="palette" />
                  <span>Dizajn</span>
                </div>

                <div class="orbit__item orbit__item--three">
                  <q-icon name="call" />
                  <span>Upit</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section audience-section">
        <div class="container">
          <div class="section-heading section-heading--center" data-aos="fade-up">
            <span>Za koga radimo</span>
            <h2>Najviše smisla ima za biznise kojima svaki poziv, rezervacija ili upit vredi.</h2>
          </div>

          <div class="audience-grid">
            <div
              v-for="audience in audiences"
              :key="audience"
              class="audience-pill"
              data-aos="fade-up"
            >
              <q-icon name="check_circle" />
              <span>{{ audience }}</span>
            </div>
          </div>
        </div>
      </section>

      <section id="process" class="section process-section">
        <div class="container">
          <div class="section-heading section-heading--center" data-aos="fade-up">
            <span>Proces</span>
            <h2>Od prve poruke do objavljenog sajta bez nepotrebnog komplikovanja.</h2>
            <p>
              Proces držimo jednostavnim: dogovorimo cilj, napravimo strukturu, dizajniramo,
              implementiramo, objavimo i po potrebi dalje unapređujemo.
            </p>
          </div>

          <div class="process-grid">
            <article
              v-for="step in process"
              :key="step.title"
              class="process-card"
              data-aos="fade-up"
            >
              <div class="process-card__index">{{ step.index }}</div>
              <h3>{{ step.title }}</h3>
              <p>{{ step.text }}</p>
            </article>
          </div>
        </div>
      </section>

      <section class="section offer-section">
        <div class="wide-container">
          <div class="offer-card" data-aos="fade-up">
            <div class="offer-card__content">
              <span class="mini-label mini-label--dark">Ponuda po dogovoru</span>
              <h2>Ponudu formiramo prema cilju, obimu i realnim potrebama projekta.</h2>
              <p>
                Svaki sajt procenjujemo posebno, jer nije isto napraviti landing stranicu, redizajn
                postojećeg sajta, prezentaciju sa više stranica ili dodatne funkcionalnosti poput
                formi, mapa, analitike i integracija.
              </p>
            </div>

            <div class="offer-list">
              <div>
                <q-icon name="done" />
                Landing stranice za oglase i kampanje
              </div>
              <div>
                <q-icon name="done" />
                Redizajn postojećeg sajta
              </div>
              <div>
                <q-icon name="done" />
                Prezentacioni sajtovi za firme
              </div>
              <div>
                <q-icon name="done" />
                Kontakt forme, mape i integracije
              </div>
              <div>
                <q-icon name="done" />
                Pomoć oko domena, hostinga i objave
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" class="section contact-section">
        <div class="container contact-layout">
          <div class="contact-copy" data-aos="fade-right">
            <span class="mini-label">Kontakt</span>
            <h2>Pošaljite nam šta želite da napravimo ili link postojećeg sajta.</h2>
            <p>
              Možete poslati kratak opis biznisa, postojeći sajt ako ga imate i šta želite da
              unapredimo. Na osnovu toga dogovaramo pravac, obim i ponudu.
            </p>

            <div class="contact-direct">
              <a href="mailto:miloslazarevic410@gmail.com">
                <q-icon name="mail" />
                <span>miloslazarevic410@gmail.com</span>
              </a>
              <!--
              <a href="tel:+381600000000">
                <q-icon name="phone" />
                <span>+381 60 000 0000</span>
              </a>
              -->
            </div>
          </div>

          <q-form class="contact-form" data-aos="fade-left" @submit.prevent="submitForm">
            <q-input
              v-model="form.name"
              :disable="isSubmitting"
              borderless
              label="Ime i firma"
              class="input"
            />

            <q-input
              v-model="form.contact"
              :disable="isSubmitting"
              borderless
              label="Email ili telefon"
              class="input"
            />

            <q-input
              v-model="form.website"
              borderless
              :disable="isSubmitting"
              label="Link sajta, ako postoji"
              class="input"
            />

            <q-input
              v-model="form.message"
              borderless
              :disable="isSubmitting"
              type="textarea"
              autogrow
              label="Šta želite da napravimo?"
              class="input input--textarea"
            />

            <q-btn
              type="submit"
              unelevated
              rounded
              size="lg"
              class="btn-primary full-width"
              :loading="isSubmitting"
              :disable="isSubmitting"
              label="Pošalji upit"
            />

            <p class="form-note">
              Odgovaramo sa konkretnim predlogom pravca, obima i sledećih koraka.
            </p>
          </q-form>
        </div>
      </section>
    </main>

    <footer class="footer">
      <div class="container footer__inner">
        <button class="footer-brand" type="button" @click="scrollToSection('top')">
          <div class="brand__mark brand__mark--logo">
            <img src="/brand/ml-logo.png" alt="ML Web Studio logo" />
          </div>
          <span>ML Web Studio</span>
        </button>

        <p>Web dizajn, redizajn i prodajne stranice za male biznise.</p>
      </div>
    </footer>
  </q-page>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()

const isSubmitting = ref(false)
const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT

const form = reactive({
  name: '',
  contact: '',
  website: '',
  message: '',
})

const problems = [
  {
    icon: 'visibility_off',
    title: 'Slab prvi utisak',
    text: 'Ako sajt izgleda zastarelo ili nepregledno, korisnik često izgubi poverenje pre nego što pročita ponudu.',
  },
  {
    icon: 'phone_android',
    title: 'Loše iskustvo na telefonu',
    text: 'Većina posetilaca dolazi preko mobilnog uređaja. Zato stranica mora da bude brza, jasna i laka za korišćenje.',
  },
  {
    icon: 'call_missed_outgoing',
    title: 'Nejasan put do kontakta',
    text: 'Ako korisnik ne zna gde da klikne, šta dobija i kako da vas kontaktira, velika je šansa da ode dalje.',
  },
]

const services = [
  {
    number: '01',
    icon: 'web',
    title: 'Prodajne landing stranice',
    text: 'Pravimo stranice fokusirane na jednu jasnu ponudu, jak prvi utisak i konkretan poziv na akciju. Odlično za oglase, kampanje i promociju usluge.',
  },
  {
    number: '02',
    icon: 'auto_fix_high',
    title: 'Redizajn postojećeg sajta',
    text: 'Ako sajt već postoji, ali izgleda zastarelo, nepregledno ili ne radi dobro na telefonu, pravimo moderniju i prodajno jasniju verziju.',
  },
  {
    number: '03',
    icon: 'business_center',
    title: 'Prezentacioni sajtovi za firme',
    text: 'Pravimo sajtove koji jasno predstavljaju usluge, prednosti, lokaciju, galeriju, kontakt i sve informacije koje kupac treba da vidi.',
  },
  {
    number: '04',
    icon: 'phone_iphone',
    title: 'Mobilna optimizacija i UX sređivanje',
    text: 'Sređujemo raspored, čitljivost, CTA dugmad, sekcije i korisnički tok kako bi stranica bila lakša za korišćenje.',
  },
  {
    number: '05',
    icon: 'integration_instructions',
    title: 'Kontakt forme i integracije',
    text: 'Povezujemo kontakt forme, email slanje, mape, WhatsApp/Viber dugmad, analitiku i druge praktične elemente.',
  },
]

const audiences = [
  'Restorani i kafići',
  'Saloni lepote',
  'Klima servisi',
  'Majstori i lokalne usluge',
  'Stomatološke i druge ordinacije',
  'Apartmani i smeštaji',
  'Fitnes treneri',
  'Male firme i preduzetnici',
]

const process = [
  {
    index: '01',
    title: 'Kratak dogovor',
    text: 'Prvo definišemo šta sajt treba da postigne, kome se obraća i koju akciju korisnik treba da napravi.',
  },
  {
    index: '02',
    title: 'Struktura i sadržaj',
    text: 'Pravimo redosled sekcija, poruke, CTA dugmad i osnovnu prodajnu logiku stranice.',
  },
  {
    index: '03',
    title: 'Dizajn i izrada',
    text: 'Dizajn pretvaramo u brzu, modernu i responzivnu web stranicu spremnu za objavu.',
  },
  {
    index: '04',
    title: 'Objava i dorade',
    text: 'Povezujemo domen, hosting, kontakt formu i radimo finalne dorade pre puštanja sajta.',
  },
]

function scrollToSection(id) {
  const element = document.getElementById(id)
  if (!element) return

  const offset = 92
  const top = element.getBoundingClientRect().top + window.scrollY - offset

  window.scrollTo({
    top,
    behavior: 'smooth',
  })
}

async function submitForm() {
  if (!form.name.trim() || !form.contact.trim() || !form.message.trim()) {
    $q.notify({
      type: 'warning',
      message: 'Popunite ime, kontakt i kratku poruku.',
    })
    return
  }

  if (!formspreeEndpoint) {
    $q.notify({
      type: 'negative',
      message: 'Kontakt forma nije povezana. Nedostaje Formspree endpoint.',
    })
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
        sajt: form.website || 'Nije uneto',
        poruka: form.message,
        izvor: 'ML Web Studio landing stranica',
      }),
    })

    if (!response.ok) {
      throw new Error('Slanje forme nije uspelo')
    }

    $q.notify({
      type: 'positive',
      message: 'Upit je poslat. Javićemo vam se uskoro.',
    })

    form.name = ''
    form.contact = ''
    form.website = ''
    form.message = ''
  } catch (error) {
    console.log(error)
    $q.notify({
      type: 'negative',
      message: 'Došlo je do greške pri slanju. Pokušajte ponovo ili pošaljite email direktno.',
    })
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped lang="scss">
.page {
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
  color: #f8fafc;
  background:
    radial-gradient(circle at 12% 0%, rgba(59, 130, 246, 0.25), transparent 31rem),
    radial-gradient(circle at 86% 4%, rgba(124, 58, 237, 0.24), transparent 34rem),
    radial-gradient(circle at 52% 100%, rgba(219, 39, 119, 0.12), transparent 42rem),
    linear-gradient(180deg, #07111f 0%, #050816 44%, #07111f 100%);
}

.noise {
  position: fixed;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  opacity: 0.28;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.028) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.028) 1px, transparent 1px);
  background-size: 42px 42px;
  mask-image: linear-gradient(to bottom, black, transparent 86%);
}

.ambient {
  position: fixed;
  z-index: 0;
  border-radius: 999px;
  pointer-events: none;
  filter: blur(30px);
  opacity: 0.42;
}

.ambient--one {
  width: 340px;
  height: 340px;
  left: -130px;
  top: 120px;
  background: rgba(37, 99, 235, 0.5);
}

.ambient--two {
  width: 360px;
  height: 360px;
  right: -150px;
  top: 210px;
  background: rgba(124, 58, 237, 0.5);
}

.ambient--three {
  width: 240px;
  height: 240px;
  left: 45%;
  bottom: 80px;
  background: rgba(219, 39, 119, 0.32);
}

.container {
  position: relative;
  z-index: 2;
  width: min(1340px, calc(100% - 56px));
  margin: 0 auto;
}

.wide-container {
  position: relative;
  z-index: 2;
  width: min(1480px, calc(100% - 44px));
  margin: 0 auto;
}

button {
  font-family: inherit;
}

.nav {
  position: sticky;
  top: 14px;
  z-index: 30;
  width: min(1280px, calc(100% - 36px));
  margin: 14px auto 0;
  padding: 12px 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 999px;
  background: rgba(5, 8, 22, 0.72);
  border: 1px solid rgba(255, 255, 255, 0.13);
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(24px);
}

.brand,
.footer-brand {
  border: 0;
  background: transparent;
  display: flex;
  align-items: center;
  gap: 12px;
  color: white;
  text-decoration: none;
  cursor: pointer;
}

.brand__mark {
  width: 46px;
  height: 46px;
  display: grid;
  place-items: center;
  border-radius: 17px;
  color: white;
  font-weight: 950;
  letter-spacing: -0.07em;
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.25), transparent),
    linear-gradient(135deg, #2563eb, #7c3aed 52%, #db2777);
  box-shadow:
    0 18px 40px rgba(37, 99, 235, 0.36),
    inset 0 1px 0 rgba(255, 255, 255, 0.25);
}

.brand__text {
  display: grid;
  gap: 2px;
  text-align: left;

  strong {
    font-size: 15px;
    font-weight: 950;
    letter-spacing: -0.03em;
  }

  span {
    color: rgba(255, 255, 255, 0.56);
    font-size: 12px;
    font-weight: 700;
  }
}

.nav__links {
  display: flex;
  align-items: center;
  gap: 6px;

  button {
    border: 0;
    padding: 11px 15px;
    border-radius: 999px;
    color: rgba(255, 255, 255, 0.7);
    background: transparent;
    font-size: 14px;
    font-weight: 850;
    cursor: pointer;
    transition: 0.22s ease;

    &:hover {
      color: white;
      background: rgba(255, 255, 255, 0.08);
    }
  }
}

.nav__button {
  color: white;
  font-weight: 950;
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.18), transparent),
    linear-gradient(
      135deg,
      rgba(37, 99, 235, 0.92),
      rgba(124, 58, 237, 0.92) 58%,
      rgba(219, 39, 119, 0.9)
    );
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow:
    0 14px 32px rgba(37, 99, 235, 0.26),
    inset 0 1px 0 rgba(255, 255, 255, 0.22);
  transition: 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow:
      0 18px 42px rgba(37, 99, 235, 0.34),
      inset 0 1px 0 rgba(255, 255, 255, 0.25);
  }
}

.hero {
  position: relative;
  padding: 72px 0 54px;
}

.hero__grid {
  display: grid;
  grid-template-columns: minmax(0, 1.02fr) minmax(440px, 0.86fr);
  gap: 42px;
  align-items: center;
}

.hero__content {
  max-width: 850px;
}

.hero__badge,
.mini-label {
  width: fit-content;
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 9px 14px;
  border-radius: 999px;
  color: #dbeafe;
  font-weight: 900;
  font-size: 14px;
  background: rgba(59, 130, 246, 0.13);
  border: 1px solid rgba(147, 197, 253, 0.2);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.1),
    0 14px 32px rgba(37, 99, 235, 0.12);
}

h1 {
  max-width: 790px;
  margin: 26px 0 0;
  color: white;
  font-size: clamp(46px, 5.7vw, 82px);
  line-height: 0.92;
  letter-spacing: -0.078em;
  font-weight: 950;

  span {
    display: block;
    color: transparent;
    background: linear-gradient(135deg, #93c5fd 0%, #c4b5fd 36%, #f9a8d4 74%, #67e8f9 100%);
    background-size: 180% 180%;
    background-clip: text;
    -webkit-background-clip: text;
    animation: gradientText 7s ease-in-out infinite;
  }
}

.hero__lead {
  max-width: 690px;
  margin: 24px 0 0;
  color: rgba(255, 255, 255, 0.72);
  font-size: 18px;
  line-height: 1.72;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 28px;
}

.btn-primary {
  color: white;
  font-weight: 950;
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.22), transparent),
    linear-gradient(135deg, #2563eb, #7c3aed 52%, #db2777);
  box-shadow:
    0 22px 46px rgba(37, 99, 235, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.22);
  transition: 0.25s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow:
      0 28px 58px rgba(37, 99, 235, 0.38),
      inset 0 1px 0 rgba(255, 255, 255, 0.24);
  }
}

.btn-ghost {
  color: #e0ecff;
  font-weight: 950;
  border: 1px solid rgba(147, 197, 253, 0.24);
  background: linear-gradient(135deg, rgba(147, 197, 253, 0.1), rgba(255, 255, 255, 0.035));
  box-shadow:
    0 16px 36px rgba(0, 0, 0, 0.16),
    inset 0 1px 0 rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(16px);
  transition: 0.25s ease;

  &:hover {
    transform: translateY(-3px);
    color: white;
    background: linear-gradient(135deg, rgba(147, 197, 253, 0.16), rgba(255, 255, 255, 0.06));
    border-color: rgba(147, 197, 253, 0.38);
  }
}

.hero__chips {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 22px;

  div {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 11px 14px;
    border-radius: 999px;
    color: rgba(255, 255, 255, 0.78);
    font-weight: 850;
    font-size: 14px;
    background: rgba(255, 255, 255, 0.075);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .q-icon {
    color: #93c5fd;
    font-size: 19px;
  }
}

.hero__visual {
  display: flex;
  justify-content: center;
}

.showcase-card {
  position: relative;
  overflow: hidden;
  width: min(540px, 100%);
  padding: 18px;
  border-radius: 34px;
  background:
    radial-gradient(circle at top right, rgba(147, 197, 253, 0.16), transparent 20rem),
    linear-gradient(135deg, rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.045));
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow:
    0 38px 120px rgba(0, 0, 0, 0.42),
    inset 0 1px 0 rgba(255, 255, 255, 0.16);
  backdrop-filter: blur(26px);
  animation: floatCard 7s ease-in-out infinite;
}

.showcase-card__shine {
  position: absolute;
  right: -90px;
  bottom: -110px;
  width: 300px;
  height: 300px;
  border-radius: 999px;
  background: rgba(37, 99, 235, 0.36);
  filter: blur(34px);
  pointer-events: none;
}

.showcase-card__top {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  gap: 18px;
  align-items: flex-start;
  padding: 8px 4px 16px;

  span {
    display: block;
    margin-bottom: 6px;
    color: rgba(255, 255, 255, 0.56);
    font-size: 13px;
    font-weight: 800;
  }

  strong {
    display: block;
    color: white;
    font-size: 21px;
    line-height: 1.12;
    letter-spacing: -0.04em;
    font-weight: 950;
  }
}

.showcase-card__icon {
  width: 44px;
  height: 44px;
  display: grid;
  place-items: center;
  flex: 0 0 auto;
  border-radius: 16px;
  color: white;
  font-size: 22px;
  background: rgba(255, 255, 255, 0.1);
}

.showcase-card__status {
  position: relative;
  z-index: 2;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 12px;

  div {
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 9px 11px;
    border-radius: 999px;
    color: white;
    font-weight: 900;
    font-size: 12px;
    background: rgba(255, 255, 255, 0.09);
    border: 1px solid rgba(255, 255, 255, 0.12);
  }

  .q-icon {
    color: #93c5fd;
    font-size: 18px;
  }
}

.workflow {
  position: relative;
  z-index: 2;
  display: grid;
  gap: 10px;
}

.workflow__item {
  display: flex;
  gap: 14px;
  align-items: center;
  padding: 13px 14px;
  border-radius: 20px;
  color: white;
  background: rgba(255, 255, 255, 0.075);
  border: 1px solid rgba(255, 255, 255, 0.105);
  transition: 0.25s ease;

  &:hover {
    transform: translateX(5px);
    background: rgba(255, 255, 255, 0.1);
  }

  &--active {
    background: linear-gradient(135deg, rgba(37, 99, 235, 0.4), rgba(124, 58, 237, 0.26));
    border-color: rgba(147, 197, 253, 0.24);
  }

  strong {
    display: block;
    font-size: 15px;
    font-weight: 950;
  }

  span {
    display: block;
    margin-top: 4px;
    color: rgba(255, 255, 255, 0.62);
    font-size: 12.5px;
    line-height: 1.45;
  }
}

.workflow__icon {
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  flex: 0 0 auto;
  border-radius: 14px;
  color: #bfdbfe;
  font-size: 21px;
  background: rgba(255, 255, 255, 0.09);
}

.showcase-grid {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  gap: 10px;
  margin-top: 12px;
}

.showcase-grid__main,
.showcase-grid__box {
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.065);
}

.showcase-grid__main {
  min-height: 144px;
  padding: 17px;
  grid-row: span 2;
  border-radius: 22px;

  strong {
    display: block;
    color: white;
    font-size: 21px;
    line-height: 1;
    letter-spacing: -0.05em;
    font-weight: 950;
  }

  p {
    margin: 12px 0 0;
    color: rgba(255, 255, 255, 0.6);
    font-size: 13.5px;
    line-height: 1.6;
  }
}

.gradient-line {
  width: 86px;
  height: 8px;
  margin-bottom: 20px;
  border-radius: 999px;
  background: linear-gradient(90deg, #60a5fa, #c084fc, #f472b6);
  animation: widthPulse 3s ease-in-out infinite;
}

.showcase-grid__box {
  min-height: 68px;
  display: grid;
  place-items: center;
  text-align: center;
  border-radius: 20px;
  transition: 0.25s ease;

  &:hover {
    transform: translateY(-4px);
  }

  .q-icon {
    color: #93c5fd;
    font-size: 27px;
  }

  span {
    display: block;
    margin-top: 6px;
    color: white;
    font-weight: 900;
    font-size: 13px;
  }

  &--pink .q-icon {
    color: #f9a8d4;
  }
}

.showcase-card__bottom {
  position: relative;
  z-index: 2;
  display: flex;
  gap: 10px;
  align-items: center;
  margin-top: 10px;
  padding: 12px 14px;
  border-radius: 22px;
  background: rgba(0, 0, 0, 0.18);

  p {
    margin: 0;
    color: rgba(255, 255, 255, 0.64);
    font-size: 12px;
    line-height: 1.5;
  }
}

.live-dot {
  width: 9px;
  height: 9px;
  flex: 0 0 auto;
  border-radius: 999px;
  background: #22c55e;
  box-shadow: 0 0 0 7px rgba(34, 197, 94, 0.13);
  animation: pulseDot 1.8s ease-in-out infinite;
}

.intro-strip {
  position: relative;
  z-index: 2;
  padding: 8px 0 38px;
}

.strip-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 28px;
  padding: 26px 30px;
  border-radius: 34px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.13), rgba(255, 255, 255, 0.05));
  border: 1px solid rgba(255, 255, 255, 0.13);
  box-shadow: 0 28px 85px rgba(0, 0, 0, 0.24);

  span {
    display: block;
    margin-bottom: 8px;
    color: #93c5fd;
    font-weight: 950;
  }

  strong {
    display: block;
    max-width: 880px;
    color: white;
    font-size: clamp(22px, 3vw, 34px);
    line-height: 1.1;
    letter-spacing: -0.055em;
    font-weight: 950;
  }
}

.strip-button {
  flex: 0 0 auto;
  color: white;
  font-weight: 950;
  background: rgba(255, 255, 255, 0.095);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow:
    0 14px 34px rgba(0, 0, 0, 0.18),
    inset 0 1px 0 rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(18px);
  transition: 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.14);
    border-color: rgba(147, 197, 253, 0.3);
  }
}

.section {
  position: relative;
  z-index: 2;
  padding: 74px 0;
}

.section-heading {
  span {
    color: #93c5fd;
    font-weight: 950;
  }

  h2 {
    margin: 14px 0 0;
    color: white;
    font-size: clamp(34px, 4.1vw, 56px);
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
  max-width: 920px;
  margin: 0 auto 38px;
  text-align: center;
}

.section-heading--left {
  max-width: 560px;
}

.problem-section {
  padding-top: 36px;
}

.problem-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.problem-card {
  position: relative;
  overflow: hidden;
  min-height: 230px;
  padding: 24px;
  border-radius: 32px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.105), rgba(255, 255, 255, 0.04));
  border: 1px solid rgba(255, 255, 255, 0.115);
  box-shadow: 0 22px 70px rgba(0, 0, 0, 0.18);
  transition: 0.25s ease;

  &:before {
    content: '';
    position: absolute;
    inset: -1px;
    opacity: 0;
    border-radius: inherit;
    background: radial-gradient(circle at top left, rgba(96, 165, 250, 0.3), transparent 16rem);
    transition: 0.25s ease;
  }

  &:hover {
    transform: translateY(-8px);
    border-color: rgba(147, 197, 253, 0.26);
  }

  &:hover:before {
    opacity: 1;
  }

  h3,
  p,
  .problem-card__icon {
    position: relative;
    z-index: 2;
  }

  h3 {
    margin: 22px 0 12px;
    color: white;
    font-size: 25px;
    line-height: 1.08;
    letter-spacing: -0.045em;
    font-weight: 950;
  }

  p {
    margin: 0;
    color: rgba(255, 255, 255, 0.62);
    line-height: 1.7;
  }
}

.problem-card__icon {
  width: 58px;
  height: 58px;
  display: grid;
  place-items: center;
  border-radius: 20px;
  color: white;
  font-size: 28px;
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.23), transparent),
    linear-gradient(135deg, #2563eb, #7c3aed);
  box-shadow: 0 18px 40px rgba(37, 99, 235, 0.24);
}

.services-shell {
  padding: 56px 0;
  border-radius: 48px;
  background:
    radial-gradient(circle at 20% 10%, rgba(96, 165, 250, 0.14), transparent 34rem),
    radial-gradient(circle at 90% 20%, rgba(219, 39, 119, 0.12), transparent 30rem),
    rgba(255, 255, 255, 0.035);
  border: 1px solid rgba(255, 255, 255, 0.07);
}

.services-layout {
  display: grid;
  grid-template-columns: 0.82fr 1.18fr;
  gap: 58px;
  align-items: start;
}

.sticky-heading {
  position: sticky;
  top: 130px;

  .btn-primary {
    margin-top: 30px;
  }
}

.service-stack {
  display: grid;
  gap: 16px;
}

.service-row {
  display: grid;
  grid-template-columns: 74px 1fr;
  gap: 20px;
  padding: 25px;
  border-radius: 34px;
  background: rgba(255, 255, 255, 0.075);
  border: 1px solid rgba(255, 255, 255, 0.115);
  transition: 0.25s ease;

  &:hover {
    transform: translateX(8px);
    background: rgba(255, 255, 255, 0.105);
    border-color: rgba(147, 197, 253, 0.25);
  }
}

.service-row__number {
  color: rgba(255, 255, 255, 0.23);
  font-size: 34px;
  line-height: 1;
  font-weight: 950;
  letter-spacing: -0.07em;
}

.service-row__top {
  display: flex;
  gap: 12px;
  align-items: center;

  .q-icon {
    color: #93c5fd;
    font-size: 27px;
  }

  h3 {
    margin: 0;
    color: white;
    font-size: 25px;
    line-height: 1.1;
    letter-spacing: -0.045em;
    font-weight: 950;
  }
}

.service-row__content p {
  margin: 12px 0 0;
  color: rgba(255, 255, 255, 0.62);
  line-height: 1.72;
}

.approach-card {
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 36px;
  align-items: center;
  padding: 46px;
  border-radius: 48px;
  background:
    radial-gradient(circle at top right, rgba(147, 197, 253, 0.24), transparent 30rem),
    radial-gradient(circle at bottom left, rgba(236, 72, 153, 0.12), transparent 28rem),
    linear-gradient(135deg, rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.05));
  border: 1px solid rgba(255, 255, 255, 0.145);
  box-shadow: 0 34px 110px rgba(0, 0, 0, 0.3);

  h2 {
    margin: 18px 0 0;
    color: white;
    font-size: clamp(36px, 4.1vw, 58px);
    line-height: 0.97;
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

.approach-points {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-top: 30px;

  div {
    display: flex;
    gap: 10px;
    align-items: center;
    padding: 14px;
    border-radius: 20px;
    color: white;
    font-weight: 850;
    background: rgba(255, 255, 255, 0.075);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .q-icon {
    color: #93c5fd;
    font-size: 22px;
  }
}

.approach-visual {
  min-height: 400px;
  display: grid;
  place-items: center;
}

.orbit {
  position: relative;
  width: min(390px, 100%);
  aspect-ratio: 1;
}

.orbit__ring {
  position: absolute;
  inset: 0;
  border-radius: 999px;
  border: 1px dashed rgba(147, 197, 253, 0.24);
  animation: rotateSlow 20s linear infinite;
}

.orbit__center,
.orbit__item {
  position: absolute;
  display: grid;
  place-items: center;
  text-align: center;
  color: white;
  border-radius: 999px;
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.34), rgba(124, 58, 237, 0.24));
  border: 1px solid rgba(147, 197, 253, 0.22);
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.26);

  .q-icon {
    color: #bfdbfe;
  }

  span {
    display: block;
    margin-top: 5px;
    font-weight: 950;
  }
}

.orbit__center {
  inset: 50%;
  width: 134px;
  height: 134px;
  transform: translate(-50%, -50%);
  animation: orbitCenterPulse 4.8s ease-in-out infinite;

  .q-icon {
    font-size: 34px;
  }
}

.orbit__item {
  width: 106px;
  height: 106px;

  .q-icon {
    font-size: 28px;
  }

  span {
    font-size: 13px;
  }
}

.orbit__item--one {
  left: 50%;
  top: -53px;
  margin-left: -53px;
  animation: orbitBobOne 5.5s ease-in-out infinite;
}

.orbit__item--two {
  right: -53px;
  top: 50%;
  margin-top: -53px;
  animation: orbitBobTwo 5.9s ease-in-out infinite;
}

.orbit__item--three {
  left: -53px;
  top: 50%;
  margin-top: -53px;
  animation: orbitBobThree 6.2s ease-in-out infinite;
}

@keyframes orbitCenterPulse {
  0%,
  100% {
    transform: translate(-50%, -50%) scale(1);
    box-shadow: 0 24px 70px rgba(0, 0, 0, 0.26);
  }
  50% {
    transform: translate(-50%, -50%) scale(1.05);
    box-shadow: 0 30px 90px rgba(37, 99, 235, 0.2);
  }
}

@keyframes orbitBobOne {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes orbitBobTwo {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(8px);
  }
}

@keyframes orbitBobThree {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-7px);
  }
}

.audience-grid {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
}

.audience-pill {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px 18px;
  border-radius: 999px;
  color: white;
  font-weight: 900;
  background: rgba(255, 255, 255, 0.085);
  border: 1px solid rgba(255, 255, 255, 0.12);
  transition: 0.22s ease;

  &:hover {
    transform: translateY(-4px);
    background: rgba(255, 255, 255, 0.12);
  }

  .q-icon {
    color: #93c5fd;
    font-size: 21px;
  }
}

.process-section {
  padding-bottom: 58px;
}

.process-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.process-card {
  position: relative;
  overflow: hidden;
  min-height: 245px;
  padding: 24px;
  border-radius: 34px;
  background: rgba(255, 255, 255, 0.075);
  border: 1px solid rgba(255, 255, 255, 0.115);
  transition: 0.25s ease;

  &:after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    opacity: 0;
    transition: 0.25s ease;
    background: radial-gradient(circle at top right, rgba(96, 165, 250, 0.24), transparent 16rem);
  }

  &:hover {
    transform: translateY(-7px);
  }

  &:hover:after {
    opacity: 1;
  }

  h3,
  p,
  .process-card__index {
    position: relative;
    z-index: 2;
  }

  h3 {
    margin: 34px 0 12px;
    color: white;
    font-size: 25px;
    line-height: 1.08;
    letter-spacing: -0.05em;
    font-weight: 950;
  }

  p {
    margin: 0;
    color: rgba(255, 255, 255, 0.62);
    line-height: 1.7;
  }
}

.process-card__index {
  color: rgba(255, 255, 255, 0.24);
  font-size: 40px;
  line-height: 1;
  font-weight: 950;
  letter-spacing: -0.075em;
}

.offer-section {
  padding-top: 42px;
}

.offer-card {
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 0.72fr;
  gap: 34px;
  align-items: center;
  padding: 38px;
  border-radius: 40px;
  color: white;
  background:
    radial-gradient(circle at 18% 10%, rgba(96, 165, 250, 0.18), transparent 28rem),
    radial-gradient(circle at 88% 18%, rgba(216, 180, 254, 0.16), transparent 28rem),
    linear-gradient(135deg, rgba(255, 255, 255, 0.13), rgba(255, 255, 255, 0.045));
  border: 1px solid rgba(255, 255, 255, 0.14);
  box-shadow:
    0 34px 110px rgba(0, 0, 0, 0.32),
    inset 0 1px 0 rgba(255, 255, 255, 0.16);
  backdrop-filter: blur(24px);

  &:before {
    content: '';
    position: absolute;
    inset: auto -120px -140px auto;
    width: 340px;
    height: 340px;
    border-radius: 999px;
    background: rgba(124, 58, 237, 0.28);
    filter: blur(36px);
    pointer-events: none;
  }

  &:after {
    content: '';
    position: absolute;
    left: -120px;
    top: -140px;
    width: 320px;
    height: 320px;
    border-radius: 999px;
    background: rgba(37, 99, 235, 0.22);
    filter: blur(36px);
    pointer-events: none;
  }

  h2 {
    position: relative;
    z-index: 2;
    margin: 18px 0 0;
    color: white;
    font-size: clamp(34px, 3.9vw, 54px);
    line-height: 0.98;
    letter-spacing: -0.078em;
    font-weight: 950;
  }

  p {
    position: relative;
    z-index: 2;
    max-width: 720px;
    margin: 20px 0 0;
    color: rgba(255, 255, 255, 0.66);
    font-size: 17px;
    line-height: 1.75;
  }
}
.offer-card__content {
  position: relative;
  z-index: 2;
}

.mini-label--dark {
  position: relative;
  z-index: 2;
  color: #dbeafe;
  background: rgba(59, 130, 246, 0.13);
  border-color: rgba(147, 197, 253, 0.2);
}

.offer-list {
  position: relative;
  z-index: 2;
  display: grid;
  gap: 12px;

  div {
    display: flex;
    align-items: center;
    gap: 11px;
    padding: 15px 17px;
    border-radius: 19px;
    color: rgba(255, 255, 255, 0.9);
    font-weight: 900;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.055));
    border: 1px solid rgba(255, 255, 255, 0.12);
    box-shadow:
      0 14px 34px rgba(0, 0, 0, 0.14),
      inset 0 1px 0 rgba(255, 255, 255, 0.12);
    transition: 0.22s ease;

    &:hover {
      transform: translateX(5px);
      background: linear-gradient(135deg, rgba(96, 165, 250, 0.16), rgba(255, 255, 255, 0.07));
      border-color: rgba(147, 197, 253, 0.24);
    }
  }

  .q-icon {
    color: #93c5fd;
    font-size: 22px;
    flex: 0 0 auto;
  }
}

.contact-section {
  padding-top: 80px;
}

.contact-layout {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 48px;
  align-items: start;
}

.contact-copy {
  h2 {
    margin: 18px 0 0;
    color: white;
    font-size: clamp(40px, 5vw, 68px);
    line-height: 0.94;
    letter-spacing: -0.08em;
    font-weight: 950;
  }

  p {
    margin: 22px 0 0;
    color: rgba(255, 255, 255, 0.66);
    font-size: 18px;
    line-height: 1.75;
  }
}

.contact-direct {
  display: grid;
  gap: 12px;
  margin-top: 30px;

  a {
    width: fit-content;
    display: inline-flex;
    align-items: center;
    gap: 12px;
    padding: 14px 16px;
    border-radius: 999px;
    color: white;
    text-decoration: none;
    font-weight: 900;
    background: rgba(255, 255, 255, 0.085);
    border: 1px solid rgba(255, 255, 255, 0.12);
    transition: 0.22s ease;

    &:hover {
      transform: translateX(5px);
      background: rgba(255, 255, 255, 0.13);
    }
  }

  .q-icon {
    color: #93c5fd;
    font-size: 22px;
  }
}

.contact-form {
  padding: 18px;
  border-radius: 36px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.145), rgba(255, 255, 255, 0.05));
  border: 1px solid rgba(255, 255, 255, 0.145);
  box-shadow: 0 34px 110px rgba(0, 0, 0, 0.32);
  backdrop-filter: blur(24px);
}

.input {
  margin-bottom: 12px;
  padding: 4px 16px;
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.95);

  :deep(.q-field__label) {
    color: rgba(15, 23, 42, 0.58);
    font-weight: 700;
  }

  :deep(.q-field__native) {
    color: #0f172a;
    font-weight: 750;
  }
}

.input--textarea {
  :deep(textarea) {
    min-height: 120px;
  }
}

.form-note {
  margin: 16px 6px 0;
  color: rgba(255, 255, 255, 0.52);
  font-size: 13px;
  line-height: 1.6;
  text-align: center;
}

.footer {
  position: relative;
  z-index: 2;
  padding: 34px 0 44px;
  color: rgba(255, 255, 255, 0.56);
}

.footer__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 22px;
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.09);

  p {
    margin: 0;
  }
}

.footer-brand {
  span {
    color: white;
    font-weight: 950;
  }
}

@keyframes floatCard {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }

  50% {
    transform: translateY(-10px) rotate(0.35deg);
  }
}

@keyframes gradientText {
  0%,
  100% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }
}

@keyframes widthPulse {
  0%,
  100% {
    width: 86px;
  }

  50% {
    width: 126px;
  }
}

@keyframes pulseDot {
  0%,
  100% {
    box-shadow: 0 0 0 7px rgba(34, 197, 94, 0.13);
  }

  50% {
    box-shadow: 0 0 0 13px rgba(34, 197, 94, 0.04);
  }
}

@keyframes rotateSlow {
  from {
    rotate: 0deg;
  }

  to {
    rotate: 360deg;
  }
}

@media (max-width: 1180px) {
  .hero__grid,
  .services-layout,
  .approach-card,
  .offer-card,
  .contact-layout {
    grid-template-columns: 1fr;
  }

  .hero__content {
    max-width: 900px;
  }

  h1 {
    max-width: 900px;
  }

  .hero__visual {
    justify-content: center;
  }

  .sticky-heading {
    position: static;
  }

  .problem-grid {
    grid-template-columns: 1fr;
  }

  .process-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .approach-visual {
    min-height: 360px;
  }
}

@media (max-width: 760px) {
  .container {
    width: min(100% - 28px, 1340px);
  }

  .wide-container {
    width: min(100% - 20px, 1480px);
  }

  .nav {
    top: 10px;
    border-radius: 26px;
  }

  .nav__links,
  .nav__button {
    display: none;
  }

  .brand__text span {
    display: none;
  }

  .hero {
    padding: 48px 0 42px;
  }

  h1 {
    font-size: clamp(42px, 13vw, 60px);
    line-height: 0.94;
    letter-spacing: -0.062em;
  }

  .hero__lead {
    font-size: 16.5px;
  }

  .hero__actions {
    .q-btn {
      width: 100%;
    }
  }

  .hero__chips {
    div {
      width: 100%;
    }
  }

  .showcase-card,
  .approach-card,
  .offer-card,
  .contact-form,
  .strip-card,
  .services-shell {
    border-radius: 28px;
  }

  .showcase-card {
    padding: 15px;
  }

  .showcase-card__status {
    div {
      width: 100%;
    }
  }

  .workflow__item {
    align-items: flex-start;
  }

  .showcase-grid {
    grid-template-columns: 1fr;
  }

  .showcase-grid__main {
    grid-row: auto;
  }

  .section {
    padding: 56px 0;
  }

  .intro-strip {
    padding-top: 6px;
  }

  .strip-card {
    align-items: flex-start;
    flex-direction: column;
    padding: 22px;
  }

  .strip-button {
    width: 100%;
  }

  .section-heading h2,
  .approach-card h2,
  .offer-card h2,
  .contact-copy h2 {
    letter-spacing: -0.055em;
  }

  .services-shell {
    padding: 30px 0;
  }

  .service-row {
    grid-template-columns: 1fr;
  }

  .service-row:hover {
    transform: translateY(-4px);
  }

  .approach-card,
  .offer-card {
    padding: 26px;
  }

  .approach-points {
    grid-template-columns: 1fr;
  }

  .approach-visual {
    min-height: 300px;
  }

  .orbit {
    width: 270px;
  }

  .orbit__center {
    width: 100px;
    height: 100px;
  }

  .orbit__item {
    width: 82px;
    height: 82px;
  }

  .orbit__item--one {
    top: -41px;
    margin-left: -41px;
  }

  .orbit__item--two {
    right: -41px;
    margin-top: -41px;
  }

  .orbit__item--three {
    left: -41px;
    margin-top: -41px;
  }

  .process-grid {
    grid-template-columns: 1fr;
  }

  .process-card {
    min-height: auto;
  }

  .footer__inner {
    align-items: flex-start;
    flex-direction: column;
  }
}
.brand__mark {
  width: 50px;
  height: 50px;
}
.brand__mark--logo {
  padding: 0;
  overflow: hidden;
  background: transparent !important;
  border: 1px solid rgba(255, 255, 255, 0.14);
  box-shadow:
    0 14px 34px rgba(37, 99, 235, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.12);
}

.brand__mark--logo img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  border-radius: inherit;
}
</style>
