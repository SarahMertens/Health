import type { ShoppingItem, ShoppingLocation } from '@/types';

export const shoppingLocations: ShoppingLocation[] = [
  {
    id: 'kot',
    title: '🏠 Kot — ma t/m vr',
    groups: [
      {
        title: '🥩 Eiwit',
        items: [
          { id: 'kot-kip', label: 'Kipfilet — ± 700 g', type: 'weekly' },
          {
            id: 'kot-gehakt',
            label: 'Mager gehakt — ± 150–200 g (bolognese woensdag)',
            type: 'weekly',
          },
          { id: 'kot-whey', label: 'Whey / proteïnepoeder', type: 'stock' },
          { id: 'kot-skyr', label: 'Skyr of Griekse yoghurt — ± 750 g', type: 'weekly' },
          { id: 'kot-melk', label: 'Halfvolle melk — ± 1 liter', type: 'weekly' },
        ],
      },
      {
        title: '🍚 Koolhydraten',
        items: [
          { id: 'kot-rijst', label: 'Rijst', type: 'stock' },
          { id: 'kot-pasta', label: 'Pasta', type: 'stock' },
          { id: 'kot-wraps', label: 'Gewone tarwewraps', type: 'stock' },
          { id: 'kot-havermout', label: 'Havermout', type: 'stock' },
        ],
      },
      {
        title: '🥦 Groenten',
        items: [
          {
            id: 'kot-wokgroenten',
            label: 'Grote zak diepvries wokgroenten',
            type: 'stock',
          },
          { id: 'kot-sla', label: 'Kleine zak sla', type: 'weekly' },
          { id: 'kot-paprika', label: 'Paprika — 2', type: 'weekly' },
          { id: 'kot-tomaten', label: 'Tomaten — 2', type: 'weekly' },
        ],
      },
      {
        title: '🍌 Fruit',
        items: [
          { id: 'kot-bananen', label: 'Bananen — 4', type: 'weekly' },
          { id: 'kot-aardbeien', label: 'Diepvriesaardbeien', type: 'stock' },
        ],
      },
      {
        title: '🧀 Smaak & extra',
        items: [
          { id: 'kot-kaas', label: 'Geraspte kaas of Parmezaan', type: 'stock' },
          { id: 'kot-passata', label: 'Passata of tomatensaus', type: 'stock' },
          { id: 'kot-olijfolie', label: 'Olijfolie', type: 'stock' },
          {
            id: 'kot-kruiden',
            label: 'Kruiden — zout, peper, kipkruiden, paprikapoeder...',
            type: 'stock',
          },
          { id: 'kot-soja-chilisaus', label: 'Sojasaus of chilisaus', type: 'stock' },
        ],
      },
    ],
  },
  {
    id: 'thuis',
    title: '🏡 Thuis — za t/m zo',
    groups: [
      {
        title: '🥩 Eiwit',
        items: [
          { id: 'thuis-kip', label: 'Kipfilet — ± 150 g', type: 'weekly' },
          { id: 'thuis-whey', label: 'Whey / chocolade whey', type: 'stock' },
          { id: 'thuis-skyr', label: 'Skyr of Griekse yoghurt', type: 'weekly' },
          { id: 'thuis-melk', label: 'Halfvolle melk', type: 'weekly' },
        ],
      },
      {
        title: '🍚 Koolhydraten',
        items: [
          { id: 'thuis-pasta', label: 'Pasta', type: 'stock' },
          { id: 'thuis-havermout', label: 'Havermout', type: 'stock' },
        ],
      },
      {
        title: '🥦 Groenten',
        items: [
          {
            id: 'thuis-wokgroenten',
            label: 'Zak diepvries wokgroenten',
            type: 'stock',
          },
        ],
      },
      {
        title: '🍌 Fruit',
        items: [
          { id: 'thuis-aardbeien', label: 'Diepvriesaardbeien', type: 'stock' },
          { id: 'thuis-banaan', label: 'Bananen — 2', type: 'weekly' },
        ],
      },
      {
        title: '🧀 Smaak & extra',
        items: [
          {
            id: 'thuis-passata',
            label: 'Passata of tomatensaus — 250 g',
            type: 'stock',
          },
          { id: 'thuis-kaas', label: 'Geraspte kaas of Parmezaan', type: 'stock' },
        ],
      },
    ],
  },
];

export function itemsOf(location: ShoppingLocation): ShoppingItem[] {
  return location.groups.flatMap((group) => group.items);
}

export const allShoppingItems: ShoppingItem[] = shoppingLocations.flatMap(itemsOf);
