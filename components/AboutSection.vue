<template>
  <hr class="sec-divider">
  <div class="sec" id="about">
    <div class="sec-top"><h2 class="sec-title">About me</h2></div>
    <motion.div
      :initial="{ opacity: 0 }"
      :while-in-view="{ opacity: 1 }"
      :viewport="{ once: true, amount: 0.2 }"
      :transition="{ duration: 0.6 }"
    >
      <div class="about-grid">
        <motion.div
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :viewport="{ once: true, amount: 0.2 }"
          :transition="{ duration: 0.6, delay: 0.1 }"
        >
          <p class="about-label">Who I am</p>
          <p class="about-text">I'm a Visual Communication Designer based in Bekasi, Indonesia, working across graphic design, video editing, 2D animation, and motion graphics. I help brands and events communicate through strong visuals — from identity systems and print to social videos and logo animations.</p>
          <br>
          <p class="about-text">I hold a Bachelor's degree in Visual Communication Design (GPA 3.52) from Universitas Indraprasta PGRI (graduated in 2025), and I'm highly proficient in English (TOEFL 617).</p>
          <div class="available-badge">Available for freelance projects</div>
        </motion.div>
        <motion.div
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :viewport="{ once: true, amount: 0.2 }"
          :transition="{ duration: 0.6, delay: 0.2 }"
        >
          <p class="about-label">Skills & tools</p>
          <div class="skills-list">
            <motion.div
              v-for="(skill, idx) in skills"
              :key="skill.name"
              class="skill-row"
              :initial="{ opacity: 0, x: -10 }"
              :while-in-view="{ opacity: 1, x: 0 }"
              :viewport="{ once: true, amount: 0.3 }"
              :transition="{ duration: 0.4, delay: 0.25 + idx * 0.05 }"
            >
              <span class="skill-name">{{ skill.name }}</span>
              <div class="skill-dots">
                <div class="dot" :class="{ on: i < skill.level }" v-for="i in 5" :key="i"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  </div>
</template>

<script setup>
const skills = [
  { name: 'CorelDraw', level: 6 },
  { name: 'Adobe Photoshop', level: 6 },
  { name: 'Adobe Illustrator', level: 4 },
  { name: 'Adobe Premiere Pro', level: 6 },
  { name: 'Adobe After Effects', level: 4 },
  { name: 'Adobe InDesign', level: 4 },
  { name: 'Adobe Lightroom', level: 3 },
  { name: 'Canva', level: 5 },
  { name: 'Capcut', level: 5 },
  { name: 'Blender 3D', level: 3 },
  { name: 'AI Tools & Workflows', level: 4 },
  { name: 'Motion Graphics', level: 4 },
]
</script>