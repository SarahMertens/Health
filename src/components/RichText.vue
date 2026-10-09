<script setup lang="ts">
import { computed } from 'vue';
import { parseRichText } from '@/lib/richText';

const props = withDefaults(defineProps<{ text: string; accent?: boolean }>(), {
  accent: false,
});

const segments = computed(() => parseRichText(props.text));
</script>

<template>
  <!-- Rendered as elements, never as raw HTML, so content cannot inject markup. -->
  <span class="rich-text">
    <template v-for="(segment, index) in segments" :key="index">
      <strong v-if="segment.bold" :class="{ highlight: accent }">{{
        segment.text
      }}</strong>
      <template v-else>{{ segment.text }}</template>
    </template>
  </span>
</template>

<style scoped>
.rich-text {
  /* A newline in the content is a line break on screen. */
  white-space: pre-line;
}
</style>
