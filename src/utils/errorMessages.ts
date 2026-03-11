import { messages, type Locale, type LocaleInfo } from '@/locals'

type ErrorKey = keyof typeof messages.en.errors
type MsgKey = keyof typeof messages.en.MSG

export const getErrorMessage = (key: ErrorKey): string => {
  const local_inf =
    localStorage.getItem('app-locale') ||
    JSON.stringify({ code: 'en', dir: 'ltr', name: 'EN', nativeName: 'EN' } as LocaleInfo)

  const locale = (JSON.parse(local_inf) as LocaleInfo).code
  const translations = messages[locale]

  return translations.errors[key]
}

export const getMsgTranslation = (messageKey: string): string => {
  const local_inf =
    localStorage.getItem('app-locale') ||
    JSON.stringify({ code: 'en', dir: 'ltr', name: 'EN', nativeName: 'EN' } as LocaleInfo)

  const locale = (JSON.parse(local_inf) as LocaleInfo).code
  const translations = messages[locale]

  if (messageKey in translations.MSG) {
    return translations.MSG[messageKey as MsgKey]
  }

  return messageKey
}
