import { messages, type Locale } from '@/locals'

type ErrorKey = keyof typeof messages.en.errors
type MsgKey = keyof typeof messages.en.MSG

export const getErrorMessage = (key: ErrorKey): string => {
  const locale = (localStorage.getItem('app-locale') || 'en') as Locale
  const translations = messages[locale]

  return translations.errors[key]
}

export const getMsgTranslation = (messageKey: string): string => {
  const locale = (localStorage.getItem('app-locale') || 'en') as Locale
  const translations = messages[locale]

  if (messageKey in translations.MSG) {
    return translations.MSG[messageKey as MsgKey]
  }

  return messageKey
}
