<template>
  <div class="mag-wrap">
    <div class="mag-book-container" style="min-height:480px;position:relative">
      <div v-if="loading" style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:1rem;">
        <div style="width:32px;height:32px;border:2px solid #2a2a27;border-top-color:#ff5c1a;border-radius:50%;animation:spin 0.8s linear infinite"></div>
        <span style="font-size:12px;letter-spacing:0.1em;text-transform:uppercase;color:#6b6a65">Loading pages…</span>
      </div>
      <div ref="magBook"></div>
    </div>
    <p class="mag-hint">↖ Drag the corner to flip · or use buttons</p>
    <div class="mag-nav">
      <button class="mag-btn" :disabled="currentPage === 0" @click="magPrev">← Prev</button>
      <span class="mag-counter">{{ loading ? 'Loading…' : `Page ${currentPage + 1} of ${totalPages}` }}</span>
      <button class="mag-btn" :disabled="currentPage >= totalPages - 2" @click="magNext">Next →</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const magBook = ref(null)
const loading = ref(true)
const currentPage = ref(0)
const totalPages = ref(16)
let flipInstance = null

const magImages = [
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

onMounted(async () => {
  const { PageFlip } = await import('page-flip')
  await preloadImages()
  buildFlipbook(PageFlip)
})

function preloadImages() {
  return Promise.all(magImages.map(src => new Promise(resolve => {
    const img = new Image()
    img.onload = img.onerror = resolve
    img.src = src
  })))
}

function buildFlipbook(PageFlip) {
  const container = magBook.value
  if (!container) return
  container.innerHTML = ''

  const availW = container.closest('.mag-book-container').clientWidth - 80
  const pageW = Math.min(340, Math.floor(availW / 2))
  const pageH = Math.round(pageW * 1.414)

  magImages.forEach(src => {
    const page = document.createElement('div')
    page.className = 'mag-page'
    page.style.cssText = `overflow:hidden;background:#111;width:${pageW}px;height:${pageH}px`
    const img = document.createElement('img')
    img.src = src
    img.style.cssText = 'width:100%;height:100%;object-fit:cover;display:block'
    page.appendChild(img)
    container.appendChild(page)
  })

  flipInstance = new PageFlip(container, {
    width: pageW,
    height: pageH,
    size: 'fixed',
    drawShadow: true,
    flippingTime: 700,
    usePortrait: false,
    showCover: true,
    mobileScrollSupport: false,
  })

  flipInstance.loadFromHTML(container.querySelectorAll('.mag-page'))
  flipInstance.on('flip', e => { currentPage.value = e.data })

  totalPages.value = magImages.length
  loading.value = false
}

function magPrev() { flipInstance?.flipPrev() }
function magNext() { flipInstance?.flipNext() }
</script>