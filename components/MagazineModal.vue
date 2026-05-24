<template>
  <Teleport to="body">
    <div class="modal-overlay" @click.self="$emit('close')">
      <div class="modal-box">

        <div class="modal-header">
          <div>
            <h3 class="modal-title">{{ book.title }}</h3>
            <p class="modal-sub">{{ book.sub }}</p>
          </div>
          <button class="modal-close" @click="$emit('close')">✕</button>
        </div>

        <div class="modal-body">
          <div class="mag-book-container" style="min-height:480px;position:relative">
            <div v-if="loading" style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:1.5rem;padding:2rem">
             <div style="font-family:serif;font-size:3rem;color:#f0ede6;letter-spacing:0.05em">{{ loadPercent }}%</div>
             <div style="width:100%;max-width:320px;height:1px;background:#2a2a27;position:relative">
               <div :style="`width:${loadPercent}%;height:100%;background:#ff5c1a;transition:width 0.2s ease`"></div>
             </div>
              <span style="font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:#6b6a65">Loading pages {{ loadedCount }} / {{ totalPages }}</span>
            </div>
            <div ref="magBook"></div>
          </div>
        </div>

        <div class="modal-footer">
          <p class="mag-hint">↖ Drag the corner to flip · or use buttons</p>
          <div class="mag-nav">
            <button class="mag-btn" :disabled="currentPage === 0" @click="magPrev">← Prev</button>
            <span class="mag-counter">{{ loading ? 'Loading…' : `Page ${currentPage + 1} of ${totalPages}` }}</span>
            <button class="mag-btn" :disabled="currentPage >= totalPages - 2" @click="magNext">Next →</button>
          </div>
          <div class="mag-goto">
            <span class="mag-goto-label">Go to page</span>
            <input
              v-model="gotoInput"
              type="number"
              :min="1"
              :max="totalPages"
              class="mag-goto-input"
              placeholder="e.g. 45"
              @keydown.enter="goToPage"
            />
            <button class="mag-btn" @click="goToPage">Go</button>
          </div>
        </div>

      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  book: Object
})

const emit = defineEmits(['close'])

const magBook = ref(null)
const loading = ref(true)
const currentPage = ref(0)
const totalPages = ref(props.book.totalPages)
const gotoInput = ref('')
const loadPercent = ref(0)
const loadedCount = ref(0)
let flipInstance = null

const magImages = props.book.images?.length
  ? props.book.images
  : Array.from({ length: props.book.totalPages }, (_, i) => `${props.book.imagePath}${i}.webp`)

onMounted(async () => {
  window.addEventListener('keydown', onKeyDown)
  document.body.style.overflow = 'hidden'

  const { PageFlip } = await import('page-flip')
  await preloadImages()
  buildFlipbook(PageFlip)
})

onUnmounted(() => {
  window.removeEventListener('keydown', onKeyDown)
  document.body.style.overflow = ''
})

function onKeyDown(e) {
  if (e.key === 'Escape') emit('close')
}

function preloadImages() {
  return new Promise(resolve => {
    const total = magImages.length
    if (total === 0) {
      resolve()
      return
    }

    let loaded = 0
    magImages.forEach(src => {
      const img = new Image()
      img.onload = img.onerror = () => {
        loaded++
        loadedCount.value = loaded
        loadPercent.value = Math.round((loaded / total) * 100)
        if (loaded === total) resolve()
      }
      img.src = src
    })
  })
}

function buildFlipbook(PageFlip) {
  const container = magBook.value
  if (!container) return
  container.innerHTML = ''

  const modalBody = container.closest('.modal-body')
  const availW = modalBody.clientWidth - 80
  const availH = modalBody.clientHeight - 40

  // Calculate page size that fits both width and height
  const pageWbyWidth = Math.min(340, Math.floor(availW / 2))
  const pageHbyWidth = Math.round(pageWbyWidth * 1.414)

  const pageHbyHeight = availH
  const pageWbyHeight = Math.floor(pageHbyHeight / 1.414)

  // Use whichever is smaller so it fits in both dimensions
  const pageH = Math.min(pageHbyWidth, pageHbyHeight)
  const pageW = Math.floor(pageH / 1.414)

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
    startPage: 0,
    mobileScrollSupport: false,
  })

  flipInstance.loadFromHTML(container.querySelectorAll('.mag-page'))
  flipInstance.on('flip', e => { currentPage.value = e.data })

  totalPages.value = magImages.length
  loading.value = false
}

function magPrev() { flipInstance?.flipPrev() }
function magNext() { flipInstance?.flipNext() }

function goToPage() {
  const page = parseInt(gotoInput.value)
  if (!page || page < 1 || page > totalPages.value) return
  flipInstance?.flip(page - 1)
  gotoInput.value = ''
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.92);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  backdrop-filter: blur(6px);
}

.modal-box {
  width: 100%;
  max-width: 900px;
  max-height: 90vh;
  background: var(--surface);
  border: 0.5px solid var(--border);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem 1.6rem;
  border-bottom: 0.5px solid var(--border);
  flex-shrink: 0;
}

.modal-title {
  font-family: var(--font-display);
  font-size: 1.1rem;
  color: var(--white);
  font-weight: 400;
}

.modal-sub {
  font-size: 11px;
  color: var(--accent);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-top: 3px;
}

.modal-close {
  width: 40px;
  height: 40px;
  border: 0.5px solid var(--border);
  background: transparent;
  cursor: pointer;
  color: var(--white);
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.modal-close:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.modal-body {
  flex: 1;
  overflow: hidden;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 0;
}

.modal-footer {
  padding: 1rem 1.6rem;
  border-top: 0.5px solid var(--border);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  flex-shrink: 0;
}

.mag-goto {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.mag-goto-label {
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
}

.mag-goto-input {
  width: 70px;
  background: var(--surface2);
  border: 0.5px solid var(--border);
  color: var(--white);
  font-size: 13px;
  padding: 6px 10px;
  font-family: var(--font-body);
  text-align: center;
  outline: none;
  transition: border-color 0.2s;
}

.mag-goto-input:focus {
  border-color: var(--accent);
}

.mag-goto-input::-webkit-inner-spin-button,
.mag-goto-input::-webkit-outer-spin-button {
  opacity: 0;
}

.mag-book-container {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

@keyframes spin {
  to { transform: rotate(360deg) }
}
</style>