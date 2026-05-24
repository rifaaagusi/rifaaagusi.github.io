<template>
  <hr class="sec-divider">
  <div class="sec" id="experience">
    <div class="sec-top">
      <h2 class="sec-title">Experiences</h2>
      <span class="sec-sub">3+ years across the creative pipeline</span>
    </div>
    <div class="exp-list">
      <div class="exp-item" v-for="exp in experiences" :key="exp.role">
        <div class="exp-date">
          {{ exp.date }}<br><br>
          <span class="exp-badge" :class="exp.badgeType">{{ exp.badge }}</span>
        </div>
        <div>
          <div class="exp-role">{{ exp.role }}</div>
          <div class="exp-company">{{ exp.company }}</div>
          <div class="exp-desc">{{ exp.desc }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const experiences = [
  {
    date: 'Sep 2025 — Present',
    badge: 'Full-time', badgeType: 'full',
    role: 'Graphic Designer',
    company: 'PT. Pixel Multi Kreasindo — Jakarta',
    desc: 'Designed book content layouts and covers for 50+ schools including Al Azhar, Labschool, and Nurul Fikri. Managed the full design pipeline from client consultation to print-ready delivery.'
  },
  {
    date: 'Jan – May 2025',
    badge: 'Internship', badgeType: 'intern',
    role: 'Video Editor Intern',
    company: 'PT. Summarecon Agung, Tbk. — Bekasi',
    desc: 'Produced educational training videos for corporate staff and created 2D character animations to enhance visual engagement of training materials.'
  },
  {
    date: 'Aug – Nov 2024',
    badge: 'Internship', badgeType: 'intern',
    role: 'Video Editor Intern',
    company: 'Lahya Creative — Jakarta',
    desc: 'Managed video projects for multiple clients including Kindai Tours & Travel, Bensfarm, and Safir Tours & Travel. Delivered up to 8 video contents per week per client.'
  },
  {
    date: 'Feb – Jun 2024',
    badge: 'Internship', badgeType: 'intern',
    role: 'Content Creator Staff',
    company: 'Vocasia.id – Bisnis Miracle — Jakarta',
    desc: 'Edited 3–4 weekly video contents for the Bisnis Miracle YouTube Channel.'
  },
  {
    date: 'Aug – Dec 2023',
    badge: 'Kampus Merdeka', badgeType: 'cert',
    role: 'Video Animator & Editor Lead',
    company: 'PT Menara Indonesia – M-Knows — Jakarta',
    desc: 'Led a team of 14 to produce 20+ videos per week. Managed the full video pipeline: assembly, colour grading, pop-up text, b-rolls, animations, and team coordination.'
  },
]
</script>