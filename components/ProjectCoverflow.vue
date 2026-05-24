<template>
  <div class="coverflow">
    <div
      class="coverflow-stage"
      @pointerdown="onPointerDown"
      @pointermove="onPointerMove"
      @pointerup="onPointerUp"
      @pointercancel="onPointerUp"
      @pointerleave="onPointerUp"
    >
      <article
        v-for="(item, index) in items"
        :key="item.id"
        class="coverflow-slide"
        :class="{ active: index === activeIndex }"
        :style="slideStyle(index)"
        @click="onSlideClick(index)"
      >
        <div class="coverflow-img-wrap">
          <img :src="item.image" :alt="item.title" class="coverflow-img" loading="lazy" />
          <div class="coverflow-hover">
            <span class="coverflow-hint">{{ hint }}</span>
          </div>
        </div>
        <div class="coverflow-info">
          <h3 class="coverflow-title">{{ item.title }}</h3>
          <p class="coverflow-sub">{{ item.sub }}</p>
        </div>
      </article>
    </div>

    <div class="coverflow-controls">
      <button type="button" class="coverflow-btn" :disabled="activeIndex === 0" @click="prev">←</button>
      <span class="coverflow-counter">{{ activeIndex + 1 }} / {{ items.length }}</span>
      <button type="button" class="coverflow-btn" :disabled="activeIndex >= items.length - 1" @click="next">→</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  items: { type: Array, required: true },
  hint: { type: String, default: 'View Project' },
})

const emit = defineEmits(['select'])

const activeIndex = ref(0)
const dragStartX = ref(null)
const dragDelta = ref(0)

const slideStyle = (index) => {
  const offset = index - activeIndex.value
  const abs = Math.abs(offset)
  const dragShift = dragStartX.value !== null ? dragDelta.value / 280 : 0
  const effective = offset - dragShift

  return {
    zIndex: String(100 - abs),
    opacity: abs > 3 ? 0 : String(Math.max(0.25, 1 - abs * 0.22)),
    pointerEvents: abs > 3 ? 'none' : 'auto',
    transform: `
      translateX(calc(-50% + ${effective * 140}px))
      translateZ(${-abs * 80}px)
      rotateY(${effective * -38}deg)
      scale(${Math.max(0.72, 1 - abs * 0.12)})
    `,
  }
}

function prev() {
  if (activeIndex.value > 0) activeIndex.value--
}

function next() {
  if (activeIndex.value < props.items.length - 1) activeIndex.value++
}

function onSlideClick(index) {
  if (index === activeIndex.value) {
    emit('select', props.items[index])
    return
  }
  activeIndex.value = index
}

function onPointerDown(e) {
  dragStartX.value = e.clientX
  dragDelta.value = 0
}

function onPointerMove(e) {
  if (dragStartX.value === null) return
  dragDelta.value = e.clientX - dragStartX.value
}

function onPointerUp() {
  if (dragStartX.value === null) return
  if (dragDelta.value > 80) prev()
  else if (dragDelta.value < -80) next()
  dragStartX.value = null
  dragDelta.value = 0
}
</script>

<style scoped>
.coverflow {
  margin-top: 0.5rem;
}

.coverflow-stage {
  position: relative;
  height: 420px;
  perspective: 1200px;
  perspective-origin: 50% 40%;
  overflow: hidden;
  cursor: grab;
  user-select: none;
  touch-action: pan-y;
}

.coverflow-stage:active {
  cursor: grabbing;
}

.coverflow-slide {
  position: absolute;
  left: 50%;
  top: 0;
  width: min(240px, 42vw);
  transform-style: preserve-3d;
  transition:
    transform 0.55s cubic-bezier(0.22, 1, 0.36, 1),
    opacity 0.45s ease,
    filter 0.45s ease;
  will-change: transform, opacity;
  cursor: pointer;
}

.coverflow-slide:not(.active) {
  filter: brightness(0.55);
}

.coverflow-slide.active {
  filter: brightness(1);
}

.coverflow-img-wrap {
  position: relative;
  overflow: hidden;
  border: 0.5px solid var(--border);
  aspect-ratio: 3 / 4;
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.45);
}

.coverflow-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: filter 0.3s;
}

.coverflow-hover {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;
  background: rgba(0, 0, 0, 0.25);
}

.coverflow-slide.active:hover .coverflow-hover {
  opacity: 1;
}

.coverflow-hint {
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  background: var(--accent);
  color: var(--bg);
  padding: 8px 18px;
  font-family: var(--font-body);
}

.coverflow-info {
  padding: 0.9rem 0 0;
  text-align: center;
}

.coverflow-title {
  font-size: 14px;
  font-weight: 500;
  color: var(--white);
}

.coverflow-sub {
  font-size: 11px;
  color: var(--accent);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-top: 4px;
}

.coverflow-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  margin-top: 1.5rem;
}

.coverflow-btn {
  width: 44px;
  height: 44px;
  border: 0.5px solid var(--border);
  background: var(--surface);
  color: var(--white);
  cursor: pointer;
  font-size: 18px;
  transition: border-color 0.2s, color 0.2s;
}

.coverflow-btn:hover:not(:disabled) {
  border-color: var(--accent);
  color: var(--accent);
}

.coverflow-btn:disabled {
  opacity: 0.35;
  cursor: default;
}

.coverflow-counter {
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
  min-width: 4rem;
  text-align: center;
}

@media (max-width: 640px) {
  .coverflow-stage {
    height: 360px;
  }

  .coverflow-slide {
    width: min(200px, 58vw);
  }
}
</style>
