<script setup lang="ts">
import Breadcrumber from '@/components/Breadcrumber.vue'

import { onMounted } from 'vue'
import { useServices } from '@/composables/useServices'

const { fetchServicesList, loadingServicesList, serviceListData } = useServices()

onMounted(async () => {
  await fetchServicesList()
})
</script>

<template>
  <Breadcrumber Title="Services" />

  <!-- start: Service Section -->
  <section class="tj-service-section service-4 section-gap">
    <div class="container">
      <div class="row row-gap-4">
        <div
          class="col-lg-4 col-md-6"
          v-for="service in serviceListData?.services"
          :key="service.id"
        >
          <div class="service-item style-4 wow fadeInUp" data-wow-delay=".1s">
            <div class="service-content">
              <h4 class="title">
                <RouterLink :to="`/ServiceDetails/${service.id}`">{{ service.title }}</RouterLink>
              </h4>
              <p class="desc">
                {{ service.description }}
              </p>
              <RouterLink class="text-btn" :to="`/ServiceDetails/${service.id}`">
                <span class="btn-text"><span>Learn More</span></span>
                <span class="btn-icon"><i class="tji-arrow-right-long"></i></span>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- end: Service Section -->
</template>
