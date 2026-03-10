<script setup lang="ts">
import { useGlobalData } from '@/composables/useGlobalData'
import { useServices } from '@/composables/useServices'
import { onMounted } from 'vue'

const { fetchGlobalData, loadingGlobalData, globalData } = useGlobalData()
const { fetchServicesList, loadingServicesList, serviceListData } = useServices()

onMounted(async () => {
  await fetchGlobalData()
  await fetchServicesList()
})
</script>
<template>
  <!-- start: Footer Section -->
  <footer class="tj-footer-section footer-2 section-gap-x">
    <div class="footer-main-area">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-xl-3 col-md-6">
            <div class="footer-widget footer-col-1 wow fadeInUp" data-wow-delay=".1s">
              <div class="footer-logo">
                <RouterLink to="/">
                  <img :src="globalData?.about?.footerLogo" alt="Logos" />
                </RouterLink>
              </div>
              <div class="footer-text">
                <p>
                  {{ globalData?.about?.summary }}
                </p>
              </div>
              <div class="award-logo-area">
                <div class="award-logo">
                  <img src="/images/footer/award-logo-1.webp" alt="" />
                </div>
                <div class="award-logo">
                  <img src="/images/footer/award-logo-2.webp" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-md-6">
            <div
              class="footer-widget footer-col-2 widget-nav-menu wow fadeInUp"
              data-wow-delay=".3s"
            >
              <h5 class="title">Services</h5>
              <ul>
                <li v-for="service in serviceListData?.services" :key="service.id">
                  <RouterLink :to="`/ServiceDetails/${service.id}`">{{ service.title }}</RouterLink>
                </li>
                <li>
                  <RouterLink to="/Services">more...</RouterLink>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-xl-3 col-md-6">
            <div
              class="footer-widget footer-col-3 widget-nav-menu wow fadeInUp"
              data-wow-delay=".5s"
            >
              <h5 class="title">Resources</h5>
              <ul>
                <li>
                  <RouterLink to="/Projects">Projects</RouterLink>
                </li>
                <li><RouterLink to="/Team">Team</RouterLink></li>
                <li><RouterLink to="/News">News</RouterLink></li>
                <li><RouterLink to="/Partners">Partners</RouterLink></li>
                <li><RouterLink to="/About">About Us</RouterLink></li>
                <li><RouterLink to="/Contact">Contact us</RouterLink></li>
                <li><RouterLink to="/History">History</RouterLink></li>
                <li><RouterLink to="/Careers">Careers</RouterLink></li>
              </ul>
            </div>
          </div>
          <div class="col-xl-3 col-md-6">
            <div class="footer-widget widget-contact wow fadeInUp" data-wow-delay=".7s">
              <h5 class="title">Our Offices</h5>
              <div class="footer-contact-info">
                <div
                  class="contact-item"
                  v-for="branch in globalData?.branches"
                  :key="branch.title"
                >
                  <b>{{ branch.title }}</b
                  >: <span>{{ branch.address }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- footer-marquee section removed because marquee images are not present in assets. Add assets or restore later if needed. -->
    <div class="tj-copyright-area-2">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="copyright-content-area">
              <div class="copyright-text">
                <p>
                  &copy; 2026 <a target="_blank">AlBina</a>
                  All right reserved
                </p>
              </div>
              <div class="social-links style-3">
                <ul>
                  <li v-for="social in globalData?.socials" :key="social.urlNumber">
                    <a :href="social.urlNumber" target="_blank">
                      <i :class="social.icon"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="copyright-menu">
                <ul>
                  <li><RouterLink to="/PrivacyAndPolicy">Privacy Policy</RouterLink></li>
                  <li><RouterLink to="/TermsAndConditions">Terms & Condition</RouterLink></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-shape-1">
      <img src="/images/shape/pattern-2.svg" alt="" />
    </div>
    <div class="bg-shape-2">
      <img src="/images/shape/pattern-3.svg" alt="" />
    </div>
  </footer>
  <!-- end: Footer Section -->
</template>
