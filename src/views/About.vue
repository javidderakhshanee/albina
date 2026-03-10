<script setup lang="ts">
import Breadcrumber from '@/components/Breadcrumber.vue'

import { useGlobalData } from '@/composables/useGlobalData'
import { onMounted } from 'vue'

const { fetchGlobalData, loadingGlobalData, globalData } = useGlobalData()

onMounted(async () => {
  await fetchGlobalData()
})
</script>

<template>
  <Breadcrumber Title="About Us" />

  <!-- start: About Section -->
  <section class="tj-about-section h8-about section-gap">
    <div class="container">
      <div class="row row-gap-4">
        <div class="col-12">
          <div class="about-content-area-2 wow fadeInUp" data-wow-delay=".3s">
            <div class="sec-heading style-3">
              <div class="row">
                <div class="col-12 col-lg-4">
                  <div class="h8-about-left">
                    <span class="sub-title wow fadeInUp" data-wow-delay=".3s">
                      <img :src="globalData?.about?.mainLogo" alt="small logo" />About Us
                    </span>
                  </div>
                </div>
                <div class="col-12 col-lg-8">
                  <div class="h8-about-content-inner">
                    <h2 class="sec-title title-highlight">
                      {{ globalData?.about?.summary }}
                    </h2>
                  </div>
                </div>
              </div>
              <div class="row align-items-center">
                <div class="col-12 col-lg-4"></div>
                <div class="col-12 col-lg-8">
                  <div class="h8-about-item-wrapper" v-html="globalData?.about.detail"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- end: About Section -->
</template>
<style scoped></style>
