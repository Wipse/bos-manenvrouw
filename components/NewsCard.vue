<template>
  <NuxtLink
    :to="`/updates/${props.slug}`"
    class="block bg-white max-w-xs rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
  >
    <div class="gap-2">
      <img
        :src="`/images/${props.image}`"
        :alt="props.title"
        class="aspect-square w-full h-44 object-cover rounded-t-xl"
      />
      <div class="flex flex-col py-2 px-4 gap-1">
        <p class="text-md font-bold font-heading line-clamp-2">
          {{ props.title }}
        </p>
        <div class="flex items-center gap-1 text-gray-600">
          <Icon name="mdi:calendar" class="size-4" />
          <p class="text-sm">{{ formatDate(props.date) }}</p>
        </div>
        <div class="flex items-center gap-1 text-primary-600 mt-2">
          <span class="text-sm font-medium">Lees meer</span>
          <Icon name="mdi:arrow-right" class="size-4" />
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { Icon } from "#components";

const props = withDefaults(
  defineProps<{
    title?: string;
    date?: string;
    image?: string;
    slug?: string;
  }>(),
  {
    title: "Korte pakkende titel!",
    date: "2025-08-18",
    image: "Sellinger_Church.jpg",
    slug: "sample-update",
  }
);

// Format date for display
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("nl-NL", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};
</script>
