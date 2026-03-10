<script setup lang="ts">
import Breadcrumber from '@/components/Breadcrumber.vue'

import { onMounted, watch } from 'vue'
import { useNews } from '@/composables/useNews'
import { useHead } from '@vueuse/head'

const { fetchNewsById, newsById, loadingNewsById } = useNews()
const props = defineProps({
  id: String,
})

onMounted(async () => {
  await fetchNewsById(props.id || '')
  setTitles()
})

watch(
  () => props.id,
  async (newValue, oldValue) => {
    await fetchNewsById(newValue || '')
    setTitles()
  },
)

const setTitles = () => {
  document.title = newsById.value?.news.title || ''

  useHead({
    title: newsById.value?.news.title,
    meta: [
      {
        name: 'description',
        content: newsById.value?.news.title || '',
      },
      {
        property: 'og:title',
        content: newsById.value?.news.title,
      },
      {
        property: 'og:description',
        content: newsById.value?.news.title || '',
      },
    ],
  })
}
</script>

<template>
  <Breadcrumber :Title="newsById?.news.title || ''" />

  <!-- start: Blog Section -->
  <section class="tj-blog-section section-gap slidebar-stickiy-container">
    <div class="container">
      <div class="row row-gap-5">
        <div class="col-lg-8">
          <div class="post-details-wrapper">
            <div class="blog-images wow fadeInUp" data-wow-delay=".1s">
              <img :src="newsById?.news.imageUrl || ''" alt="Images" />
            </div>
            <h2 class="title title-anim">
              {{ newsById?.news.title }}
            </h2>
            <div class="blog-category-two wow fadeInUp" data-wow-delay=".3s">
              <div class="category-item">
                <div class="cate-icons">
                  <i class="tji-calendar"></i>
                </div>
                <div class="cate-text">
                  <span class="degination">Date Released</span>
                  <h6 class="text">
                    {{ newsById?.news.day }} {{ newsById?.news.monthName }},
                    {{ newsById?.news.year }}
                  </h6>
                </div>
              </div>
            </div>
            <div class="blog-text" v-html="newsById?.news.htmlBody"></div>
            <div
              class="tj-tags-post wow fadeInUp"
              data-wow-delay=".3s"
              v-if="(newsById?.news.tags?.length ?? 0) > 0"
            >
              <div class="tagcloud">
                <span>Tags:</span>
                <RouterLink :to="`/News?tag=${tag}`" v-for="tag in newsById?.news.tags" :key="tag">
                  {{ tag }}
                </RouterLink>
              </div>
              <div
                class="post-share"
                v-if="
                  newsById?.news.shortLinkForShare &&
                  (newsById?.news.shortLinkForShare.length ?? 0) > 0
                "
              >
                <ul>
                  <li>Share:</li>
                  <li v-for="social in newsById?.news.shortLinkForShare" :key="social.link">
                    <a target="_blank" :href="social.link">
                      <i :class="social.icon"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="tj-main-sidebar slidebar-stickiy">
            <div
              class="tj-sidebar-widget tj-recent-posts wow fadeInUp"
              data-wow-delay=".3s"
              v-if="newsById?.relatedNews && newsById.relatedNews.length > 0"
            >
              <h4 class="widget-title">Related post</h4>
              <ul>
                <li v-for="relatedNews in newsById?.relatedNews" :key="relatedNews.id">
                  <div class="post-thumb">
                    <RouterLink :to="`/NewsDetails/${relatedNews.id}`">
                      <img :src="relatedNews.imageUrl || ''" alt="Blog"
                    /></RouterLink>
                  </div>
                  <div class="post-content">
                    <h6 class="post-title">
                      <RouterLink :to="`/NewsDetails/${relatedNews.id}`">{{
                        relatedNews.title
                      }}</RouterLink>
                    </h6>
                    <div class="blog-meta">
                      <ul>
                        <li>
                          {{ relatedNews.day }} {{ relatedNews.monthName }},
                          {{ relatedNews.year }}
                        </li>
                      </ul>
                    </div>
                  </div>
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
