<script setup lang="ts">
import Breadcrumber from '@/components/Breadcrumber.vue'

import { onMounted, watch } from 'vue'
import { useServices } from '@/composables/useServices'
import { useHead } from '@vueuse/head'

const { fetchServicesById, serviceById, loadingServicesById } = useServices()
const props = defineProps({
  id: String,
})

onMounted(async () => {
  await fetchServicesById(props.id || '')
  setTitles()
})

watch(
  () => props.id,
  async (newValue, oldValue) => {
    await fetchServicesById(newValue || '')
    setTitles()
  },
)
const setTitles = () => {
  document.title = serviceById.value?.service.title || ''

  useHead({
    title: serviceById.value?.service.title,
    meta: [
      {
        name: 'description',
        content: serviceById.value?.service.title || '',
      },
      {
        property: 'og:title',
        content: serviceById.value?.service.title,
      },
      {
        property: 'og:description',
        content: serviceById.value?.service.title || '',
      },
    ],
  })
}
</script>
<template>
  <Breadcrumber :Title="serviceById?.service.title || 'Service Details'" />

  <!-- start: Blog Section -->
  <section class="tj-blog-section section-gap slidebar-stickiy-container">
    <div class="container">
      <div class="row row-gap-5">
        <div class="col-lg-8">
          <div class="post-details-wrapper">
            <div class="blog-images wow fadeInUp" data-wow-delay=".1s">
              <img :src="serviceById?.service.imageUrl || ''" :alt="serviceById?.service.title" />
            </div>
            <h2 class="title title-anim">
              {{ serviceById?.service.title }}
            </h2>
            <div class="blog-text" v-html="serviceById?.service.htmlBody"></div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="tj-main-sidebar slidebar-stickiy">
            <div class="tj-sidebar-widget service-categories wow fadeInUp" data-wow-delay=".1s">
              <h4 class="widget-title">More services</h4>
              <ul>
                <li v-for="service in serviceById?.relatedServices" :key="service.id">
                  <RouterLink :to="`/ServiceDetails/${service.id}`">
                    {{ service.title }}
                    <span class="icon">
                      <i class="tji-arrow-right"></i>
                    </span>
                  </RouterLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- end: Blog Section -->
</template>
