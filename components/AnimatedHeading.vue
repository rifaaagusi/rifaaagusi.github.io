<template>
  <motion.h2
    :initial="{ opacity: 0, y: 20 }"
    :while-in-view="{ opacity: 1, y: 0 }"
    :viewport="{ once: true, amount: 0.5 }"
    :transition="{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }"
    class="animated-heading"
  >
    <slot />
  </motion.h2>
</template>

<style scoped>
.animated-heading {
  font-family: var(--font-display);
  font-size: 1.7rem;
  font-weight: 400;
  background: linear-gradient(90deg, var(--white) 0%, var(--white) 100%);
  background-size: 100% 100%;
  background-position: 0 0;
}
</style>
