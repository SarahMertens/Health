<script setup lang="ts">
import { RouterLink } from 'vue-router';
import InfoCard from '@/components/InfoCard.vue';
import RecipeCard from '@/components/RecipeCard.vue';
import { recipes, weekMenu } from '@/data/recipes';
import { isoWeekday } from '@/lib/date';
import type { MenuEntry } from '@/types';

const today = isoWeekday();

const meals = recipes.filter((recipe) => recipe.category === 'meal');
const shakes = recipes.filter((recipe) => recipe.category === 'shake');

function recipeLink(entry: MenuEntry) {
  return { name: 'recipe', params: { slug: entry.recipe } };
}
</script>

<template>
  <h2 class="first">7-daags vast menu</h2>

  <InfoCard>
    <table>
      <thead>
        <tr>
          <th scope="col">Dag</th>
          <th scope="col">Middag</th>
          <th scope="col">Avond</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="day in weekMenu"
          :key="day.weekday"
          :class="{ today: day.weekday === today }"
          :data-testid="day.weekday === today ? 'menu-today' : undefined"
        >
          <th scope="row">
            {{ day.shortName }}
            <span v-if="day.weekday === today" class="visually-hidden">(vandaag)</span>
          </th>
          <td v-for="entry in [day.lunch, day.dinner]" :key="entry.label">
            <RouterLink v-if="entry.recipe" :to="recipeLink(entry)">
              {{ entry.label }}
            </RouterLink>
            <template v-else>{{ entry.label }}</template>
          </td>
        </tr>
      </tbody>
    </table>
  </InfoCard>

  <h2>Maaltijden</h2>
  <div class="recipe-grid">
    <RecipeCard v-for="recipe in meals" :key="recipe.slug" :recipe="recipe" />
  </div>

  <h2>Shakes</h2>
  <div class="recipe-grid">
    <RecipeCard v-for="recipe in shakes" :key="recipe.slug" :recipe="recipe" />
  </div>
</template>

<style scoped>
.first {
  margin-top: 0;
}

table {
  width: 100%;
  border-collapse: collapse;
  font-size: 12.5px;
}

th,
td {
  padding: 11px 10px;
  border-bottom: 1px solid var(--line);
  vertical-align: top;
  text-align: left;
}

thead th {
  color: var(--accent);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  background: var(--surface);
}

tbody th {
  font-weight: 400;
}

tbody th,
td {
  color: #d2deea;
}

tbody tr:last-child th,
tbody tr:last-child td {
  border-bottom: none;
}

td a {
  text-decoration: underline;
  text-decoration-color: rgba(255, 255, 255, 0.25);
  text-underline-offset: 3px;
}

td a:hover {
  color: #fff;
  text-decoration-color: var(--accent);
}

.today th,
.today td {
  background: rgba(232, 197, 71, 0.08);
}

.today th {
  color: var(--accent);
  font-weight: 700;
  box-shadow: inset 3px 0 0 var(--accent);
}

.recipe-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
}

@media (min-width: 700px) {
  .recipe-grid {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
