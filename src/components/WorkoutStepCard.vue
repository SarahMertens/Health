<script setup lang="ts">
import RichText from '@/components/RichText.vue';
import type { WorkoutStep } from '@/types';

defineProps<{ step: WorkoutStep }>();
</script>

<template>
  <li class="step" :class="step.intensity">
    <h3 class="name">{{ step.emoji }} {{ step.title }}</h3>

    <p v-for="(paragraph, index) in step.paragraphs" :key="index" class="detail">
      <RichText :text="paragraph" />
    </p>
  </li>
</template>

<style scoped>
.step {
  list-style: none;
  background: var(--surface);
  border: 1px solid var(--surface-line);
  border-left: 3px solid var(--accent);
  padding: 16px;
  border-radius: 0 12px 12px 0;
  margin: 10px 0;
}

.step.strength {
  border-left-color: var(--green);
}

.step.recovery {
  border-left-color: var(--blue);
}

.name {
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 6px;
}

.detail {
  font-size: 12.5px;
  color: var(--muted);
  line-height: 1.65;
}

.detail + .detail {
  margin-top: 1.1em;
}

.detail :deep(strong) {
  color: #fff;
}
</style>
