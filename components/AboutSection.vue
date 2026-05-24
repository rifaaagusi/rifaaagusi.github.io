<template>
  <hr class="sec-divider">
  <div class="sec" id="about">
    <div class="sec-top"><h2 class="sec-title">About me</h2></div>
    <div class="about-grid">
      <div>
        <p class="about-label">Who I am</p>
        <p class="about-text">I'm a Visual Communication Designer based in Bekasi, Indonesia, working across graphic design, video editing, 2D animation, and motion graphics. I help brands and events communicate through strong visuals — from identity systems and print to social videos and logo animations.</p>
        <br>
        <p class="about-text">I hold a Bachelor's degree in Visual Communication Design (GPA 3.52) from Universitas Indraprasta PGRI (graduated in 2025), and I'm highly proficient in English (TOEFL 617).</p>
        <div class="available-badge">Available for freelance projects</div>
      </div>
      <div>
        <p class="about-label">Skills & tools</p>
        <div class="skills-list">
          <div class="skill-row" v-for="skill in skills" :key="skill.name">
            <span class="skill-name">{{ skill.name }}</span>
            <div class="skill-dots">
              <div class="dot" :class="{ on: i < skill.level }" v-for="i in 5" :key="i"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
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