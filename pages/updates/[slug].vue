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
        <!-- Header video or image -->
        <div class="relative mb-8 rounded-2xl overflow-hidden shadow-lg">
          <!-- Video als er een video is -->
          <div
            v-if="updateData.videos && updateData.videos.length > 0"
            class="w-full aspect-video"
          >
            <!-- YouTube embed -->
            <iframe
              v-if="isYouTubeEmbed(updateData.videos[0])"
              :src="updateData.videos[0]"
              :title="updateData.title"
              class="w-full h-full"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            />
            <!-- Local video file -->
            <video
              v-else
              :src="updateData.videos[0]"
              class="w-full h-full object-cover"
              controls
              preload="metadata"
            >
              Je browser ondersteunt geen video afspelen.
            </video>
          </div>

          <!-- Image als er geen video is -->
          <template v-else>
            <img
              :src="updateData.image"
              :alt="updateData.title"
              class="w-full h-64 md:h-80 object-cover"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
            />
          </template>
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

type UpdateData = {
  title: string;
  date: string;
  image: string;
  carouselImage?: string;
  content: string;
  videos?: string[];
};

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

// Check if video URL is a YouTube embed
const isYouTubeEmbed = (url: string): boolean => {
  return url.includes("youtube.com/embed/") || url.includes("youtu.be/");
};

// Sample update data - in een echte app zou dit van een API komen
const updateData = computed(() => {
  const updates: Record<string, UpdateData> = {
    "jouw-oefenfilmpje": {
      title: "Stuur ons ook joúw oefenfilmpje!",
      date: "2025-08-30",
      image: "/images/danceparty.jpg",
      content: `
       <p class="mt-2 md:mt-0">Het vorige filmpje heeft ons geïnspireerd om jullie te vragen om ook jullie oefeningen met ons allemaal te delen 😊</p>
<p class="mt-2 md:mt-0">Aan de ene kant om elkaar een hart onder de riem te steken en aan de andere kant als mooie herinnering voor het bruidspaar.</p>
<p class="mt-2 md:mt-0">Het kan niet anders dan dat het enorm genieten is voor hen als ze na hun bruiloft horen dat er een website voor hun mooiste dag bestaat en ze daar jullie filmpjes kunnen zien!</p>
<br/>
<p class="mt-2 md:mt-0">Stuur ons daarom jullie filmpje via de app of mail en onze webmaster zet het onder dit bericht.</p>

      `,
      videos: ["https://www.youtube.com/embed/U0hJofD9aOA"],
    },
    "druk-aan-het-oefenen": {
      title: "Druk aan het oefenen!?",
      date: "2025-08-23",
      image: "/images/Cards_Sending.jpeg",
      carouselImage: "/images/mockup.png",
      content: `
         <p class="mt-2 md:mt-0">Zoals op het filmpje te zien is, wordt er al druk geoefend voor de flashmob.</p>
        <p class="mt-2 md:mt-0">Hier zien jullie een tante en een nichtje van Selvan in actie.</p>
        <p class="mt-2 md:mt-0">En jij/jullie? Ook al een poging gedaan?</p>
        <p class="mt-2 md:mt-0">Je laat het je toch niet gebeuren dat jij straks uit de toon valt, omdat je de pasjes niet kent? 😉</p>
        `,
      videos: ["/videos/roelie.mp4"],
    },
    "website-live": {
      title: "Website gaat de lucht in!!!",
      date: "2025-08-09",
      image: "/images/mockup.png",
      carouselImage: "/images/mockup.png",
      content: `
        <p>Het is gelukt! Vóórdat de avondgasten hun kaart in de bus hebben liggen. De websitebouwer (neef van Bertine) heeft heel erg z'n best gedaan om de deadline te halen. We zijn enorm blij met het resultaat.</p>
        
        <p class="mt-2">3 hoeraatjes voor Wisse!!</p>
      `,
    },
    "uitnodigingen-verstuurd": {
      title: "Geen bruiloftsfeest zonder gasten!",
      date: "2025-08-13",
      image: "/images/Cards_Sending.jpeg",
      content: `
        <p>Selvan & Bertine hebben op verschillende momenten zoveel mogelijk zelf de uitnodigingen rondgebracht, zodat ze zeker weten dat jullie de kaart ontvangen! Dat je dit nu leest, betekent dat dat inderdaad gelukt is! 😉 </p>
        <p class="mt-2"> Op de foto is het bruidspaar druk bezig met het vouwen en schrijven van de kaarten. Met de hulp van maar liefst 2 schoonzussen is deze flinke klus geklaard! 😊 </p>
      `,
      videos: [],
    },
    "wist-je-datje": {
      title: "We zijn op zoek naar leuke wist-je-datjes!",
      date: "2025-08-10",
      image: "/images/diduknow.jpg",
      content: `
        <p>Heb je leuke verhalen of feitjes over Selvan en/of Bertine, die geschikt zijn om in de feestgids te zetten? Laat het ous weten, wij horen het graag!</p>
        <br/>
        <a href="mailto:eeltje.heida@chello.nl,elyseschonewille@hotmail.com" class="underline w-fit hover:decoration-primary-500">
          <p>Mail ous hier!</p> 
        </a>
      `,
      videos: [],
    },
  };

  return (
    updates[slug] || {
      title: "Update niet gevonden",
      date: "2025-01-01",
      image: "/images/mainimage.jpeg",
      content: "<p>Deze update bestaat niet of is niet meer beschikbaar.</p>",
      videos: [],
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

/* Video aspect ratio */
.aspect-video {
  aspect-ratio: 16 / 9;
}

/* Fallback for older browsers */
@supports not (aspect-ratio: 16 / 9) {
  .aspect-video {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
    height: 0;
  }

  .aspect-video iframe,
  .aspect-video video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
