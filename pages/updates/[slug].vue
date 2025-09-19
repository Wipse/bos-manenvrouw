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
        <!-- Header video or image - Full width layout -->
        <div
          v-if="!updateData?.has_side_image"
          class="relative mb-8 rounded-2xl overflow-hidden shadow-lg"
        >
          <!-- Video als er een video is -->
          <div
            v-if="updateData?.videos && updateData.videos.length > 0"
            class="w-full aspect-video"
          >
            <!-- YouTube embed -->
            <iframe
              v-if="isYouTubeEmbed(updateData.videos[0])"
              :src="updateData.videos[0]"
              :title="updateData?.title"
              class="w-full h-full"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            />
            <!-- Local video file -->
            <video
              v-else
              class="w-full h-full object-cover"
              controls
              preload="metadata"
              playsinline
              webkit-playsinline
            >
              <source :src="updateData?.videos[0]" type="video/mp4" />
              <p>Je browser ondersteunt geen video's afspelen.</p>
            </video>
          </div>

          <!-- Image als er geen video is -->
          <template v-else>
            <img
              :src="updateData?.image"
              :alt="updateData?.title"
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
          <time :datetime="updateData?.date" class="text-sm font-medium">
            {{ formatDate(updateData?.date || "") }}
          </time>
        </div>

        <!-- Title -->
        <h1
          class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight"
        >
          {{ updateData?.title }}
        </h1>

        <!-- Side image layout - Grid 6-6 -->
        <div
          v-if="updateData?.has_side_image"
          class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8"
        >
          <!-- Content Part 1 - 6 columns -->
          <div class="text-gray-700 leading-relaxed space-y-6">
            <div
              v-html="updateData?.content_part_1 || updateData?.content"
            ></div>
          </div>

          <!-- Side image - 6 columns -->
          <div>
            <div class="sticky top-8">
              <!-- Video als er een video is -->
              <div
                v-if="updateData?.videos && updateData.videos.length > 0"
                class="relative rounded-2xl overflow-hidden shadow-lg"
              >
                <div class="w-full aspect-video">
                  <!-- YouTube embed -->
                  <iframe
                    v-if="isYouTubeEmbed(updateData.videos[0])"
                    :src="updateData.videos[0]"
                    :title="updateData?.title"
                    class="w-full h-full"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  />
                  <!-- Local video file -->
                  <video
                    v-else
                    class="w-full h-full object-cover"
                    controls
                    preload="metadata"
                    playsinline
                    webkit-playsinline
                  >
                    <source :src="updateData?.videos[0]" type="video/mp4" />
                    <p>Je browser ondersteunt geen video's afspelen.</p>
                  </video>
                </div>
              </div>

              <!-- Image als er geen video is -->
              <div
                v-else
                class="relative rounded-2xl overflow-hidden shadow-lg"
              >
                <img
                  :src="updateData?.image"
                  :alt="updateData?.title"
                  class="w-full h-full object-cover"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Content Part 2 - Full width after side image -->
        <div
          v-if="updateData?.has_side_image && updateData?.content_part_2"
          class="text-gray-700 leading-relaxed space-y-6 mb-8"
        >
          <div v-html="updateData.content_part_2"></div>
        </div>

        <!-- Regular content layout (when no side image) -->
        <div
          v-if="!updateData?.has_side_image"
          class="text-gray-700 leading-relaxed space-y-6"
        >
          <div v-html="updateData?.content"></div>
        </div>

        <!-- Bottom video section -->
        <div
          v-if="updateData?.bottom_video && updateData.bottom_video.length > 0"
          class="mt-12"
        >
          <!-- Gradient line separator -->
          <div
            class="w-full h-px bg-gradient-to-r from-transparent via-primary-300 to-transparent mb-8"
          />

          <div class="relative rounded-2xl overflow-hidden shadow-lg mb-8">
            <div class="w-full aspect-video">
              <!-- YouTube embed -->
              <iframe
                v-if="isYouTubeEmbed(updateData.bottom_video[0])"
                :src="updateData.bottom_video[0]"
                :title="updateData?.title + ' - Video'"
                class="w-full h-full"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              />
              <!-- Local video file -->
              <video
                v-else
                class="w-full h-screen object-cover"
                controls
                preload="metadata"
                playsinline
                webkit-playsinline
              >
                <source :src="updateData.bottom_video[0]" type="video/mp4" />
                <p>Je browser ondersteunt geen video's afspelen.</p>
              </video>
            </div>
          </div>
        </div>

        <!-- Share section -->
        <div class="mt-12 pt-8">
          <!-- Gradient line separator (only if no bottom video) -->
          <div
            v-if="
              !updateData?.bottom_video || updateData.bottom_video.length === 0
            "
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

// Use news content composable
const { loadNewsContent } = useNewsContent();

// Use smooth scroll functionality like menu items
const { navigateAndScrollTo } = useSmoothScroll();

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

// Load update data from JSON or fallback to hardcoded
const { data: updateData, error } = await useAsyncData(
  `news-${slug}`,
  async () => {
    const content = await loadNewsContent(slug);

    if (!content) {
      return {
        title: "Update niet gevonden",
        date: "2025-01-01",
        image: "/images/mainimage.jpeg",
        content: "<p>Deze update bestaat niet of is niet meer beschikbaar.</p>",
        videos: [],
      };
    }

    return content;
  }
);

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
  title: `${updateData?.value?.title || "Nieuws"} - Bruiloft Selvan & Bertine`,
  meta: [
    {
      name: "description",
      content: `Lees meer over: ${updateData?.value?.title || "Nieuws"}`,
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
