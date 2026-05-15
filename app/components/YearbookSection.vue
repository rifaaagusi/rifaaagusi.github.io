<template>
  <hr class="sec-divider">
  <div class="sec" id="yearbook">
    <div class="sec-top">
      <h2 class="sec-title">Yearbook Design</h2>
      <span class="sec-sub">Layout · Editorial · Print — click any project to browse pages</span>
    </div>
    <p style="font-size:13px;color:var(--muted);margin-bottom:2rem;line-height:1.8">Designed book layouts and covers for 50+ schools including Al Azhar, Labschool, and Nurul Fikri — managing the full pipeline from client brief to print-ready delivery.</p>
    <div class="design-grid">
      <div class="card" v-for="yb in yearbooks" :key="yb.id" @click="openYearbook(yb)">
        <img class="card-img" :src="yb.thumb" :alt="yb.title" loading="lazy">
        <div class="card-overlay">
          <div class="card-hint">Open Book</div>
          <div class="card-info">
            <div class="card-title">{{ yb.title }}</div>
            <div class="card-cat">Yearbook · Graphic Design</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- LIGHTBOX -->
  <div class="yb-lb-overlay" :class="{ open: lbOpen }" @click="handleClick">
    <div class="yb-lb-box">
      <div class="yb-lb-header">
        <div class="yb-lb-title">{{ activeYb.title }}</div>
        <button class="lb-close" @click="closeLb">✕</button>
      </div>
      <div class="yb-lb-body">
        <iframe id="yb-lb-frame" class="yb-lb-frame"
          :src="activeYb.folder ? `https://drive.google.com/embeddedfolderview?id=${activeYb.folder}#grid` : ''"
          allowfullscreen loading="lazy">
        </iframe>
      </div>
      <div class="yb-lb-footer">
        <span style="font-size:11px;color:var(--muted)">Browsing via Google Drive — all pages viewable inside</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const lbOpen = ref(false)
const activeYb = ref({})

const yearbooks = [
  { id: 'yb1', title: 'AL KP Magazin', folder: '1fvRHijnSKl2g27uKbpVAsDcs1HlYxzHh', thumb: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/4b0e16231648175.688ccf88461f5.png' },
  { id: 'yb2', title: 'JPG Book', folder: '1mCfPrrGxk8gqdR4SsVstU10Zm7nV0Mgl', thumb: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/f6518a231648175.688ccf8845981.png' },
  { id: 'yb3', title: 'Labscib Apple Music', folder: '1JxpRPBL2pYipWGMl8CjkvmMRSRDTUBU6', thumb: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/090a3a231648175.6890403912703.png' },
  { id: 'yb4', title: 'SD GIS Movie Poster', folder: '16K2pfI8C2TGrRuh6eliZe9g7_-b33eF9', thumb: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/4654b6231648175.689040399dd11.png' },
  { id: 'yb5', title: 'SDI Alpus', folder: '1FSuxhxBlx9XCtK7mp14rI0cvuAu7U_Ql', thumb: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/c68ed4231648175.6890403a3a2b0.png' },
  { id: 'yb6', title: 'SMA Alpus Magazine', folder: '1-rOVy9qStUiLDgTtq_EutzEha8SLbysK', thumb: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/47d7d6231648175.6890403ac4c0f.png' },
  { id: 'yb7', title: 'Sulthon Movie Magazine', folder: '1CLNwWCXTBPH34papa_--hIVEDv5DI252', thumb: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/71d826231648175.6890403b74e9d.png' },
]

function openYearbook(yb) {
  activeYb.value = yb
  lbOpen.value = true
  document.body.style.overflow = 'hidden'
}

function closeLb() {
  lbOpen.value = false
  activeYb.value = {}
  document.body.style.overflow = ''
}

function handleClick(e) {
  if (e.target.classList.contains('yb-lb-overlay')) closeLb()
}
</script>