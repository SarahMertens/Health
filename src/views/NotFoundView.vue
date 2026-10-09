<script setup lang="ts">
import BackLink from '@/components/BackLink.vue';
import InfoCard from '@/components/InfoCard.vue';
</script>

<template>
  <InfoCard title="Pagina niet gevonden">
    <p>Deze pagina bestaat niet (meer).</p>
  </InfoCard>

  <BackLink :to="{ name: 'schedule' }">Terug naar het schema</BackLink>
</template>
