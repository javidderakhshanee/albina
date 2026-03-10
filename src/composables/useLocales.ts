import { computed, watch, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRtl, useLocale as useVuetifyLocale } from 'vuetify'
import { type Locale, isRTLLocale, localesInfo } from '@/locals'

export function useLocale() {
  const { locale, t } = useI18n()

  const { isRtl: vuetifyRtl } = useRtl()

  const vuetifyLocale = useVuetifyLocale()

  const currentLocale = computed<Locale>(() => locale.value as Locale)
  const isRTL = computed<boolean>(() => isRTLLocale(currentLocale.value))

  const currentLocaleInfo = computed(() => {
    return localesInfo.find((l) => l.code === currentLocale.value)
  })

  const changeLocale = (lang: Locale): void => {
    locale.value = lang
    localStorage.setItem('app-locale', lang)
    updateDirection(lang)
    document.location.reload()
  }

  const updateDirection = (lang: Locale): void => {
    const dir = isRTLLocale(lang) ? 'rtl' : 'ltr'
    const isRtl = isRTLLocale(lang)

    document.dir = dir
    document.documentElement.lang = lang
    document.documentElement.setAttribute('dir', dir)

    vuetifyRtl.value = isRtl

    vuetifyLocale.current.value = lang

    document.body.style.direction = dir

    const vApp = document.querySelector('.v-application')
    if (vApp) {
      if (isRtl) {
        vApp.classList.add('v-locale--is-rtl')
      } else {
        vApp.classList.remove('v-locale--is-rtl')
      }
    }
  }

  watch(
    currentLocale,
    (newLocale) => {
      updateDirection(newLocale)
    },
    { immediate: true },
  )

  onMounted(() => {
    updateDirection(currentLocale.value)
  })

  return {
    t,
    locale: currentLocale,
    isRTL,
    currentLocaleInfo,
    availableLocales: localesInfo,
    changeLocale
  }
}
