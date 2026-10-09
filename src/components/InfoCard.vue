<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string;
    tone?: 'neutral' | 'green' | 'blue' | 'yellow';
  }>(),
  { title: undefined, tone: 'neutral' },
);
</script>

<template>
  <section class="card" :class="`tone-${tone}`">
    <h2 v-if="title" class="card-title">{{ title }}</h2>
    <slot />
  </section>
</template>

<style scoped>
.card {
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 22px;
  margin-bottom: 16px;
}

.tone-green {
  background: rgba(76, 175, 135, 0.08);
  border-color: rgba(76, 175, 135, 0.22);
}

.tone-blue {
  background: rgba(43, 108, 176, 0.1);
  border-color: rgba(43, 108, 176, 0.25);
}

.tone-yellow {
  background: rgba(232, 197, 71, 0.06);
  border-color: rgba(232, 197, 71, 0.2);
}

.card-title {
  font-family: var(--font-display);
  font-weight: 400;
  color: var(--accent);
  font-size: 22px;
  letter-spacing: 1px;
  margin: 0 0 12px;
}

.card :deep(p) {
  color: var(--text);
  line-height: 1.7;
  font-size: 14px;
}

.card :deep(p + p) {
  margin-top: 10px;
}
</style>
