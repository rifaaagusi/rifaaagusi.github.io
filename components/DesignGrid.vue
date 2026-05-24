<template>
  <hr class="sec-divider">
  <div class="sec" id="design">
    <div class="sec-top">
      <h2 class="sec-title">Design Work</h2>
      <span class="sec-sub">Graphic Design · Branding · Print</span>
    </div>
    <div class="design-grid">
      <div class="card card-wide" @click="openLightbox('astra')">
        <video class="card-img"
          src="https://res.cloudinary.com/dvfn2i84f/video/upload/q_90,w_600/v1779041624/astra_fy6gyz.mp4"
          autoplay loop muted playsinline>
        </video>
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
      <div class="card" @click="openLightbox('rubrik')">
        <img class="card-img" src="https://mir-s3-cdn-cf.behance.net/projects/404/f0f07e231648175.Y3JvcCwxMzQyLDEwNTAsMjksMA.png" alt="Rubrik Olahraga" loading="lazy">
        <div class="card-overlay">
          <div class="card-hint">Open Project</div>
          <div class="card-info">
            <div class="card-title">Rubrik Olahraga Magazine</div>
            <div class="card-cat">Editorial · Print Design</div>
          </div>
        </div>
      </div>
      <div class="card card-wide" @click="openLightbox('linknet')">
        <video class="card-img"
          src="https://res.cloudinary.com/dvfn2i84f/video/upload/q_90,w_600/v1779041626/linknet_og538k.mp4"
          autoplay loop muted playsinline>
        </video>
        <div class="card-overlay">
          <div class="card-hint">Open Project</div>
          <div class="card-info">
            <div class="card-title">Linknet — Infinite Links Event</div>
            <div class="card-cat">Key Visual · Graphic Design</div>
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
  <!-- rest of your template unchanged -->

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
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400/6c887d226188903.682aaaf50be2f.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/8eee86226188903.682aaaf50eb22.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/a309f4226188903.682aaaf50b3b6.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/adb790226188903.682aaaf50da3b.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/1b79aa226188903.682aaaf50a0f9.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/455ae0226188903.682aaaf50fa2e.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/7f1a4d226188903.682aaaf50f1a1.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/12d461226188903.682aaaf6dd9dd.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/0de57b226188903.682aaaf6de17e.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/8a8e04226188903.682aaaf6de6e0.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/a84477226188903.682aaaf6dd075.jpg',
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
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400/47f1e7226188111.682aa7c982f41.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/1273bf226188111.682aa7c9842bb.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/6ced31226188111.682aa7c98649f.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400/a573e1226188111.682aa7c985e2c.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/f6d209226188111.682aa7c986c9e.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/ed1688226188111.682aa7c98716c.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400/b54f35226188111.682aa7c985073.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/8b2cbc226188111.682aa7c9849ad.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/569fe9226188111.6890594e19a66.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/bb434a226188111.6890594e193b7.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/b31ea3226188111.6890594e1a323.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/7712ab226188111.6890594e18e58.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/9fc34e226188111.6890594e1a910.jpg',
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
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/27766d226189863.682ab0dfd8a82.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/4316d8226189863.682ab0e358524.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/0e267c226189863.682ab0e35924b.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/e687ec226189863.682ab0e09d509.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/b29fb7226189863.682ab0e09e036.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/6ec328226189863.682ab0e09e8c7.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/553c15226189863.682ab0e09f2bf.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/b4f3f8226189863.682ab0e1a36ae.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/cb8df0226189863.682ab0e1a3b7a.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/64ebd4226189863.682ab0e1a4c31.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/2feed0226189863.682ab0e1a46d0.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/18876a226189863.682ab0e1a2ead.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/9c4c9b226189863.682ab0e1a27ab.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/9d8841226189863.682ab0e1a5a4b.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/4ce7ea226189863.682ab0e1a4038.png',
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
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/4654b6231648175.689040399dd11.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/c309db231648175.689040399d7cf.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/c68ed4231648175.6890403a3a2b0.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/fe85a2231648175.6890403a3a70c.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/47d7d6231648175.6890403ac4c0f.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/909236231648175.6890403ac5307.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/71d826231648175.6890403b74e9d.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/ebfa66231648175.6890403b746fd.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/25af74231648175.6890403bf1e05.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/9fefb3231648175.6890403bf23e0.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/b48331231648175.6890403c84aca.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/3720d8231648175.6890403c84585.png',
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
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/36152d231799155.689067f8727bc.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/b5bfb4231799155.689067f8732ef.jpg',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/30fc6f231799155.689065f52721b.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/acda39231799155.689065f52363d.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/9c9561231799155.689065f5216a0.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/6c8f1e231799155.689065f524905.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/e19490231799155.689065f52108d.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/072d05231799155.689065f53528f.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/35b959231799155.689065f521af8.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/fc44ef231799155.689065f526b44.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/6d533d231799155.689065f523173.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/234b83231799155.689065f520a24.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/9a5a5b231799155.689065f51fa8b.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/008713231799155.689065f524efd.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/0440a2231799155.689065f5254c2.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/9a2ef2231799155.689065f523c91.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/72b1ba231799155.689065f52413c.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/fb6ee0231799155.689065f521fb8.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/69b528231799155.689065f52780e.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/38ec28231799155.689065f525cb2.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/2def41231799155.689065f529edc.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/bfe9b5231799155.689065f527cec.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/a33c85231799155.689065f522b07.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/cd1fd9231799155.689065f52244a.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/dd6b4d231799155.689065f528ab1.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/194542231799155.689065f526440.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/2eaa64231799155.689065f528396.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/cb84dd231799155.689065f52914e.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/9db913231799155.689065f529868.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/a8b134231799155.689065f52b775.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/3f7918231799155.689065f52b2c0.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/29e597231799155.689065f52c251.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/528a25231799155.689065f530093.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/94d5fb231799155.689065f52cd63.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/96a7bc231799155.689065f52bcf1.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/e23305231799155.689065f52a595.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/5ed136231799155.689065f52d32a.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/c822ec231799155.689065f52f3e0.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/6b83d8231799155.689065f52ab5f.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/d4de90231799155.689065f5327e6.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/a59309231799155.689065f52e7f3.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/4a735c231799155.689065f52fa31.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/5551ef231799155.689065f534da5.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/e8ff48231799155.689065f52c6db.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/545125231799155.689065f530596.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/47598d231799155.689065f531086.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/8f5a31231799155.689065f530b11.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/8af166231799155.689065f52da04.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/a94585231799155.689065f52e127.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/0c7dad231799155.689065f53170e.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/341d50231799155.689065f52ef26.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/0feb8b231799155.689065f532342.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/fcfcf0231799155.689065f531c8d.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/4c1067231799155.689065f533e1e.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/2085e7231799155.689065f53476c.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/4994bb231799155.689065f533779.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/53af18231799155.689065f532f6b.png',
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/5818f0231799155.689065f53429f.png',
    ]
  },
  osaka: {
    title: 'Osaka Logo Animation',
    meta: 'Motion Graphics · Animation',
    images: [
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/cd86e3231790991.689040b29e0df.png',
    ]
  },
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
  if (e.target === e.currentTarget) closeLightbox()
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