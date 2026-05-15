<template>
  <hr class="sec-divider">
  <div class="sec" id="magazine">
    <div class="sec-top">
      <h2 class="sec-title">Magazine Design</h2>
      <span class="sec-sub">Editorial · Print · Layout</span>
    </div>
    <p style="font-size:13px;color:var(--muted);margin-bottom:2rem;line-height:1.8">
      Flip through the pages of MAJALAH RUGA — drag the corners or use the buttons below.
    </p>
    <ClientOnly>
      <MagazineFlipBook />
      <template #fallback>
        <div style="height:480px;display:flex;align-items:center;justify-content:center;color:#6b6a65;font-size:13px;letter-spacing:0.1em;text-transform:uppercase">
          Loading flipbook…
        </div>
      </template>
    </ClientOnly>
  </div>
</template>

<script setup>
import MagazineFlipBook from './MagazineFlipBook.vue'
</script>