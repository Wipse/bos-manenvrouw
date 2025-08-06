export const useSmoothScroll = () => {
  const smoothScrollTo = (target: string) => {
    // Check if it's an anchor link (contains #)
    if (target.includes("#")) {
      const [path, anchor] = target.split("#");

      // If it's same page anchor (starts with # or current page)
      if (
        target.startsWith("#") ||
        path === "" ||
        path === window.location.pathname
      ) {
        const elementId = anchor;
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
          return true; // Handled as smooth scroll
        }
      }
    }
    return false; // Not handled, let default navigation occur
  };

  const navigateAndScrollTo = async (target: string) => {
    // Check if it's a cross-page anchor link
    if (target.includes("#")) {
      const [path, anchor] = target.split("#");

      // If it's a different page with anchor
      if (path && path !== window.location.pathname) {
        // Navigate to the page first (without the anchor in URL)
        await navigateTo(path);

        // Wait for the page to load, then scroll to the section
        await nextTick();

        // Small delay to ensure all components are rendered
        setTimeout(() => {
          const element = document.getElementById(anchor);
          if (element) {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }, 100);

        return true; // Handled as cross-page scroll
      }
    }
    return false; // Not handled
  };

  return {
    smoothScrollTo,
    navigateAndScrollTo,
  };
};
