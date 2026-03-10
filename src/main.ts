import { createApp } from 'vue'
import i18n from './i18n'

// Vuetify
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import vuetify from './plugins/vuetify'
import { createHead } from '@vueuse/head'

import App from './App.vue'

import router from './router'

const app = createApp(App)
const head = createHead()
router.afterEach((to) => {
  document.title = `${to.meta.title as string} | Al-Bina Al-Markazy`
})
app.use(router)
app.use(vuetify)
app.use(i18n)
app.use(head)
app.mount('#app')
