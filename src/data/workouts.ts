import type { Workout } from '@/types';

export const workouts: Workout[] = [
  {
    slug: 'kracht-a',
    emoji: '💪',
    title: 'Kracht A — Benen + duwen + core',
    intro:
      'Deze training bouwt kracht op in je **benen, billen, borst, rug en core**. Dat helpt bij lopen, stevig duwen en algemene fysieke kracht.',
    tone: 'green',
    steps: [
      {
        emoji: '🔥',
        title: 'Warm-up — 5 tot 7 min',
        intensity: 'strength',
        paragraphs: [
          'Rustig fietsen of wandelen op de loopband · daarna enkele lichte bewegingen voor benen en schouders',
        ],
      },
      {
        emoji: '🦵',
        title: 'Leg press — 3 × 8–12',
        intensity: 'strength',
        paragraphs: [
          'Gebruik de **Leg Press machine**.',
          'Kies een gewicht waarbij je de herhalingen gecontroleerd kunt uitvoeren. Worden 12 herhalingen gemakkelijk? Voeg wat gewicht toe.',
        ],
      },
      {
        emoji: '🦵',
        title: 'Leg curl — 3 × 10–12',
        intensity: 'strength',
        paragraphs: [
          'Gebruik de **Leg Curl machine**.',
          'Train je hamstrings en de achterkant van je benen. Voer de beweging rustig en gecontroleerd uit.',
        ],
      },
      {
        emoji: '🪢',
        title: 'Seated row — 3 × 8–12',
        intensity: 'strength',
        paragraphs: [
          'Gebruik de **Seated Row machine**.',
          'Trek de handgrepen gecontroleerd naar je toe en houd je romp stabiel. Train je rug en armen.',
        ],
      },
      {
        emoji: '💥',
        title: 'Chest press — 3 × 8–12',
        intensity: 'strength',
        paragraphs: [
          'Gebruik de **Chest Press machine**.',
          'Duw de handgrepen gecontroleerd naar voren en laat ze rustig terugkomen. Train je borst, schouders en triceps.',
        ],
      },
      {
        emoji: '🍑',
        title: 'Hip thrust — 3 × 8–12',
        intensity: 'strength',
        paragraphs: [
          'Gebruik de **Hip Thrust machine** als die beschikbaar is. Anders kun je de Smith machine gebruiken.',
          'Duw vanuit je billen omhoog en laat gecontroleerd zakken.',
        ],
      },
      {
        emoji: '🧱',
        title: 'Cable crunch — 3 × 10–15',
        intensity: 'strength',
        paragraphs: [
          'Gebruik een **kabelstation met touw**.',
          'Buig je romp gecontroleerd naar beneden en span je buikspieren aan. Trek niet met je armen.',
        ],
      },
    ],
  },
  {
    slug: 'kracht-b',
    emoji: '🏋️',
    title: 'Kracht B — Rug + armen + schouders + grip + core',
    intro:
      'Deze training bouwt kracht op in je **rug, armen, schouders, borst, grip en core**. Er zitten bewust geen zware beenoefeningen in, zodat je benen kunnen herstellen van je drie looptrainingen.',
    tone: 'green',
    steps: [
      {
        emoji: '🔥',
        title: 'Warm-up — 5 tot 7 min',
        intensity: 'strength',
        paragraphs: [
          'Rustig fietsen of wandelen op de loopband · daarna enkele lichte bewegingen voor schouders en armen',
        ],
      },
      {
        emoji: '🪢',
        title: 'Lat pulldown — 3 × 8–12',
        intensity: 'strength',
        paragraphs: [
          'Gebruik de **Lat Pulldown machine**.',
          'Trek de stang gecontroleerd richting je borst en laat hem rustig teruggaan. Train je rug en armen.',
        ],
      },
      {
        emoji: '🏋️',
        title: 'Shoulder press — 3 × 8–12',
        intensity: 'strength',
        paragraphs: [
          'Gebruik de **Shoulder Press machine**.',
          'Duw de handgrepen gecontroleerd omhoog en laat ze rustig terugkomen. Train je schouders en triceps.',
        ],
      },
      {
        emoji: '🪢',
        title: 'Seated row — 3 × 8–12',
        intensity: 'strength',
        paragraphs: [
          'Gebruik de **Seated Row machine**.',
          'Trek de handgrepen naar je toe en houd je romp stabiel. Train je rug en armen.',
        ],
      },
      {
        emoji: '💥',
        title: 'Chest press — 3 × 8–12',
        intensity: 'strength',
        paragraphs: [
          'Gebruik de **Chest Press machine**.',
          'Duw de handgrepen gecontroleerd naar voren en laat ze rustig terugkomen. Train je borst, schouders en triceps.',
        ],
      },
      {
        emoji: '🧳',
        title: "Farmer's carry — 4 × 30–60 sec",
        intensity: 'strength',
        paragraphs: [
          'Neem twee zware **dumbbells** vast en wandel rechtop door de fitness.',
          'Hiermee train je: **grip · onderarmen · schouders · rug · core**.',
        ],
      },
      {
        emoji: '🔄',
        title: 'Pallof press — 3 × 10–12 per kant',
        intensity: 'strength',
        paragraphs: [
          'Gebruik een **kabelstation**.',
          'Ga zijwaarts ten opzichte van de kabel staan, houd het handvat voor je borst en duw het recht naar voren zonder dat je romp meedraait. Train je core en stabiliteit.',
        ],
      },
    ],
  },
  {
    slug: 'duurloop',
    emoji: '🌿',
    title: 'Rustige duurloop',
    intro:
      'Doel: **een sterke basisconditie bouwen** zonder jezelf uit te putten. Je moet tijdens deze training nog kunnen praten.',
    tone: 'blue',
    steps: [
      {
        emoji: '🚶',
        title: 'Warm-up — 5 min',
        intensity: 'recovery',
        paragraphs: [
          'Rustig wandelen. Daarna geleidelijk overschakelen naar rustig joggen.',
        ],
      },
      {
        emoji: '🌿',
        title: 'Rustig lopen — 30 tot 45 min',
        intensity: 'run',
        paragraphs: [
          'Loop aan een tempo waarop je nog kunt praten.',
          'Zodra 45–50 minuten makkelijk voelt, hoef je de afstand niet telkens verder te verhogen.',
          'Een rustige loop van ongeveer **5–7 km** kan jarenlang onderdeel blijven van dit schema.',
        ],
      },
      {
        emoji: '🚶',
        title: 'Cool-down — 5 min',
        intensity: 'recovery',
        paragraphs: ['Rustig wandelen totdat je ademhaling en hartslag terug dalen.'],
      },
    ],
  },
  {
    slug: 'interval',
    emoji: '⚡',
    title: 'Intervaltraining',
    intro:
      'Doel: **snelheid en hart-longconditie verbeteren**. De snelle stukken zijn stevig, maar geen maximale sprint.',
    tone: 'yellow',
    steps: [
      {
        emoji: '🚶',
        title: 'Warm-up — 8 tot 10 min',
        intensity: 'recovery',
        paragraphs: [
          'Wandelen → rustig joggen → 2 tot 3 korte ontspannen versnellingen.',
        ],
      },
      {
        emoji: '⚡',
        title: 'Intervallen — 6 rondes',
        intensity: 'run',
        paragraphs: [
          'Doe **6 keer** hetzelfde:',
          '🏃 **2 minuten vlot lopen**\n🚶 **2 minuten rustig wandelen of joggen**',
          'Dus: 2 min vlot → 2 min rustig → opnieuw 2 min vlot → 2 min rustig, totdat je 6 snelle stukken hebt gedaan.',
          'Vlot betekent **stevig maar niet sprinten**. Je moet genoeg overhouden om alle 6 de rondes af te maken.',
        ],
      },
      {
        emoji: '📈',
        title: 'Wanneer maak je het moeilijker?',
        intensity: 'run',
        paragraphs: [
          'Begin met:',
          '**6 × 2 min vlot**\nmet telkens **2 min rustig herstel**.',
          'Zodra dit duidelijk makkelijker voelt:',
          '**6 × 3 min vlot**\nmet telkens **2 min rustig herstel**.',
          'Daarna kun je doorgroeien naar:',
          '**5 × 4 min vlot**\nmet telkens **2 min rustig herstel**.',
          '**Daar stop je met langer maken.**',
          'Als 5 × 4 min later makkelijk wordt, hoef je niet naar 5 × 5 of 6 × 4 minuten.',
          'Hou gewoon **5 × 4 min** aan en probeer de snelle stukken geleidelijk iets vlotter te lopen, terwijl je alle herhalingen nog gecontroleerd kunt afmaken.',
        ],
      },
      {
        emoji: '🚶',
        title: 'Cool-down — 5 tot 10 min',
        intensity: 'recovery',
        paragraphs: ['Rustig joggen en daarna wandelen.'],
      },
    ],
  },
  {
    slug: 'tempo',
    emoji: '🏃',
    title: 'Tempo / 5 km-training',
    intro:
      'Deze training helpt je om **je 5 km steeds comfortabeler en sneller** te lopen zonder naar steeds langere afstanden te gaan.',
    tone: 'yellow',
    steps: [
      {
        emoji: '🚶',
        title: 'Warm-up — 8 min',
        intensity: 'recovery',
        paragraphs: ['3 min wandelen → 5 min rustig joggen.'],
      },
      {
        emoji: '🏃',
        title: 'Tempoblok — 20 tot 30 min',
        intensity: 'run',
        paragraphs: [
          'Loop sneller dan tijdens je rustige duurloop, maar niet maximaal.',
          'Je moet nog korte zinnen kunnen zeggen.',
          'Richtgevoel: **6–7/10 zwaar**.',
        ],
      },
      {
        emoji: '🎯',
        title: 'Langetermijndoel',
        intensity: 'run',
        paragraphs: [
          'Bouw eerst naar een comfortabele 5 km.',
          'Daarna kun je stap voor stap werken aan bijvoorbeeld:',
          '34 min → 33 min → 32 min → 31 min → 30 min.',
          'Je hoeft niet iedere week een persoonlijk record te lopen.',
        ],
      },
      {
        emoji: '🚶',
        title: 'Cool-down — 5 min',
        intensity: 'recovery',
        paragraphs: ['Rustig wandelen.'],
      },
    ],
  },
  {
    slug: 'herstel',
    emoji: '😴',
    title: 'Rustdag',
    intro:
      'Rust is onderdeel van het schema. Je hoeft op een rustdag geen training te vervangen of in te halen.',
    tone: 'blue',
    steps: [
      {
        emoji: '🚶',
        title: 'Optioneel: rustige wandeling',
        intensity: 'recovery',
        paragraphs: ['20–45 minuten op een comfortabel tempo.'],
      },
      {
        emoji: '🧘',
        title: 'Optioneel: mobiliteit — 10 min',
        intensity: 'recovery',
        paragraphs: ['Kuiten · enkels · heupen · hamstrings · rug · schouders'],
      },
    ],
  },
];

export function findWorkout(slug: string): Workout | undefined {
  return workouts.find((workout) => workout.slug === slug);
}
