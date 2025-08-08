export const useFirstVisit = (key: string = "wedding-info-modal-seen") => {
  const hasSeenModal = ref(false);
  const showModal = ref(false);

  const checkFirstVisit = () => {
    if (process.client) {
      try {
        const seen = localStorage.getItem(key);
        hasSeenModal.value = seen === "true";

        // Show modal only if not seen before
        if (!hasSeenModal.value) {
          // Small delay to ensure page is loaded
          setTimeout(() => {
            showModal.value = true;
          }, 1000);
        }
      } catch (error) {
        console.warn("localStorage not available:", error);
        // Fallback: assume not seen if localStorage fails
        setTimeout(() => {
          showModal.value = true;
        }, 1000);
      }
    }
  };

  const markAsSeen = () => {
    if (process.client) {
      try {
        localStorage.setItem(key, "true");
        hasSeenModal.value = true;
        showModal.value = false;
      } catch (error) {
        console.warn("Could not save to localStorage:", error);
        // Still close the modal even if we can't save
        showModal.value = false;
      }
    }
  };

  const closeModal = () => {
    showModal.value = false;
    markAsSeen();
  };

  // Reset function for testing/admin purposes
  const resetFirstVisit = () => {
    if (process.client) {
      try {
        localStorage.removeItem(key);
        hasSeenModal.value = false;
      } catch (error) {
        console.warn("Could not reset localStorage:", error);
      }
    }
  };

  return {
    hasSeenModal: readonly(hasSeenModal),
    showModal: readonly(showModal),
    checkFirstVisit,
    closeModal,
    resetFirstVisit,
  };
};
