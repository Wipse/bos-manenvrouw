<template>
  <SectionsHeader />
  <SectionsMainHero />
  <SectionsHelpNeeded />
  <SectionsAvongGasten />
  <SectionsFooter />

  <!-- Important Info Alert Modal -->
  <AlertModal :isOpen="showModal" @close="closeModal" />
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ["auth"],
});

// First visit modal logic
const { showModal, closeModal, checkFirstVisit } = useFirstVisit();

// Check if this is the first visit when the page loads
onMounted(() => {
  checkFirstVisit();
});
</script>
