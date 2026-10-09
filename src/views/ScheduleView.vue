<script setup lang="ts">
import { RouterLink } from 'vue-router';
import InfoCard from '@/components/InfoCard.vue';
import { minimumWeek, schedule } from '@/data/schedule';
</script>

<template>
  <InfoCard title="📊 Vast weekoverzicht" tone="yellow">
    <ol class="week-grid">
      <li v-for="day in schedule" :key="day.day">
        <RouterLink
          class="day-card"
          :class="day.kind"
          :to="{ name: 'workout', params: { slug: day.workout } }"
        >
          <span class="day-label">Dag {{ day.day }}</span>
          <span class="day-emoji" aria-hidden="true">{{ day.emoji }}</span>
          <span>
            <span class="day-type">{{ day.title }}</span>
            <span class="day-sub">{{ day.subtitle }}</span>
          </span>
        </RouterLink>
      </li>
    </ol>
  </InfoCard>

  <InfoCard title="🛡️ Minimumweek" tone="green">
    <p>Heb je examens, werk of een drukke week? Doe dan indien mogelijk minstens:</p>

    <ul class="list">
      <li v-for="item in minimumWeek" :key="item">{{ item }}</li>
    </ul>

    <p>
      De volgende week ga je gewoon verder. Gemiste trainingen hoeven niet ingehaald te
      worden.
    </p>
  </InfoCard>
</template>

<style scoped>
.week-grid {
  list-style: none;
  display: grid;
  grid-template-columns: 1fr;
  gap: 9px;
  margin-top: 14px;
}

.day-card {
  display: grid;
  grid-template-columns: 56px 34px 1fr;
  gap: 10px;
  align-items: center;
  height: 100%;
  background: var(--surface);
  border: 1px solid transparent;
  border-radius: 12px;
  padding: 13px;
  text-decoration: none;
}

.day-card:hover {
  border-color: rgba(255, 255, 255, 0.25);
}

.day-card.active {
  border-color: rgba(232, 197, 71, 0.22);
  background: rgba(232, 197, 71, 0.045);
}

.day-card.strength {
  border-color: rgba(76, 175, 135, 0.22);
  background: rgba(76, 175, 135, 0.045);
}

.day-card.rest {
  opacity: 0.7;
}

.day-label {
  font-size: 11px;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.day-emoji {
  font-size: 22px;
}

.day-type {
  display: block;
  font-weight: 700;
  font-size: 14px;
  color: #fff;
}

.day-sub {
  display: block;
  font-size: 12px;
  color: var(--muted);
  margin-top: 3px;
  line-height: 1.45;
}

.list {
  list-style: none;
  margin: 10px 0;
}

.list li {
  display: flex;
  gap: 10px;
  align-items: flex-start;
  color: #ccd9e6;
  font-size: 13px;
  line-height: 1.55;
  padding: 9px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.045);
}

.list li:last-child {
  border-bottom: none;
}

.list li::before {
  content: '';
  width: 6px;
  height: 6px;
  min-width: 6px;
  border-radius: 50%;
  background: var(--accent);
  margin-top: 7px;
}

@media (min-width: 700px) {
  .week-grid {
    grid-template-columns: 1fr 1fr;
  }

  .week-grid li:last-child {
    grid-column: 1 / -1;
  }
}
</style>
