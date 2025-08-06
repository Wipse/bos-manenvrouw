<template>
  <SectionsCountdownBanner v-if="beforeWedding" />
  <SectionsHeader />
  <section
    class="bg-primary-50 w-screen text-3xl font-bold uppercase h-[95vh] flex items-center justify-center py-12"
  >
    <p class="animate-pulse hover:animate-ping">
      Hier komt de daggasten pagina
    </p>
  </section>
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
