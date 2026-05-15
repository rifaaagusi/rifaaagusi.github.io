<template>
  <hr class="sec-divider">
  <div class="sec" id="design">
    <div class="sec-top">
      <h2 class="sec-title">Design Work</h2>
      <span class="sec-sub">Graphic Design · Branding · Print</span>
    </div>
    <div class="design-grid">
      <div class="card card-wide" @click="openLightbox('astra')">
        <img class="card-img" src="https://mir-s3-cdn-cf.behance.net/projects/404/e90176226188903.Y3JvcCwxNzI1LDEzNDksNTUsODk.png" alt="Astra Finance" loading="lazy">
        <div class="card-overlay">
          <div class="card-hint">Open Project</div>
          <div class="card-info">
            <div class="card-title">Astra Finance — Farewell Event</div>
            <div class="card-cat">Key Visual · Graphic Design</div>
          </div>
        </div>
      </div>
      <div class="card" @click="openLightbox('sorrow')">
        <img class="card-img" src="https://mir-s3-cdn-cf.behance.net/projects/404/efb701226189863.Y3JvcCwxMzgwLDEwODAsMjcwLDA.png" alt="Sorrow Hill" loading="lazy">
        <div class="card-overlay">
          <div class="card-hint">Open Project</div>
          <div class="card-info">
            <div class="card-title">Sorrow Hill Band Logo</div>
            <div class="card-cat">Logo Design · Branding</div>
          </div>
        </div>
      </div>
      <div class="card" @click="openLightbox('linknet')">
        <img class="card-img" src="https://mir-s3-cdn-cf.behance.net/projects/404/7fc1ed226188111.Y3JvcCwxMDA3LDc4OCwxOTcsMA.png" alt="Linknet" loading="lazy">
        <div class="card-overlay">
          <div class="card-hint">Open Project</div>
          <div class="card-info">
            <div class="card-title">Linknet — Infinite Links Event</div>
            <div class="card-cat">Key Visual · Graphic Design</div>
          </div>
        </div>
      </div>
      <div class="card card-wide" @click="openLightbox('rubrik')">
        <img class="card-img" src="https://mir-s3-cdn-cf.behance.net/projects/404/f0f07e231648175.Y3JvcCwxMzQyLDEwNTAsMjksMA.png" alt="Rubrik Olahraga" loading="lazy">
        <div class="card-overlay">
          <div class="card-hint">Open Project</div>
          <div class="card-info">
            <div class="card-title">Rubrik Olahraga Magazine</div>
            <div class="card-cat">Editorial · Print Design</div>
          </div>
        </div>
      </div>
      <div class="card" @click="openLightbox('ceki')">
        <img class="card-img" src="https://mir-s3-cdn-cf.behance.net/projects/404/94dced231799155.Y3JvcCwxNTM0LDEyMDAsMTY3LDA.png" alt="Ceki Card" loading="lazy">
        <div class="card-overlay">
          <div class="card-hint">Open Project</div>
          <div class="card-info">
            <div class="card-title">Custom Ceki Card</div>
            <div class="card-cat">Illustration · Design</div>
          </div>
        </div>
      </div>
      <div class="card" @click="openLightbox('osaka')">
        <img class="card-img" src="https://mir-s3-cdn-cf.behance.net/projects/404/d4e644231790991.Y3JvcCwxMzgwLDEwODAsMjcwLDA.png" alt="Osaka Logo" loading="lazy">
        <div class="card-overlay">
          <div class="card-hint">Open Project</div>
          <div class="card-info">
            <div class="card-title">Osaka Logo Animation</div>
            <div class="card-cat">Motion Graphics</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- LIGHTBOX -->
  <div class="lb-overlay" :class="{ open: lightboxOpen }" @click="handleOverlayClick">
    <div class="lb-header">
      <div>
        <div class="lb-title">{{ currentProject.title }}</div>
        <div class="lb-meta">{{ currentProject.meta }}</div>
      </div>
      <div class="lb-nav">
        <span class="lb-counter">{{ currentProject.images?.length }} images</span>
        <button class="lb-close" @click="closeLightbox">✕</button>
      </div>
    </div>
    <div class="lb-body">
      <div class="lb-grid">
        <img v-for="(img, i) in currentProject.images" :key="i"
          :src="img" :alt="currentProject.title + ' ' + (i+1)"
          loading="lazy" @click.stop="openZoom(img)">
      </div>
    </div>
  </div>

  <!-- ZOOM -->
  <div class="lb-zoom" :class="{ open: zoomOpen }" @click="closeZoom">
    <button class="lb-zoom-close" @click="closeZoom">✕</button>
    <img :src="zoomSrc" alt="">
  </div>
</template>

<script setup>
import { ref } from 'vue'

const lightboxOpen = ref(false)
const zoomOpen = ref(false)
const zoomSrc = ref('')
const currentProject = ref({})

const projects = {
  astra: {
    title: 'Astra Finance — Farewell Event',
    meta: 'Key Visual · Graphic Design',
    images: [
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/46ef2a226188903.682aaaf78b453.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/67a10e226188903.682aaaf50cbd1.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/34c256226188903.682aaaf50ab18.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/def2fc226188903.682aaaf50e2cb.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/a3d97f226188903.682aaaf50b84a.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/f9b32b226188903.682aaaf50c5d2.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400/e3ab70226188903.682aaaf50d3ff.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/311f40226188903.682aaaf5102e8.png',
    ]
  },
  linknet: {
    title: 'Linknet — Infinite Links Event',
    meta: 'Key Visual · Graphic Design',
    images: [
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/3c0e0d226188111.682aa5b550f33.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/813997226188111.682aa7c9877f0.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/1fabc4226188111.682aa7c985722.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/7e416e226188111.682aa7c983c58.png',
    ]
  },
  sorrow: {
    title: 'Sorrow Hill Band Logo',
    meta: 'Logo Design · Branding',
    images: [
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/570b34226189863.682ab0e358d45.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/84ceb1226189863.682ab0e35977b.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/51d11b226189863.682ab0dfd914d.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/f0adbc226189863.682ab0dfd8418.png',
    ]
  },
  rubrik: {
    title: 'Rubrik Olahraga Magazine',
    meta: 'Editorial · Print Design',
    images: [
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/4b0e16231648175.688ccf88461f5.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/f6518a231648175.688ccf8845981.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/090a3a231648175.6890403912703.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/16821f231648175.6890403912b67.png',
    ]
  },
  osaka: {
    title: 'Osaka Logo Animation',
    meta: 'Motion Graphics · Animation',
    images: [
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/cd86e3231790991.689040b29e0df.png',
    ]
  },
  ceki: {
    title: 'Custom Ceki Card',
    meta: 'Illustration · Design',
    images: [
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/562164231799155.689065f7e99ec.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/042788231799155.689065f7e8e46.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/1aa678231799155.689065f7e945a.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/54383d231799155.689067f872d83.jpg',
    ]
  }
}

function openLightbox(key) {
  currentProject.value = projects[key]
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

function closeLightbox() {
  lightboxOpen.value = false
  document.body.style.overflow = ''
}

function handleOverlayClick(e) {
  if (e.target.classList.contains('lb-overlay')) closeLightbox()
}

function openZoom(src) {
  zoomSrc.value = src
  zoomOpen.value = true
}

function closeZoom() {
  zoomOpen.value = false
  zoomSrc.value = ''
}
</script>