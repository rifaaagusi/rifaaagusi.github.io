<template>
  <hr class="sec-divider">
  <div class="sec" id="video">
    <div class="sec-top">
      <h2 class="sec-title">Video Work</h2>
      <span class="sec-sub">Editing · Motion · Reels</span>
    </div>
    <div class="video-tabs">
      <button class="tab" :class="{ active: activeTab === 'landscape' }" @click="activeTab = 'landscape'">Landscape</button>
      <button class="tab shorts-tab" :class="{ active: activeTab === 'shorts' }" @click="switchToShorts">
        Shorts
        <span v-if="showDot" class="notif-dot"></span>
      </button>
    </div>

    <!-- LANDSCAPE -->
    <div class="video-panel" :class="{ active: activeTab === 'landscape' }">
      <div class="landscape-grid">
        <div class="vid-card" v-for="vid in landscapes" :key="vid.id">
          <iframe class="vid-embed"
            :src="`https://www.youtube-nocookie.com/embed/${vid.id}?rel=0`"
            :title="vid.title"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen loading="lazy"></iframe>
          <div class="vid-label">
            <div class="vid-label-title">{{ vid.title }}</div>
            <div class="vid-label-cat">Video Editing</div>
          </div>
        </div>
      </div>
    </div>

    <!-- SHORTS -->
    <div class="video-panel" :class="{ active: activeTab === 'shorts' }">
      <div class="shorts-grid">
        <div class="short-card" v-for="vid in shorts" :key="vid.id">
          <iframe class="short-embed"
            :src="`https://www.youtube-nocookie.com/embed/${vid.id}?rel=0`"
            :title="vid.title"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen loading="lazy"></iframe>
          <div class="short-label">
            <div class="short-label-title">{{ vid.title }}</div>
            <div class="short-label-cat">Reels · Motion</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const activeTab = ref('landscape')
const showDot = ref(true)

onMounted(() => {
  // Check if user has already seen shorts
  if (sessionStorage.getItem('shorts-seen') === 'true') {
    showDot.value = false
  }
})

function switchToShorts() {
  activeTab.value = 'shorts'
  showDot.value = false
  sessionStorage.setItem('shorts-seen', 'true')
}

const landscapes = [
  { id: 'pwiyCeGrpZs', title: 'Video Edit #1' },
  { id: 'uN1aMgaNYZs', title: 'Video Edit #2' },
  { id: 'nl7bO_LjODs', title: 'Video Edit #3' },
  { id: 'rKujzLgTZfo', title: 'Video Edit #4' },
  { id: 'bkXyHNCRPOI', title: 'Video Edit #5' },
  { id: '5aJ-YH2gTRA', title: 'Video Edit #6' },
]

const shorts = [
  { id: '_BFL82uKlH4', title: 'Short #1' },
  { id: '2NANvkqZfz8', title: 'Short #2' },
  { id: 'tHxzSdIEVgs', title: 'Short #3' },
  { id: 'TImRXRlo_uQ', title: 'Short #4' },
  { id: 'YzvRoiGBsX0', title: 'Short #5' },
  { id: 'FGz4xS-N6JM', title: 'Short #6' },
  { id: '5dLMF-4avFE', title: 'Short #7' },
  { id: 'RBzpflBb2Ss', title: 'Short #8' },
]
</script>