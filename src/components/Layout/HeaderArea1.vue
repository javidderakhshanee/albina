<script setup lang="ts">
import { useGlobalData } from '@/composables/useGlobalData'
import { useLocale } from '@/composables/useLocales'
import { RouterLink } from 'vue-router'
const { t, locale, isRTL, changeLocale } = useLocale()
const { supportedLocales } = useGlobalData()
</script>
<template>
  <!-- start: Header Area -->
  <header class="header-area header-1 section-gap-x">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="header-wrapper">
            <!-- site logo -->
            <div class="site_logo">
              <RouterLink class="logo" to="/"
                ><img src="/images/logos/logo-2.png" alt=""
              /></RouterLink>
            </div>
            <ul class="langs">
              <li
                v-for="lang in supportedLocales"
                :key="lang.code"
                @click="changeLocale(lang)"
                :class="lang.code === locale ? 'active' : ''"
              >
                {{ lang.nativeName }}
              </li>
            </ul>
            <!-- navigation -->
            <div class="menu-area d-none d-lg-inline-flex align-items-center">
              <nav id="mobile-menu" class="mainmenu">
                <ul>
                  <li class="current-menu-ancestor">
                    <RouterLink to="/">{{ t('mainMenu.home') }}</RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/Projects">{{ t('mainMenu.projects') }}</RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/Team">{{ t('mainMenu.team') }}</RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/News">{{ t('mainMenu.news') }}</RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/Services">{{ t('mainMenu.services') }}</RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/Partners">{{ t('mainMenu.partners') }}</RouterLink>
                  </li>
                  <li class="has-dropdown">
                    <RouterLink to="/About">{{ t('mainMenu.about') }}</RouterLink>
                    <ul class="sub-menu">
                      <li>
                        <RouterLink to="/About">{{ t('mainMenu.about') }}</RouterLink>
                      </li>
                      <li>
                        <RouterLink to="/History">{{ t('mainMenu.history') }}</RouterLink>
                      </li>
                    </ul>
                  </li>
                  <li class="has-dropdown">
                    <a>{{ t('mainMenu.inHouse') }}</a>
                    <ul class="sub-menu">
                      <li>
                        <RouterLink to="/PrivacyAndPolicy">{{ t('mainMenu.privacy') }}</RouterLink>
                      </li>
                      <li>
                        <RouterLink to="/TermsAndConditions">{{ t('mainMenu.terms') }}</RouterLink>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <RouterLink to="/Contact">{{ t('mainMenu.contact') }}</RouterLink>
                  </li>
                </ul>
              </nav>
            </div>

            <!-- header right info -->
            <div class="header-right-item d-none d-lg-inline-flex">
              <div class="header-search">
                <button class="search">
                  <i class="tji-search"></i>
                </button>
                <button type="button" class="search_close_btn">
                  <svg
                    width="18"
                    height="18"
                    viewbox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 1L1 17"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M1 1L17 17"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </button>
              </div>
              <div class="header-button">
                <RouterLink class="tj-primary-btn" to="/Contact">
                  <span class="btn-text"><span>Let’s Talk</span></span>
                  <span class="btn-icon"><i class="tji-arrow-right-long"></i></span>
                </RouterLink>
              </div>
              <div class="menu_bar menu_offcanvas d-none d-lg-inline-flex">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

            <!-- menu bar -->
            <div class="menu_bar mobile_menu_bar d-lg-none">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Search Popup -->
    <div class="search_popup">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-8">
            <div class="tj_search_wrapper">
              <div class="search_form">
                <form action="#">
                  <div class="search_input">
                    <div class="search-box">
                      <input
                        class="search-form-input"
                        type="text"
                        placeholder="Type Words and Hit Enter"
                        required
                      />
                      <button type="submit">
                        <i class="tji-search"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <!-- end: Header Area -->
</template>
<style scoped>
.langs {
  padding: 1px;
}

.langs li {
  display: inline-block;
  margin-left: 10px;
  margin-right: 10px;
  text-align: center;
  cursor: pointer;
  color: #777;
}

.langs li:hover {
  color: black;
  text-decoration: underline;
}
.langs li.active {
  color: black;
  font-weight: 500;
  text-decoration: underline;
}
</style>
