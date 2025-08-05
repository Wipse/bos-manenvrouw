<template>
  <button
    @click="handleClick"
    class="flex items-center gap-2 bg-primary-500 text-white px-6 py-3 uppercase font-bold rounded-2xl transition-all duration-300 hover:bg-primary-500/75"
  >
    <p>{{ label }}</p>
    <Icon name="mdi:chevron-right" class="size-7 text-white" />
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  label: string;
  onClick?: () => void;
  to?: string;
}>();

const handleClick = () => {
  if (props.to) {
    // Check if it's an internal link (starts with #)
    if (props.to.startsWith("#")) {
      const elementId = props.to.substring(1);
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      // Navigate to different page
      navigateTo(props.to);
    }
  } else if (props.onClick) {
    props.onClick();
  }
};
</script>
