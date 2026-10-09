<script setup lang="ts">
import { RouterView } from 'vue-router';
import AppHeader from '@/components/AppHeader.vue';
</script>

<template>
  <AppHeader />

  <main class="content">
    <RouterView />
  </main>
</template>

<style scoped>
.content {
  max-width: 820px;
  margin: 0 auto;
  padding: 28px 16px 70px;
}
</style>
