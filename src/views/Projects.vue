<script setup lang="ts">
import Breadcrumber from '@/components/Breadcrumber.vue'

import { ref, onMounted } from 'vue'
import { useProjects } from '@/composables/useProjects'
import { useRoute } from 'vue-router'
const route = useRoute()

const {
  fetchProjectsList,
  fetchProjectsCategories,
  fetchProjectsGroups,
  loadingProjectsCategories,
  loadingProjectsList,
  projectsListData,
  projectsCategoryData,
  projectsGroupData,
} = useProjects()

const selectedCategoryIdFromQuery = route.query.category as string | ''
const selectedCategory = ref('')
const selectedGroup = ref('')
const selectedPage = ref(1)

const applyFilters = async (categoryId?: string) => {
  selectedCategory.value = categoryId || selectedCategory.value || selectedCategoryIdFromQuery || ''

  await fetchProjectsList({
    selectedCategoryId: selectedCategory.value,
    selectedGroupId: selectedGroup.value,
    currentPage: selectedPage.value,
    pageSize: 9,
  })
}

onMounted(async () => {
  await fetchProjectsCategories()
  await fetchProjectsGroups()

  await applyFilters()
})

const resetFilters = async () => {
  selectedCategory.value = ''
  selectedGroup.value = ''
  selectedPage.value = 1

  await applyFilters()
}
</script>

<template>
  <Breadcrumber Title="Projects" />

  <!-- start: Project Section -->
  <section class="h10-project section-gap tj-sticky-panel-container">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="sec-heading style-3 sec-heading-centered">
            <span class="sub-title wow fadeInUp" data-wow-delay=".3s">
              <img src="/images/logos/small-logo.png" alt="small logo" />
              Projects
            </span>
            <h2 class="sec-title text-anim">Breaking Boundaries, Building Dreams.</h2>
            <div
              class="portfolio-filter h10-project-filter text-center wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div class="button-group h10-project-button-group filter-button-group">
                <button
                  :class="{
                    active: !selectedCategory && !selectedCategoryIdFromQuery,
                  }"
                  @click="resetFilters()"
                >
                  All
                </button>
                <button
                  v-for="category in projectsCategoryData"
                  :key="category.id"
                  :class="{
                    active:
                      selectedCategory === category.id ||
                      selectedCategoryIdFromQuery === category.id,
                  }"
                  @click="applyFilters(category.id)"
                >
                  {{ category.title }}
                </button>
                <div class="active-bg"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="project-wrapper h7-project-wrapper h10-project-wrapper portfolio-filter-box">
            <div
              class="project-item h4-project-item portfolio-filter-item General-Contracting Implementation-and-supervision"
              v-for="project in projectsListData?.projects || []"
              :key="project.id"
            >
              <div class="project-img" data-cursor-text="View Project">
                <RouterLink :to="`/ProjectDetails/${project.id}`">
                  <img :src="project.imageUrl || ''" :alt="project.title" />
                </RouterLink>
              </div>
              <div class="project-content">
                <div class="project-text">
                  <div>
                    <h4 class="title">
                      <RouterLink :to="`/ProjectDetails/${project.id}`">{{
                        project.title
                      }}</RouterLink>
                    </h4>
                    <span class="categories">
                      <RouterLink :to="`/Projects?category=${project.categoryId}`">{{
                        project.categoryTitle
                      }}</RouterLink>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- end: Project Section -->
</template>
