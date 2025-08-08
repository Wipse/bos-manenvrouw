export const useBreakpoint = () => {
  const isSmallScreen = ref(false);
  const isMobile = ref(false);
  const windowWidth = ref(0);

  const updateBreakpoint = () => {
    if (process.client) {
      windowWidth.value = window.innerWidth;
      isSmallScreen.value = window.innerWidth < 1050;
      isMobile.value = window.innerWidth < 768; // md breakpoint
    }
  };

  onMounted(() => {
    updateBreakpoint();
    window.addEventListener("resize", updateBreakpoint);
  });

  onUnmounted(() => {
    if (process.client) {
      window.removeEventListener("resize", updateBreakpoint);
    }
  });

  return {
    isSmallScreen: readonly(isSmallScreen),
    isMobile: readonly(isMobile),
    windowWidth: readonly(windowWidth),
  };
};
