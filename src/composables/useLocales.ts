import { computed, watch, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRtl, useLocale as useVuetifyLocale } from 'vuetify'
import { type Locale, type LocaleInfo } from '@/locals'
import { useGlobalData } from '@/composables/useGlobalData'
const { supportedLocales } = useGlobalData()

export function useLocale() {
  const { locale, t } = useI18n()

  const { isRtl: vuetifyRtl } = useRtl()

  const vuetifyLocale = useVuetifyLocale()
  const defaultLang = { code: 'en', dir: 'ltr', name: 'EN', nativeName: 'EN' } as LocaleInfo
  const selectedLocale = ref<LocaleInfo | null>(null)
  const currentLocale = computed<Locale>(() => selectedLocale.value?.code as Locale)
  const isRTL = computed<boolean>(() => selectedLocale.value?.dir === 'rtl')

  const changeLocale = (ll: LocaleInfo): void => {
    selectedLocale.value = ll
    locale.value = ll.code
    localStorage.setItem('app-locale', JSON.stringify(ll))
    updateDirection(ll)
    document.location.reload()
  }

  const updateDirection = (ll: LocaleInfo): void => {
    document.dir = ll.dir
    document.documentElement.lang = ll.code
    document.documentElement.setAttribute('dir', ll.dir)
    const isRtl = ll.dir === 'rtl'
    vuetifyRtl.value = isRtl
    vuetifyLocale.current.value = ll.code

    document.body.style.direction = ll.dir

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
    selectedLocale,
    (newLocale) => {
      updateDirection(selectedLocale.value || defaultLang)
    },
    { immediate: true },
  )

  onMounted(() => {
    const local_inf = localStorage.getItem('app-locale') || JSON.stringify(defaultLang)
    const ll = JSON.parse(local_inf) as LocaleInfo
    locale.value = ll.code
    selectedLocale.value = ll
    updateDirection(selectedLocale.value)
  })

  return {
    t,
    locale: currentLocale,
    isRTL,
    changeLocale,
  }
}
