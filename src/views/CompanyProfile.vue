<script setup lang="ts">
import Breadcrumber from '@/components/Breadcrumber.vue'
</script>

<template>
  <Breadcrumber Title="Company Profile" />
  <!-- Section Navigation - Horizontal Menu Below Breadcrumb -->
  <nav class="section-nav" id="sectionNav">
    <div class="section-nav-toggle" id="navToggle">
      <svg width="20px" height="20px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        <title>ionicons-v5-f</title>
        <path
          d="M448,64,64,240.14H264a8,8,0,0,1,8,8V448Z"
          style="
            fill: none;
            stroke: #fff;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-width: 32px;
          "
        />
      </svg>
      <span>Navigate</span>
    </div>
    <ul class="section-nav-list" id="navList">
      <li><a href="#about-us" class="section-nav-link active">About Us</a></li>
      <li><a href="#company-overview" class="section-nav-link">Company Overview</a></li>
      <li><a href="#ceo-message" class="section-nav-link">CEO's Message</a></li>
      <li><a href="#core-values" class="section-nav-link">Core Values</a></li>
      <li><a href="#mission-vision" class="section-nav-link">Mission &amp; Vision</a></li>
      <li><a href="#our-services" class="section-nav-link">Our Services</a></li>
      <li><a href="#company-policies" class="section-nav-link">Company Policies</a></li>
      <li><a href="#achievements" class="section-nav-link">Achievements</a></li>
    </ul>
  </nav>

  <!-- start: About Section -->
  <section id="about-us" class="tj-about-section h8-about section-gap">
    <div class="container">
      <div class="row row-gap-4">
        <div class="col-12">
          <div class="about-content-area-2 wow fadeInUp" data-wow-delay=".3s">
            <div class="sec-heading style-3">
              <div class="row">
                <div class="col-12 col-lg-4">
                  <div class="h8-about-left">
                    <span class="sub-title wow fadeInUp" data-wow-delay=".3s">
                      <img src="/images/logos/small-logo.png" alt="small logo" />About Us
                    </span>
                  </div>
                </div>
                <div class="col-12 col-lg-8">
                  <div class="h8-about-content-inner">
                    <h2 class="sec-title title-highlight">
                      THE COMPANY WAS ESTABLISHED IN 2004 TO BE ONE OF THE MANY COMPANIES INVOLVED
                      IN THE DEVELOPMENT OF THE COUNTRY AND STARTED WITH RAPID STEPS
                    </h2>
                  </div>
                </div>
              </div>
              <div class="row align-items-center">
                <div class="col-12 col-lg-4"></div>
                <div class="col-12 col-lg-8">
                  <div class="h8-about-item-wrapper">
                    <div class="h8-about-item h8-about-item-counter">
                      <div class="countup-item style-2">
                        <div class="count-inner">
                          <div class="inline-content">
                            <span class="odometer countup-number" data-count="21"></span>
                            <sup class="count-plus">+</sup>
                          </div>
                          <span class="count-text">Years of Corporate Experience.</span>
                        </div>
                      </div>
                    </div>
                    <div class="h8-about-item h8-about-item-desc">
                      <div class="h8-about-item-content">
                        <p class="desc">
                          THE COMPANY HAS IMPLEMENTED MANY PROJECTS WITH THE GOVERNMENT OF IRAQ SUCH
                          AS BRIDGES, ROADS, RESIDENTIAL BUILDINGS, POWER PLANTS, WATER PLANTS,
                          COMMUNICATION NETWORKS AND SECURITY SOLUTIONS. HIGH ACCURACY IN
                          IMPLEMENTATION AND SPECIFIC SPECIFICATIONS ON TIME TO BE THE COMPANY
                          WITHIN A NETWORK OF INTERNATIONAL COMPANIES. The company also has two
                          headquarters in the capital, Baghdad, and in Holy Karbala, and the company
                          has several offices spread throughout the world. Including China, Türkiye,
                          the United Arab Emirates and Iran
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- end: About Section -->
  <!-- start: Choose Section -->
  <section id="company-overview" class="tj-choose-section section-gap">
    <div class="container">
      <div class="row">
        <div class="col-xl-6 col-lg-6 order-lg-1 order-2">
          <div class="about-img-area style-2 wow fadeInLeft" data-wow-delay=".3s">
            <div class="about-img overflow-hidden">
              <img data-speed=".8" src="/images/about/about-5.png" alt="" />
            </div>
          </div>
        </div>
        <div class="col-xl-6 col-lg-6 order-lg-2 order-1">
          <div class="sec-heading text-center">
            <h2 class="sec-title title-anim">Company Brief Overview</h2>

            <p style="color: #fff; margin-top: 1rem; text-align: left" class="desc">
              Our portfolio includes the execution of numerous vital projects in collaboration with
              the Iraqi government. These encompass major commercial and real estate developments
              such as: Bridges, Roads, Residential Buildings, Power Generation Plants, Water
              Treatment Facilities, Commercial Branding Projects, Construction of Industrial Cities,
              Telecommunication Networks, Integrated Security Solutions, and the Development of
              Electrical Grids and Towers. We are committed to the highest levels of precision and
              quality in execution, adhering strictly to specified requirements, and maintaining
              full compliance with project timelines. This commitment has solidified the Company's
              position within a distinguished network of international partnerships. The Company
              maintains two primary headquarters in the Republic of Iraq: one in the Capital,
              Baghdad, and the other in Holy Karbala. Furthermore, we possess extensive
              international offices and partnerships across the globe, including locations in China,
              Turkey, the United Arab Emirates, and Iran.
            </p>
          </div>
        </div>
      </div>
      <!-- <div class="row">
          <div class="col-12">
            <div style="max-width: 700px;" class="sec-heading text-center">
              <h2 class="sec-title title-anim">Company Brief Overview</h2>

              <p style="color: #fff; margin-top: 1rem; text-align: left;" class="desc">
                Our portfolio includes the execution of numerous vital projects in collaboration with the Iraqi
                government. These encompass major commercial and real estate developments such as: Bridges, Roads,
                Residential Buildings, Power Generation Plants, Water Treatment Facilities, Commercial Branding
                Projects, Construction of Industrial Cities, Telecommunication Networks, Integrated Security
                Solutions, and the Development of Electrical Grids and Towers.
                We are committed to the highest levels of precision and quality in execution, adhering strictly to
                specified requirements, and maintaining full compliance with project timelines. This commitment has
                solidified the Company's position within a distinguished network of international partnerships.
                The Company maintains two primary headquarters in the Republic of Iraq: one in the Capital, Baghdad,
                and the other in Holy Karbala. Furthermore, we possess extensive international offices and
                partnerships across the globe, including locations in China, Turkey, the United Arab Emirates, and
                Iran.
              </p>
            </div>
          </div>
        </div> -->
    </div>
  </section>
  <!-- end: Choose Section -->
  <!-- start: Banner Section -->
  <section id="ceo-message" class="tj-banner-section h6-hero section-gap-x">
    <div class="banner-area">
      <div class="banner-left-box">
        <div class="banner-content">
          <h2 class="banner-title title-anim" style="margin-bottom: 0">Mr. Mohammed Numan</h2>
          <span style="font-weight: 900; margin-top: 2rem">Owner / CEO's Message</span>

          <div class="h6-hero-bottom wow fadeInLeft" style="margin-top: 2rem" data-wow-delay=".9s">
            <div class="h6-hero-history">
              <h4 class="h6-hero-history-title">
                Dear Colleagues, Valued Partners, and Esteemed Clients
              </h4>
              <p class="h6-hero-history-desc">
                Since our Company's inception in 2004, our primary goal has been to transcend
                traditional contracting limits and become the strategic partner in building a
                sustainable and prosperous future for our nation and the wider region. We firmly
                believe that true growth is achieved by combining world-class engineering precision
                with a deep understanding of our local needs. The dedication of our team of
                engineers and consultants, coupled with our unwavering commitment to quality and
                transparency, is what has enabled us to successfully execute complex and vital
                projects across the infrastructure, energy, and construction sectors. Every project
                we deliver stands as a testament to our pursuit of leadership and innovation. We
                look forward to the future with confidence, committed to enhancing our international
                network and adopting the latest technologies (such as the recently added solar
                energy solutions), ensuring that our Company remains a benchmark for efficiency and
                professionalism.
              </p>
            </div>
          </div>

          <div class="bg-shape-2">
            <img src="/images/shape/pattern-3.svg" alt="" />
          </div>
        </div>
      </div>
      <div class="banner-right-box">
        <div class="banner-img wow fadeInUp" data-wow-delay=".3s">
          <img data-speed=".8" src="/images/hero/h6-hero-banner.png" alt="" />
        </div>
      </div>
    </div>
  </section>
  <!-- end: Banner Section -->
  <!-- start: Choose Section -->
  <section id="core-values" class="tj-choose-section tj-choose-section-about section-gap">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="sec-heading-wrap">
            <span class="sub-title wow fadeInUp" data-wow-delay=".3s">
              <img src="/images/logos/small-logo-white.png" alt="small logo" />Core Values
            </span>
            <div class="heading-wrap-content">
              <div class="sec-heading">
                <h2 class="sec-title title-anim">
                  Empowering Business with <span>Expertise.</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row row-gap-4 rightSwipeWrap">
        <div class="col-lg-4">
          <div class="choose-box right-swipe">
            <div class="choose-content">
              <div class="choose-icon">
                <img src="/images/icons/badge.png" alt="badge" />
              </div>
              <h4 class="title">Quality & Precision</h4>
              <p class="desc">
                Adherence to the highest engineering and operational standards, and ensuring
                projects are executed with utmost precision and on schedule.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="choose-box right-swipe">
            <div class="choose-content">
              <div class="choose-icon">
                <img src="/images/icons/leadership.png" alt="badge" />
              </div>
              <h4 class="title">Leadership & Innovation</h4>
              <p class="desc">
                The continuous pursuit of implementing the latest global architectural and
                engineering technologies and solutions to keep pace with development Leadership &
                Innovation
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="choose-box right-swipe">
            <div class="choose-content">
              <div class="choose-icon">
                <img src="/images/icons/efficacy.png" alt="badge" />
              </div>
              <h4 class="title">Efficiency & Professionalism</h4>
              <p class="desc">
                Employing the best engineering and consulting staff and working with high
                professionalism to deliver results that exceed client expectations.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="choose-box right-swipe">
            <div class="choose-content">
              <div class="choose-icon">
                <img src="/images/icons/integration.png" alt="badge" />
              </div>
              <h4 class="title">Integrity & Transparency</h4>
              <p class="desc">
                Building trust with clients and partners by operating with the highest ethical
                standards and transparency in all dealings. Integrity & Transparency
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="choose-box right-swipe">
            <div class="choose-content">
              <div class="choose-icon">
                <img src="/images/icons/ecology.png" alt="badge" />
              </div>
              <h4 class="title">Sustainable Development</h4>
              <p class="desc">
                Actively contributing to urban and service development, while taking into account
                the environmental and social dimensions of national projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- end: Choose Section -->
  <!-- start: About Section -->
  <section id="mission-vision" class="tj-about-section-2 section-gap section-gap-x">
    <div class="container">
      <div class="row">
        <div class="col-xl-6 col-lg-6 order-lg-1 order-2">
          <div class="about-img-area style-2 wow fadeInLeft" data-wow-delay=".3s">
            <div class="about-img overflow-hidden">
              <img data-speed=".8" src="/images/about/about-5.png" alt="" />
            </div>
          </div>
        </div>
        <div class="col-xl-6 col-lg-6 order-lg-2 order-1">
          <div class="about-content-area">
            <div class="sec-heading">
              <span class="sub-title wow fadeInUp" data-wow-delay=".3s">
                <img src="/images/logos/small-logo.png" alt="small logo" />Get to Know Us
              </span>
            </div>
          </div>
          <div class="about-bottom-area">
            <div class="mission-vision-box wow fadeInLeft" data-wow-delay=".5s">
              <h4 class="title">Our Mission</h4>
              <p class="desc">
                Our mission is to execute multi-disciplinary infrastructure and engineering projects
                with the highest standards of precision and efficiency, relying on our specialized
                team of global engineers and consultants, and committed to delivering work within
                specified timelines and required specifications, to ensure sustainable value for our
                clients and actively contribute to the nation’s economic and urban growth.
              </p>
            </div>
            <div class="mission-vision-box wow fadeInRight" data-wow-delay=".5s">
              <h4 class="title">Our Vision</h4>
              <p class="desc">
                To be the leading and innovative engineering and consulting firm in Iraq and Middle
                East region, the foremost contributor to building a sustainable and advanced urban
                and service future, by delivering integrated infrastructure solutions that exceed
                expectations and keep pace with the fastest global technological and architectural
                developments.
              </p>
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
  </section>
  <!-- end: About Section -->
  <!-- start: Our Services Section -->
  <section id="our-services" class="tj-service-section service-4 section-gap">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="sec-heading-wrap">
            <span class="sub-title wow fadeInUp" data-wow-delay=".3s">
              <img src="/images/logos/small-logo.png" alt="small logo" />Our Services
            </span>
            <div class="heading-wrap-content">
              <div class="sec-heading">
                <h2 class="sec-title title-anim">What We <span>Offer</span></h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row row-gap-4" style="margin-top: 40px">
        <div class="col-lg-4 col-md-6">
          <div class="service-item style-4 wow fadeInUp" data-wow-delay=".1s">
            <div class="service-content">
              <h4 class="title"><a href="service-details.html">Infrastructure & Civil Works</a></h4>
              <p class="desc">
                We deliver full-spectrum services encompassing the design, execution, and
                contracting of major civil works (roads, bridges, water treatment, industrial
                cities) alongside real estate and commercial development solutions.
              </p>
              <a class="text-btn" href="service-details.html">
                <span class="btn-text"><span>Learn More</span></span>
                <span class="btn-icon"><i class="tji-arrow-right-long"></i></span>
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="service-item style-4 wow fadeInUp" data-wow-delay=".3s">
            <div class="service-content">
              <h4 class="title">
                <a href="service-details.html">Architectural & Structural Engineering</a>
              </h4>
              <p class="desc">
                We focus on the design and execution of residential and commercial buildings,
                including high-rise towers and multi-story facilities. Our expertise is complemented
                by engineering consultation and comprehensive pre-construction planning.
              </p>
              <a class="text-btn" href="service-details.html">
                <span class="btn-text"><span>Learn More</span></span>
                <span class="btn-icon"><i class="tji-arrow-right-long"></i></span>
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="service-item style-4 wow fadeInUp" data-wow-delay=".5s">
            <div class="service-content">
              <h4 class="title">
                <a href="service-details.html">Project Management & Execution</a>
              </h4>
              <p class="desc">
                We provide comprehensive project management and engineering supervision, ensuring
                quality assurance and strict adherence to timelines and budgets. This includes
                coordination of multi-disciplinary contracting and robust risk management.
              </p>
              <a class="text-btn" href="service-details.html">
                <span class="btn-text"><span>Learn More</span></span>
                <span class="btn-icon"><i class="tji-arrow-right-long"></i></span>
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="service-item style-4 wow fadeInUp" data-wow-delay=".7s">
            <div class="service-content">
              <h4 class="title"><a href="service-details.html">Energy & Electrical Networks</a></h4>
              <p class="desc">
                We cover the construction and development of power generation and transmission
                stations, modernization of the electrical grid, and offer integrated Mechanical,
                Electrical, and Plumbing (MEP) works for all projects.
              </p>
              <a class="text-btn" href="service-details.html">
                <span class="btn-text"><span>Learn More</span></span>
                <span class="btn-icon"><i class="tji-arrow-right-long"></i></span>
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="service-item style-4 wow fadeInUp" data-wow-delay=".7s">
            <div class="service-content">
              <h4 class="title">
                <a href="service-details.html">Renewable Energy - Solar PV Systems</a>
              </h4>
              <p class="desc">
                We offer design, installation, and commissioning of Solar Photovoltaic (PV) systems,
                provide clean energy solutions for industrial and residential facilities, and
                conduct consultancy and feasibility studies for all renewable energy projects.
              </p>
              <a class="text-btn" href="service-details.html">
                <span class="btn-text"><span>Learn More</span></span>
                <span class="btn-icon"><i class="tji-arrow-right-long"></i></span>
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="service-item style-4 wow fadeInUp" data-wow-delay=".7s">
            <div class="service-content">
              <h4 class="title">
                <a href="service-details.html">Telecommunications & Specialized Solutions</a>
              </h4>
              <p class="desc">
                We specialize in the development of telecommunication networks and towers, and the
                provision of integrated security solutions and systems.
              </p>
              <a class="text-btn" href="service-details.html">
                <span class="btn-text"><span>Learn More</span></span>
                <span class="btn-icon"><i class="tji-arrow-right-long"></i></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- end: Our Services Section -->
  <!-- start: Choose Section -->
  <section id="company-policies" class="tj-choose-section tj-choose-section-about section-gap">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="sec-heading-wrap">
            <span class="sub-title wow fadeInUp" data-wow-delay=".3s">
              <img src="/images/logos/small-logo-white.png" alt="small logo" />Company Policies
            </span>
            <div class="heading-wrap-content">
              <div class="sec-heading">
                <!-- <h2 class="sec-title title-anim">Empowering Business with <span>Expertise.</span></h2> -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row row-gap-4 rightSwipeWrap">
        <div class="col-lg-4">
          <div class="choose-box choose-box-secondary right-swipe">
            <div class="choose-content">
              <h4 class="title">
                <a href="policy-details.html">Working Principles and Ethical Values</a>
              </h4>
              <p class="desc">
                Al Bina Al Markazy Policy for Working Principles and Ethical Values
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="choose-box choose-box-secondary right-swipe">
            <div class="choose-content">
              <h4 class="title">
                <a href="policy-details.html">Corporate Social Responsibility (CSR)</a>
              </h4>
              <p class="desc">Al Bina Al Markazy Corporate Social Responsibility (CSR) Policy</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="choose-box choose-box-secondary right-swipe">
            <div class="choose-content">
              <h4 class="title"><a href="policy-details.html">Quality Policy</a></h4>
              <p class="desc">Al Bina Al Markazy Quality Policy</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="choose-box choose-box-secondary right-swipe">
            <div class="choose-content">
              <h4 class="title">
                <a href="policy-details.html">Health, Safety, and Environmental (HSE)</a>
              </h4>
              <p class="desc">Al Bina Al Markazy Health, Safety, and Environmental (HSE) Policy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- end: Choose Section -->
  <!-- start: Award Section -->
  <section id="achievements" class="tj-award section-gap">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="sec-heading sec-heading-centered style-2 style-6">
            <span class="sub-title wow fadeInUp" data-wow-delay=".3s">
              <img src="/images/logos/small-logo.png" alt="small logo" />Our Achievements
            </span>
            <h2 class="sec-title title-anim">Our pursuit of perfection has recognized</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="tj-award-wrapper tj-active-bg-wrapper">
            <div class="tj-award-item tj-active-bg-item wow fadeInUp" data-wow-delay=".3s">
              <div class="tj-award-item-inner">
                <div class="row align-items-center justify-content-between">
                  <div class="col-md-4 tj-award-img-wrapper">
                    <h6 class="tj-award-index">01.</h6>
                    <div class="tj-award-img">
                      <img src="/images/logos/small-logo.png" alt="" />
                    </div>
                  </div>
                  <div class="col-md-4 col-lg-3 tj-award-title-wrapper">
                    <h5 class="tj-award-title">Karbala International Airport</h5>
                  </div>
                  <div class="col-md-4 tj-award-date-wrapper">
                    <h6 class="tj-award-result"></h6>
                    <h6 class="tj-award-date">2010</h6>
                  </div>
                </div>
              </div>
            </div>
            <div class="tj-award-item tj-active-bg-item wow fadeInUp" data-wow-delay=".3s">
              <div class="tj-award-item-inner">
                <div class="row align-items-center justify-content-between">
                  <div class="col-md-4 tj-award-img-wrapper">
                    <h6 class="tj-award-index">02.</h6>
                    <div class="tj-award-img">
                      <img src="/images/logos/small-logo.png" alt="" />
                    </div>
                  </div>
                  <div class="col-md-4 col-lg-3 tj-award-title-wrapper">
                    <h5 class="tj-award-title">Baghdad City and Badur Najaf</h5>
                  </div>
                  <div class="col-md-4 tj-award-date-wrapper">
                    <h6 class="tj-award-result"></h6>
                    <h6 class="tj-award-date">2016</h6>
                  </div>
                </div>
              </div>
            </div>
            <div class="tj-award-item tj-active-bg-item wow fadeInUp" data-wow-delay=".3s">
              <div class="tj-award-item-inner">
                <div class="row align-items-center justify-content-between">
                  <div class="col-md-4 tj-award-img-wrapper">
                    <h6 class="tj-award-index">03.</h6>
                    <div class="tj-award-img">
                      <img src="/images/logos/small-logo.png" alt="" />
                    </div>
                  </div>
                  <div class="col-md-4 col-lg-3 tj-award-title-wrapper">
                    <h5 class="tj-award-title">Mall Al-Jadriyah / Ghadeer Karbala</h5>
                  </div>
                  <div class="col-md-4 tj-award-date-wrapper">
                    <h6 class="tj-award-result"></h6>
                    <h6 class="tj-award-date">2020</h6>
                  </div>
                </div>
              </div>
            </div>
            <div class="tj-award-item tj-active-bg-item wow fadeInUp" data-wow-delay=".3s">
              <div class="tj-award-item-inner">
                <div class="row align-items-center justify-content-between">
                  <div class="col-md-4 tj-award-img-wrapper">
                    <h6 class="tj-award-index">04.</h6>
                    <div class="tj-award-img">
                      <img src="/images/logos/small-logo.png" al="" />
                    </div>
                  </div>
                  <div class="col-md-4 col-lg-3 tj-award-title-wrapper">
                    <h5 class="tj-award-title">Industrial City in Najaf</h5>
                  </div>
                  <div class="col-md-4 tj-award-date-wrapper">
                    <h6 class="tj-award-result"></h6>
                    <h6 class="tj-award-date">2025</h6>
                  </div>
                </div>
              </div>
            </div>
            <div class="tj-award-item tj-active-bg-item wow fadeInUp" data-wow-delay=".3s">
              <div class="tj-award-item-inner">
                <div class="row align-items-center justify-content-between">
                  <div class="col-md-4 tj-award-img-wrapper">
                    <h6 class="tj-award-index">05.</h6>
                    <div class="tj-award-img">
                      <img src="/images/logos/small-logo.png" alt="" />
                    </div>
                  </div>
                  <div class="col-md-4 col-lg-3 tj-award-title-wrapper">
                    <h5 class="tj-award-title">Southern Link Road Project in Karbala</h5>
                  </div>
                  <div class="col-md-4 tj-award-date-wrapper">
                    <h6 class="tj-award-result"></h6>
                    <h6 class="tj-award-date">2025</h6>
                  </div>
                </div>
              </div>
            </div>
            <div class="tj-award-item tj-active-bg-item wow fadeInUp" data-wow-delay=".3s">
              <div class="tj-award-item-inner">
                <div class="row align-items-center justify-content-between">
                  <div class="col-md-4 tj-award-img-wrapper">
                    <h6 class="tj-award-index">06.</h6>
                    <div class="tj-award-img">
                      <img src="/images/logos/small-logo.png" alt="" />
                    </div>
                  </div>
                  <div class="col-md-4 col-lg-3 tj-award-title-wrapper">
                    <h5 class="tj-award-title">Karbala - Najaf Highway</h5>
                  </div>
                  <div class="col-md-4 tj-award-date-wrapper">
                    <h6 class="tj-award-result"></h6>
                    <h6 class="tj-award-date">2025</h6>
                  </div>
                </div>
              </div>
            </div>
            <span class="active-bg"></span>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- end: Award Section -->
</template>
