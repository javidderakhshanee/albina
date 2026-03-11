<script setup lang="ts">
import { useGlobalData } from '@/composables/useGlobalData'
import { useNews } from '@/composables/useNews'
import { useProjects } from '@/composables/useProjects'
import { onMounted } from 'vue'
import { useHead } from '@vueuse/head'

const { loadingGlobalData, globalData } = useGlobalData()
const { fetchNewsList, loadingNewsList, newsListData } = useNews()
const { fetchProjectsList, loadingProjectsList, projectsListData } = useProjects()

onMounted(async () => {
  await fetchNewsList({
    currentPage: 1,
    pageSize: 6,
  })
  await fetchProjectsList({
    currentPage: 1,
    pageSize: 3,
  })

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
    ],
  })
})
</script>
<template>
  <!-- start: Banner Slider -->
  <section class="tj-slider-section">
    <div class="swiper hero-slider">
      <div class="swiper-wrapper">
        <div class="swiper-slide tj-slider-item">
          <div class="slider-bg-video">
            <video autoplay muted playsinline loop preload="auto">
              <source
                src="https://github.com/kosar-luqman/public/raw/refs/heads/main/h10-banner-videio.mp4"
                type="video/mp4"
              />
            </video>
          </div>

          <div class="container">
            <div class="slider-wrapper">
              <div class="slider-content">
                <h1 class="slider-title">Leading Future for <span>Business.</span></h1>
                <div class="slider-desc">
                  Committed to delivering innovative solutions that drive success. With a focus on
                  quality.
                </div>
                <div class="slider-btn">
                  <RouterLink class="tj-primary-btn" to="Contact">
                    <span class="btn-text"><span>Get Started</span></span>
                    <span class="btn-icon"><i class="tji-arrow-right-long"></i></span>
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="circle-text-wrap wow fadeInUp" data-wow-delay="1s">
      <span class="circle-text" data-bg-image="images/hero/circle-text.webp"></span>
      <RouterLink class="circle-icon" to="Services"><i class="tji-arrow-down-big"></i></RouterLink>
    </div>
  </section>
  <!-- end: Banner Slider -->

  <!-- start: Project Section -->
  <section class="tj-project-section tj-project-section-2 section-gap">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div
            class="sec-heading style-2 text-center"
            style="display: flex; flex-direction: column; align-items: center"
          >
            <span class="sub-title wow fadeInUp" data-wow-delay=".3s">Proud Projects</span>
            <h2 class="sec-title text-anim">Breaking Boundaries, Building <span>Dreams.</span></h2>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row row-gap-4">
        <div
          class="col-xl-4 col-md-6"
          v-for="project in projectsListData?.projects"
          :key="project.id"
        >
          <div class="project-item wow fadeInUp" data-wow-delay=".1s">
            <div class="project-img">
              <img :src="project.imageUrl || ''" :alt="project.title" />
            </div>
            <div class="project-content">
              <span class="categories"
                ><RouterLink :to="`/Projects?category=${project.categoryId}`">{{
                  project.categoryTitle
                }}</RouterLink></span
              >
              <div class="project-text">
                <h4 class="title">
                  <RouterLink :to="`/ProjectDetails/${project.id}`">{{ project.title }}</RouterLink>
                </h4>
                <RouterLink class="project-btn" :to="`/ProjectDetails/${project.id}`">
                  <i class="tji-arrow-right-big"></i>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- end: Project Section -->
  <!-- start: Blog Section -->
  <section class="tj-blog-section section-gap">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="sec-heading text-center">
            <h2 class="sec-title title-anim">Latest News</h2>
          </div>
        </div>
      </div>
      <div class="row row-gap-4">
        <div class="col-xl-4 col-md-6" v-for="news in newsListData?.news" :key="news.id">
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
    </div>
  </section>
  <!-- end: Blog Section -->
</template>
