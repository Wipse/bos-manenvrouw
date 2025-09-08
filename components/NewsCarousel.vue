<template>
  <div class="w-full">
    <!-- Container for alignment, but carousel breaks out -->
    <div class="container mx-auto px-4">
      <div
        ref="scrollContainer"
        class="flex gap-4 md:gap-8 overflow-x-auto pb-24 scrollbar-hide -mx-4 px-4"
        style="scroll-behavior: smooth; width: calc(100% + 2rem)"
      >
        <div
          v-for="(newsItem, index) in sortedNewsItems"
          :key="index"
          class="flex-shrink-0 w-72 md:w-80"
          :style="{ animationDelay: `${index * 100}ms` }"
        >
          <NewsCard
            :title="newsItem.title"
            :date="newsItem.date"
            :image="newsItem.image"
            :slug="newsItem.slug"
            class="h-full animate-fade-in-up w-full"
          />
        </div>
      </div>

      <!-- Navigation buttons - hidden on md+ when 2 or fewer items -->
      <nav
        class="flex items-center -my-14 gap-3 justify-center"
        :class="{ 'md:hidden': sortedNewsItems.length <= 2 }"
      >
        <button
          class="border-2 border-primary-600 rounded-full p-1.5 pb-0 hover:bg-primary-50 transition-colors duration-200"
          @click="scrollLeft"
        >
          <Icon name="mdi:chevron-left" class="size-5 text-primary-600" />
        </button>
        <button
          class="border-2 border-primary-600 rounded-full p-1.5 pb-0 hover:bg-primary-50 transition-colors duration-200"
          @click="scrollRight"
        >
          <Icon name="mdi:chevron-right" class="size-5 text-primary-600" />
        </button>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const scrollContainer = ref<HTMLElement | null>(null);

const scrollLeft = () => {
  if (scrollContainer.value) {
    // Responsive scroll distance based on screen size
    const scrollDistance = window.innerWidth < 640 ? 305 : 320;
    scrollContainer.value.scrollBy({
      left: -scrollDistance,
      behavior: "smooth",
    });
  }
};

const scrollRight = () => {
  if (scrollContainer.value) {
    // Responsive scroll distance based on screen size
    const scrollDistance = window.innerWidth < 640 ? 305 : 320;
    scrollContainer.value.scrollBy({
      left: scrollDistance,
      behavior: "smooth",
    });
  }
};

// News Items
const newsItems = [
  {
    title: "Meer reistijd door wegafsluiting",
    date: "2025-09-08",
    image: "roadblock.jpeg",
    slug: "wegafsluiting",
  },
  {
    title: "De spanning stijgt!",
    date: "2025-09-02",
    image: "second_meeting.jpeg",
    slug: "de-spanning-stijgt",
  },
  {
    title: "Stuur ons ook joúw oefenfilmpje!",
    date: "2025-08-30",
    image: "danceparty.jpg",
    slug: "jouw-oefenfilmpje",
  },
  {
    title: "Druk aan het oefenen!?",
    date: "2025-08-23",
    image: "danstante.png",
    slug: "druk-aan-het-oefenen",
  },
  {
    title: "Website gaat de lucht in!!!",
    date: "2025-08-09",
    image: "mockup.png",
    slug: "website-live",
  },
  {
    title: "Geen bruiloftsfeest zonder gasten!",
    date: "2025-08-13",
    image: "Cards_Sending.jpeg",
    slug: "uitnodigingen-verstuurd",
  },
  {
    title: "Heb je nog wist-je-datjes?",
    date: "2025-08-10",
    image: "diduknow.jpg",
    slug: "wist-je-datje",
  },
];

// Sort news items by date - newest first
const sortedNewsItems = computed(() => {
  return [...newsItems].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime(); // Newest first
  });
});
</script>

<style scoped>
.animate-fade-in-up {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s ease-out forwards;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Hide scrollbar while keeping functionality */
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

/* Simple fade in animation */
.animate-fade-in-up {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s ease-out forwards;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
