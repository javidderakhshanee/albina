import { createVuetify } from 'vuetify'
import type { ThemeDefinition } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

import { en, ar } from 'vuetify/locale'

const lightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: '#645caa',

    background: '#f3f3f3',
    'second-background': '#fefefe',

    foreground: '#000000',
    'second-foreground': '#666666',

    'bg-green': '#E8F5E9',
    'text-green': '#2E7D32',
    'bg-red': '#FFEBEE',
    'text-red': '#C62828',
  },
}

const darkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    primary: '#BB86FC',

    background: '#121212',
    'second-background': '#2C2C2C',

    foreground: '#FFFFFF',
    'second-foreground': '#B0B0B0',

    'bg-green': '#1B5E20',
    'text-green': '#81C784',
    'bg-red': '#B71C1C',
    'text-red': '#EF5350',
  },
}

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'lightTheme',
    themes: {
      lightTheme,
      darkTheme,
    },
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  locale: {
    locale: 'en',
    fallback: 'en',
    messages: { en, ar },
    rtl: { en: false, ar: true, ku: true },
  },
})
