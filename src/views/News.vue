<script setup lang="ts">
import Breadcrumber from '@/components/Breadcrumber.vue'

import { ref, onMounted } from 'vue'
import { useNews } from '@/composables/useNews'
import { useRoute } from 'vue-router'
const route = useRoute()

const {
  fetchNewsList,
  fetchNewsCategories,
  loadingNewsCategories,
  loadingNewsList,
  newsListData,
  newsCategoryData,
} = useNews()

const selectedTag = route.query.tag as string | undefined
const selectedCategory = ref('')
const selectedDateFrom = ref('')
const selectedDateTo = ref('')
const selectedPage = ref(1)

const applyFilters = async () => {
  await fetchNewsList({
    selectedCategoryId: selectedCategory.value || '',
    dateReleasedFrom: selectedDateFrom.value,
    dateReleasedTo: selectedDateTo.value,
    currentPage: selectedPage.value,
    pageSize: 9,
    selectedTag: selectedTag || '',
  })
}

const resetFilters = async () => {
  selectedCategory.value = ''
  selectedDateFrom.value = ''
  selectedDateTo.value = ''
  await applyFilters()
}

onMounted(async () => {
  await fetchNewsCategories()
  await applyFilters()
})

const changePage = async (pageNumber: number) => {
  if (newsListData.value) {
    selectedPage.value = pageNumber
    await applyFilters()
  }
}
</script>

<template>
  <Breadcrumber Title="News" />

  <!-- start: Blog Section -->
  <section class="tj-blog-section section-gap">
    <div class="container">
      <!-- News Filter Section -->
      <form method="get">
        <div class="news-filter-section mb-50">
          <div class="row align-items-center justify-content-center">
            <div class="col-lg-10">
              <div class="filter-wrapper">
                <div class="row g-3 align-items-end">
                  <!-- Category Filter -->
                  <div class="col-md-4">
                    <label class="filter-label">Category</label>
                    <select
                      name="SelectedCategory"
                      id="SelectedCategory"
                      class="filter-select"
                      v-model="selectedCategory"
                      :loading="loadingNewsCategories"
                    >
                      <option value="">All Categories</option>
                      <option
                        v-for="category in newsCategoryData"
                        :key="category.id"
                        :value="category.id"
                      >
                        {{ category.title }}
                      </option>
                    </select>
                  </div>
                  <!-- Date Filter -->
                  <div class="col-md-4">
                    <label class="filter-label">From Date</label>
                    <input
                      type="date"
                      id="DateReleasedOf"
                      name="DateReleasedOf"
                      class="filter-input"
                      v-model="selectedDateFrom"
                    />
                  </div>
                  <div class="col-md-4">
                    <label class="filter-label">To Date</label>
                    <input
                      type="date"
                      id="DateReleasedThan"
                      name="DateReleasedThan"
                      class="filter-input"
                      v-model="selectedDateTo"
                    />
                  </div>
                </div>
                <!-- Filter Actions -->
                <div class="filter-actions mt-3">
                  <div @click="applyFilters" id="applyFilters" class="tj-primary-btn">
                    <span class="btn-text"><span>Apply Filters</span></span>
                    <span class="btn-icon"><i class="tji-search"></i></span>
                  </div>
                  <div
                    @click="resetFilters"
                    id="resetFilters"
                    class="tj-primary-btn tj-secondary-btn"
                  >
                    <span class="btn-text"><span>Reset</span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>

      <!-- No Results Message -->
      <div
        v-if="
          !loadingNewsCategories &&
          !loadingNewsList &&
          (!newsListData || newsListData?.news.length === 0)
        "
        id="noResults"
        class="no-results-message"
      >
        <div class="text-center py-5">
          <i class="fa-light fa-search" style="font-size: 48px; color: var(--tj-color-grey-2)"></i>
          <h4 class="mt-3">No news articles found</h4>
          <p>Try adjusting your filters to find what you're looking for.</p>
        </div>
      </div>
      <div
        v-else-if="loadingNewsCategories || loadingNewsList"
        id="loadingNews"
        class="no-results-message"
      >
        <div class="text-center py-5">
          <i class="fa-light fa-search" style="font-size: 48px; color: var(--tj-color-grey-2)"></i>
          <h4 class="mt-3">Loading...</h4>
        </div>
      </div>
      <div class="row row-gap-4" v-else id="newsGrid">
        <div class="col-xl-4 col-md-6 news-item" v-for="news in newsListData?.news" :key="news.id">
          <div class="blog-item wow fadeInUp" data-wow-delay=".1s">
            <div class="blog-thumb">
              <RouterLink :to="`/NewsDetails/${news.id}`"
                ><img :src="news.imageUrl || ''" :alt="news.title"
              /></RouterLink>
              <div class="blog-date">
                <span class="date">{{ news.day }}</span>
                <span class="month">{{ news.monthName }}</span>
              </div>
            </div>
            <div class="blog-content">
              <span class="news-category-badge">{{ news.categoryTitle }}</span>
              <h4 class="title">
                <RouterLink :to="`/NewsDetails/${news.id}`">{{ news.title }}</RouterLink>
              </h4>
              <RouterLink class="text-btn" :to="`/NewsDetails/${news.id}`">
                <span class="btn-text"><span>Read More</span></span>
                <span class="btn-icon"><i class="tji-arrow-right-long"></i></span>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
      <!-- post pagination -->
      <div class="tj-pagination d-flex justify-content-center">
        <ul>
          <!-- Previous Button -->
          <li v-if="(newsListData?.page ?? 1) > 2">
            <a
              class="page-numbers"
              href="#"
              @click.prevent="changePage((newsListData?.page ?? 1) - 1)"
            >
              <i class="tji-arrow-left-long"></i>
            </a>
          </li>

          <!-- Page Numbers -->
          <li v-for="pageNumber in newsListData?.totalPages" :key="pageNumber">
            <span
              v-if="pageNumber === newsListData?.page"
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
          <li v-if="(newsListData?.page ?? 1) < (newsListData?.totalPages ?? 1)">
            <a
              class="next page-numbers"
              href="#"
              @click.prevent="changePage((newsListData?.page ?? 1) + 1)"
            >
              <i class="tji-arrow-right-long"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
  <!-- end: Blog Section -->
</template>
<style scoped>
@font-face {
  font-family: 'myriad-pro';
  src: url('fonts/myriad-pro/MyriadPro-Light.ttf');
  font-weight: 300;
}

@font-face {
  font-family: 'myriad-pro';
  src: url('fonts/myriad-pro/MYRIADPRO-REGULAR.ttf');
  font-weight: 400;
}

@font-face {
  font-family: 'myriad-pro';
  src: url('fonts/myriad-pro/MYRIADPRO-BOLD.ttf');
  font-weight: 500;
}

@font-face {
  font-family: 'myriad-pro';
  src: url('fonts/myriad-pro/MYRIADPRO-SEMIBOLD.ttf');
  font-weight: 700;
}

/* News Filter Styles */
.news-filter-section {
  margin-bottom: 40px;
}

.filter-wrapper {
  background: var(--tj-color-common-white);
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.filter-label {
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: var(--tj-color-heading-primary);
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.filter-select,
.filter-input {
  width: 100%;
  padding: 14px 18px;
  font-size: 15px;
  border: 2px solid var(--tj-color-grey-1);
  border-radius: 10px;
  background-color: var(--tj-color-grey-1);
  color: var(--tj-color-text-body);
  transition: all 0.3s ease;
  cursor: pointer;
}

.filter-select:hover,
.filter-input:hover {
  border-color: var(--tj-color-theme-primary);
}

.filter-select:focus,
.filter-input:focus {
  outline: none;
  border-color: var(--tj-color-theme-primary);
  background-color: var(--tj-color-common-white);
  box-shadow: 0 0 0 4px rgba(1, 68, 94, 0.1);
}

.filter-actions {
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
}

.filter-actions .tj-primary-btn {
  padding: 5px 5px 5px 20px;
}

.no-results-message {
  background: var(--tj-color-common-white);
  border-radius: 16px;
  padding: 40px;
  margin-bottom: 30px;
}

.no-results-message h4 {
  color: var(--tj-color-heading-primary);
}

.no-results-message p {
  color: var(--tj-color-text-body);
  margin-bottom: 0;
}

/* News Item Transitions */
.news-item {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}

/* Category Badge */
.news-category-badge {
  display: inline-block;
  padding: 6px 14px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  background: linear-gradient(135deg, var(--tj-color-theme-primary), var(--tj-color-theme-dark));
  color: var(--tj-color-common-white);
  border-radius: 50px;
  margin-bottom: 12px;
}

/* Responsive adjustments */
@media (max-width: 767px) {
  .filter-wrapper {
    padding: 20px;
  }

  .filter-actions {
    margin-top: 15px;
  }

  .filter-actions .tj-primary-btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
