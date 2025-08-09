<template>
  <a
    @click="handleClick"
    :href="to"
    class="flex items-center px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-gray-800 hover:text-primary-500"
    :class="{ 'text-primary-500 bg-primary-50': isActive }"
  >
    <Icon
      name="mdi:exclamation-thick"
      class="size-5 text-primary-500 mr-3 animate-pulse"
      v-if="hasIcon"
    />
    <span class="text-lg font-medium">
      <slot />
    </span>
  </a>
</template>

<script setup lang="ts">
type Props = {
  to: string;
  hasIcon?: boolean;
};

const props = defineProps<Props>();
const { smoothScrollTo, navigateAndScrollTo } = useSmoothScroll();
const route = useRoute();

// Check if this link is active (only for page routes, not anchor links)
const isActive = computed(() => {
  if (props.to.includes("#")) {
    return false; // Never active for anchor links
  }

  return route.path === props.to;
});

const emit = defineEmits<{
  click: [];
}>();

const handleClick = async (event: MouseEvent) => {
  event.preventDefault();

  // Always emit click to close modal
  emit("click");

  // Small delay to allow menu to close and scroll lock to be removed
  await new Promise((resolve) => setTimeout(resolve, 100));

  // Try same-page smooth scroll first
  if (smoothScrollTo(props.to)) {
    return;
  }

  // Try cross-page navigation with scroll
  if (await navigateAndScrollTo(props.to)) {
    return;
  }

  // Fall back to regular navigation
  navigateTo(props.to);
};
</script>
