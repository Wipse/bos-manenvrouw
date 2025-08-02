<template>
  <div
    class="bg-white max-w-xs rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
  >
    <div class="gap-2">
      <img
        :src="`/images/${props.image}`"
        alt="News"
        class="aspect-square w-full object-cover rounded-t-xl"
      />
      <div class="flex flex-col py-2 px-4 gap-1">
        <p class="text-md font-bold font-heading">{{ props.title }}</p>
        <div class="flex items-center gap-1">
          <Icon name="mdi:calendar" />
          <p class="text-sm">{{ props.date }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "#components";

const props = withDefaults(
  defineProps<{
    title?: string;
    date?: string;
    image?: string;
  }>(),
  {
    title: "Korte pakkende titel!",
    date: "18-08-2025",
    image: "Sellinger_Church.jpg",
  }
);
</script>
