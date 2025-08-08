<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out will-change-[opacity]"
    :class="[
      headerClasses,
      {
        '-translate-y-full opacity-0': isScrollingDown,
        'translate-y-0 opacity-100': !isScrollingDown,
      },
    ]"
  >
    <!-- Countdown Banner at the very top -->
    <SectionsCountdownBanner v-if="beforeWedding" />

    <nav class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16 md:h-20">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <img src="/logo.svg" alt="Logo" :class="logoSizeClass" />
        </div>

        <!-- Desktop navigatie -->
        <div v-if="!isMobile" class="hidden md:flex items-center space-x-6">
          <HeaderLink to="/info#help-needed"> Laatste nieuws </HeaderLink>
          <HeaderLink to="/info#avond-gasten"> Avondgasten </HeaderLink>
          <HeaderLink to="/daggasten"> Daggasten </HeaderLink>
          <HeaderLink to="/help" :isRightSide="true">
            Belangrijke informatie
          </HeaderLink>
        </div>

        <!-- Mobile hamburger menu -->
        <div v-if="isMobile" class="md:hidden">
          <HamburgerMenu
            :isOpen="isMobileMenuOpen"
            @toggle="toggleMobileMenu"
          />
        </div>
      </div>
    </nav>
  </header>

  <!-- Mobile Navigation Modal - Outside header so it's always visible -->
  <MobileNavigation :isOpen="isMobileMenuOpen" @close="closeMobileMenu" />
</template>

<script setup lang="ts">
const { isSmallScreen, isMobile } = useBreakpoint();

// Mobile menu state
const isMobileMenuOpen = ref(false);
const isScrolled = ref(false);
const isScrollingDown = ref(false);

// Scroll direction tracking
let lastScrollY = 0;
const headerHeight = 120; // Header height including countdown banner

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

// Enhanced scroll detection voor glasmorphism en hide/show
const handleScroll = () => {
  if (process.client) {
    const currentScrollY = window.scrollY;

    // Glasmorphism effect
    isScrolled.value = currentScrollY > 20;

    // Header hide/show logic
    // Only hide the header if scrolled past the header height
    if (currentScrollY > lastScrollY && currentScrollY > headerHeight) {
      isScrollingDown.value = true;
    } else {
      isScrollingDown.value = false;
    }

    lastScrollY = currentScrollY;
  }
};

onMounted(() => {
  if (process.client) {
    lastScrollY = window.scrollY;
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
  }
});

onUnmounted(() => {
  if (process.client) {
    window.removeEventListener("scroll", handleScroll);
  }
});

// Responsive logo size
const logoSizeClass = computed(() => {
  return isSmallScreen.value ? "h-8 w-auto" : "h-10 w-auto";
});

// Header glasmorphism classes
const headerClasses = computed(() => {
  return isScrolled.value
    ? "bg-white/80 backdrop-blur-md shadow-lg border-b border-white/20"
    : "bg-transparent";
});

const beforeWedding = ref(true);

onMounted(() => {
  const weddingDate = new Date("2025-10-11T08:00:00");
  const now = new Date();

  beforeWedding.value = now < weddingDate;
});
</script>
