<script setup lang="ts">
defineProps<{
  Title: string
}>()
</script>
<template>
  <!-- start: Breadcrumb Section -->
  <section class="tj-page-header section-gap-x" data-bg-image="images/bg/pheader-bg.png">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="tj-page-header-content text-center">
            <h1 class="tj-page-title">{{ Title }}</h1>
            <div class="tj-page-link">
              <span><i class="tji-home"></i></span>
              <span>
                <RouterLink to="/">Home</RouterLink>
              </span>
              <span><i class="tji-arrow-right"></i></span>
              <span>
                <span>{{ Title }}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="page-header-overlay" data-bg-image="images/shape/pheader-overlay.png"></div>
  </section>
  <!-- end: Breadcrumb Section -->
</template>
