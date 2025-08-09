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
          />
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
    "website-live": {
      title: "Website gaat de lucht in!!!",
      date: "2025-08-09",
      image: "/images/mockup.png",
      content: `
        <p>Het is gelukt! Vóórdat de avondgasten hun kaart in de bus hebben liggen. De websitebouwer (neef van Bertine) heeft heel erg z'n best gedaan om de deadline te halen. We zijn enorm blij met het resultaat.</p>
        
        <p class="mt-2">3 hoeraatjes voor Wisse!!</p>
      `,
    },
    "uitnodigingen-verstuurd": {
      title: "Alle uitnodigingen zijn de deur uit!",
      date: "2025-08-15",
      image: "/images/letterman.jpg",
      content: `
        <p>De daggasten hadden hun kaart al eerder -waar mogelijk persoonlijk- ontvangen en vanaf vandaag zijn ook alle avondgasten uitgenodigd!</p>
      `,
    },
    "wist-je-datje": {
      title: "We zijn nog op zoek naar meer leuke wist-je-datjes!",
      date: "2025-08-10",
      image: "/images/diduknow.jpg",
      content: `
        <p>Heb je nog leuke verhalen of feitjes over Selvan en/of Bertine, die geschikt zijn om in de feestgids te zetten? Laat het ons weten, wij horen het graag!</p>
        <br/>
        <a href="mailto:eeltje.heida@chello.nl,elyseschonewille@hotmail.com" class="underline hover:decoration-primary-500">
          <p>Mail ons hier!</p> 
        </a>
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
