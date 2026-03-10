<script setup lang="ts">
import Breadcrumber from '@/components/Breadcrumber.vue'

import { onMounted, ref, watch } from 'vue'
import { useCareers } from '@/composables/useCareers'
import type { CareerApplication } from '@/types/Careers'
import { useHead } from '@vueuse/head'

const { fetchCareerById, careerById, loadingCareerById } = useCareers()
const props = defineProps({
  id: String,
})

const application = ref<CareerApplication>({
  fullName: '',
  email: '',
  phoneNumber: '',
  coverLetter: '',
  careerId: props.id || '',
})
watch(
  () => props.id,
  async (newValue, oldValue) => {
    await fetchCareerById(newValue || '')
    setTitles()
  },
)
onMounted(async () => {
  await fetchCareerById(props.id || '')
  setTitles()
})
const setTitles = () => {
  document.title = careerById.value?.career.title || ''

  useHead({
    title: careerById.value?.career.title,
    meta: [
      {
        name: 'description',
        content: careerById.value?.career.title || '',
      },
      {
        property: 'og:title',
        content: careerById.value?.career.title,
      },
      {
        property: 'og:description',
        content: careerById.value?.career.title || '',
      },
    ],
  })
}
const file = ref<File | null>(null)

function handleFileUpload(event: Event) {
  // const target = event.target as HTMLInputElement
  // file.value = target.files?.[0] || null
}
const submit = () => {
  // Handle form submission logic here
  console.log('Application submitted:', application.value)
}

const upload = async () => {
  const formData = new FormData()
  if (file.value) {
    formData.append('file', file.value)

    await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    })
  }
}
</script>
<template>
  <Breadcrumber Title="Career Details" />

  <!-- start: Careers Section -->
  <section class="tj-careers-details section-gap">
    <div class="container">
      <div class="row rg-50">
        <div class="col-lg-8">
          <div class="tj-post-wrapper">
            <div class="tj-post-single-post">
              <!-- top content -->
              <div class="tj-careers-top mb-30">
                <div class="tj-careers-top-content">
                  <div class="tj-careers-tag">
                    <span>{{ careerById?.career.company }}</span>
                  </div>
                  <h4 class="tj-careers-top-title text-anim">{{ careerById?.career.title }}</h4>
                  <span class="location"
                    ><i class="tji-location"></i>{{ careerById?.career.location }}</span
                  >
                </div>
              </div>
              <!-- content -->
              <div class="tj-entry-content">
                <h4 class="text-anim">Job Description</h4>
                <div v-html="careerById?.career.htmlBody"></div>
              </div>
              <!-- post tag and share -->
            </div>

            <!-- post navigation -->
            <div
              class="tj-post__navigation mb-0 wow fadeInUp"
              data-wow-delay=".3s"
              style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInUp"
            >
              <!-- previous post -->
              <div class="tj-nav__post previous">
                <div class="tj-nav-post__nav prev_post">
                  <RouterLink :to="`/CareerDetails/${careerById?.previousId}`"
                    ><span><i class="tji-arrow-left"></i></span>Previous</RouterLink
                  >
                </div>
              </div>
              <div class="tj-nav-post__grid">
                <RouterLink to="/Careers"><i class="tji-window"></i></RouterLink>
              </div>
              <!-- next post -->
              <div class="tj-nav__post next">
                <div class="tj-nav-post__nav next_post">
                  <RouterLink :to="`/CareerDetails/${careerById?.nextId}`"
                    >Next<span><i class="tji-arrow-right"></i></span
                  ></RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <aside class="tj-blog-sidebar">
            <!-- Job information  -->
            <div class="tj-sidebar-widget wow fadeInUp" data-wow-delay="0.1s">
              <h4 class="widget-title">Job Information</h4>
              <div class="project_catagory">
                <ul>
                  <li>
                    <span class="first-child">Category</span
                    ><span>{{ careerById?.career.categoryTitle }}</span>
                  </li>
                  <li>
                    <span class="first-child">Company</span
                    ><span>{{ careerById?.career.company }}</span>
                  </li>
                  <li>
                    <span class="first-child">Salary</span
                    ><span>{{ careerById?.career.salary }}</span>
                  </li>
                  <li>
                    <span class="first-child">Application deadline</span
                    ><span
                      >{{ careerById?.career.monthName }} {{ careerById?.career.day }},
                      {{ careerById?.career.year }}</span
                    >
                  </li>
                </ul>
              </div>
            </div>
            <!-- apply form -->
            <div class="tj-sidebar-widget wow fadeInUp" data-wow-delay="0.3s">
              <h4 class="widget-title">Apply Online</h4>
              <div class="tj-careers-form">
                <form action="#">
                  <div class="form-input">
                    <input
                      type="text"
                      name="cr_name"
                      placeholder="Full name*"
                      v-model="application.fullName"
                    />
                  </div>
                  <div class="form-input">
                    <input
                      type="email"
                      name="cr_email"
                      placeholder="Enter email*"
                      v-model="application.email"
                    />
                  </div>
                  <div class="form-input">
                    <input
                      type="text"
                      name="cr_phone"
                      placeholder="Phone number*"
                      v-model="application.phoneNumber"
                    />
                  </div>
                  <div class="form-input">
                    <textarea
                      name="cr_cover_letter"
                      placeholder="Cover letter*"
                      v-model="application.coverLetter"
                    ></textarea>
                  </div>
                  <div class="form-input reduce">
                    <label class="label" for="inputFile">Attach Resume*</label>
                    <input type="file" id="inputFile" @change="handleFileUpload" />
                  </div>
                  <div class="tj-careers-button">
                    <button type="submit" @click="submit" class="tj-primary-btn">
                      <span class="btn-text"><span>Submit Now</span></span>
                      <span class="btn-icon"><i class="tji-arrow-right-long"></i></span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  </section>
  <!-- end: Careers Section -->
</template>
