import en from './en'
import ar from './ar'
import ku from './ku'

export const messages = {
  en,
  ar,
  ku,
}

export type MessageSchema = typeof en
export type Locale = keyof typeof messages

export const rtlLocales: Locale[] = ['en', 'ar', 'ku']

export interface LocaleInfo {
  code: Locale
  name: string
  nativeName: string
  dir: 'rtl' | 'ltr'
}
