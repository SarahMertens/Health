<script setup lang="ts">
import { computed } from 'vue';
import BackLink from '@/components/BackLink.vue';
import { findRecipe, nutritionSummary } from '@/data/recipes';
import NotFoundView from '@/views/NotFoundView.vue';

const props = defineProps<{ slug: string }>();

const recipe = computed(() => findRecipe(props.slug));
</script>

<template>
  <template v-if="recipe">
    <BackLink :to="{ name: 'recipes' }">Terug naar recepten</BackLink>

    <article class="recipe">
      <h2>{{ recipe.emoji }} {{ recipe.name }}</h2>
      <div class="meta">{{ nutritionSummary(recipe) }}</div>

      <h3>Ingrediënten</h3>
      <ul>
        <li v-for="ingredient in recipe.ingredients" :key="ingredient">
          {{ ingredient }}
        </li>
      </ul>

      <h3>Bereiding</h3>
      <p>{{ recipe.method }}</p>
    </article>
  </template>

  <NotFoundView v-else />
</template>

<style scoped>
.recipe {
  background: var(--surface);
  border: 1px solid var(--surface-line);
  border-left: 3px solid var(--green);
  padding: 18px 18px 20px;
  border-radius: 0 11px 11px 0;
}

h2 {
  font-family: var(--font-body);
  font-size: 17px;
  font-weight: 700;
  letter-spacing: 0;
  margin: 0 0 6px;
}

.meta {
  font-size: 12px;
  color: var(--accent);
}

h3 {
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  color: #fff;
  margin: 18px 0 8px;
}

ul {
  padding-left: 18px;
}

li,
p {
  font-size: 13.5px;
  color: var(--text);
  line-height: 1.7;
}

li::marker {
  color: var(--green);
}
</style>
