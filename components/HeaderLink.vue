<template>
  <a
    @click="handleClick"
    :href="to"
    :class="[
      'nav-link relative px-2 py-1 hover:text-primary-500 transition-colors duration-300 cursor-pointer',
      { 'flex items-center gap-1': isRightSide },
      { 'text-primary-500': isActive },
      textSizeClass,
    ]"
  >
    <Icon
      name="mdi:exclamation-thick"
      :class="iconSizeClass"
      class="text-primary-500"
      v-if="isRightSide"
    />
    <slot />
  </a>
</template>

<script setup lang="ts">
type Props = {
  to: string;
  isRightSide?: boolean;
};

const props = defineProps<Props>();
const { smoothScrollTo, navigateAndScrollTo } = useSmoothScroll();
const route = useRoute();
const { isSmallScreen } = useBreakpoint();

// Check if this link is active (only for page routes, not anchor links)
const isActive = computed(() => {
  if (props.to.includes("#")) {
    return false; // Never active for anchor links
  }

  return route.path === props.to;
});

const handleClick = async (event: MouseEvent) => {
  event.preventDefault();

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

// Responsive text and icon sizes
const textSizeClass = computed(() => {
  return isSmallScreen.value ? "text-sm" : "text-base";
});

const iconSizeClass = computed(() => {
  return isSmallScreen.value ? "size-4" : "size-5";
});
</script>

<style scoped>
.nav-link::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background: linear-gradient(
    to right,
    theme("colors.primary.400"),
    theme("colors.primary.600")
  );
  transition: width 0.3s ease-out;
}

.nav-link:hover::after {
  width: 100%;
}
</style>
