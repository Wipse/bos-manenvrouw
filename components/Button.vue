<template>
  <button
    class="flex items-center gap-2 bg-primary-500 text-white px-6 py-3 uppercase font-bold rounded-2xl transition-all duration-300 hover:bg-primary-500/75"
  >
    <p>{{ label }}</p>
    <Icon name="mdi:chevron-right" class="size-7 text-white" />
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  label: string;
}>();
</script>
