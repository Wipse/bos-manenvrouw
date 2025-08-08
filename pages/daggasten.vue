<template>
  <SectionsHeader />

  <section
    class="bg-primary-50 w-screen text-3xl font-bold uppercase h-[95vh] flex items-center justify-center py-12"
  >
    <p class="animate-pulse hover:animate-ping">
      Hier komt de daggasten pagina
    </p>
  </section>
  <SectionsFooter />
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ["auth"],
});
</script>
