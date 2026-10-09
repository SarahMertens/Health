import type { MenuDay, Recipe } from '@/types';

export const recipes: Recipe[] = [
  {
    slug: 'kip-rijst',
    emoji: '🍚',
    name: 'Kip-rijst bowl',
    category: 'meal',
    energy: '850–950',
    protein: '50–60',
    ingredients: [
      '150–175 g kipfilet',
      '90–100 g droge rijst',
      '250–300 g wokgroenten',
      '10 g olijfolie',
      '100 g Griekse yoghurt of skyr',
      'kruiden',
    ],
    method:
      'Rijst koken, kip bakken, groenten erbij en yoghurt kruiden als saus. Maak meteen 2–3 porties.',
  },
  {
    slug: 'wraps-kip',
    emoji: '🌯',
    name: 'Gewone wraps met kip',
    category: 'meal',
    energy: '850–950',
    protein: '50',
    ingredients: [
      '2 gewone tarwewraps',
      '150 g kip',
      'sla',
      'tomaat',
      'paprika',
      '50 g maïs',
      '30 g geraspte kaas',
      'yoghurtsaus en fruit',
    ],
    method: 'Kip bakken en alles in de wraps verdelen.',
  },
  {
    slug: 'bolognese',
    emoji: '🍝',
    name: 'Luie bolognese',
    category: 'meal',
    energy: '850–950',
    protein: '45–55',
    ingredients: [
      '100 g droge pasta',
      '150 g mager gehakt',
      '250 g passata',
      '250 g groenten',
      '15–20 g Parmezaan',
    ],
    method:
      'Gehakt bakken, groenten en passata toevoegen, pasta koken. Maak meteen meerdere porties saus.',
  },
  {
    slug: 'aardappelen-kip',
    emoji: '🥔',
    name: 'Aardappelen + kip',
    category: 'meal',
    energy: '800–900',
    protein: '50–60',
    ingredients: [
      '350–400 g aardappelen',
      '150–175 g kip',
      '300 g groenten',
      '10–15 g olie',
      'kruiden',
    ],
    method:
      'Aardappelen en kip in airfryer of oven, groenten in magnetron of pan. Eventueel skyr als dessert.',
  },
  {
    slug: 'kip-pasta',
    emoji: '🍝',
    name: 'Kip-pasta',
    category: 'meal',
    energy: '850–950',
    protein: '50–60',
    ingredients: [
      '100 g droge pasta',
      '150 g kip',
      '250 g groenten',
      '200–250 g tomatensaus',
      '20 g Parmezaan of mozzarella',
    ],
    method: 'Pasta koken, kip en groenten bakken en alles samenvoegen.',
  },
  {
    slug: 'wraps-gehakt',
    emoji: '🌯',
    name: 'Wraps met mager gehakt',
    category: 'meal',
    energy: '850–950',
    protein: '45–55',
    ingredients: [
      '2 gewone wraps',
      '150 g mager gehakt',
      'sla',
      'tomaat',
      'paprika',
      'maïs',
      '30 g kaas',
      'yoghurt-knoflooksaus',
    ],
    method: 'Gehakt bakken met kruiden en wraps vullen.',
  },
  {
    slug: 'shake-banaan-haver',
    emoji: '🥤',
    name: 'Banaan-haver shake',
    category: 'shake',
    energy: '450–550',
    protein: '40–45',
    ingredients: [
      '200 ml halfvolle melk',
      '30 g whey',
      '1 banaan',
      '100 g skyr',
      '30 g havermout',
      'kaneel',
    ],
    method: 'Alles blenden.',
  },
  {
    slug: 'shake-aardbei-skyr',
    emoji: '🍓',
    name: 'Aardbei-skyr shake',
    category: 'shake',
    energy: '350–450',
    protein: '40',
    ingredients: ['200 ml halfvolle melk', '30 g whey', '100 g skyr', '100 g aardbeien'],
    method: 'Alles blenden.',
  },
  {
    slug: 'shake-chocolade-banaan',
    emoji: '🍫',
    name: 'Chocolade-banaan shake',
    category: 'shake',
    energy: '450–550',
    protein: '40–45',
    ingredients: [
      '200 ml halfvolle melk',
      '30 g chocolade-whey',
      '1 banaan',
      '100 g skyr',
      '30 g havermout',
      '1 tl cacaopoeder',
    ],
    method: 'Alles blenden.',
  },
];

export function findRecipe(slug: string): Recipe | undefined {
  return recipes.find((recipe) => recipe.slug === slug);
}

/** "± 850–950 kcal · ± 50–60 g eiwit" */
export function nutritionSummary(recipe: Recipe): string {
  return `± ${recipe.energy} kcal · ± ${recipe.protein} g eiwit`;
}

/** The fixed 7-day menu. Entries with a `recipe` link to that recipe. */
export const weekMenu: MenuDay[] = [
  {
    weekday: 1,
    shortName: 'Ma',
    lunch: { label: 'Kip-rijst bowl', recipe: 'kip-rijst' },
    dinner: { label: 'Banaan-haver proteïneshake', recipe: 'shake-banaan-haver' },
  },
  {
    weekday: 2,
    shortName: 'Di',
    lunch: { label: 'Gewone wraps met kip', recipe: 'wraps-kip' },
    dinner: { label: 'Aardbei-skyr shake', recipe: 'shake-aardbei-skyr' },
  },
  {
    weekday: 3,
    shortName: 'Wo',
    lunch: { label: 'Pasta bolognese', recipe: 'bolognese' },
    dinner: { label: 'Banaan-haver proteïneshake', recipe: 'shake-banaan-haver' },
  },
  {
    weekday: 4,
    shortName: 'Do',
    lunch: { label: 'Gewone wraps met kip', recipe: 'wraps-kip' },
    dinner: { label: 'Chocolade-banaan shake', recipe: 'shake-chocolade-banaan' },
  },
  {
    weekday: 5,
    shortName: 'Vr',
    lunch: { label: 'Kip-rijst bowl', recipe: 'kip-rijst' },
    dinner: { label: 'Banaan-haver proteïneshake', recipe: 'shake-banaan-haver' },
  },
  {
    weekday: 6,
    shortName: 'Za',
    lunch: { label: 'Kip-pasta', recipe: 'kip-pasta' },
    dinner: { label: 'Aardbei-skyr shake', recipe: 'shake-aardbei-skyr' },
  },
  {
    weekday: 7,
    shortName: 'Zo',
    lunch: { label: 'Chocolade-banaan shake', recipe: 'shake-chocolade-banaan' },
    dinner: { label: 'Eten bij papa' },
  },
];
