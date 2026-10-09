<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router';

const route = useRoute();

const tabs = [
  { to: '/schema', label: '🏃 Vast schema' },
  { to: '/recepten', label: '🥗 Recepten' },
  { to: '/boodschappen', label: '🛒 Boodschappen' },
];

/** A tab stays active on its detail pages, e.g. `/schema/kracht-a`. */
function isActive(path: string): boolean {
  return route.path === path || route.path.startsWith(`${path}/`);
}
</script>

<template>
  <header class="hero">
    <div class="badge">Vast plan — geen marathon nodig</div>
    <h1>STERKER. SNELLER.<br /><span>VOL TE HOUDEN.</span></h1>
    <p>Je vaste schema, recepten en boodschappenlijst op één pagina.</p>
  </header>

  <nav id="main-nav" class="tabs" aria-label="Hoofdnavigatie">
    <RouterLink
      v-for="tab in tabs"
      :key="tab.to"
      :to="tab.to"
      class="tab"
      :class="{ active: isActive(tab.to) }"
      :aria-current="isActive(tab.to) ? 'page' : undefined"
    >
      {{ tab.label }}
    </RouterLink>
  </nav>
</template>

<style scoped>
.hero {
  padding: 52px 18px 28px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  width: 520px;
  height: 520px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(43, 108, 176, 0.34), transparent 70%);
  left: 50%;
  top: -250px;
  transform: translateX(-50%);
}

.badge {
  display: inline-block;
  padding: 6px 14px;
  border: 1px solid rgba(232, 197, 71, 0.35);
  background: rgba(232, 197, 71, 0.1);
  color: var(--accent);
  border-radius: 999px;
  font-size: 11px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 16px;
  position: relative;
}

h1 {
  font-family: var(--font-display);
  font-size: clamp(48px, 11vw, 88px);
  font-weight: 400;
  line-height: 0.95;
  letter-spacing: 2px;
  color: #fff;
  position: relative;
}

h1 span {
  color: var(--accent);
}

.hero p {
  max-width: 650px;
  margin: 18px auto 0;
  color: var(--muted);
  line-height: 1.6;
  font-size: 14px;
  position: relative;
}

.tabs {
  display: flex;
  gap: 8px;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 14px;
  margin-top: 14px;
}

.tab {
  display: inline-block;
  text-decoration: none;
  border: 1px solid var(--line);
  color: var(--muted);
  padding: 10px 16px;
  border-radius: 9px;
  font-weight: 600;
  font-size: 13px;
}

.tab:hover {
  color: #fff;
  border-color: rgba(232, 197, 71, 0.4);
}

.tab.active {
  background: var(--accent);
  border-color: var(--accent);
  color: var(--navy);
}
</style>
