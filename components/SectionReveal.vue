<template>
  <motion.div
    :initial="initial"
    :while-in-view="whileInView"
    :viewport="{ once: true, amount: 0.15 }"
    :transition="transition"
  >
    <slot />
  </motion.div>
</template>

<script setup>
const initial = { opacity: 0, y: 28 }
const whileInView = { opacity: 1, y: 0 }
const transition = { duration: 0.65, ease: [0.22, 1, 0.36, 1] }
</script>
