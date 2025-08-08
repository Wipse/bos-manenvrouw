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
          v-for="(newsItem, index) in newsItems"
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

      <!-- Navigation buttons -->
      <nav class="flex items-center -my-14 gap-3 justify-center">
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
import { ref } from "vue";

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

// Sample news data - in een echte app zou dit via props of API komen
const newsItems = [
  {
    title: "Laatste updates voor de bruiloft!",
    date: "2025-09-15",
    image: "mainimage.jpeg",
    slug: "laatste-updates-bruiloft",
  },
  {
    title: "Parkeerinformatie Sellingen",
    date: "2025-09-10",
    image: "Sellinger_Church.jpg",
    slug: "parkeerinformatie-sellingen",
  },
  {
    title: "Belangrijke wijzigingen tijdschema",
    date: "2025-09-08",
    image: "intropic.jpeg",
    slug: "belangrijke-wijzigingen-tijdschema",
  },
  {
    title: "Weersvoorspelling en tips",
    date: "2025-09-05",
    image: "mainimage.jpeg",
    slug: "weersvoorspelling-tips",
  },
  {
    title: "Dresscode reminder",
    date: "2025-09-01",
    image: "Sellinger_Church.jpg",
    slug: "dresscode-reminder",
  },
];
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
