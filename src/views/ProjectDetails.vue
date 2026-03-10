<script setup lang="ts">
import Breadcrumber from '@/components/Breadcrumber.vue'

import { onMounted, watch } from 'vue'
import { useProjects } from '@/composables/useProjects'
import { useHead } from '@vueuse/head'

const { fetchProjectsById, projectsById, loadingProjectsById } = useProjects()
const props = defineProps({
  id: String,
})

onMounted(async () => {
  console.log('Fetching project details for ID:', props.id)
  await fetchProjectsById(props.id || '')
  setTitles()
})

watch(
  () => props.id,
  async (newValue, oldValue) => {
    await fetchProjectsById(newValue || '')
    setTitles()
  },
)
const setTitles = () => {
  document.title = projectsById.value?.project.title || ''

  useHead({
    title: projectsById.value?.project.title,
    meta: [
      {
        name: 'description',
        content: projectsById.value?.project.title || '',
      },
      {
        property: 'og:title',
        content: projectsById.value?.project.title,
      },
      {
        property: 'og:description',
        content: projectsById.value?.project.title || '',
      },
    ],
  })
}
</script>

<template>
  <Breadcrumber :Title="projectsById?.project.title || ''" />

  <!-- start: Blog Section -->
  <section class="tj-blog-section section-gap slidebar-stickiy-container">
    <div class="container">
      <div class="row row-gap-5">
        <div class="col-lg-8">
          <div class="post-details-wrapper">
            <div class="blog-images wow fadeInUp" data-wow-delay=".1s">
              <img
                :src="projectsById?.project.imageUrl || ''"
                :alt="projectsById?.project.title || 'Project Image'"
              />
            </div>
            <h2 class="title title-anim">{{ projectsById?.project.title || '' }}</h2>
            <div class="blog-text" v-html="projectsById?.project.htmlBody || ''"></div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="tj-main-sidebar slidebar-stickiy">
            <div class="tj-sidebar-widget widget-categories wow fadeInUp" data-wow-delay=".1s">
              <h4 class="widget-title">Project Info</h4>
              <div class="infos-item">
                <div class="project-icons">
                  <i class="tji-user"></i>
                </div>
                <div class="project-text">
                  <span>Clients</span>
                  <h6 class="title">{{ projectsById?.project.clients }}</h6>
                </div>
              </div>
              <div class="infos-item">
                <div class="project-icons">
                  <i class="tji-budget"></i>
                </div>
                <div class="project-text">
                  <span>Budget</span>
                  <h6 class="title">{{ projectsById?.project.budget }}</h6>
                </div>
              </div>
              <div class="infos-item">
                <div class="project-icons">
                  <i class="tji-location-2"></i>
                </div>
                <div class="project-text">
                  <span>Location</span>
                  <h6 class="title">{{ projectsById?.project.location }}</h6>
                </div>
              </div>
              <div class="infos-item">
                <div class="project-icons">
                  <i class="tji-chart"></i>
                </div>
                <div class="project-text">
                  <span>Sector</span>
                  <h6 class="title">{{ projectsById?.project.sector }}</h6>
                </div>
              </div>
              <div class="infos-item">
                <div class="project-icons">
                  <i class="tji-calendar"></i>
                </div>
                <div class="project-text">
                  <span>Complete date</span>
                  <h6 class="title">{{ projectsById?.project.completedAt }}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- end: Blog Section -->
</template>
