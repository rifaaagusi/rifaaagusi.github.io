<template>
  <hr class="sec-divider">
  <SectionReveal>
  <div class="sec" id="yearbook">
    <div class="sec-top">
      <h2 class="sec-title">Yearbook Designs</h2>
      <span class="sec-sub">Layout · Editorial · Print</span>
    </div>
    <p style="font-size:13px;color:var(--muted);margin-bottom:2rem;line-height:1.8">
      Designed book layouts and covers for schools including Al Azhar, Labschool, and more — managing the full pipeline from client brief to print-ready delivery.
    </p>

    <ProjectCoverflow
      :items="coverflowItems"
      hint="View Project"
      @select="onCoverflowSelect"
    />

    <!-- MODAL -->
    <div v-if="activeFolder" class="modal-overlay" @click.self="closeFolder">
      <div class="modal-box">
        <div class="modal-header">
          <div>
            <h3 class="modal-title">{{ activeFolder.title }}</h3>
            <p class="modal-sub">{{ activeFolder.sub }}</p>
          </div>
          <button class="modal-close" @click="closeFolder">✕</button>
        </div>
        <div class="modal-body">
          <div class="lb-grid">
            <img
              v-for="img in activeFolder.images"
              :key="img"
              :src="cloudUrl(img, ',w_1200')"
              :alt="activeFolder.title"
              loading="lazy"
              @click="openZoom(cloudUrl(img, ',w_1400'))"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- ZOOM -->
    <div class="lb-zoom" :class="{ open: zoomOpen }" @click="closeZoom">
      <button class="lb-zoom-close" @click="closeZoom">✕</button>
      <img :src="zoomSrc" alt="">
    </div>
  </div>
  </SectionReveal>
</template>

<script setup>
import { ref, computed } from 'vue'

const CLOUD = 'dvfn2i84f'

function cloudUrl(publicId, opts = '') {
  return `https://res.cloudinary.com/${CLOUD}/image/upload/f_auto,q_auto${opts}/${publicId}`
}

const activeFolder = ref(null)
const zoomOpen = ref(false)
const zoomSrc = ref('')

const folders = [
  {
    id: 'sd-al-azhar',
    title: 'SD Al Azhar 1 Jakarta',
    sub: 'Yearbook · 2026',
    thumbnail: '9B_2_A_fz5yqz',
    images: [
      '9E_4_zvdqoh', '9E_5_xmtovi', '9D_5_th9wqw',
      '9C_5_q1wt6u', '9A_5_ldvhv0', '9B_5_yj557k',
      '9D_1_zvrhpq', '9D_3_dbvvfc', '9D_2_c5cfvn',
      '9D_4_dpxzd9', '9C_4_a7xlhz', '9C_3_yjbnin',
      '9C_2_sbcxs2', '9C_1_wq7wfc', '9B_4_hyvpfk',
      '9B_3_frr7rb', '9B_2_acqtwa', '9B_1_j0u2v7',
      '9A_4_rncmxe', '9A_3_cena0h', '9A_2_mmsjz6',
      '9E_3_ggpvfo', '9A_1_tvli9q', '9E_1_uk6aa9',
      '9E_2_djqhs4',
    ]
  },
  {
    id: 'sd-madina',
    title: 'SD Madina Islamic School',
    sub: 'Yearbook · 2026',
    thumbnail: '6A_PLANET2_A_fuwghu',
    images: [
      '6A_PLANET3_gdvtsp', '6A_PLANET1_yfsjdy', '6C_STARS4_wa04og',
      '6B_NEBULA1_n6j81c', '6C_STARS1_zcalem', '6B_NEBULA4_fqk1if',
      '6B_NEBULA3_nyipsg', '6C_STARS2_hgmtpm', '6A_PLANET2_ymzoig',
      '6B_NEBULA2_jhuq5t', '6C_STARS3_odzgmu', '6A_PLANET4_vjhcpn',
    ]
  },
  {
    id: 'sma-al-azhar',
    title: 'SMA Al Azhar 1 Jakarta',
    sub: 'Yearbook · 2026',
    thumbnail: 'SCIENCE_2_1_A_yelwxe',
    images: [
      'SCIENCE_4_1_lmfpva', 'SCIENCE_2_1_wsyn3y', 'SCIENCE_1_1_keogtl',
      'SOSHUM_1_jbydv8', 'SCIENCE_1_2_suazkr', 'SCIENCE_2_2_ef8mzo',
      'SOSHUM_2_lcyvvg', 'SCIENCE_4_2_zgkt0m', 'SCIENCE_3_1_sbulks',
      'SCIENCE_3_2_otm5w2',
    ]
  },
  {
    id: 'sma-sulthon',
    title: 'SMA Sulthon Aulia',
    sub: 'Yearbook · 2026',
    thumbnail: 'DELIV_tejruf',
    images: [
      'KNIVES_OUT_ro6mad', 'DELIVERY_GUY_bqjo6f',
      'POV_PENONTON_CEWEK_siovbw', 'POV_PENONTON_COWOK_rh127t',
      'MOVIE_CRITICS_hwsv0g', 'PRODUCER_VS_DIRECTOR_r94rpo',
      'ENCANTO_n0jeuh',
    ]
  },
  {
    id: 'smp-labschool',
    title: 'SMP Labschool Cibubur',
    sub: 'Yearbook · 2026',
    thumbnail: '9C_1_A_njgsta',
    images: [
      '9G_3_a560cd', '9G_2_x3f7jw', '9G_1_fqp5x1',
      '9F_3_kks0a2', '9F_2_a3qpnr', '9F_1_n4twlj',
      '9E_3_cnwjm1', '9E_2_ddkdoo', '9E_1_jeqx3t',
      '9D_3_mltbdd', '9D_2_afzfyz', '9D_1_m7mltb',
      '9C_3_tniqhq', '9C_2_chqlf5', '9C_1_ewzg8j',
      '9B_3_rpqihg', '9B_2_hk1dqg', '9B_1_vpym0d',
      '9A_3_nwhmnn', '9A_2_yvxikx', '9A_1_mn3jjo',
    ]
  },
  {
    id: 'sma-al-kp',
    title: 'SMA Al Azhar 9 Bekasi',
    sub: 'Yearbook · 2026',
    thumbnail: 'cover_mxisr1',
    images: [
      '12F_EKONOMI_BISNIS_2_ldcvll',
      '12A_KESEHATAN_1_1_zdrn8a',
      '12G_HUMANIORA_2_xoqxkz',
      '12G_HUMANIORA_1_f5lmtm',
      '12A_KESEHATAN_1_2_tjfbem',
      '12C_TEKNIK_1_1_lynwfq',
      '12D_TEKNIK_2_2_iyy3t5',
      '12D_TEKNIK_2_1_xnxrjk',
      '12F_EKONOMI_BISNIS_1_flvv61',
      '12E_TEKNIK_3_1_olzjgp',
      '12B_KESEHATAN_2_1_vm6ven',
      '12C_TEKNIK_1_2_ippoul',
      '12E_TEKNIK_3_2_yr8k6e',
      '12B_KESEHATAN_2_2_bgec4t',
    ]
  },
]

const coverflowItems = computed(() =>
  folders.map((folder) => ({
    id: folder.id,
    image: cloudUrl(folder.thumbnail, ',w_600'),
    title: folder.title,
    sub: folder.sub,
  }))
)

function onCoverflowSelect(item) {
  const folder = folders.find((f) => f.id === item.id)
  if (folder) openFolder(folder)
}

function openFolder(folder) {
  activeFolder.value = folder
  document.body.style.overflow = 'hidden'
}

function closeFolder() {
  activeFolder.value = null
  document.body.style.overflow = ''
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

<style scoped>
.mockup-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 2rem;
}

.mockup-card {
  cursor: pointer;
  transition: transform 0.25s;
}

.mockup-card:hover {
  transform: translateY(-6px);
}

.mockup-img-wrap {
  position: relative;
  overflow: hidden;
  border: 0.5px solid var(--border);
  aspect-ratio: 3/4;
}

.mockup-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: filter 0.3s;
}

.mockup-card:hover .mockup-img {
  filter: brightness(0.5);
}

.mockup-hover {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;
}

.mockup-card:hover .mockup-hover {
  opacity: 1;
}

.mockup-hint {
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  background: var(--accent);
  color: var(--bg);
  padding: 8px 18px;
  font-family: var(--font-body);
}

.mockup-info {
  padding: 0.9rem 0 0;
}

.mockup-title {
  font-size: 14px;
  font-weight: 500;
  color: var(--white);
}

.mockup-sub {
  font-size: 11px;
  color: var(--accent);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-top: 4px;
}

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
  overflow-y: auto;
  padding: 1.5rem;
}

.modal-body::-webkit-scrollbar { width: 4px }
.modal-body::-webkit-scrollbar-track { background: transparent }
.modal-body::-webkit-scrollbar-thumb { background: var(--border); border-radius: 2px }

.lb-grid {
  columns: 2;
  column-gap: 1rem;
}

.lb-grid img {
  width: 100%;
  display: block;
  margin-bottom: 1rem;
  break-inside: avoid;
  cursor: zoom-in;
  transition: opacity 0.2s;
}

.lb-grid img:hover { opacity: 0.85 }
</style>