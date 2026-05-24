<template>
  <section class="hero">
    <div>
      <h1 class="hero-name">{{ displayName }}</h1>
      <p class="hero-tag">{{ displayTag }}</p>
      <h1 class="hero-name">{{ displayCrafting }}<em>{{ displaySpeak }}</em></h1>
      <p class="hero-bio" :class="{ visible: bioVisible }">
        Based in Bekasi, Indonesia — I design identities, key visuals, and motion content for brands and events. From logos to reels, I make ideas look good.
      </p>
      <div class="hero-btns" :class="{ visible: btnsVisible }">
        <a href="#design" class="btn btn-fill">View work</a>
        <a href="#contact" class="btn">Get in touch</a>
      </div>
    </div>
    <div class="hero-right-col">
      <div class="hero-photo-wrap">
        <img class="hero-photo" src="/photo.webp" alt="Rifa Agus Iftinan">
      </div>
      <div class="hero-stats">
        <div v-for="stat in stats" :key="stat.label">
          <div class="stat-num">
            <span ref="counterRefs">0</span><span>{{ stat.suffix }}</span>
          </div>
          <div class="stat-label">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// ── Targets ──────────────────────────────────────────────────────
const REAL_NAME     = 'Rifa Agus I'
const REAL_TAG      = 'Visual Designer · Video Editor · Animator'
const REAL_CRAFTING = 'Crafting visuals '
const REAL_SPEAK    = 'that speak'
const CHARS         = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&'

// ── State ────────────────────────────────────────────────────────
const displayName     = ref('')
const displayTag      = ref('')
const displayCrafting = ref('')
const displaySpeak    = ref('')
const bioVisible      = ref(false)
const btnsVisible     = ref(false)
const counterRefs     = ref([])

// ── Scramble (duration-based, ~60fps) ───────────────────────────
function scramble(target, outputRef, { durationMs, skipChars = [' ', '·'] } = {}) {
  return new Promise(resolve => {
    const chars   = target.split('')
    const frameMs = 60
    const frames  = Math.round(durationMs / frameMs)
    let   frame   = 0

    const tick = setInterval(() => {
      frame++
      const revealed = Math.round((frame / frames) * chars.length)

      outputRef.value = chars
        .map((char, i) => {
          if (skipChars.includes(char)) return char
          if (i < revealed) return char
          return CHARS[Math.floor(Math.random() * CHARS.length)]
        })
        .join('')

      if (frame >= frames) {
        outputRef.value = target
        clearInterval(tick)
        resolve()
      }
    }, frameMs)
  })
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

// ── Sequence (~1 second total) ───────────────────────────────────
// name:          0 → 2000msms
// tag:         2000 → 4000ms
// crafting:    4000 → 6000ms
// that speak:  6000 → 8000ms
// bio:             → 8000ms (100ms gap)
// buttons:         → ~8000ms
async function runSequence() {
  await scramble(REAL_NAME,     displayName,     { durationMs: 1500 })
  await scramble(REAL_TAG,      displayTag,      { durationMs: 1500 })
  await scramble(REAL_CRAFTING, displayCrafting, { durationMs: 500 })
  await scramble(REAL_SPEAK,    displaySpeak,    { durationMs: 500 })

  await delay(100)
  bioVisible.value = true

  await delay(120)
  btnsVisible.value = true
}

// ── Stats ────────────────────────────────────────────────────────
const stats = [
  { target: 20,  suffix: '+', label: 'Videos / week' },
  { target: 50,  suffix: '+', label: 'Clients served' },
  { target: 3,   suffix: '+', label: 'Years active' },
  { target: 10,  suffix: '+', label: 'Event attendees' },
]

function animateCounter(el, target) {
  const steps     = 60
  const increment = target / steps
  const interval  = 1800 / steps
  let   current   = 0

  const timer = setInterval(() => {
    current += increment
    if (current >= target) {
      el.textContent = target
      clearInterval(timer)
    } else {
      el.textContent = Math.floor(current)
    }
  }, interval)
}

// ── Mount ────────────────────────────────────────────────────────
onMounted(() => {
  setTimeout(runSequence, 150)

  counterRefs.value.forEach((el, i) => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(el, stats[i].target)
          observer.disconnect()
        }
      })
    }, { threshold: 0.5 })
    observer.observe(el)
  })
})
</script>

<style scoped>
@media (max-width: 768px) {
  .hero-name,
  .hero-tag {
    min-height: 2.2rem;
  }
}
.hero-bio {
  opacity: 0;
  transition: opacity 0.6s ease;
}
.hero-bio.visible {
  opacity: 1;
}

.hero-btns {
  opacity: 0;
  transform: translateY(8px);
  transition: opacity 0.5s ease, transform 0.5s ease;
  pointer-events: none;
}
.hero-btns.visible {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}
</style>