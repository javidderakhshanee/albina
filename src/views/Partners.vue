<script setup lang="ts">
import Breadcrumber from '@/components/Breadcrumber.vue'

import { usePartners } from '@/composables/usePartners'
import { onMounted } from 'vue'

const { fetchPartnersList, loadingPartnersList, partnerListData } = usePartners()

onMounted(async () => {
  await fetchPartnersList()
})
</script>

<template>
  <Breadcrumber Title="Partners" />

  <!-- start: About Section -->
  <section class="tj-about-section-3 section-gap section-gap-x">
    <div class="container-fluid client-container-2 gap-top">
      <div class="row">
        <div class="col-12">
          <div class="swiper client-slider client-slider-3">
            <div class="swiper-wrapper">
              <div
                class="swiper-slide client-item"
                v-for="partner in partnerListData?.partners"
                :key="partner.id"
              >
                <RouterLink :to="`/PartnerDetails/${partner.id}`" class="client-logo">
                  <img :src="partner.imageUrl || ''" :alt="partner.title" />
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-shape-1">
      <img src="/images/shape/pattern-2.svg" alt="" />
    </div>
    <div class="bg-shape-2">
      <img src="/images/shape/pattern-3.svg" alt="" />
    </div>
  </section>
  <!-- end: About Section -->
</template>
