<script setup lang="ts">
import SearchPopup from './components/Layout/SearchPopup.vue'
import Offconvas from './components/Layout/Offconvas.vue'
import HamburgerMenu from './components/Layout/HamburgerMenu.vue'
import HeaderArea1 from './components/Layout/HeaderArea1.vue'
import HeaderArea2 from './components/Layout/HeaderArea2.vue'
import AppFooter from './components/Layout/AppFooter.vue'
import { useHead } from '@vueuse/head'
import { useGlobalData } from '@/composables/useGlobalData'
import { onMounted } from 'vue'

const { fetchGlobalData, globalData } = useGlobalData()

onMounted(async () => {
  await fetchGlobalData()
  useHead({
    title: globalData.value?.meta.title,
    meta: [
      {
        name: 'description',
        content: globalData.value?.meta.description || '',
      },
      {
        name: 'keywords',
        content: globalData.value?.meta.keywords || '',
      },
      {
        property: 'og:title',
        content: globalData.value?.meta.title,
      },
      {
        property: 'og:description',
        content: globalData.value?.meta.description || '',
      },
      {
        name: 'robots',
        content: 'index, follow',
      },
      {
        property: 'og:site_name',
        content: globalData.value?.meta.title,
      },
      {
        name: 'author',
        content: 'Avesta Company',
      },
    ],
  })
})
</script>

<template>
  <v-app>
    <SearchPopup />

    <Offconvas />

    <HamburgerMenu />

    <HeaderArea1 />

    <HeaderArea2 />

    <div id="smooth-wrapper">
      <div id="smooth-content">
        <main id="primary" class="site-main">
          <div class="space-for-header"></div>
          <v-main><router-view /></v-main>
        </main>

        <AppFooter />
      </div>
    </div>
  </v-app>
</template>

<style scoped></style>
