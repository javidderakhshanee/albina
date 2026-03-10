<script setup lang="ts">
import Breadcrumber from '@/components/Breadcrumber.vue'
</script>

<template>
  <Breadcrumber Title="Privacy And Policy" />

  <!-- start: History Section -->
  <section class="terms-and-conditions section-gap">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-10">
          <div class="terms-and-conditions-wrapper">
            <div>
              <h2>Privacy &amp; Policy</h2>
              <p class="muted">Last updated: September 9, 2025</p>

              <div class="note">
                <strong>Short version:</strong> Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Assumenda beatae cum quisquam debitis atque minus officia deserunt ad saepe
                quae dignissimos obcaecati totam voluptas earum reprehenderit, at vel id nemo.
              </div>
            </div>

            <nav class="toc" aria-label="Table of contents">
              <h2>Table of Contents</h2>
              <ol>
                <li>
                  <button class="tj-scroll-btn" data-target="#definitions">Definitions</button>
                </li>
                <li>
                  <button class="tj-scroll-btn" data-target="#license">
                    License &amp; Permitted Use
                  </button>
                </li>
                <li>
                  <button class="tj-scroll-btn" data-target="#restrictions">Restrictions</button>
                </li>
                <li>
                  <button class="tj-scroll-btn" data-target="#support">Support Policy</button>
                </li>
                <li>
                  <button class="tj-scroll-btn" data-target="#updates">
                    Updates &amp; Compatibility
                  </button>
                </li>
              </ol>
            </nav>

            <div id="definitions">
              <h3>1. Definitions</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae blanditiis
                nesciunt hic, expedita deleniti fugiat vero. Dicta pariatur animi cupiditate debitis
                et nemo, quidem voluptas laudantium, consequuntur cumque labore! Voluptates!
              </p>
            </div>

            <div id="license">
              <h3>2. License &amp; Permitted Use</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis excepturi laborum
                dolorum
              </p>
              <ul>
                <li>
                  <strong>Regular License:</strong> Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Architecto vero culpa consequatur quia facere dolore
                  exercitationem placeat debitis eos id neque eum, officiis impedit minima enim
                  quam? Ratione, debitis quibusdam?
                </li>
                <li>
                  <strong>Extended License:</strong> Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Quibusdam ratione explicabo velit in ut cupiditate aliquam
                  expedita, enim voluptatibus.
                </li>
              </ul>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis excepturi laborum
                dolorum reiciendis architecto, consequuntur atque quas est expedita ab porro!
                Eveniet illo modi repellat alias quasi rem architecto quidem.
              </p>
            </div>

            <div id="restrictions">
              <h3>3. Restrictions</h3>
              <p>You agree that you will <strong>not</strong>:</p>
              <ul>
                <li>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias accusantium
                  repellat deleniti magnam quidem, ipsum recusandae molestias earum.
                </li>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, harum quod
                  quos cupiditate tenetur quasi eius suscipit tempora vitae quis. Unde obcaecati,
                  repellat maxime ea delectus fugiat nisi! Beatae, quidem!
                </li>
                <li>suscipit tempora vitae quis. Unde obcaecati, repellat maxime ea delectus</li>
              </ul>
            </div>
            <p class="muted">
              <small>
                This Terms &amp; Conditions page is provided for general guidance only and does not
                constitute legal advice. Please consult your legal advisor to adapt it to your
                specific needs and local laws.
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- end: History Section -->
</template>
