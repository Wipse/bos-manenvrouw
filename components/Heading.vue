<template>
  <component
    :is="size"
    :class="[
      'text-slate-950 font-heading',
      getSizeClasses(size),
      is_bold === true ? 'font-bold' : '',
    ]"
  >
    {{ title }}
  </component>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  size: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  is_bold?: boolean;
}>();

const getSizeClasses = (size: string) => {
  const sizeMap = {
    h1: "text-h1-sm md:text-h1",
    h2: "text-h2-sm md:text-h2",
    h3: "text-h3-sm md:text-h3",
    h4: "text-h4-sm md:text-h4",
    h5: "text-h5-sm md:text-h5",
    h6: "text-h6-sm md:text-h6",
  };
  return sizeMap[size as keyof typeof sizeMap] || "text-base";
};
</script>
