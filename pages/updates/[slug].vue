<template>
  <SectionsHeader />
  <div class="min-h-screen bg-white pt-32 pb-16">
    <!-- Header met countdown banner ruimte -->
    <div class="container mx-auto px-4 max-w-4xl">
      <!-- Back button -->
      <button
        @click="navigateToNews"
        class="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors duration-200 mb-8"
      >
        <Icon name="mdi:arrow-left" class="size-5" />
        <span>Terug naar nieuws</span>
      </button>

      <!-- Article content -->
      <article class="prose prose-lg max-w-none">
        <!-- Header image -->
        <div class="relative mb-8 rounded-2xl overflow-hidden shadow-lg">
          <img
            :src="updateData.image"
            :alt="updateData.title"
            class="w-full h-64 md:h-80 object-cover"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
          ></div>
        </div>

        <!-- Date badge -->
        <div class="flex items-center gap-2 text-gray-600 mb-4">
          <Icon name="mdi:calendar" class="size-5" />
          <time :datetime="updateData.date" class="text-sm font-medium">
            {{ formatDate(updateData.date) }}
          </time>
        </div>

        <!-- Title -->
        <h1
          class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight"
        >
          {{ updateData.title }}
        </h1>

        <!-- Content -->
        <div class="text-gray-700 leading-relaxed space-y-6">
          <div v-html="updateData.content"></div>
        </div>

        <!-- Share section -->
        <div class="mt-12 pt-8">
          <!-- Gradient line separator -->
          <div
            class="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-8"
          ></div>
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2 text-gray-600">
              <Icon name="mdi:heart" class="size-5 text-primary-500" />
              <span class="text-sm">Bedankt voor het lezen!</span>
            </div>

            <!-- Action button -->
            <button
              @click="navigateToNews"
              class="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-full hover:bg-primary-700 transition-colors duration-200"
            >
              <span>Meer nieuws</span>
              <Icon name="mdi:arrow-right" class="size-4" />
            </button>
          </div>
        </div>
      </article>
    </div>
  </div>
  <SectionsFooter />
</template>

<script setup lang="ts">
import { SectionsHeader } from "#components";

const route = useRoute();
const slug = route.params.slug as string;

// Use smooth scroll functionality like menu items
const { smoothScrollTo, navigateAndScrollTo } = useSmoothScroll();

const navigateToNews = async () => {
  // Try cross-page navigation with scroll
  if (await navigateAndScrollTo("/info#nieuws")) {
    return;
  }

  // Fallback to regular navigation
  await navigateTo("/info#nieuws");
};

// Sample update data - in een echte app zou dit van een API komen
const updateData = computed(() => {
  const updates = {
    "laatste-updates-bruiloft": {
      title: "Laatste updates voor de bruiloft!",
      date: "2025-09-15",
      image: "/images/mainimage.jpeg",
      content: `
        <p>Lieve familie en vrienden, we zijn zo dankbaar dat jullie onze speciale dag met ons willen vieren! Hier zijn de allerlaatste updates voor onze bruiloft.</p>
        
        <h3>Belangrijke wijzigingen</h3>
        <p>We hebben een paar kleine aanpassingen gemaakt aan het programma om ervoor te zorgen dat alles perfect verloopt:</p>
        
        <ul>
          <li>De fotosessie begint 15 minuten eerder</li>
          <li>Er is extra tijd ingepland voor de borrel</li>
          <li>Het diner wordt geserveerd om 18:00 in plaats van 17:30</li>
        </ul>
        
        <h3>Wat te verwachten</h3>
        <p>De dag wordt magisch! We kunnen niet wachten om deze bijzondere momenten met jullie te delen. Vergeet niet je camera's mee te nemen voor spontane foto's.</p>
        
        <p>Tot gauw! ❤️<br>
        Selvan & Bertine</p>
      `,
    },
    "parkeerinformatie-sellingen": {
      title: "Parkeerinformatie Sellingen",
      date: "2025-09-10",
      image: "/images/Sellinger_Church.jpg",
      content: `
        <p>Omdat parkeren in Sellingen soms een uitdaging kan zijn, hebben we alle belangrijke informatie voor jullie op een rijtje gezet.</p>
        
        <h3>Parkeermogelijkheden</h3>
        <p>Er zijn verschillende opties om te parkeren in Sellingen:</p>
        
        <ul>
          <li><strong>Achter het gemeentehuis:</strong> Gratis parkeren, ca. 20 plekken</li>
          <li><strong>Dorpsstraat:</strong> Langs de weg, let op tijdslimiet</li>
          <li><strong>Bij de kerk:</strong> Ruime parkeerplaats, aangeraden!</li>
          <li><strong>Hof van Sellingen:</strong> Tegenover het gemeentehuis</li>
        </ul>
        
        <h3>Onze tip</h3>
        <p>Kom ruim op tijd! Alle locaties zijn op loopafstand van elkaar, dus je hoeft je auto niet te verplaatsen gedurende de dag.</p>
        
        <p>Vragen? Laat het ons weten!</p>
      `,
    },
    "belangrijke-wijzigingen-tijdschema": {
      title: "Belangrijke wijzigingen tijdschema",
      date: "2025-09-08",
      image: "/images/intropic.jpeg",
      content: `
        <p>We hebben een paar kleine maar belangrijke wijzigingen aangebracht in ons tijdschema. Lees goed door zodat je niets mist!</p>
        
        <h3>Nieuwe tijden</h3>
        <ul>
          <li><strong>10:30:</strong> Verzamelen bij het gemeentehuis (was 10:45)</li>
          <li><strong>11:00:</strong> Start ceremonie</li>
          <li><strong>12:30:</strong> Lunch bij Herberg Sellingen</li>
          <li><strong>13:30:</strong> Kerkelijke inzegening</li>
          <li><strong>16:00:</strong> Receptie Zaal Mulder</li>
          <li><strong>18:00:</strong> Diner (nieuwe tijd!)</li>
          <li><strong>20:30:</strong> Avondfeest begint</li>
        </ul>
        
        <h3>Waarom de wijziging?</h3>
        <p>We hebben wat meer tijd ingepland tussen de verschillende onderdelen, zodat we rustig van de ene naar de andere locatie kunnen gaan zonder stress.</p>
        
        <p>Bedankt voor jullie begrip en flexibiliteit! 💕</p>
      `,
    },
    "weersvoorspelling-tips": {
      title: "Weersvoorspelling en tips",
      date: "2025-09-05",
      image: "/images/mainimage.jpeg",
      content: `
        <p>De weersvoorspelling voor onze bruiloft ziet er fantastisch uit! Hier zijn een paar tips om optimaal voorbereid te zijn.</p>
        
        <h3>Verwachte weersomstandigheden</h3>
        <p>Voor 10 oktober wordt prachtig herfstweer verwacht:</p>
        <ul>
          <li>Temperatuur: 18-22°C</li>
          <li>Zonneschijn met enkele wolken</li>
          <li>Minimale kans op regen</li>
          <li>Lichte wind</li>
        </ul>
        
        <h3>Kledingadvies</h3>
        <p>Denk aan:</p>
        <ul>
          <li>Een lichte jas of sjaal voor 's avonds</li>
          <li>Comfortabele schoenen voor buiten</li>
          <li>Eventueel een paraplu (voor de zekerheid)</li>
        </ul>
        
        <h3>Outdoor momenten</h3>
        <p>We plannen verschillende momenten buiten, zoals de fotosessie en de borrel. Het weer werkt perfect mee voor deze bijzondere momenten!</p>
        
        <p>We zien jullie binnenkort! 🌞</p>
      `,
    },
    "dresscode-reminder": {
      title: "Dresscode reminder",
      date: "2025-09-01",
      image: "/images/Sellinger_Church.jpg",
      content: `
        <p>Een vriendelijke herinnering over de dresscode voor onze bruiloft. We willen dat iedereen zich comfortabel en passend gekleed voelt!</p>
        
        <h3>Dresscode: Semi-formeel</h3>
        <p>Denk aan:</p>
        
        <h4>Voor de heren:</h4>
        <ul>
          <li>Pak of blazer met nette broek</li>
          <li>Overhemd (stropdas mag, maar hoeft niet)</li>
          <li>Nette schoenen</li>
        </ul>
        
        <h4>Voor de dames:</h4>
        <ul>
          <li>Cocktailjurk, rok met blouse, of nette pantalon</li>
          <li>Comfortabele schoenen (we lopen wat tussen locaties)</li>
          <li>Lichte jas of vest voor 's avonds</li>
        </ul>
        
        <h3>Kleuren</h3>
        <p>Alle kleuren zijn welkom! Onze bruiloftskleur is groen, dus als je twijfelt tussen twee outfits, kies dan voor die met een vleugje groen. 😉</p>
        
        <h3>Belangrijk</h3>
        <p>Het allerbelangrijkste is dat je je goed voelt in wat je draagt. We kijken er naar uit om jullie te zien stralen!</p>
        
        <p>Liefs,<br>Selvan & Bertine</p>
      `,
    },
  };

  return (
    updates[slug as keyof typeof updates] || {
      title: "Update niet gevonden",
      date: "2025-01-01",
      image: "/images/mainimage.jpeg",
      content: "<p>Deze update bestaat niet of is niet meer beschikbaar.</p>",
    }
  );
});

// Format date for display
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("nl-NL", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

// SEO
useHead({
  title: `${updateData.value.title} - Bruiloft Selvan & Bertine`,
  meta: [
    {
      name: "description",
      content: `Lees meer over: ${updateData.value.title}`,
    },
  ],
});
</script>

<style scoped>
.prose h3 {
  @apply text-xl font-semibold text-gray-900 mt-8 mb-4;
}

.prose h4 {
  @apply text-lg font-medium text-gray-800 mt-6 mb-3;
}

.prose ul {
  @apply list-disc list-inside space-y-2 ml-4;
}

.prose li {
  @apply text-gray-700;
}

.prose strong {
  @apply font-semibold text-gray-900;
}
</style>
