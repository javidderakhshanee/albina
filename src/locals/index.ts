import en from './en'
import ar from './ar'
import krd from './krd'

export const messages = {
    en,
    ar,
    krd,
}

export type MessageSchema = typeof en
export type Locale = keyof typeof messages

export const rtlLocales: Locale[] = ['en', 'ar', 'krd']

export const isRTLLocale = (locale: Locale): boolean => {
    return rtlLocales.includes(locale)
}

export interface LocaleInfo {
    code: Locale
    name: string
    nativeName: string
    dir: 'rtl' | 'ltr'
}

export const localesInfo: LocaleInfo[] = [
    {
        code: 'en',
        name: 'English',
        nativeName: 'English',
        dir: 'ltr',
    },
    {
        code: 'ar',
        name: 'Arabic',
        nativeName: 'العربية',
        dir: 'rtl',
    },
    {
        code: 'krd',
        name: 'Kurdish',
        nativeName: 'کوردی',
        dir: 'rtl',
    },
]

