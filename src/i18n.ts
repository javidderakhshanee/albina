import { createI18n } from 'vue-i18n'
import { messages, type MessageSchema, type Locale } from './locals'

const savedLocale = (localStorage.getItem('app-locale') as Locale) || 'en'

const i18n = createI18n<[MessageSchema], Locale>({
    legacy: false,
    locale: savedLocale,
    fallbackLocale: 'en',
    messages,
})

export default i18n
