<script setup lang="ts">
import Breadcrumber from '@/components/Breadcrumber.vue'

import { useCareers } from '@/composables/useCareers'
import { onMounted, ref } from 'vue'

const {
  fetchCareersList,
  fetchCareerCategories,
  loadingCareerCategories,
  loadingCareerList,
  careersListData,
  careersCategoryData,
} = useCareers()

const selectedPage = ref(1)

const applyFilters = async () => {
  await fetchCareersList({
    currentPage: selectedPage.value,
    pageSize: 6,
  })
}

onMounted(async () => {
  await fetchCareerCategories()
  await applyFilters()
})

const changePage = async (pageNumber: number) => {
  if (careersListData.value) {
    selectedPage.value = pageNumber
    await applyFilters()
  }
}
</script>
<template>
  <Breadcrumber Title="Careers" />

  <!-- start: Careers Section -->
  <section class="tj-careers-section section-gap">
    <div class="container">
      <div class="row rg-30">
        <div class="col-xl-4 col-md-6" v-for="career in careersListData?.careers" :key="career.id">
          <div class="tj-careers wow fadeInUp" data-wow-delay="0.1s">
            <h4 class="tj-careers-title">
              <RouterLink :to="`/CareerDetails/${career.id}`">{{ career.title }}</RouterLink>
            </h4>
            <div class="tj-careers-tag mt-10">
              <span>{{ career.company }}</span>
            </div>
            <div class="tj-careers-salary">
              <span>{{ career.salary }}</span>
            </div>
            <div class="tj-careers-bottom">
              <span class="location"><i class="tji-location"></i>{{ career.location }}</span>
              <RouterLink :to="`/CareerDetails/${career.id}`" class="tj-careers-btn">
                <div class="btn-text">
                  <span>Apply Now</span>
                </div>
                <span class="btn-icon">
                  <i class="tji-arrow-right"></i>
                  <i class="tji-arrow-right"></i>
                </span>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
      <!-- post pagination -->
      <div class="tj-pagination d-flex justify-content-center">
        <ul>
          <!-- Previous Button -->
          <li v-if="(careersListData?.page ?? 1) > 2">
            <a
              class="page-numbers"
              href="#"
              @click.prevent="changePage((careersListData?.page ?? 1) - 1)"
            >
              <i class="tji-arrow-left-long"></i>
            </a>
          </li>

          <!-- Page Numbers -->
          <li v-for="pageNumber in careersListData?.totalPages" :key="pageNumber">
            <span
              v-if="pageNumber === careersListData?.page"
              class="page-numbers current"
              aria-current="page"
            >
              {{ pageNumber.toString().padStart(2, '0') }}
            </span>

            <a v-else class="page-numbers" href="#" @click.prevent="changePage(pageNumber)">
              {{ pageNumber.toString().padStart(2, '0') }}
            </a>
          </li>

          <!-- Next Button -->
          <li v-if="(careersListData?.page ?? 1) < (careersListData?.totalPages ?? 1)">
            <a
              class="next page-numbers"
              href="#"
              @click.prevent="changePage((careersListData?.page ?? 1) + 1)"
            >
              <i class="tji-arrow-right-long"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
  <!-- end: Careers Section -->
</template>
