<template>
  <a
    @click="handleClick"
    :href="to"
    :class="[
      'nav-link relative px-2 py-1 hover:text-primary-500 transition-colors duration-300 cursor-pointer',
      { 'nav-link--right flex pl-0.5': isRightSide },
      { 'text-primary-500': isActive },
    ]"
  >
    <Icon
      name="mdi:exclamation-thick"
      class="size-6 text-primary-500"
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
</script>

<style scoped>
.nav-link::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: theme("colors.primary.500");
  transform: scaleX(1);
  transform-origin: left;
  transition: transform 0.3s ease-out;
}

.nav-link:hover::after {
  transform: scaleX(0);
}

.nav-link--right::after {
  transform-origin: right;
}
</style>
