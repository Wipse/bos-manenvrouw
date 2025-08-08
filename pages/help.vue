<template>
  <SectionsHeader />
  <SectionsArticle />
  <SectionsFooter />
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ["auth"],
});
</script>
