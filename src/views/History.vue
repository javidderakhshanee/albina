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
  <Breadcrumber Title="History" />

  <!-- start: History title Section -->
  <section class="tj-history section-gap">
    <div class="container">
      <div class="row rg-30 justify-content-between">
        <div class="col-xl-5">
          <div class="sec-heading mb-0">
            <span class="sub-title wow fadeInUp" data-wow-delay="0.1s">
              <img src="/images/logos/small-logo.png" alt="small logo" /> Our background
            </span>
            <h2 class="sec-title text-anim">
              Discover how we have Evolved our Company’s on <span>Legacy.</span>
            </h2>
          </div>
        </div>
        <div class="col-xl-5">
          <div class="desc wow fadeInUp" data-wow-delay="0.3s">
            <p>
              Our mission is to empowers businesses off all size to thrive in an businesses ever
              changing marketplace. We are committed to the delivering exceptional in the value
              through our strategic inset, innovative approaches. Our mission is to empower
              businesses of all sizes to thrive.
            </p>
            <p>
              Committed to the delivering exceptional in the value through our strategic inset,
              innovative approaches empower.
            </p>
          </div>
          <div class="history-btn mt-30 wow fadeInUp" data-wow-delay="0.5s">
            <a class="tj-primary-btn tj-secondary-btn" href="company-profile.html">
              <span class="btn-text"><span>Learn More</span></span>
              <span class="btn-icon"><i class="tji-arrow-right-long"></i></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- end: History tile Section -->
  <!-- start: History Section -->
  <section class="tj-history-area section-bottom-gap">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="timeline">
            <div class="timeline-inner wow fadeInUp" data-wow-delay="0.1s">
              <div class="date">2008</div>
              <div class="content">
                <div class="top">
                  <span>01.</span>
                  <h4 class="title">Founding and Early Years</h4>
                  <p>
                    Our mission is to empowers businesses off all size to thrive in an businesses
                    ever changing marketplace. We are committed to the delivering exceptional in the
                    value.
                  </p>
                </div>
              </div>
            </div>
            <div class="timeline-inner wow fadeInUp" data-wow-delay="0.3s">
              <div class="date">2012</div>
              <div class="content">
                <div class="top">
                  <span>02.</span>
                  <h4 class="title">Expansion and Growth</h4>
                  <p>
                    Our mission is to empowers businesses off all size to thrive in an businesses
                    ever changing marketplace. We are committed to the delivering exceptional in the
                    value.
                  </p>
                </div>
              </div>
            </div>
            <div class="timeline-inner wow fadeInUp" data-wow-delay="0.5s">
              <div class="date">2016</div>
              <div class="content">
                <div class="top">
                  <span>03.</span>
                  <h4 class="title">Innovation and Industry Leadership</h4>
                  <p>
                    Our mission is to empowers businesses off all size to thrive in an businesses
                    ever changing marketplace. We are committed to the delivering exceptional in the
                    value.
                  </p>
                </div>
              </div>
            </div>
            <div class="timeline-inner wow fadeInUp" data-wow-delay="0.7s">
              <div class="date">2020</div>
              <div class="content">
                <div class="top">
                  <span>04.</span>
                  <h4 class="title">Global Expansion and Diversification</h4>
                  <p>
                    Our mission is to empowers businesses off all size to thrive in an businesses
                    ever changing marketplace. We are committed to the delivering exceptional in the
                    value.
                  </p>
                </div>
              </div>
            </div>
            <div class="timeline-inner wow fadeInUp" data-wow-delay="0.9s">
              <div class="date">2024</div>
              <div class="content">
                <div class="top">
                  <span>05.</span>
                  <h4 class="title">Looking Ahead</h4>
                  <p>
                    Our mission is to empowers businesses off all size to thrive in an businesses
                    ever changing marketplace. We are committed to the delivering exceptional in the
                    value.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- end: History Section -->
</template>
