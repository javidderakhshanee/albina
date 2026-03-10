<script setup lang="ts">
import Breadcrumber from '@/components/Breadcrumber.vue'

import { onMounted, watch } from 'vue'
import { usePartners } from '@/composables/usePartners'
import { useHead } from '@vueuse/head'

const { fetchPartnersById, partnerById, loadingPartnersById } = usePartners()
const props = defineProps({
  id: String,
})

onMounted(async () => {
  await fetchPartnersById(props.id || '')
  setTitles()
})

watch(
  () => props.id,
  async (newValue, oldValue) => {
    await fetchPartnersById(newValue || '')
    setTitles()
  },
)
const setTitles = () => {
  document.title = partnerById.value?.partner.title || ''

  useHead({
    title: partnerById.value?.partner.title,
    meta: [
      {
        name: 'description',
        content: partnerById.value?.partner.title || '',
      },
      {
        property: 'og:title',
        content: partnerById.value?.partner.title,
      },
      {
        property: 'og:description',
        content: partnerById.value?.partner.title || '',
      },
    ],
  })
}
</script>

<template>
  <Breadcrumber Title="Partner Details" />

  <!-- start: Careers Section -->
  <section class="tj-careers-details section-gap">
    <div class="container">
      <div class="row rg-50">
        <div class="col-lg-8">
          <div class="tj-post-wrapper">
            <div class="tj-post-single-post">
              <!-- top content -->
              <div class="tj-careers-top mb-30">
                <div class="tj-careers-top-icon">
                  <i class="tji-manage"></i>
                </div>
                <div class="tj-careers-top-content">
                  <h4 class="tj-careers-top-title text-anim">{{ partnerById?.partner.title }}</h4>
                  <span class="location"
                    ><i class="tji-location"></i>{{ partnerById?.partner.location }}</span
                  >
                </div>
              </div>
              <!-- content -->
              <div class="tj-entry-content" v-html="partnerById?.partner.htmlBody"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- end: Careers Section -->
</template>
