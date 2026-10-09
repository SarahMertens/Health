<script setup lang="ts">
import { computed } from 'vue';
import BackLink from '@/components/BackLink.vue';
import InfoCard from '@/components/InfoCard.vue';
import RichText from '@/components/RichText.vue';
import WorkoutStepCard from '@/components/WorkoutStepCard.vue';
import { findWorkout } from '@/data/workouts';
import NotFoundView from '@/views/NotFoundView.vue';

const props = defineProps<{ slug: string }>();

const workout = computed(() => findWorkout(props.slug));
</script>

<template>
  <template v-if="workout">
    <BackLink :to="{ name: 'schedule' }">Terug naar schema</BackLink>

    <h2>{{ workout.emoji }} {{ workout.title }}</h2>

    <InfoCard :tone="workout.tone">
      <p><RichText :text="workout.intro" accent /></p>
    </InfoCard>

    <ol class="steps">
      <WorkoutStepCard v-for="step in workout.steps" :key="step.title" :step="step" />
    </ol>
  </template>

  <NotFoundView v-else />
</template>

<style scoped>
h2 {
  margin-top: 0;
}

.steps {
  list-style: none;
}
</style>
