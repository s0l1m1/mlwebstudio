import { boot } from 'quasar/wrappers'
import { createI18n } from 'vue-i18n'
import { messages } from 'src/i18n/messages'

const STORAGE_KEY = 'mlws-locale'
const defaultLocale = 'sr'

function resolveLocale() {
  if (typeof window === 'undefined') {
    return defaultLocale
  }

  const saved = window.localStorage.getItem(STORAGE_KEY)
  return saved === 'en' || saved === 'sr' ? saved : defaultLocale
}

const i18n = createI18n({
  legacy: false,
  locale: resolveLocale(),
  fallbackLocale: defaultLocale,
  messages,
})

export default boot(({ app }) => {
  app.use(i18n)
})

export { i18n, STORAGE_KEY, defaultLocale }
