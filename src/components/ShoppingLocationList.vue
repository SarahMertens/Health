<script setup lang="ts">
import { computed } from 'vue';
import InfoCard from '@/components/InfoCard.vue';
import { useShoppingList } from '@/composables/useShoppingList';
import { itemsOf } from '@/data/shopping';
import type { ShoppingLocation } from '@/types';

const props = defineProps<{ location: ShoppingLocation }>();

const list = useShoppingList();
const progress = computed(() => list.progress(itemsOf(props.location)));
</script>

<template>
  <InfoCard>
    <div class="heading">
      <h2 class="title">{{ location.title }}</h2>
      <span class="progress" :data-testid="`progress-${location.id}`">
        {{ progress.done }} / {{ progress.total }}
        <span class="visually-hidden">afgevinkt</span>
      </span>
    </div>
  </InfoCard>

  <div class="shopping">
    <fieldset v-for="group in location.groups" :key="group.title" class="group">
      <legend>{{ group.title }}</legend>

      <label v-for="item in group.items" :key="item.id" class="item">
        <input
          type="checkbox"
          :checked="list.isChecked(item.id)"
          :data-testid="`item-${item.id}`"
          @change="list.setChecked(item.id, ($event.target as HTMLInputElement).checked)"
        />
        <span>{{ item.label }}</span>
      </label>
    </fieldset>
  </div>
</template>

<style scoped>
.heading {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
}

.title {
  font-family: var(--font-display);
  font-weight: 400;
  color: var(--accent);
  font-size: 22px;
  letter-spacing: 1px;
  margin: 0;
}

.progress {
  font-size: 13px;
  font-weight: 600;
  color: var(--muted);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}

.shopping {
  columns: 1;
  column-gap: 30px;
}

.group {
  break-inside: avoid;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.045);
  border-radius: 12px;
  padding: 14px;
  margin-bottom: 12px;
  min-width: 0;
}

legend {
  /* Keep the legend inside the box instead of on its border. */
  float: left;
  width: 100%;
  color: var(--accent);
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 6px;
}

.item {
  clear: both;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  color: #ccd9e6;
  font-size: 13px;
  line-height: 1.45;
  /* Tall enough to tap comfortably on a phone. */
  padding: 10px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.045);
  cursor: pointer;
}

.item:last-child {
  border-bottom: none;
}

.item input {
  width: 18px;
  height: 18px;
  margin-top: 1px;
  accent-color: var(--accent);
  flex: 0 0 auto;
}

.item span {
  flex: 1;
}

.item input:checked + span {
  text-decoration: line-through;
  opacity: 0.5;
}

@media (min-width: 700px) {
  .shopping {
    columns: 2;
  }
}
</style>
