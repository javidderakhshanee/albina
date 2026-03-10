<template>
  <!-- start: Offcanvas Menu -->
  <div class="tj-offcanvas-area d-none d-lg-block">
    <div class="hamburger_bg"></div>
    <div class="hamburger_wrapper">
      <div class="hamburger_inner">
        <div class="hamburger_top d-flex align-items-center justify-content-between">
          <div class="hamburger_logo">
            <RouterLink to="/" class="mobile_logo">
              <img src="/images/logos/logo-white.png" alt="Logo" />
            </RouterLink>
          </div>
          <div class="hamburger_close">
            <button class="hamburger_close_btn"><i class="fa-thin fa-times"></i></button>
          </div>
        </div>
        <div class="hamburger-search-area">
          <h5 class="hamburger-title">Search Now!</h5>
          <div class="hamburger_search">
            <form method="get" action="/">
              <button type="submit"><i class="tji-search"></i></button>
              <input
                type="search"
                autocomplete="off"
                name="s"
                value=""
                placeholder="Search here..."
              />
            </form>
          </div>
        </div>
        <div class="hamburger-infos">
          <h5 class="hamburger-title">Contact Info</h5>
          <div class="contact-info">
            <div class="contact-item">
              <span class="subtitle">Phone</span>
              <a class="contact-link" href="tel:10095447818">+1 (009) 544-7818</a>
            </div>
            <div class="contact-item">
              <span class="subtitle">Email</span>
              <a class="contact-link" href="mailto:info@albina.com">info@albina.com</a>
            </div>
            <div class="contact-item">
              <span class="subtitle">Location</span>
              <span class="contact-link">993 Renner Burg, West Rond, MT 94251-030</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hamburger-socials">
        <h5 class="hamburger-title">Follow Us</h5>
        <div class="social-links style-3">
          <ul>
            <li>
              <a href="https://www.facebook.com/" target="_blank"
                ><i class="fa-brands fa-facebook-f"></i
              ></a>
            </li>
            <li>
              <a href="https://www.instagram.com/" target="_blank"
                ><i class="fa-brands fa-instagram"></i
              ></a>
            </li>

            <li>
              <a href="https://www.linkedin.com/" target="_blank"
                ><i class="fa-brands fa-linkedin-in"></i
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- end: Offcanvas Menu -->
</template>
