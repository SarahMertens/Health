<script setup lang="ts">
import { RouterLink, type RouteLocationRaw } from 'vue-router';

defineProps<{ to: RouteLocationRaw }>();
</script>

<template>
  <RouterLink class="back" :to="to">← <slot /></RouterLink>
</template>

<style scoped>
.back {
  display: inline-block;
  margin-bottom: 16px;
  color: var(--muted);
  text-decoration: none;
  font-size: 13px;
  padding: 6px 0;
}

.back:hover {
  color: #fff;
}
</style>
