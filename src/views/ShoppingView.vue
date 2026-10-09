<script setup lang="ts">
import { onUnmounted, ref } from 'vue';
import InfoCard from '@/components/InfoCard.vue';
import ShoppingLocationList from '@/components/ShoppingLocationList.vue';
import { useShoppingList } from '@/composables/useShoppingList';
import { shoppingLocations } from '@/data/shopping';

const DEFAULT_MESSAGE = '✓ Vinkjes worden automatisch bewaard op dit toestel';
const NEW_WEEK_MESSAGE = '✓ Nieuwe week gestart — je voorraad is behouden';

const list = useShoppingList();

const message = ref(DEFAULT_MESSAGE);
let messageTimer: ReturnType<typeof setTimeout> | undefined;

function startNewWeek() {
  list.startNewWeek();

  message.value = NEW_WEEK_MESSAGE;
  clearTimeout(messageTimer);
  messageTimer = setTimeout(() => (message.value = DEFAULT_MESSAGE), 3000);
}

onUnmounted(() => clearTimeout(messageTimer));
</script>

<template>
  <ShoppingLocationList
    v-for="location in shoppingLocations"
    :key="location.id"
    :location="location"
  />

  <InfoCard title="🍱 Kot-tip">
    <p>
      Bak bijvoorbeeld één keer 600–700 g kip, kook meerdere porties rijst en maak een
      grote hoeveelheid bolognesesaus. Verdeel alles meteen in bakjes.
    </p>
  </InfoCard>

  <InfoCard title="🔄 Nieuwe week">
    <p>
      Druk hier wanneer je aan een nieuwe week begint. Wat je elke week koopt wordt
      uitgevinkt; je voorraad blijft aangevinkt.
    </p>

    <button class="reset" type="button" data-testid="new-week" @click="startNewWeek">
      Nieuwe week starten
    </button>

    <p class="message" role="status" data-testid="save-message">{{ message }}</p>
  </InfoCard>
</template>

<style scoped>
.reset {
  width: 100%;
  margin-top: 12px;
  padding: 14px;
  border: none;
  border-radius: 10px;
  background: var(--accent);
  color: var(--navy);
  font-weight: 700;
}

.reset:hover {
  filter: brightness(1.08);
}

.message {
  margin-top: 10px;
  text-align: center;
  font-size: 0.85rem !important;
  opacity: 0.7;
}
</style>
