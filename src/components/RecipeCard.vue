<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { nutritionSummary } from '@/data/recipes';
import type { Recipe } from '@/types';

defineProps<{ recipe: Recipe }>();
</script>

<template>
  <RouterLink class="recipe" :to="{ name: 'recipe', params: { slug: recipe.slug } }">
    <h3>{{ recipe.emoji }} {{ recipe.name }}</h3>
    <div class="meta">{{ nutritionSummary(recipe) }}</div>
  </RouterLink>
</template>

<style scoped>
.recipe {
  display: block;
  text-decoration: none;
  background: var(--surface);
  border: 1px solid var(--surface-line);
  border-left: 3px solid var(--green);
  padding: 15px 16px;
  border-radius: 0 11px 11px 0;
}

.recipe:hover {
  background: rgba(255, 255, 255, 0.06);
}

h3 {
  font-size: 15px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 6px;
}

.meta {
  font-size: 11px;
  color: var(--accent);
}
</style>
