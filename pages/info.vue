<template>
  <SectionsCountdownBanner v-if="beforeWedding" />
  <SectionsMainHero />
  <SectionsHelpNeeded />
  <SectionsAvongGasten />
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

definePageMeta({
  middleware: ["auth"],
});

const beforeWedding = ref(true);

onMounted(() => {
  const weddingDate = new Date("2025-10-11T08:00:00");
  const now = new Date();

  beforeWedding.value = now < weddingDate;
});
</script>
